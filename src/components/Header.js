import React from "react";
import YearSelectorContainer from "../containers/YearSelectorContainer";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 2rem 1rem 3rem;
  margin-bottom: 1rem;
  border-bottom: 6px solid ${props => props.theme.danger};
  color: ${props => props.theme.white};
  select {
    font-size: 2rem;
  }
  a {
    color: ${props => props.theme.white};
  }
`;

const Header = props => (
  <HeaderWrapper>
    {props.isValidYear ? (
      <h1>Festivos en Colombia {props.selectedYear}</h1>
    ) : (
      <h1>
        <a href="/">Festivos en Colombia</a>
      </h1>
    )}
    <YearSelectorContainer
      history={props.history}
      years={props.years}
      onYearChange={props.onYearChange}
      selectedYear={props.selectedYear}
      isValidYear={props.isValidYear}
    />
  </HeaderWrapper>
);

export default Header;
