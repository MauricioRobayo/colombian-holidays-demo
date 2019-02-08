import React, { Component, Fragment } from "react";
import Holidays from "../components/Holidays";
import NoMatch from "../components/NoMatch";
import Header from "../components/Header";

class MainContainer extends Component {
  isValidYear = year => {
    const startYear = parseInt(this.startYear, 10);
    const endYear = parseInt(this.endYear, 10);
    return year >= startYear && year <= endYear;
  };

  isValidMonth = month => {
    const monthInt = parseInt(month, 10);
    return monthInt >= 1 && monthInt <= 12;
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    const path =
      name === "year"
        ? `/${value}`
        : name === "month"
        ? `/${this.state.year}/${value}`
        : `/${this.state.year}/${this.state.month}/${value}`;
    this.props.history.push(path);
  };

  currentYear = new Date().getFullYear();
  yearsPastCurrentYear = 10;
  startYear = 1984;
  endYear = this.currentYear + this.yearsPastCurrentYear;
  totalYears =
    this.currentYear - this.startYear + this.yearsPastCurrentYear + 1;
  years = Array(this.totalYears)
    .fill(this.startYear)
    .map((year, index) => year + index);

  state = {
    year: this.props.match.params.year,
    month: this.props.match.params.month,
    day: this.props.match.params.day
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.year !== prevProps.match.params.year) {
      this.setState({
        year: this.props.match.params.year
      });
    }
    if (this.props.match.params.month !== prevProps.match.params.month) {
      this.setState({
        month: this.props.match.params.month
      });
    }
    if (this.props.match.params.day !== prevProps.match.params.day) {
      this.setState({
        day: this.props.match.params.day
      });
    }
  }
  render() {
    if (
      this.state.year &&
      (!this.isValidYear(this.state.year) ||
        (this.state.month && !this.isValidMonth(this.state.month)))
    ) {
      const yearsOptions = {
        name: "year",
        placeholder: "año",
        options: this.years
      };
      return (
        <Fragment>
          <Header />
          <NoMatch {...yearsOptions} onChangeHandler={this.onChangeHandler} />
        </Fragment>
      );
    }
    return (
      <Holidays
        onChangeHandler={this.onChangeHandler}
        getHolidays={this.getHolidays}
        years={this.years}
        year={this.state.year}
        month={this.state.month}
        day={this.state.day}
      />
    );
  }
}

export default MainContainer;
