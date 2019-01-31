import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider
} from "styled-components/macro";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const defaultTheme = {
  dark: "#444",
  grey: "#777",
  greylighter: "#ddd",
  white: "#fff",
  inactiveFG: "#aaa",
  inactiveBG: "#f4f4f4",
  primary: "#6b5b95",
  success: "#00A591",
  danger: "#fe840e",
  maxWidth: "640px",
  width: "95%"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font: 18px Arial, Helvetica, sans-serif;
    color: ${defaultTheme.dark};
  }
  body {
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${defaultTheme.dark};
  }
`;

const AppWrapper = styled.div`
  text-align: center;
  margin: auto;
`;

const Menu = withRouter(Header);

class App extends Component {
  constructor(props) {
    super(props);

    this.pathname = window.location.pathname;
    this.currentYear = new Date().getFullYear();
    this.selectedYear = this.pathname.replace("/", "")
      ? this.pathname.replace("/", "")
      : this.currentYear;
    this.yearsPastCurrentYear = 10;
    this.startYear = 1984;
    this.endYear = this.currentYear + this.yearsPastCurrentYear;
    this.onYearChange = this.onYearChange.bind(this);
    this.totalYears =
      this.currentYear - this.startYear + this.yearsPastCurrentYear + 1;
    this.years = Array(isNaN(this.totalYears) ? 0 : this.totalYears)
      .fill(this.startYear)
      .map((year, index) => year + index);

    this.state = {
      isValidYear: this.isValidYear(this.selectedYear),
      selectedYear: this.selectedYear,
      years: this.years
    };
  }

  isValidYear(year) {
    const startYear = parseInt(this.startYear, 10);
    const endYear = parseInt(this.endYear, 10);
    const yearInt = parseInt(year, 10);
    return isNaN(yearInt) ? false : yearInt >= startYear && yearInt <= endYear;
  }

  onYearChange(year) {
    this.setState({
      selectedYear: year,
      isValidYear: this.isValidYear(year)
    });
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AppWrapper>
            <GlobalStyle />
            <Menu
              selectedYear={this.state.selectedYear}
              years={this.state.years}
              onYearChange={this.onYearChange}
              isValidYear={this.state.isValidYear}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Main
                    {...props}
                    onYearChange={this.onYearChange}
                    selectedYear={this.state.selectedYear}
                    isValidYear={this.state.isValidYear}
                  />
                )}
              />
              <Route
                path="/:year([1-2]\d{3})"
                render={props => (
                  <Main
                    {...props}
                    onYearChange={this.onYearChange}
                    selectedYear={this.state.selectedYear}
                    isValidYear={this.state.isValidYear}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </AppWrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
