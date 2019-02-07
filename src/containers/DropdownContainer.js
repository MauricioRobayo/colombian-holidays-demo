import React, { Component } from "react";
import Dropdown from "../components/Dropdown";

class DropdownContainer extends Component {
  onChangeHandler = event => {
    const { value } = event.target;
    this.props.history.push(`/${value}`);
    this.props.onChange(value);
  };
  render() {
    return <Dropdown {...this.props} onChangeHandler={this.onChangeHandler} />;
  }
}

export default DropdownContainer;
