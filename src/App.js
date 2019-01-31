import React, { Component, Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HolidaysContainer from "./containers/HolidaysContainer";
import Nav from "./components/Nav";
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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Fragment>
          <GlobalStyle />
          <Router>
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={HolidaysContainer} />
                <Route
                  path="/:year([1-2]\d{3})"
                  component={HolidaysContainer}
                />
                <Route
                  render={props => (
                    <NotFound {...props} message="Algo no tiene sentido." />
                  )}
                />
              </Switch>
            </Fragment>
          </Router>
          <Footer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
