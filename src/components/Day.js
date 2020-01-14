import React from 'react'
import styled from 'styled-components'
import PrettyDate from './PrettyDate'
import Header from './Header'
import Main from './Main'

const DayWrapper = styled(Main)`
  font-size: 1.5rem;
  .celebrate:after,
  .celebrate:before {
    content: '✨';
  }
`

const Day = props => {
  return (
    <>
      <Header {...props} />
      <DayWrapper>
        <PrettyDate date={props.date} />
        {props.isHoliday ? (
          <p className="celebrate">HOLIDAY</p>
        ) : (
          <p>NOT HOLIDAY</p>
        )}
        <span
          role="img"
          aria-label={props.isHoliday ? 'holiday' : 'not holiday'}
        >
          {props.isHoliday ? '😄' : '😥'}
        </span>
      </DayWrapper>
    </>
  )
}

export default Day
