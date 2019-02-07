import React, { Component } from "react";
import Holidays from "../components/Holidays";
import NotFound from "../components/NotFound";

class MainContainer extends Component {
  isValidYear = year => {
    const startYear = parseInt(this.startYear, 10);
    const endYear = parseInt(this.endYear, 10);
    return year >= startYear && year <= endYear;
  };

  onChangeHandler = event => {
    const { value } = event.target;
    this.props.history.push(`/${value}`);
    this.setState({
      selectedYear: value
    });
  };

  currentYear = new Date().getFullYear();
  selectedYear = this.props.match.params.year
    ? this.props.match.params.year
    : this.currentYear;
  yearsPastCurrentYear = 10;
  startYear = 1984;
  endYear = this.currentYear + this.yearsPastCurrentYear;
  totalYears =
    this.currentYear - this.startYear + this.yearsPastCurrentYear + 1;
  years = Array(this.totalYears)
    .fill(this.startYear)
    .map((year, index) => year + index);

  state = {
    selectedYear: this.selectedYear,
    years: this.years
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.year !== prevProps.match.params.year) {
      const currentYear = new Date().getFullYear();
      const selectedYear = this.props.match.params.year
        ? this.props.match.params.year
        : currentYear;
      this.setState({
        selectedYear
      });
    }
  }
  render() {
    if (!this.isValidYear(this.state.selectedYear)) {
      return <NotFound {...this.props} />;
    }
    return (
      <Holidays
        onChangeHandler={this.onChangeHandler}
        getHolidays={this.getHolidays}
        years={this.state.years}
        selectedYear={this.state.selectedYear}
      />
    );
  }
}

export default MainContainer;
