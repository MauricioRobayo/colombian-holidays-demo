import React from 'react';
import styled from 'styled-components/macro';
import PrettyDate from './PrettyDate';
import Countdown from './Countdown';
import Header from './Header';
import Main from './Main';
import { Link } from 'react-router-dom';

const HolidaysListWrapper = styled(Main)`
  height: auto;
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
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.dark};
      }
      h3 {
        margin: 0 0 0.25rem;
      }
      &:hover {
        transition: background-color 0.25s;
        background-color: ${({
          theme: {
            primary: { h, s, l },
          },
        }) => `hsla(${h},${s}%,${l + 40}%, 0.25)`};
      }
    }
    li.inactive {
      padding: 0.45rem 0.75rem 0.15rem;
      font-size: 0.85rem;
      a {
        color: ${({ theme }) => theme.inactiveFG};
      }
      h3 {
        font-weight: normal;
        margin-bottom: 0.15rem;
      }
    }
  }
`;
const date = new Date();

const HolidaysList = ({
  holidays,
  day,
  month,
  year,
  days,
  months,
  years,
  onChangeHandler,
}) => (
  <>
    <Header
      day={day}
      month={month}
      year={year}
      days={days}
      months={months}
      years={years}
      onChangeHandler={onChangeHandler}
    />
    <HolidaysListWrapper>
      <ul>
        {holidays.map(({ celebrationDate, name }, index, array) => {
          // When the time zone offset is absent,
          // date-only forms are interpreted as a UTC time
          // and date-time forms are interpreted as local time.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
          // Date.parse('2011-10-10') => date-only form = UTC time
          // Date.parse('2011-10-10T00:00') => date-time form = Local time
          const holidayDate = new Date(`${celebrationDate}T00:00`);
          const currentYear =
            holidayDate.getUTCFullYear() === date.getUTCFullYear();
          const inactive = holidayDate < date && currentYear;
          let current = false;
          if (index) {
            const previousIsActive =
              new Date(`${array[index - 1].date}T05:00`) < date;
            current = currentYear && inactive !== previousIsActive;
          }
          return (
            <li key={name} className={inactive ? 'inactive' : ''}>
              <Link to={`/${celebrationDate.replace(/-/g, '/')}`}>
                <h3>{name}</h3>
                <PrettyDate date={celebrationDate} />
                {currentYear && (
                  <Countdown
                    date={holidayDate}
                    inactive={inactive}
                    current={current}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </HolidaysListWrapper>
  </>
);

export default HolidaysList;
