import React, { Component } from "react";
import List from "./List";

class Board extends Component {
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

  handleCreateCard = listName => {
    this.props.store.dispatch({ type: "ADD_CARD", listName });
  };

  handleDeleteCard = cardId => {
    this.props.store.dispatch({ type: "DELETE_CARD", cardId });
  };

  handleEditCard = (content, cardId) => {
    this.props.store.dispatch({ type: "EDIT_CARD", content, cardId });
  };

  handleDeleteList = listName => {
    const lists = this.props.store
      .getState()
      .lists.filter(l => l.name !== listName);
    this.setState({ lists });
  };

  handleCreateList = () => {
    const lists = [...this.props.store.getState().lists];
    const list = { id: lists.length, name: "", order: lists.length + 1 };
    lists.push(list);
    this.setState({ lists });
  };

  handleEditList = (content, listName) => {
    const lists = [...this.props.store.getState().lists];
    const cards = [...this.props.store.getState().cards];
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
    console.log(this.props.store.getState().lists);
    console.log(this.props.store.getState().cards);
    */
  };

  handleOnDragCardStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    let cards = [...this.props.store.getState().cards];
    cards[id].isDragged = true;
    let dragType = "card";
    this.setState({ cards, dragType });
  };

  handleOnDragCardEnd = (e, id) => {
    let cards = this.props.store.getState().cards;
    cards[id].isDragged = false;
    let dragType = "none";
    e.dataTransfer.clearData();
    this.setState({ cards, dragType });
  };

  handleOnDropCard = (e, name) => {
    let cards = this.props.store.getState().cards;
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

  handleOnDragListStart = (e, name, id) => {
    if (e.dataTransfer.getData("id") === "") {
      let lists = [...this.props.store.getState().lists];
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].name === name) {
          lists[i].isDragged = true;
        }
      }
      e.dataTransfer.setData("name", name);
      let dragType = "list";
      this.setState({ dragType, lists });
    }
  };

  handleOnDragListEnd = (e, name) => {
    let lists = [...this.props.store.getState().lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === name) {
        lists[i].isDragged = false;
      }
    }
    let dragType = "none";
    e.dataTransfer.clearData();
    this.setState({ dragType });
  };

  handleOnDropList = (e, name) => {
    let lists = [...this.props.store.getState().lists];
    let list1, list2;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === name) {
        lists[i].isDragged = false;
      }
      if (lists[i].name === name) {
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
    const filtered_cards = this.props.store
      .getState()
      .cards.filter(card => card.list === list.name);
    return (
      <List
        key={list.id}
        id={list.id}
        name={list.name}
        isDragged={list.isDragged}
        cards={filtered_cards}
        dragType={this.props.store.getState().dragType}
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
          <div className="row">
            {this.props.store.getState().lists.map(this.renderList)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
