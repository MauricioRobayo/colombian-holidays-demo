import React from "react";
import styled from "styled-components";
import HolidaysListContainer from "../containers/HolidayListContainer";
import ErrorBoundaryContainer from "../containers/ErrorBoundaryContainer";

const MainWrapper = styled.main`
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
`;

const Main = props => (
  <MainWrapper>
    <ErrorBoundaryContainer>
      <HolidaysListContainer
        yearChange={props.yearChange}
        selectedYear={props.selectedYear || props.match.params.year}
        maxYear={props.maxYear}
        startYear={props.startYear}
      />
    </ErrorBoundaryContainer>
  </MainWrapper>
);

export default Main;
