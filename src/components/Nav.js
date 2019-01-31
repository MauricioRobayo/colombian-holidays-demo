import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
  font-size: 0.85rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">www.FeriadosColombia.com</Link>
    </NavWrapper>
  );
};

export default Nav;
