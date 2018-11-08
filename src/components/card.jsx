import React, { Component } from "react";

class Card extends Component {
  handleOnBlur = e => {
    this.props.onEdit(e.target.value, this.props.id);
  };

  render() {
    return (
        <div className="card">
          <div className="card-body">
            <button
              className="btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.id)}
            />
            <div className="form-group" onBlur={this.handleOnBlur}>
              <textarea
                className="form-control"
                rows="2"
                defaultValue={this.props.content}
              />
            </div>
          </div>
        </div>
    );
  }
}
export default Card;
