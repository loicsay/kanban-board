import React from "react";

const Card = ({ card }) => (
  <div className="card" draggable>
    <div className="card-body">
      <button className="btn-danger btn-sm" />
      <div className="form-group">
        <textarea
          className="form-control"
          rows="2"
          defaultValue={card.content}
        />
      </div>
    </div>
  </div>
);

export default Card;
