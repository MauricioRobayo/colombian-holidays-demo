import countdown from "countdown";
import React, { Component } from "react";
import styled from "styled-components/macro";

const CountDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  > div {
    margin: 0.15rem 0.15rem 0 0;
    width: 70px;
    padding: 0.35rem 0.3rem 0.25rem;
    color: white;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.success};
  }
  > div:last-child {
    margin: 0.15rem 0 0 0;
  }
  .label {
    font-size: 0.5rem;
    text-transform: uppercase;
  }
`;

const countDownKeysMap = {
  months: "meses",
  days: "días",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos"
};

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: {}
    };
    this.updateRemainingTime = this.updateRemainingTime.bind(this);
  }
  componentWillMount() {
    this.updateRemainingTime();
  }
  componentDidMount() {
    this.interval = window.setInterval(() => this.updateRemainingTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  updateRemainingTime() {
    const { months, days, hours, minutes, seconds } = countdown(
      new Date(this.props.date)
    );
    this.setState({
      remainingTime: { months, days, hours, minutes, seconds }
    });
  }
  render() {
    return (
      <CountDownWrapper>
        {Object.keys(countDownKeysMap).map(key => (
          <div key={key}>
            <div>{this.state.remainingTime[key]} </div>
            <div className="label">
              {this.state.remainingTime[key] === 1
                ? countDownKeysMap[key].replace(/es$|s$/, "")
                : countDownKeysMap[key]}
            </div>
          </div>
        ))}
      </CountDownWrapper>
    );
  }
}

export default CountDown;
