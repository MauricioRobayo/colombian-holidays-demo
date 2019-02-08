import React from "react";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 1rem 1rem 3rem;
  margin: 0 auto 2rem;
  border-bottom: 6px solid ${props => props.theme.danger};
  color: ${props => props.theme.white};
  select {
    font-size: 2rem;
  }
`;

const Header = props => {
  const month = props.month && parseInt(props.month, 10) - 1;
  const totalDays = new Date(props.year, month + 1, 0).getDate();
  const daysOptions = {
    name: "day",
    placeholder: "día",
    options: props.month
      ? Array(totalDays)
          .fill(1)
          .map((day, index) => day + index)
      : []
  };
  const yearsOptions = {
    name: "year",
    placeholder: "año",
    options: props.years
  };
  const monthsOptions = {
    name: "month",
    placeholder: "mes",
    options: [
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
    ]
  };
  return (
    <HeaderWrapper>
      <h1>
        Festivos en Colombia {month ? monthsOptions.options[month] : ""}{" "}
        {props.year}
      </h1>
      {props.year && (
        <div>
          <Dropdown
            {...yearsOptions}
            onChangeHandler={props.onChangeHandler}
            selected={props.year}
          />
          <Dropdown
            {...monthsOptions}
            onChangeHandler={props.onChangeHandler}
            selected={props.month}
          />
          {props.month && (
            <Dropdown
              {...daysOptions}
              onChangeHandler={props.onChangeHandler}
              selected={props.day}
            />
          )}
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
