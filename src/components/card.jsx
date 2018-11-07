import React, { Component } from "react";

class Card extends Component {
  state = {
    text: "Text"
  };
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                text content
            </p>
            <a href="#" className="btn btn-danger">
              delete
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
