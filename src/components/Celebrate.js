import React, { Fragment } from "react";

const Celebrate = props => {
  const wrapper = (
    <span role="img" aria-label="estrellas">
      ✨
    </span>
  );
  return (
    <Fragment>
      {wrapper}
      {props.children}
      {wrapper}
    </Fragment>
  );
};

export default Celebrate;
