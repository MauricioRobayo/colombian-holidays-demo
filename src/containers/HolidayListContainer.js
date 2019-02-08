import React, { Component } from "react";
import HolidaysList from "../components/HolidayList";
import { getAllHolidays } from "pascua";
import NoMatch from "../components/NoMatch";

class HolidaysListContainer extends Component {
  getHolidays = year => {
    if (!year) {
      return [];
    }
    return getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date));
  };
  state = {
    holidays: this.getHolidays(this.props.year)
  };

  componentDidUpdate(prevProps) {
    if (this.props.year !== prevProps.year) {
      this.setState({
        holidays: this.getHolidays(this.props.year)
      });
    }
  }
  render() {
    if (!this.props.year) {
      const yearsOptions = {
        name: "year",
        placeholder: "año",
        options: this.props.years
      };
      return (
        <NoMatch
          {...yearsOptions}
          onChangeHandler={this.props.onChangeHandler}
        />
      );
    }
    return (
      <HolidaysList
        year={this.props.year}
        month={this.props.month}
        day={this.props.day}
        holidays={this.state.holidays}
      />
    );
  }
}

export default HolidaysListContainer;
