import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Countdown from "./Countdown";
import PrettyDate from "./PrettyDate";

const HolidayListWrapper = styled.main`
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 2rem;
  time {
    display: block;
  }
  time::first-letter {
    text-transform: uppercase;
  }
  > ul {
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
`;

const HolidaysList = props => {
  if (props.day) {
    const date = `${props.year}-${props.month}-${props.day}`;
    if (props.holidays.find(holiday => holiday.date === date)) {
      return (
        <HolidayListWrapper>
          <h2>
            <PrettyDate date={date} />
            <p>
              <span role="img" aria-label="estrellas">
                ✨
              </span>
              ES FESTIVO
              <span role="img" aria-label="estrellas">
                ✨
              </span>
            </p>
            <span role="img" aria-label="es festivo">
              😄
            </span>
          </h2>
        </HolidayListWrapper>
      );
    }
    return (
      <HolidayListWrapper>
        <h2>
          <PrettyDate date={date} />
          <p>
            <strong>NO</strong> ES FESTIVO
          </p>
          <span role="img" aria-label="no es festivo">
            😥
          </span>
        </h2>
      </HolidayListWrapper>
    );
  }
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  const date = new Date();
  const holidays = props.month
    ? props.holidays.filter(
        holiday => holiday.date.split("-")[1] === props.month
      )
    : props.holidays;
  if (props.month && holidays.length === 0) {
    return (
      <HolidayListWrapper>
        <p>
          No hay festivos durante {months[parseInt(props.month, 10) - 1]} de{" "}
          <Link to={`/${props.year}`}>{props.year}</Link>.
        </p>
        <p>
          <span role="img" aria-label="no hay festivos">
            😥
          </span>
        </p>
      </HolidayListWrapper>
    );
  }
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
