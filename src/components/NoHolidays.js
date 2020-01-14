import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

const monthsNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

const NoHolidays = props => {
  return (
    <>
      <Header {...props} />
      <Main>
        <p>
          No hay festivos durante {monthsNames[parseInt(props.month, 10) - 1]}{' '}
          de <Link to={`/${props.year}`}>{props.year}</Link>.
        </p>
        <p>
          <span role="img" aria-label="no hay festivos">
            😥
          </span>
        </p>
      </Main>
    </>
  )
}

export default NoHolidays
