import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider
} from "styled-components/macro";
import Footer from "./components/Footer";
import HolidaysListContainer from "./containers/HolidayListContainer";
import YearSelector from "./components/YearSelector";

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
  > header {
    background-color: ${defaultTheme.primary};
    padding: 2rem;
    margin-bottom: 1rem;
    border-bottom: 6px solid ${defaultTheme.danger};
    color: white;
    > div {
      margin: 1rem auto;
    }
  }
  > main {
    width: ${defaultTheme.width};
    max-width: ${defaultTheme.maxWidth};
    margin: auto;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startYear: 1984,
      currentYear: new Date().getFullYear(),
      selectedYear: new Date().getFullYear(),
      yearsPastCurrentYear: 10
    };
    this.onYearChange = this.onYearChange.bind(this);
  }

  onYearChange(event) {
    this.setState({
      selectedYear: event.target.value
    });
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <AppWrapper>
          <GlobalStyle />
          <header>
            <div>
              <h1>
                Festivos en Colombia{" "}
                <YearSelector
                  currentYear={this.state.currentYear}
                  startYear={this.state.startYear}
                  yearsPastCurrentYear={this.state.yearsPastCurrentYear}
                  onChange={this.onYearChange}
                />
              </h1>
            </div>
          </header>
          <main>
            <HolidaysListContainer selectedYear={this.state.selectedYear} />
          </main>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
