import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import HolidaysListContainer from "../containers/HolidayListContainer";
import Header from "./Header";

const Menu = withRouter(Header);

const Main = props => (
  <Fragment>
    <Menu
      onChangeHandler={props.onChangeHandler}
      years={props.years}
      selectedYear={props.selectedYear}
      isValidYear={props.isValidYear}
    />
    <HolidaysListContainer
      selectedYear={props.selectedYear}
      isValidYear={props.isValidYear}
      getHolidays={props.getHolidays}
    />
  </Fragment>
);

export default Main;
