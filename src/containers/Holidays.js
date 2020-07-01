import React, { Component } from 'react';
import NoMatch from '../components/NoMatch';
import HolidaysList from '../components/HolidaysList';
import Day from '../components/Day';
import NoHolidays from '../components/NoHolidays';
import {
  getYears,
  getMonths,
  getDays,
  getHolidays,
  isValidYear,
  isValidMonth,
  isValidDay,
} from '../utils/dateHelpers';

class HolidaysContainer extends Component {
  startYear = 1984;
  currentYear = new Date().getFullYear();
  yearsPastCurrentYear = 10;
  endYear = this.currentYear + this.yearsPastCurrentYear;
  state = {
    year: this.props.match.params.year,
    month: this.props.match.params.month,
    day: this.props.match.params.day,
    years: getYears(
      this.currentYear,
      this.startYear,
      this.yearsPastCurrentYear
    ),
    months: getMonths(),
    days: getDays(this.props.match.params.year, this.props.match.params.month),
    holidays: getHolidays(
      this.props.match.params.year,
      this.startYear,
      this.endYear
    ),
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const path =
      name === 'year'
        ? `/${value}`
        : name === 'month'
        ? `/${this.state.year}/${value}`
        : `/${this.state.year}/${this.state.month}/${value}`;
    this.props.history.push(path);
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.year !== prevProps.match.params.year) {
      this.setState({
        year: this.props.match.params.year,
        holidays: this.getHolidays(this.props.match.params.year),
      });
    }
    if (this.props.match.params.month !== prevProps.match.params.month) {
      this.setState({
        month: this.props.match.params.month,
        days: getDays(
          this.props.match.params.year,
          this.props.match.params.month
        ),
      });
    }
    if (this.props.match.params.day !== prevProps.match.params.day) {
      this.setState({
        day: this.props.match.params.day,
      });
    }
  }

  render() {
    if (
      (this.state.year &&
        !isValidYear(this.state.year, this.startYear, this.endYear)) ||
      (this.state.month && !isValidMonth(this.state.month)) ||
      (this.state.day && !isValidDay(this.state.day, this.state.days))
    ) {
      const yearsOptions = {
        name: 'year',
        placeholder: 'año',
        options: this.state.years,
      };
      return (
        <NoMatch
          {...yearsOptions}
          message="It seems like we don't have that information."
          onChangeHandler={this.onChangeHandler}
        />
      );
    }
    if (this.state.day) {
      const date = `${this.state.year}-${this.state.month}-${this.state.day}`;
      const isHoliday = this.state.holidays.find(
        (holiday) => holiday.date === date
      );
      return (
        <Day
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          date={date}
          isHoliday={isHoliday}
        />
      );
    }
    const holidays = this.state.month
      ? this.state.holidays.filter(
          (holiday) => holiday.date.split('-')[1] === this.state.month
        )
      : this.state.holidays;
    if (this.state.month && holidays.length === 0) {
      return (
        <NoHolidays {...this.state} onChangeHandler={this.onChangeHandler} />
      );
    }
    return (
      <HolidaysList
        {...this.state}
        onChangeHandler={this.onChangeHandler}
        holidays={holidays}
      />
    );
  }
}

export default HolidaysContainer;
