import React, { Component } from "react";
import HolidaysList from "../components/HolidayList";
import { getAllHolidays } from "pascua";

class HolidaysListContainer extends Component {
  getHolidays = year => {
    if (!year) {
      return [];
    }
    return getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date));
  };
  state = {
    holidays: this.getHolidays(this.props.selectedYear)
  };
  componentDidUpdate(prevProps) {
    if (this.props.selectedYear !== prevProps.selectedYear) {
      this.setState({
        holidays: this.getHolidays(this.props.selectedYear)
      });
    }
  }
  render() {
    if (!this.props.selectedYear) {
      return null;
    }
    return <HolidaysList holidays={this.state.holidays} />;
  }
}

export default HolidaysListContainer;
