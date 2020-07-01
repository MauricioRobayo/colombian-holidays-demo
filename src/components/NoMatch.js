import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Header from './Header';
import Main from './Main';

const NotFoundWrapper = styled(Main)`
  font-size: 2rem;
  select {
    border-bottom: 4px solid ${(props) => props.theme.grey};
  }
`;

const NotFound = ({ message, emoji, options, ...props }) => (
  <>
    <Header />
    <NotFoundWrapper>
      {message ? (
        <>
          <p role="img" aria-label="not-found">
            {emoji || '🤔'}
          </p>
          <p>{message}</p>
        </>
      ) : null}
      {options ? <Dropdown {...props} /> : null}
    </NotFoundWrapper>
  </>
);

export default NotFound;
