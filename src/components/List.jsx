import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderCard = cards => {
    return cards.map(card => (
      <Card
        key={card.id}
        onDragStart={this.props.onDragStart}
        content={card.content}
        id={card.id}
        onDeleteCard={this.props.onDeleteCard}
        onEditCard={this.props.onEditCard}
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

  handleOnDrop = (e) => {
    this.props.onDrop(e, this.props.name);
  }

  render() {
    return (
      <div
        className="col-sm"
        onDragOver={this.handleOnDragOver}
        onDrop={this.handleOnDrop}
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
