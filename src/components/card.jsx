import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.props.content}</p>
            <button
              className="btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
