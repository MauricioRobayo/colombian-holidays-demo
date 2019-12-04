import React from 'react'

const PrettyDate = props => (
  <time dateTime={props.date}>
    {new Intl.DateTimeFormat(props.locale, {
      weekday: props.weekday,
      year: props.year,
      month: props.month,
      day: props.day,
    }).format(new Date(`${props.date}T05:00Z`))}
  </time>
)

PrettyDate.defaultProps = {
  locale: 'es',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default PrettyDate
