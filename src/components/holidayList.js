import React from "react";
import styled, { keyframes } from "styled-components/macro";
import Countdown from "./countdown";
import { PrettyDate } from "./formatter";

const slideIn = keyframes`
  from {height: 0;}
  to {height: 1rem;}
`;

const slideOut = keyframes`
  from {height: 1rem;}
  to {height: 0;}
`;

const HolidayListWrapper = styled.div`
  margin-bottom: 2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0.75em;
      border-bottom: 1px solid ${({ theme }) => theme.greylighter};
      h3 {
        margin: 0 0.75rem 0.25rem 0;
      }
      time {
        display: block;
        overflow: hidden;
      }
    }
    li.inactive {
      padding: 0.5rem 0.75rem 0.25rem;
      background: ${({ theme }) => theme.inactiveBG};
      color: ${({ theme }) => theme.inactiveFG};
      time {
        animation: ${slideOut} 0.25s ease-out 0.5s forwards;
      }
      &:hover time {
        animation: ${slideIn} 0.25s ease-out forwards;
      }
    }
  }
`;

const HolidaysList = ({ holidays }) => {
  const date = new Date();
  return (
    <HolidayListWrapper>
      <ul>
        {holidays.map((holiday, index, array) => {
          // Ajustamos a la zona horaria de Colombia
          const holidayDate = new Date(`${holiday.date}T05:00`);
          const currentYear = holidayDate.getFullYear() === date.getFullYear();
          const inactive = holidayDate < date && currentYear;

          console.log(holidayDate, date);
          let current = false;
          if (index) {
            const previousIsActive =
              new Date(`${array[index - 1].date}T05:00`) < date;
            current = currentYear && inactive !== previousIsActive;
          }
          return (
            <li key={holiday.name} className={inactive && "inactive"}>
              <h3>{holiday.name}</h3>
              <PrettyDate date={holiday.date} />
              {current && <Countdown date={holiday.date} />}
            </li>
          );
        })}
      </ul>
    </HolidayListWrapper>
  );
};

export default HolidaysList;
