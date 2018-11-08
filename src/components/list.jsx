import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderCard = cards => {
    return cards.map(card => (
      <Card
        key={card.id}
        content={card.content}
        id={card.id}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}
      />
    ));
  };

  handleOnClick = () => {
    this.props.createCard(this.props.name);
  }

  render() {
    return (
      <div className="col-sm">
        <h4>{this.props.name}</h4>
        {this.renderCard(this.props.cards)}
        <button type="button" className="btn btn-info btn-sm" onClick={this.handleOnClick}>
          +
        </button>
      </div>
    );
  }
}

export default List;
