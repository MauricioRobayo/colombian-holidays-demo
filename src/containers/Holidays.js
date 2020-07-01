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

  const [selectedDate, setSelectedDate] = useState({
    year: match.params.year,
    month: match.params.month,
    day: match.params.day,
  });

  const [days, setDays] = useState(
    getDays(match.params.year, match.params.month)
  );
  const [holidays, setHolidays] = useState(getHolidays(match.params.year));

  useEffect(() => {
    setSelectedDate({
      year: match.params.year,
      month: match.params.month,
      day: match.params.day,
    });
    setHolidays(getHolidays(match.params.year));
    setDays(getDays(match.params.year, match.params.month));
  }, [match.params.year, match.params.month, match.params.day]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSelectedDate({
      ...selectedDate,
      [name]: value,
    });
    const path =
      name === 'year'
        ? `/${value}`
        : name === 'month'
        ? `/${selectedDate.year}/${value}`
        : `/${selectedDate.year}/${selectedDate.month}/${value}`;
    history.push(path);
  };

  if (
    (selectedDate.year &&
      !isValidYear(selectedDate.year, startYear, endYear)) ||
    (selectedDate.month && !isValidMonth(selectedDate.month)) ||
    (selectedDate.day && !isValidDay(selectedDate.day, days))
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
  if (selectedDate.day) {
    const date = `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`;
    const isHoliday = holidays.find((holiday) => holiday.date === date);
    return (
      <Day
        day={selectedDate.day}
        month={selectedDate.month}
        year={selectedDate.year}
        days={days}
        months={months}
        years={years}
        onChangeHandler={onChangeHandler}
        date={date}
        isHoliday={isHoliday}
      />
    );
  }
  const currentHolidays = selectedDate.month
    ? holidays.filter(
        (holiday) => holiday.date.split('-')[1] === selectedDate.month
      )
    : holidays;
  if (selectedDate.month && currentHolidays.length === 0) {
    return (
      <NoHolidays
        day={selectedDate.day}
        month={selectedDate.month}
        year={selectedDate.year}
        days={days}
        months={months}
        years={years}
        onChangeHandler={onChangeHandler}
      />
    );
  }
  return (
    <HolidaysList
      day={selectedDate.day}
      month={selectedDate.month}
      year={selectedDate.year}
      days={days}
      months={months}
      years={years}
      onChangeHandler={onChangeHandler}
      holidays={currentHolidays}
    />
  );
};

export default Holidays;
