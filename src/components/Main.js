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
    <HolidaysListContainer selectedYear={props.selectedYear} />
  </MainWrapper>
)

export default Main