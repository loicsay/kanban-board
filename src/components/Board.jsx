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

  handleEditCard = (content, cardId) => {
    this.props.store.dispatch({ type: "EDIT_CARD", content, cardId });
  };

  handleDeleteCard = cardId => {
    this.props.store.dispatch({ type: "DELETE_CARD", cardId });
  };

  handleCreateList = () => {
    this.props.store.dispatch({ type: "ADD_LIST" });
  };

  handleEditList = (newListName, listName) => {
    this.props.store.dispatch({ type: "EDIT_LIST", newListName, listName });
  };

  handleDeleteList = listName => {
    this.props.store.dispatch({ type: "DELETE_LIST", listName });
  };

  handleOnDragCardStart = (e, id) => {
    this.props.store.dispatch({ type: "ON_DRAG_CARD_START", e, id });
  };

  handleOnDragCardEnd = (e, id) => {
    this.props.store.dispatch({ type: "ON_DRAG_CARD_END", e, id });
  };

  handleOnDropCard = (e, listName) => {
    this.props.store.dispatch({ type: "ON_DROP_CARD", e, listName });
  };

  handleOnDragListStart = (e, listName) => {
    this.props.store.dispatch({ type: "ON_DRAG_LIST_START", e, listName });
  };

  handleOnDragListEnd = (e, listName) => {
    this.props.store.dispatch({ type: "ON_DRAG_LIST_END", e, listName });
  };

  handleOnDropList = (e, listName) => {
    this.props.store.dispatch({ type: "ON_DROP_LIST", e, listName });
    this.props.store.dispatch({ type: "SORT_LISTS" });
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
