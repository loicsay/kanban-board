import React from "react";
import CardContainer from "../containers/CardContainer";

const List = ({
  list,
  dragType,
  editList,
  deleteList,
  onDragListStart,
  onDragListEnd,
  onDropList,
  onDropCardOnList,
  sortLists,
  addCard,
  deleteCard
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
      if (dragType === "list") {
        onDropList(list.id, e);
        sortLists();
      }
      if (dragType === "card") {
        onDropCardOnList(e, list.id);
        deleteCard(
          e.dataTransfer.getData("listId"),
          e.dataTransfer.getData("cardId")
        );
      }
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
    {list.cards.map(card => (
      <CardContainer key={card.id} listId={list.id} cardId={card.id} />
    ))}
    <button
      type="button"
      className="btn btn-info btn-sm"
      onClick={() => addCard(list.id)}
    >
      Add a card...
    </button>
  </div>
);

export default List;
