import React, { Component } from "react";

class Card extends Component {

  handleOnBlur = (e) => {
    this.props.onEdit(e.target.value, this.props.id);
  }

  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              onBlur={this.handleOnBlur}
              defaultValue={this.props.content}
            />
            <button
              className="btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              x
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
