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

export const onDragCardStart = (e, listId, card) => ({
  type: "ON_DRAG_CARD_START",
  e: e,
  listId: listId,
  card: card
});

export const onDragCardEnd = (e, listId, cardId) => ({
  type: "ON_DRAG_CARD_END",
  e: e,
  listId: listId,
  cardId: cardId
});
