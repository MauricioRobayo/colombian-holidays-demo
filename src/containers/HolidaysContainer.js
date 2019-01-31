import React, { Component } from "react";
import Holidays from "../components/Holidays";
import { getAllHolidays } from "pascua";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.currentYear = new Date().getFullYear();
    this.selectedYear = this.props.match.params.year
      ? this.props.match.params.year
      : this.currentYear;
    this.yearsPastCurrentYear = 10;
    this.startYear = 1984;
    this.endYear = this.currentYear + this.yearsPastCurrentYear;
    this.onYearChange = this.onYearChange.bind(this);
    this.totalYears =
      this.currentYear - this.startYear + this.yearsPastCurrentYear + 1;
    this.years = Array(this.totalYears)
      .fill(this.startYear)
      .map((year, index) => year + index);

    this.state = {
      isValidYear: this.isValidYear(this.selectedYear),
      selectedYear: this.selectedYear,
      years: this.years
    };
  }

  isValidYear(year) {
    const startYear = parseInt(this.startYear, 10);
    const endYear = parseInt(this.endYear, 10);
    return year >= startYear && year <= endYear;
  }

  onYearChange(year) {
    this.setState({
      selectedYear: year,
      isValidYear: this.isValidYear(year)
    });
  }

  getHolidays = year => {
    if (!this.isValidYear(year)) {
      return [];
    }
    return getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date));
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.year !== prevProps.match.params.year) {
      const currentYear = new Date().getFullYear();
      const selectedYear = this.props.match.params.year
        ? this.props.match.params.year
        : currentYear;
      this.setState({
        holidays: this.getHolidays(selectedYear),
        isValidYear: this.isValidYear(selectedYear),
        selectedYear
      });
    }
  }
  render() {
    return (
      <Holidays
        onYearChange={this.onYearChange}
        getHolidays={this.getHolidays}
        years={this.state.years}
        selectedYear={this.state.selectedYear}
        isValidYear={this.state.isValidYear}
      />
    );
  }
}

export default MainContainer;
