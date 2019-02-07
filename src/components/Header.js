import React from "react";
import { Link } from "react-router-dom";
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
    <Dropdown
      placeholder="año"
      options={props.years}
      isValid={props.isValidYear}
      onChange={props.onYearChange}
      history={props.history}
      onChangeHandler={props.onChangeHandler}
      selected={props.selectedYear}
    />
  </HeaderWrapper>
);

export default Header;
