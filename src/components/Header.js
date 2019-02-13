import React from 'react'
import Dropdown from '../components/Dropdown'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 1rem 1rem 3rem;
  margin: 0 auto;
  border-bottom: 6px solid ${props => props.theme.danger};
  color: ${props => props.theme.white};
  .dropdowns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${props => props.theme.maxWidth}) {
      flex-direction: row;
    }
  }
  select {
    font-size: 1.5rem;
    @media screen and (min-width: ${props => props.theme.maxWidth}) {
      font-size: 2rem;
    }
  }
`

const Header = props => {
  const month = props.month && parseInt(props.month, 10) - 1
  const daysOptions = {
    name: 'day',
    placeholder: 'día',
    options: props.days,
  }
  const yearsOptions = {
    name: 'year',
    placeholder: 'año',
    options: props.years,
  }
  const monthsOptions = {
    name: 'month',
    placeholder: 'mes',
    options: props.months,
  }
  return (
    <HeaderWrapper>
      <h1>
        Festivos en Colombia {month ? monthsOptions.options[month] : ''}{' '}
        {props.year}
      </h1>
      {props.year && (
        <div className="dropdowns">
          <Dropdown
            {...yearsOptions}
            onChangeHandler={props.onChangeHandler}
            selected={props.year}
          />
          <Dropdown
            {...monthsOptions}
            onChangeHandler={props.onChangeHandler}
            selected={props.month}
          />
          {props.month && (
            <Dropdown
              {...daysOptions}
              onChangeHandler={props.onChangeHandler}
              selected={props.day}
            />
          )}
        </div>
      )}
    </HeaderWrapper>
  )
}

export default Header
