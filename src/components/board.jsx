import React, { Component } from "react";
import List from "./list";

class Board extends Component {
  state = {
    cards: [
      { id: 0, list: "Teams", content: "How to use this board" },
      { id: 1, list: "Teams", content: "Product" },
      { id: 2, list: "Teams", content: "Marketing" },
      { id: 3, list: "Teams", content: "Sales" },
      { id: 4, list: "Teams", content: "Support" },
      { id: 5, list: "Teams", content: "People" },
      { id: 6, list: "Teams", content: "IT" },
      { id: 7, list: "Priorities", content: "Increase sales revenu by 30% in Q3" },
      { id: 8, list: "Priorities", content: "Launch first international expansion" },
      { id: 9, list: "Priorities", content: "Test new messaging for SMB market" },
      { id: 10, list: "Current", content: "Website Redesign" },
      { id: 11, list: "Current", content: "Ship iOS app" },
      { id: 12, list: "Current", content: "Analytics Data" },
      { id: 13, list: "Current", content: "Increase conversion rate by 20% by Q3" },
      { id: 14, list: "Current", content: "Develop Engineering Blog" },
      { id: 15, list: "Current", content: "Brand Guidelines" },
      { id: 16, list: "Completed", content: "Social Media Campaign" },
      { id: 17, list: "Completed", content: "Update Help Documentation" }
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
    const cards = [...this.state.cards];
    for (let id in cards) {
      if (Number(id) === cardId) {
        cards[id].content = content;
      }
    }
    this.setState(cards); 
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
