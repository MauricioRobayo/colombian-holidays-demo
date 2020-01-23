import React, { Component } from 'react'
import { getAllHolidays } from 'pascua'
import NoMatch from '../components/NoMatch'
import HolidaysList from '../components/HolidaysList'
import Day from '../components/Day'
import NoHolidays from '../components/NoHolidays'

class HolidaysContainer extends Component {
  startYear = 1984
  currentYear = new Date().getFullYear()
  yearsPastCurrentYear = 10
  endYear = this.currentYear + this.yearsPastCurrentYear
  state = {
    year: this.props.match.params.year,
    month: this.props.match.params.month,
    day: this.props.match.params.day,
    years: this.getYears(),
    months: this.getMonths(),
    days: this.getDays(
      this.props.match.params.year,
      this.props.match.params.month,
    ),
    holidays: this.getHolidays(this.props.match.params.year),
  }

  onChangeHandler = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
    const path =
      name === 'year'
        ? `/${value}`
        : name === 'month'
        ? `/${this.state.year}/${value}`
        : `/${this.state.year}/${this.state.month}/${value}`
    this.props.history.push(path)
  }

  getYears() {
    const totalYears =
      this.currentYear - this.startYear + this.yearsPastCurrentYear + 1
    return Array.from({ length: totalYears }, (_, k) => this.startYear + k)
  }

  getMonths() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  }

  getDays(year, month) {
    if (!year || !month) return []
    const intYear = parseInt(year, 10)
    const intMonth = parseInt(month, 10)
    if (isNaN(intYear) || isNaN(intMonth)) return []
    const totalDays = new Date(intYear, intMonth, 0).getDate()
    return Array.from({ length: totalDays }, (_, k) => k + 1)
  }

  getHolidays(year) {
    if (!this.isValidYear(year)) {
      return []
    }
    return getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date))
  }

  isValidYear(year) {
    const startYear = parseInt(this.startYear, 10)
    const endYear = parseInt(this.endYear, 10)
    return year >= startYear && year <= endYear
  }

  isValidMonth(month) {
    const monthInt = parseInt(month, 10)
    return monthInt >= 1 && monthInt <= 12
  }

  isValidDay(day) {
    return this.state.days.includes(parseInt(day, 10))
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.year !== prevProps.match.params.year) {
      this.setState({
        year: this.props.match.params.year,
        holidays: this.getHolidays(this.props.match.params.year),
      })
    }
    if (this.props.match.params.month !== prevProps.match.params.month) {
      this.setState({
        month: this.props.match.params.month,
        days: this.getDays(
          this.props.match.params.year,
          this.props.match.params.month,
        ),
      })
    }
    if (this.props.match.params.day !== prevProps.match.params.day) {
      this.setState({
        day: this.props.match.params.day,
      })
    }
  }

  render() {
    if (
      (this.state.year && !this.isValidYear(this.state.year)) ||
      (this.state.month && !this.isValidMonth(this.state.month)) ||
      (this.state.day && !this.isValidDay(this.state.day))
    ) {
      const yearsOptions = {
        name: 'year',
        placeholder: 'año',
        options: this.state.years,
      }
      return (
        <NoMatch
          {...yearsOptions}
          message="It seems like we don't have that information."
          onChangeHandler={this.onChangeHandler}
        />
      )
    }
    if (this.state.day) {
      const date = `${this.state.year}-${this.state.month}-${this.state.day}`
      const isHoliday = this.state.holidays.find(
        holiday => holiday.date === date,
      )
      return (
        <Day
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          date={date}
          isHoliday={isHoliday}
        />
      )
    }
    const holidays = this.state.month
      ? this.state.holidays.filter(
          holiday => holiday.date.split('-')[1] === this.state.month,
        )
      : this.state.holidays
    if (this.state.month && holidays.length === 0) {
      return (
        <NoHolidays {...this.state} onChangeHandler={this.onChangeHandler} />
      )
    }
    return (
      <HolidaysList
        {...this.state}
        onChangeHandler={this.onChangeHandler}
        holidays={holidays}
      />
    )
  }
}

export default HolidaysContainer
