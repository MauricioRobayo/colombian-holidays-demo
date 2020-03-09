import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

const monthsNames = [
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

const NoHolidays = props => (
  <>
    <Header {...props} />
    <Main>
      <p>
        No holidays during {monthsNames[parseInt(props.month, 10) - 1]}{' '}
        <Link to={`/${props.year}`}>{props.year}</Link>.
      </p>
      <p>
        <span role="img" aria-label="no holidays">
          😥
        </span>
      </p>
    </Main>
  </>
)

export default NoHolidays
