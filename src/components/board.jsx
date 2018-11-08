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
    ],
    lists: [
      { id: 0, name: "Teams" },
      { id: 1, name: "Priorities" },
      { id: 2, name: "Current" },
      { id: 3, name: "Completed" }
    ]
  };

  handleDelete = cardId => {
    const cards = this.state.cards.filter(c => c.id !== cardId);
    this.setState({ cards });
  };

  handleEdit = (content, cardId) => {
    const cards = this.state.cards;
    for (let id in cards) {
      if (Number(id) === cardId) {
        cards[id].content = content;
      }
    }
    this.setState(cards); 
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Board</h1>
          <div className="row">
            {this.state.lists.map(list => (
              <List
                key={list.id}
                name={list.name}
                cards={this.state.cards}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
