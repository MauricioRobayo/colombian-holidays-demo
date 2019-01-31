import React, { Component } from "react";
import HolidaysList from "../components/HolidayList";
import NotFound from "../components/NotFound";

class HolidaysListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.onYearChange(this.props.selectedYear);
    this.state = {
      holidays: this.props.getHolidays(this.props.selectedYear)
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedYear !== prevProps.selectedYear) {
      this.setState({
        holidays: this.props.getHolidays(this.props.selectedYear)
      });
    }
  }
  render() {
    if (this.props.isValidYear) {
      return <HolidaysList holidays={this.state.holidays} />;
    }
    return <NotFound />;
  }
}

export default HolidaysListContainer;
