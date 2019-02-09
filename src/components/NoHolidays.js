import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const monthsNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

const NoHolidays = props => {
  console.log(props);
  return (
    <Fragment>
      <p>
        No hay festivos durante {monthsNames[parseInt(props.month, 10) - 1]} de{" "}
        <Link to={`/${props.year}`}>{props.year}</Link>.
      </p>
      <p>
        <span role="img" aria-label="no hay festivos">
          😥
        </span>
      </p>
    </Fragment>
  );
};

export default NoHolidays;
