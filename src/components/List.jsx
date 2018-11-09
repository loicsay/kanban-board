import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderCard = cards => {
    return cards.map(card => (
      <Card
        key={card.id}
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

  render() {
    return (
      <div className="col-sm">
        <div className="listHeader">
          <h4>{this.props.name}</h4>
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
