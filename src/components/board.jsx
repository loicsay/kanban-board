import React, { Component } from "react";
import List from "./list";

class Board extends Component {
  state = {
    cards: [
      { id: 0, list: "Teams", content: "card 0" },
      { id: 1, list: "Priorities", content: "card 1" },
      { id: 2, list: "Current", content: "card 2" },
      { id: 3, list: "Completed", content: "card 3" },
      { id: 4, list: "Teams", content: "card 4" }
    ]
  };

  handleDelete = cardId => {
    const cards = this.state.cards.filter(c => c.id !== cardId);
    this.setState({ cards });
  };

  handleEdit = cardId => {
    const text = String(prompt());
    const cards = this.state.cards;
    cards[cardId].content = text;
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
                onEdit={this.handleEdit}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Priorities"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Current"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            </div>
            <div className="col-sm">
              <List
                name={"Completed"}
                cards={this.state.cards}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
