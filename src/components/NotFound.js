import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  margin: 0 1rem 1rem;
  font-size: 2rem;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      Al parecer no contamos con esa información.
    </NotFoundWrapper>
  );
};

export default NotFound;
