import React, { Component } from "react";
import List from "./list";

class Board extends Component {
  state = {
    cards: [
      { id: 1, list: "Teams", content: "card 1" },
      { id: 2, list: "Priorities", content: "card 2" },
      { id: 3, list: "Current Projects", content: "card 3" },
      { id: 4, list: "Completed Projects", content: "card 4" },
      { id: 5, list: "Teams", content: "card 5" }
    ]
  };

  handleDelete = cardId => {
    const cards = this.state.cards.filter(c => c.id !== cardId);
    this.setState({ cards });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Board</h1>
          <div className="row">
            <div className="col-sm">
              <List
                name={"Teams"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Priorities"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Current Projects"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Completed Projects"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
