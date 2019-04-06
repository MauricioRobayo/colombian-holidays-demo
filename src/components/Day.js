import React, { Fragment } from 'react'
import styled from 'styled-components'
import PrettyDate from './PrettyDate'
import Header from './Header'
import Main from './Main'

const DayWrapper = styled(Main)`
  font-size: 1.5rem;
  .celebrate:after,
  .celebrate:before {
    content: '✨';
  }
`

const Day = props => {
  return (
    <Fragment>
      <Header {...props} />
      <DayWrapper>
        <PrettyDate date={props.date} />
        {props.isHoliday ? (
          <p className="celebrate">ES FESTIVO</p>
        ) : (
          <p>NO ES FESTIVO</p>
        )}
        <span
          role="img"
          aria-label={props.isHoliday ? 'es festivo' : 'no es festivo'}
        >
          {props.isHoliday ? '😄' : '😥'}
        </span>
      </DayWrapper>
    </Fragment>
  )
}

export default Day
