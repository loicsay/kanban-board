import React, { Component } from "react";
import List from "./List";

class Board extends Component {
  state = {
    // Init some cards for the exemple
    cards: [
      { id: 0, list: "Teams", content: "How to use this board" },
      { id: 1, list: "Teams", content: "Product" },
      { id: 2, list: "Teams", content: "Marketing" },
      { id: 3, list: "Teams", content: "Sales" },
      { id: 4, list: "Teams", content: "Support" },
      { id: 5, list: "Teams", content: "People" },
      { id: 6, list: "Teams", content: "IT" },
      {
        id: 7,
        list: "Priorities",
        content: "Increase sales revenu by 30% in Q3"
      },
      {
        id: 8,
        list: "Priorities",
        content: "Launch first international expansion"
      },
      {
        id: 9,
        list: "Priorities",
        content: "Test new messaging for SMB market"
      },
      { id: 10, list: "Current", content: "Website Redesign" },
      { id: 11, list: "Current", content: "Ship iOS app" },
      { id: 12, list: "Current", content: "Analytics Data" },
      {
        id: 13,
        list: "Current",
        content: "Increase conversion rate by 20% by Q3"
      },
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

  handleDeleteCard = cardId => {
    const cards = this.state.cards.filter(c => c.id !== cardId);
    this.setState({ cards });
  };

  handleEditCard = (content, cardId) => {
    const cards = [...this.state.cards];
    for (let id in cards) {
      if (Number(id) === cardId) {
        cards[id].content = content;
      }
    }
    this.setState({ cards });
  };

  handleCreateCard = listName => {
    const cards = [...this.state.cards];
    const newCard = { id: cards.length, list: listName, content: "" };
    cards.push(newCard);
    this.setState({ cards });
  };

  handleDeleteList = listName => {
    const lists = this.state.lists.filter(l => l.name !== listName);
    this.setState({ lists });
    console.log(this.state.lists);
  };

  handleAddList = () => {
    const lists = [...this.state.lists];
    let listName = prompt(
      "Please enter the name of the new list.",
      "List name"
    );
    const list = { id: lists.length, name: listName };
    lists.push(list);
    this.setState({ lists });
  };

  renderList = list => {
    const filtered_cards = this.state.cards.filter(
      card => card.list === list.name
    );
    return (
      <List
        key={list.id}
        name={list.name}
        cards={filtered_cards}
        onDeleteCard={this.handleDeleteCard}
        onEditCard={this.handleEditCard}
        onCreateCard={this.handleCreateCard}
        onDeleteList={this.handleDeleteList}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>
            Kanban board
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleAddList}
            >
              Add a list...
            </button>
          </h1>
          <div className="row">{this.state.lists.map(this.renderList)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
