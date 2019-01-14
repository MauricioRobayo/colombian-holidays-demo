import React, { Component } from "react";
import styled from "styled-components/macro";

const CountDownWrapper = styled.div`
  margin: 0.15rem auto;
  display: inline-block;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem 0.25rem;
  color: white;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.success};
  span {
    font-weight: bold;
  }
`;

class CountDown extends Component {
  constructor(props) {
    super(props);
    const timeDiff = new Date(this.props.date) - new Date();
    const day = 1000 * 60 * 60 * 24; // milliseconds * seconds * minutes * hours
    const remainingDays = Math.ceil(timeDiff / day);
    this.state = {
      remainingDays
    };
    this.updateRemainingTime = this.updateRemainingTime.bind(this);
  }
  updateRemainingTime() {}
  render() {
    return (
      <CountDownWrapper>
        En
        <span> {this.state.remainingDays} </span>
        {this.state.remainingDays === 1 ? "dia" : "dias"}
      </CountDownWrapper>
    );
  }
}

export default CountDown;
