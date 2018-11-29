import React from "react";

const Card = ({
  card,
  editCard,
  deleteCard,
  onDragCardStart,
  onDropCard,
  onDragCardEnd
}) => {
  return (
    <div className="card" draggable>
      <div className="card-body">
        <button className="btn-danger btn-sm" />
        <div className="form-group">
          <textarea
            className="form-control"
            rows="2"
            defaultValue={card[0].content}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
