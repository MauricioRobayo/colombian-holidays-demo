import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider
} from "styled-components/macro";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";

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

class App extends Component {
  constructor(props) {
    super(props);
    const startYear = 1984;
    const currentYear = new Date().getFullYear()
    const yearsPastCurrentYear = 10
    this.state = {
      currentYear,
      selectedYear: new Date().getFullYear(),
      years: Array(currentYear - startYear + yearsPastCurrentYear + 1)
        .fill(startYear)
        .map((year, index) => year + index)
    };
    this.onYearChange = this.onYearChange.bind(this);
  }

  onYearChange(event) {
    const { value } = event.target
    this.setState({
      selectedYear: value
    });
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <AppWrapper>
          <GlobalStyle />
          <Header
            selectedYear={this.state.selectedYear}
            years={this.state.years}
            currentYear={this.state.currentYear}
            onChange={this.onYearChange}
          />
          <Main selectedYear={this.state.selectedYear} />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
