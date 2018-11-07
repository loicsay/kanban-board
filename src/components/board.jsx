import React, { Component } from "react";
import Card from "./card";

class Board extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Board</h1>
          <div className="row">
            <div className="col-sm">
              <h4>Teams</h4>
              <Card />
              <Card />
            </div>
            <div className="col-sm">
              <h4>Priorities</h4>
              <Card />
            </div>
            <div className="col-sm">
              <h4>Current Projects</h4>
              <Card />
            </div>
            <div className="col-sm">
              <h4>Completed Projects</h4>
              <Card />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
