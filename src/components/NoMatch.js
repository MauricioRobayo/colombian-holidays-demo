import React, { Fragment } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Header from './Header'
import Main from './Main'

const NotFoundWrapper = styled(Main)`
  font-size: 2rem;
  select {
    border-bottom: 4px solid ${props => props.theme.grey};
  }
`

const NotFound = props => {
  return (
    <Fragment>
      <Header />
      <NotFoundWrapper>
        {props.message ? (
          <Fragment>
            <p role="img" aria-label="not-found">
              {props.emoji || '🤔'}
            </p>
            <p>{props.message}</p>
          </Fragment>
        ) : null}
        {props.options ? (
          <Dropdown
            name={props.name}
            placeholder={props.placeholder}
            options={props.options}
            onChangeHandler={props.onChangeHandler}
          />
        ) : null}
      </NotFoundWrapper>
    </Fragment>
  )
}

export default NotFound
