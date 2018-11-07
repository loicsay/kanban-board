import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
                {this.props.content}
            </p>
            <a href="#" className="btn btn-danger">
              Delete
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
