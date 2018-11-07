import React, { Component } from "react";
import Card from "./card";

class Board extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card />
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
