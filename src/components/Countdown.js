import React from "react";
import styled from "styled-components/macro";

const CountDownWrapper = styled.div`
  margin: 0.15rem auto;
  display: inline-block;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem 0.25rem;
  color: white;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.success};
`;

const CountDown = props => {
  const timeDiff = new Date(props.date) - new Date();
  const day = 1000 * 60 * 60 * 24; // milliseconds * seconds * minutes * hours
  const remainingDays = Math.ceil(timeDiff / day);
  const rtf =
    typeof Intl.RelativeTimeFormat === "function"
      ? new Intl.RelativeTimeFormat("es", {
          numeric: props.numeric
        })
      : {
          format(remainingDays) {
            if (remainingDays === 1) {
              return "mañana";
            }
            return `faltan ${remainingDays} días`;
          }
        };
  return (
    <CountDownWrapper>{rtf.format(remainingDays, "day")}</CountDownWrapper>
  );
};

CountDown.defaultProps = {
  numeric: "auto"
};

export default CountDown;
