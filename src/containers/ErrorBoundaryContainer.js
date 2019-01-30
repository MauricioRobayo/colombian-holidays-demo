import React, { Component } from "react";
import NotFound from "../components/NotFound";

class ErrorBoundaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
