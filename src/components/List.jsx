import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderCard = cards => {
    return cards.map(card => (
      <Card
        key={card.id}
        onDragCardStart={this.props.onDragCardStart}
        onDragCardEnd={this.props.onDragCardEnd}
        content={card.content}
        id={card.id}
        onDeleteCard={this.props.onDeleteCard}
        onEditCard={this.props.onEditCard}
        isDragged={card.isDragged}
      />
    ));
  };

  handleOnClickAddCard = () => {
    this.props.onCreateCard(this.props.name);
  };

  handleOnClickList = () => {
    this.props.onDeleteList(this.props.name);
  };

  handleOnBlur = e => {
    this.props.onEditList(e.target.value, this.props.name);
  };

  handleOnDragOver = e => {
    e.preventDefault();
  };

  handleOnDragListStart = e => {
    this.props.onDragListStart(e, this.props.name);
  };

  handleOnDragEnd = e => {
    this.props.onDragListEnd(e, this.props.name);
  };

  handleOnDrop = e => {
    if (this.props.dragType === "card") {
      this.props.onDropCard(e, this.props.name);
    }
    if (this.props.dragType === "list") {
      this.props.onDropList(e, this.props.name);
    }
  };

  render() {
    return (
      <div
        className="col-sm"
        draggable
        onDragOver={this.handleOnDragOver}
        onDrop={this.handleOnDrop}
        onDragStart={this.handleOnDragListStart}
        onDragEnd={this.handleOnDragEnd}
        style={this.props.isDragged ? { opacity: 0.3 } : { opacity: 1 }}
      >
        <div className="listHeader">
          <textarea
            className="form-control listTitle"
            rows="2"
            defaultValue={this.props.name}
            onBlur={this.handleOnBlur}
          />
          <button
            className="btn-danger btn "
            onClick={this.handleOnClickList}
          />
        </div>
        {this.renderCard(this.props.cards)}
        <button
          type="button"
          className="btn btn-info btn-sm"
          onClick={this.handleOnClickAddCard}
        >
          Add a card...
        </button>
      </div>
    );
  }
}

export default List;
