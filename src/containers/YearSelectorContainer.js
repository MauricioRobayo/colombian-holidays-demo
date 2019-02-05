import React, { Component } from "react";
import YearSelector from "../components/YearSelector";

class YearSelectorContainer extends Component {
  onChange = event => {
    const { value } = event.target;
    this.props.history.push(`/${value}`);
    this.props.onYearChange(value);
  };
  render() {
    return (
      <YearSelector
        years={this.props.years}
        selectedYear={this.props.selectedYear}
        onChange={this.onChange}
        isValidYear={this.props.isValidYear}
      />
    );
  }
}

export default YearSelectorContainer;
