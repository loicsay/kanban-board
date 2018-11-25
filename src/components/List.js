import React from "react";
import CardContainer from "../containers/CardContainer";

const renderCard = card => {
  return (
    <div key={card.id}>
      <CardContainer card={card} />
    </div>
  );
};

const List = ({ list, editList }) => (
  <div>
    <div className="listHeader">
      <textarea
        className="form-control listTitle"
        rows="2"
        defaultValue={list.name}
        onBlur={e => editList(list.name, e.target.value)}
      />
      <button className="btn-danger btn " />
    </div>
    {list.cards.map(card => renderCard(card))}
    <button type="button" className="btn btn-info btn-sm">
      Add a card...
    </button>
  </div>
);

export default List;
