let nextListId = 4;

export const editList = (listName, newListName) => ({
  type: "EDIT_LIST",
  listName: listName,
  newListName: newListName
});
