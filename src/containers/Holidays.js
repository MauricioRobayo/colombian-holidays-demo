import React, { useState, useEffect } from 'react';
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

const Holidays = ({ match, history }) => {
  const startYear = 1984;
  const currentYear = new Date().getFullYear();
  const yearsPastCurrentYear = 10;
  const endYear = currentYear + yearsPastCurrentYear;
  const months = getMonths();
  const years = getYears(currentYear, startYear, yearsPastCurrentYear);

  const [year, setYear] = useState(match.params.year);
  const [month, setMonth] = useState(match.params.month);
  const [day, setDay] = useState(match.params.day);
  const [days, setDays] = useState(
    getDays(match.params.year, match.params.month)
  );
  const [holidays, setHolidays] = useState(
    getHolidays(match.params.year, startYear, endYear)
  );

  useEffect(() => {
    setYear(match.params.year);
    setMonth(match.params.month);
    setDay(match.params.day);
    setHolidays(getHolidays(match.params.year, startYear, endYear));
    setDays(getDays(match.params.year, match.params.month));
  }, [match.params.year, match.params.month, match.params.day, endYear]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'year') {
      setYear(value);
    }
    if (name === 'month') {
      setMonth(value);
    }
    if (name === 'day') {
      setDay(value);
    }
    const path =
      name === 'year'
        ? `/${value}`
        : name === 'month'
        ? `/${year}/${value}`
        : `/${year}/${month}/${value}`;
    history.push(path);
  };

  console.log({ day, month, year });

  if (
    (year && !isValidYear(year, startYear, endYear)) ||
    (month && !isValidMonth(month)) ||
    (day && !isValidDay(day, days))
  ) {
    const yearsOptions = {
      name: 'year',
      placeholder: 'years',
      options: years,
    };
    return (
      <NoMatch
        name={yearsOptions.name}
        placeholder={yearsOptions.placeholder}
        options={yearsOptions.options}
        message="It seems like we don't have that information."
        onChangeHandler={onChangeHandler}
      />
    );
  }
  if (day) {
    const date = `${year}-${month}-${day}`;
    const isHoliday = holidays.find((holiday) => holiday.date === date);
    return (
      <Day
        day={day}
        month={month}
        year={year}
        days={days}
        months={months}
        years={years}
        onChangeHandler={onChangeHandler}
        date={date}
        isHoliday={isHoliday}
      />
    );
  }
  const currentHolidays = month
    ? holidays.filter((holiday) => holiday.date.split('-')[1] === month)
    : holidays;
  if (month && currentHolidays.length === 0) {
    return (
      <NoHolidays
        day={day}
        month={month}
        year={year}
        days={days}
        months={months}
        years={years}
        onChangeHandler={onChangeHandler}
      />
    );
  }
  return (
    <HolidaysList
      day={day}
      month={month}
      year={year}
      days={days}
      months={months}
      years={years}
      onChangeHandler={onChangeHandler}
      holidays={currentHolidays}
    />
  );
};

export default Holidays;
