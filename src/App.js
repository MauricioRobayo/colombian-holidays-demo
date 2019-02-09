import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HolidaysContainer from "./containers/HolidaysContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

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

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router>
      <Fragment>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Redirect exact from="/" to={`/${new Date().getFullYear()}`} />
          <Route
            exact
            path="/:year([1-2]\d{3})/:month(\d{2})?/:day(\d{2})?"
            component={HolidaysContainer}
          />
          <Route
            render={props => (
              <NoMatch {...props} message="Algo no tiene sentido." />
            )}
          />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </ThemeProvider>
);

export default App;
