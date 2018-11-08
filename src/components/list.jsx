import React, { Component } from "react";
import Card from "./card";

class List extends Component {
  render() {
    const filtered_cards = this.props.cards.filter(
      card => card.list === this.props.name
    );
    return (
      <>
        <div className="col-sm">
          <h4>{this.props.name}</h4>
          {filtered_cards.map(card => (
            <Card
              key={card.id}
              content={card.content}
              id={card.id}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
            />
          ))}
        </div>
      </>
    );
  }
}

export default List;
