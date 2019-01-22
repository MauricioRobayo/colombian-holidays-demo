import React from "react";

const PrettyDate = props => (
  <time dateTime={props.date}>
    {new Intl.DateTimeFormat("es", {
      weekday: props.weekday,
      year: props.year,
      month: props.month,
      day: props.day
    }).format(new Date(props.date.replace("-", "/")))}
  </time>
);

PrettyDate.defaultProps = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export default PrettyDate;
