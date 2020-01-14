import React from 'react'
import styled from 'styled-components/macro'
import PrettyDate from './PrettyDate'
import Countdown from './Countdown'
import Header from './Header'
import Main from './Main'

const HolidaysListWrapper = styled(Main)`
  height: auto;
  time {
    display: block;
  }
  time::first-letter {
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li:first-child {
      border-top: 1px solid ${({ theme }) => theme.greylighter};
    }
    li {
      padding: 0.75em;
      border-bottom: 1px solid ${({ theme }) => theme.greylighter};
      h3 {
        margin: 0 0 0.25rem;
      }
      time {
        display: block;
        overflow: hidden;
      }
    }
    li.inactive {
      padding: 0.25rem 0.75rem 0.15rem;
      color: ${({ theme }) => theme.inactiveFG};
      font-size: 0.85rem;
      h3 {
        font-weight: normal;
        margin-bottom: 0.15rem;
      }
    }
  }
`

const HolidaysList = props => {
  const date = new Date()
  return (
    <>
      <Header {...props} />
      <HolidaysListWrapper>
        <ul>
          {props.holidays.map((holiday, index, array) => {
            // Colombian timezone adjustment
            const holidayDate = new Date(`${holiday.date}T05:00`)
            const currentYear = holidayDate.getFullYear() === date.getFullYear()
            const inactive = holidayDate < date && currentYear
            let current = false
            if (index) {
              const previousIsActive =
                new Date(`${array[index - 1].date}T05:00`) < date
              current = currentYear && inactive !== previousIsActive
            }
            return (
              <li key={holiday.name} className={inactive ? 'inactive' : ''}>
                <h3>{holiday.name}</h3>
                <PrettyDate date={holiday.date} />
                <Countdown
                  date={holiday.date}
                  inactive={inactive}
                  current={current}
                />
              </li>
            )
          })}
        </ul>
      </HolidaysListWrapper>
    </>
  )
}

export default HolidaysList
