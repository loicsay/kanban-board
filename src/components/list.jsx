import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  renderCard = card => {
    return (
      <Card
        key={card.id}
        content={card.content}
        id={card.id}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}
      />
    );
  };

  render() {
    const filtered_cards = this.props.cards.filter(
      card => card.list === this.props.name
    );
    return (
      <div className="col-sm">
        <h4>{this.props.name}</h4>
        {filtered_cards.map(this.renderCard)}
        <button type="button" className="btn btn-info btn-sm">
          +
        </button>
      </div>
    );
  }
}

export default List;
