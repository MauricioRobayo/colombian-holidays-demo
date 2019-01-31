import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  margin: 1rem 0 2rem;
  font-size: 2rem;
`;

const NotFound = ({ message, emoji }) => {
  return (
    <NotFoundWrapper>
      <p role="img" aria-label="not-found">
        {emoji || "🤔"}
      </p>
      <p>{message || "Al parecer no contamos con esa información."}</p>
    </NotFoundWrapper>
  );
};

export default NotFound;
