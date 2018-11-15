import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import { createStore } from "redux";
import card from "./components/reducers";

const store = createStore(card);

class App extends Component {
  render() {
    return <Board store={store} />;
  }
}

export default App;
