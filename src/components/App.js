import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return <Board store={this.props.store} />;
  }
}

export default App;
