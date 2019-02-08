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
      isValidYear={props.isValidYear}
    />
    <HolidaysListContainer
      onChangeHandler={props.onChangeHandler}
      years={props.years}
      year={props.year}
      month={props.month}
      getHolidays={props.getHolidays}
    />
  </Fragment>
);

export default Main;
