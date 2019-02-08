import React, { Fragment } from "react";
import HolidaysListContainer from "../containers/HolidayListContainer";
import Header from "./Header";

const Main = props => (
  <Fragment>
    <Header
      onChangeHandler={props.onChangeHandler}
      years={props.years}
      year={props.year}
      month={props.month}
      day={props.day}
      isValidYear={props.isValidYear}
    />
    <HolidaysListContainer
      onChangeHandler={props.onChangeHandler}
      years={props.years}
      year={props.year}
      month={props.month}
      day={props.day}
      getHolidays={props.getHolidays}
    />
  </Fragment>
);

export default Main;
