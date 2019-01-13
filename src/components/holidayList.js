import countdown from "countdown";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components/macro";
import { PrettyDate } from "./formatter";

const slideIn = keyframes`
  from {height: 0;}
  to {height: 1rem;}
`;

const slideOut = keyframes`
  from {height: 1rem;}
  to {height: 0;}
`;

const HolidayListWrapper = styled.div`
  margin-bottom: 2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      border-bottom: 1px solid ${({ theme }) => theme.greylighter};
      h3 {
        margin: 0 0.75rem 0.25rem 0;
      }
      time {
        display: block;
        overflow: hidden;
      }
    }
    li.active {
      padding: 0.75em;
    }
    li.inactive {
      padding: 0.5rem 0.75rem 0.25rem;
      background: ${({ theme }) => theme.inactiveBG};
      color: ${({ theme }) => theme.inactiveFG};
      time {
        animation: ${slideOut} 0.25s ease-out 0.5s forwards;
      }
      &:hover time {
        animation: ${slideIn} 0.25s ease-out forwards;
      }
    }
  }
`;

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

const HolidaysList = ({ holidays }) => {
  const date = new Date();
  return (
    <HolidayListWrapper>
      <ul>
        {holidays.map((holiday, index, array) => {
          const active = new Date(holiday.date) >= date;
          let current = false;
          if (index) {
            const previousIsActive = new Date(array[index - 1].date) >= date;
            current = active !== previousIsActive;
          }
          return (
            <li key={holiday.name} className={active ? "active" : "inactive"}>
              <h3>{holiday.name}</h3>
              <PrettyDate date={holiday.date} />
              {current && <CountDown date={holiday.date} />}
            </li>
          );
        })}
      </ul>
    </HolidayListWrapper>
  );
};

export default HolidaysList;
