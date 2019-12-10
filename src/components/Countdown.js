import React from 'react'
import styled from 'styled-components/macro'

const CountDownWrapper = styled.div`
  margin: 0.15rem auto;
  display: inline-block;
  font-size: 0.85rem;
  padding: 0.35rem 0.5rem 0.25rem;
  color: white;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.success};
`

const CountDown = props => {
  const timeDiff = new Date(props.date) - new Date()
  const day = 1000 * 60 * 60 * 24 // milliseconds * seconds * minutes * hours
  const remainingDays = Math.ceil(timeDiff / day)
  if (typeof Intl.RelativeTimeFormat === 'function') {
    const rtf = new Intl.RelativeTimeFormat('es', {
      numeric: props.numeric,
    })
    return (
      <CountDownWrapper>{rtf.format(remainingDays, 'day')}</CountDownWrapper>
    )
  }
  return null
}

CountDown.defaultProps = {
  numeric: 'auto',
}

export default CountDown
