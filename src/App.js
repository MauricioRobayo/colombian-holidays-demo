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
    const startYear = 1984;
    const selectedYear = new Date().getFullYear();
    const yearsPastCurrentYear = 10;
    const years = Array(selectedYear - startYear + yearsPastCurrentYear + 1)
      .fill(startYear)
      .map((year, index) => year + index);
    this.state = {
      selectedYear,
      years
    };
    this.yearChange = this.yearChange.bind(this);
  }

  yearChange(year) {
    this.setState({
      selectedYear: year
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
              yearChange={this.yearChange}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Main
                    {...props}
                    yearChange={this.yearChange}
                    selectedYear={this.state.selectedYear}
                  />
                )}
              />
              <Route
                path="/:year([1-2]\d{3})"
                render={props => (
                  <Main {...props} yearChange={this.yearChange} />
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
