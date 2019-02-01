import React from "react";
import styled from "styled-components/macro";
import Countdown from "./Countdown";
import PrettyDate from "./PrettyDate";

const HolidayListWrapper = styled.main`
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
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
          let current = false;
          if (index) {
            const previousIsActive =
              new Date(`${array[index - 1].date}T05:00`) < date;
            current = currentYear && inactive !== previousIsActive;
          }
          return (
            <li key={holiday.name} className={inactive ? "inactive" : ""}>
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
