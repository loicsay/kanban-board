import React from "react";
import CardContainer from "../containers/CardContainer";

const List = ({
  list,
  editList,
  deleteList,
  onDragListStart,
  onDragListEnd,
  onDropList,
  sortLists,
  addCard
}) => (
  <div
    key={list[0].id}
    className="col-sm"
    draggable
    onDragOver={e => e.preventDefault()}
    onDragStart={e => {
      e.persist();
      onDragListStart(list[0].id, e);
    }}
    onDragEnd={e => {
      e.persist();
      onDragListEnd(list[0].id, e);
    }}
    onDrop={e => {
      e.persist();
      onDropList(list[0].id, e);
      sortLists();
    }}
  >
    <div className="listHeader">
      <textarea
        className="form-control listTitle"
        rows="2"
        defaultValue={list[0].name}
        onBlur={e => editList(list[0].id, e.target.value)}
      />
      <button
        className="btn-danger btn"
        onClick={() => deleteList(list[0].id)}
      />
    </div>
    {list[0].cards.map(card => (
      <CardContainer key={card.id} listId={list[0].id} cardId={card.id} />
    ))}
    <button
      type="button"
      className="btn btn-info btn-sm"
      onClick={() => addCard(list[0].id)}
    >
      Add a card...
    </button>
  </div>
);

export default List;
