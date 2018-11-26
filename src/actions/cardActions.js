export const addCard = () => ({
  type: "ADD_CARD"
});

export const editCard = (id, newCardName) => ({
  type: "EDIT_CARD",
  id: id,
  newCardName: newCardName
});

export const deleteCard = id => ({
  type: "DELETE_CARD",
  id: id
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
