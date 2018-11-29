import React from "react";

const Card = ({
  card,
  listId,
  editCard,
  deleteCard,
  onDragCardStart,
  onDropCard,
  onDragCardEnd
}) => {
  return (
    <div className="card" draggable>
      <div className="card-body">
        <button
          className="btn-danger btn-sm"
          onClick={() => deleteCard(listId, card.id)}
        />
        <div className="form-group">
          <textarea
            className="form-control"
            rows="2"
            defaultValue={card.content}
            onBlur={e => editCard(listId, card.id, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
