export const sortLists = () => ({
  type: "SORT_LISTS"
});

export const addList = () => ({
  type: "ADD_LIST"
});

export const editList = (id, newListName) => ({
  type: "EDIT_LIST",
  id: id,
  newListName: newListName
});

export const deleteList = id => ({
  type: "DELETE_LIST",
  id: id
});

export const onDragListStart = (id, e) => ({
  type: "ON_DRAG_LIST_START",
  id: id,
  e: e
});

export const onDropList = (id, e) => ({
  type: "ON_DROP_LIST",
  id: id,
  e: e
});

export const onDragListEnd = (id, e) => ({
  type: "ON_DRAG_LIST_END",
  id: id,
  e: e
});
