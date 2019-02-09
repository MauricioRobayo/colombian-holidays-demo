import React from "react";
import styled from "styled-components";
import PrettyDate from "./PrettyDate";

const DayWrapper = styled.h2`
  padding: 0 1rem;
  .celebrate:after,
  .celebrate:before {
    content: "✨";
  }
`;

const Day = props => {
  return (
    <DayWrapper>
      <PrettyDate date={props.date} />

      {props.isHoliday ? (
        <p className="celebrate">ES FESTIVO</p>
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
    </DayWrapper>
  );
};

export default Day;
