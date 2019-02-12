import React from "react";
import styled from "styled-components/macro";

const MainWrapper = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  text-align: center;
  padding: 2rem 1rem;
  time {
    display: block;
  }
  time::first-letter {
    text-transform: uppercase;
  }
`;

const Main = ({ children, className }) => {
  return <MainWrapper className={className}>{children}</MainWrapper>;
};

export default Main;
