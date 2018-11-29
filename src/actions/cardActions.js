export const addCard = listId => ({
  type: "ADD_CARD",
  listId: listId
});

export const editCard = (listId, cardId, newCardName) => ({
  type: "EDIT_CARD",
  listId: listId,
  cardId: cardId,
  newCardName: newCardName
});

export const deleteCard = (listId, cardId) => ({
  type: "DELETE_CARD",
  listId: listId,
  cardId: cardId
});

export const onDragCardStart = (id, e) => ({
  type: "ON_DRAG_CARD_START",
  id: id,
  e: e
});

export const onDropCard = (id, e) => ({
  type: "ON_DROP_CARD",
  id: id,
  e: e
});

export const onDragCardEnd = (id, e) => ({
  type: "ON_DRAG_CARD_END",
  id: id,
  e: e
});
