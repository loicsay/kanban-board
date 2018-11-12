import React, { Component } from "react";
import List from "./List";

class Board extends Component {
  state = {
    // Init some cards for the exemple
    cards: [
      {
        id: 0,
        list: "Backlog",
        content: "Buy coffee for everyone",
        isDragged: false
      },
      { id: 1, list: "Backlog", content: "Contact Kaneoh", isDragged: false },
      {
        id: 2,
        list: "Backlog",
        content: "Improve website UI",
        isDragged: false
      },
      {
        id: 3,
        list: "Backlog",
        content: "Sales appointment",
        isDragged: false
      },
      {
        id: 4,
        list: "Backlog",
        content: "Hire a new manager",
        isDragged: false
      },
      {
        id: 5,
        list: "Backlog",
        content: "Create a new logo",
        isDragged: false
      },
      {
        id: 6,
        list: "Backlog",
        content: "Appointment with interns",
        isDragged: false
      },
      {
        id: 7,
        list: "Priorities",
        content: "Increase sales revenu by 30% in Q3",
        isDragged: false
      },
      {
        id: 8,
        list: "Priorities",
        content: "Launch first international expansion",
        isDragged: false
      },
      {
        id: 9,
        list: "Priorities",
        content: "Test new messaging for SMB market",
        isDragged: false
      },
      {
        id: 10,
        list: "Current",
        content: "Website Redesign",
        isDragged: false
      },
      { id: 11, list: "Current", content: "Ship iOS app", isDragged: false },
      { id: 12, list: "Current", content: "Analytics Data", isDragged: false },
      {
        id: 13,
        list: "Current",
        content: "Increase conversion rate by 20% by Q3",
        isDragged: false
      },
      {
        id: 14,
        list: "Current",
        content: "Develop Engineering Blog",
        isDragged: false
      },
      {
        id: 15,
        list: "Current",
        content: "Brand Guidelines",
        isDragged: false
      },
      {
        id: 16,
        list: "Completed",
        content: "Social Media Campaign",
        isDragged: false
      },
      {
        id: 17,
        list: "Completed",
        content: "Update Help Documentation",
        isDragged: false
      }
    ],
    lists: [
      { id: 0, name: "Backlog", order: 1 },
      { id: 1, name: "Priorities", order: 2 },
      { id: 2, name: "Current", order: 3 },
      { id: 3, name: "Completed", order: 4 }
    ],
    dragType: "none"
  };

  sortLists = lists => {
    lists.sort((a, b) => {
      if (Number(a.order) > Number(b.order)) {
        return 1;
      } else {
        return -1;
      }
    });
    return lists;
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
    const list = { id: lists.length, name: "", order: lists.length + 1 };
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
    }
    for (let card of cards) {
      if (card.list === listName) {
        card.list = content;
      }
    }
    this.setState({ lists });
    /* Why is it the same ?  
    console.log(this.state.lists);
    console.log(this.state.cards);
    */
  };

  handleOnDragCardStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    let cards = [...this.state.cards];
    cards[id].isDragged = true;
    let dragType = "card";
    this.setState({ cards, dragType });
  };

  handleOnDragCardEnd = (e, id) => {
    let cards = this.state.cards;
    cards[id].isDragged = false;
    let dragType = "none";
    e.dataTransfer.clearData();
    this.setState({ cards, dragType });
  };

  handleOnDropCard = (e, name) => {
    let cards = this.state.cards;
    for (let i = 0; i < cards.length; i++) {
      if (Number(cards[i].id) === Number(e.dataTransfer.getData("id"))) {
        cards[i].list = name;
        cards[i].isDragged = false;
      }
    }
    let dragType = "none";
    e.dataTransfer.clearData();
    this.setState({ cards, dragType });
  };

  handleOnDragListStart = (e, name) => {
    if (e.dataTransfer.getData("id") === "") {
      e.dataTransfer.setData("name", name);
      let dragType = "list";
      this.setState({ dragType });
    }
  };

  handleOnDragListEnd = (e, id) => {
    let dragType = "none";
    e.dataTransfer.clearData();
    this.setState({ dragType });
  };

  handleOnDropList = (e, listDropped) => {
    let lists = [...this.state.lists];
    let list1, list2;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === listDropped) {
        list1 = lists[i];
      }
      if (lists[i].name === String(e.dataTransfer.getData("name"))) {
        list2 = lists[i];
      }
    }
    let orderSave = list1.order;
    list1.order = list2.order;
    list2.order = orderSave;
    e.dataTransfer.clearData();
    this.sortLists(lists);
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
        dragType={this.state.dragType}
        onDeleteCard={this.handleDeleteCard}
        onEditCard={this.handleEditCard}
        onCreateCard={this.handleCreateCard}
        onDeleteList={this.handleDeleteList}
        onEditList={this.handleEditList}
        onDragCardStart={this.handleOnDragCardStart}
        onDragCardEnd={this.handleOnDragCardEnd}
        onDropCard={this.handleOnDropCard}
        onDragListStart={this.handleOnDragListStart}
        onDragListEnd={this.handleOnDragListEnd}
        onDropList={this.handleOnDropList}
      />
    );
  };

  render() {
    console.log(this.state);
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
