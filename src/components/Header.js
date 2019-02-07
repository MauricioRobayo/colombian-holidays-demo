import React from "react";
import { Link } from "react-router-dom";
import DropdownContainer from "../containers/DropdownContainer";
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
        <Link to="/">Festivos en Colombia</Link>
      </h1>
    )}
    <DropdownContainer
      placeholder="año"
      history={props.history}
      options={props.years}
      onChange={props.onYearChange}
      selected={props.selectedYear}
      isValid={props.isValidYear}
    />
  </HeaderWrapper>
);

export default Header;
