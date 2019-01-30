import React, { Component } from "react";
import { getAllHolidays } from "pascua";
import HolidaysList from "../components/HolidayList";
import NotFound from "../components/NotFound";

class HolidaysListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: this.getHolidays(props.selectedYear)
    };
    this.props.yearChange(this.props.selectedYear);
  }
  getHolidays = year => {
    if (year > this.props.maxYear || year < this.props.startYear) {
      return [];
    }
    return getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date));
  };
  componentDidUpdate(prevProps) {
    if (this.props.selectedYear !== prevProps.selectedYear) {
      this.setState({
        holidays: this.getHolidays(this.props.selectedYear)
      });
    }
  }
  render() {
    if (this.state.holidays.length === 0) {
      return <NotFound />;
    }
    return <HolidaysList holidays={this.state.holidays} />;
  }
}

export default HolidaysListContainer;
