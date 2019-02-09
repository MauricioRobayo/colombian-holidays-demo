import React from "react";
import PrettyDate from "./PrettyDate";
import Celebrate from "./Celebrate";

const Day = props => {
  return (
    <h2>
      <PrettyDate date={props.date} />

      {props.isHoliday ? (
        <p>
          <Celebrate>ES FESTIVO</Celebrate>
        </p>
      ) : (
        <p>
          <strong>NO</strong> ES FESTIVO{" "}
        </p>
      )}

      <span
        role="img"
        aria-label={props.isHoliday ? "es festivo" : "no es festivo"}
      >
        {props.isHoliday ? "😄" : "😥"}
      </span>
    </h2>
  );
};

export default Day;
