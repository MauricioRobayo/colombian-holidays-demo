import React from 'react'
import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 2rem 1rem;
  a {
    color: ${({ theme }) => theme.white};
  }
  span {
    font-size: 2rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <a href="/">www.feriadoscolombia.com</a>
    <p>Esta es una página de código abierto.</p>
    <p>
      <a href="https://github.com/archemiro/pascua.archemiro.com">
        Puede contribuir acá.
      </a>
    </p>
    <p>
      <span role="img" aria-label="Fuegos artificiales">
        🎆
      </span>
    </p>
  </StyledFooter>
)

export default Footer
