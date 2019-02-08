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
        Festivos en Colombia{" "}
        {props.month
          ? monthsOptions.options[parseInt(props.month, 10) - 1]
          : ""}{" "}
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
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
