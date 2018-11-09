import React, { Component } from "react";
import List from "./List";

class Board extends Component {
  state = {
    // Init some cards for the exemple
    cards: [
      { id: 0, list: "Backlog", content: "Buy coffee for everyone" },
      { id: 1, list: "Backlog", content: "Contact Kaneoh" },
      { id: 2, list: "Backlog", content: "Improve website UI" },
      { id: 3, list: "Backlog", content: "Sales appointment" },
      { id: 4, list: "Backlog", content: "Hire a new manager" },
      { id: 5, list: "Backlog", content: "Create a new logo" },
      { id: 6, list: "Backlog", content: "Appointment with interns" },
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
      { id: 0, name: "Backlog" },
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
  };

  handleCreateList = () => {
    const lists = [...this.state.lists];
    let listName = prompt(
      "Please enter the name of the new list.",
      "List name"
    );
    const list = { id: lists.length, name: listName };
    lists.push(list);
    this.setState({ lists });
  };

  handleEditList = (content, listName) => {
    const lists = [...this.state.lists];
    const cards = [...this.state.cards];
    for (let list of lists) {
      if (list.name === listName) {
        list.name = content;
      }
    };
    for (let card of cards) {
      if (card.list === listName) {
        card.list = content;
      }
    };
    this.setState({ lists });
    console.log(this.state.lists);
    console.log(this.state.cards);
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
        onEditList={this.handleEditList}
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
              onClick={this.handleCreateList}
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
