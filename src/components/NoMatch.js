import React, { Fragment } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const NotFoundWrapper = styled.div`
  margin: 1rem 0 2rem;
  font-size: 2rem;
  select {
    border-bottom: 4px solid ${props => props.theme.grey};
  }
`;

const NotFound = props => {
  return (
    <NotFoundWrapper>
      {props.message ? (
        <Fragment>
          <p role="img" aria-label="not-found">
            {props.emoji || "🤔"}
          </p>
          <p>{props.message}</p>
        </Fragment>
      ) : null}
      {props.options ? (
        <Dropdown
          name={props.name}
          placeholder={props.placeholder}
          options={props.options}
          onChangeHandler={props.onChangeHandler}
        />
      ) : null}
    </NotFoundWrapper>
  );
};

export default NotFound;
