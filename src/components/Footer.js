import React from 'react'
import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 2rem 1rem 1rem;
  margin-top: auto;
  a {
    color: ${({ theme }) => theme.white};
  }
  span {
    font-size: 2rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <p>
      <a href="https://github.com/mauriciorobayo/colombian-holidays">
        This is an open source project.
      </a>
    </p>
    <p>
      <span role="img" aria-label="Fireworks">
        🎆
      </span>
    </p>
  </StyledFooter>
)

export default Footer
