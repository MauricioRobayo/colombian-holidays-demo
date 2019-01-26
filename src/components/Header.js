import React from "react";
import YearSelectorContainer from "../containers/YearSelectorContainer";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 2rem 0 3rem;
  margin-bottom: 1rem;
  border-bottom: 6px solid ${props => props.theme.danger};
  color: white;
  select {
    font-size: 2rem;
  }
`;

const Header = props => (
  <HeaderWrapper>
    <h1>Festivos en Colombia {props.selectedYear}</h1>
    <YearSelectorContainer
      history={props.history}
      years={props.years}
      yearChange={props.yearChange}
      selectedYear={props.selectedYear}
    />
  </HeaderWrapper>
);

export default Header;
