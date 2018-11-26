import React from "react";
import CardContainer from "../containers/CardContainer";

const renderCard = card => {
  return (
    <div key={card.id}>
      <CardContainer card={card} />
    </div>
  );
};

const List = ({
  list,
  editList,
  deleteList,
  onDragListStart,
  onDragListEnd,
  onDropList,
  sortLists
}) => (
  <div
    key={list.id}
    className="col-sm"
    draggable
    onDragOver={e => e.preventDefault()}
    onDragStart={e => {
      e.persist();
      onDragListStart(list.id, e);
    }}
    onDragEnd={e => {
      e.persist();
      onDragListEnd(list.id, e);
    }}
    onDrop={e => {
      e.persist();
      onDropList(list.id, e);
      sortLists();
    }}
  >
    <div className="listHeader">
      <textarea
        className="form-control listTitle"
        rows="2"
        defaultValue={list.name}
        onBlur={e => editList(list.id, e.target.value)}
      />
      <button className="btn-danger btn" onClick={() => deleteList(list.id)} />
    </div>
    {list.cards.map(card => renderCard(card))}
    <button type="button" className="btn btn-info btn-sm">
      Add a card...
    </button>
  </div>
);

export default List;
