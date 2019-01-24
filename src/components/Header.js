import React from "react";
import YearSelector from "./YearSelector"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 2rem;
  margin-bottom: 1rem;
  border-bottom: 6px solid ${props => props.theme.danger};
  color: white;
  select {
    font-size: 2rem;
  }
`

const Header = props => (
  <HeaderWrapper>
    <h1>
      Festivos en Colombia {props.selectedYear}
    </h1>
    <YearSelector
      years={props.years}
      currentYear={props.currentYear}
      onChange={props.onChange}
    />
  </HeaderWrapper>
)

export default Header;