import React from "react"
import styled from "styled-components"
import HolidaysListContainer from "../containers/HolidayListContainer";

const MainWrapper = styled.main`
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`

const Main = props => (
  <MainWrapper>
    <HolidaysListContainer yearChange={props.yearChange} selectedYear={props.match.params.year} />
  </MainWrapper>
)

export default Main