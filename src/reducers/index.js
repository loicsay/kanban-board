import { initialState } from "./initialState";

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    // ---------------- //
    // ACTIONS ON LISTS //
    // ---------------- //
    case "SORT_LISTS":
      newState = { ...state };
      newState.lists = [...state.lists];
      newState.lists.sort((a, b) => {
        if (Number(a.order) > Number(b.order)) {
          return 1;
        } else {
          return -1;
        }
      });
      return newState;
    case "ADD_LIST":
      newState = { ...state };
      newState.lists = [
        ...state.lists,
        {
          id: newState.countLists,
          name: "",
          order: newState.countLists + 1,
          isDragged: false,
          cards: []
        }
      ];
      newState.countLists++;
      return newState;
    case "EDIT_LIST":
      newState = { ...state };
      newState.lists.forEach(list => {
        if (list.id === action.id) {
          list.name = action.newListName;
        }
      });
      return newState;
    case "DELETE_LIST":
      newState = { ...state };
      newState.lists = [...newState.lists];
      newState.lists = newState.lists.filter(l => l.id !== action.id);
      newState.count--;
      return newState;
    case "ON_DRAG_LIST_START":
      newState = { ...state };
      if (newState.dragType === "none") {
        newState.dragType = "list";
        newState.lists.forEach(list => {
          if (list.id === action.id) {
            list.isDragged = true;
          }
        });
        action.e.dataTransfer.setData("listId", action.id);
      }
      return newState;
    case "ON_DRAG_LIST_END":
      newState = { ...state };
      newState.lists = [...newState.lists];
      action.e.dataTransfer.clearData();
      newState.dragType = "none";
      newState.lists.forEach(list => {
        if (list.id === action.id) {
          list.isDragged = false;
        }
      });
      return newState;
    case "ON_DROP_LIST":
      newState = { ...state };
      let list1, list2;
      newState.lists.forEach(list => {
        if (list.id === action.id) {
          list.isDragged = false;
          list1 = list;
        }
        if (String(list.id) === action.e.dataTransfer.getData("listId")) {
          list2 = list;
        }
      });
      action.e.dataTransfer.clearData();
      let orderSave = list1.order;
      list1.order = list2.order;
      list2.order = orderSave;
      return newState;
    case "ON_DROP_CARD_ON_LIST":
      newState = { ...state };
      newState.dragType = "none";
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        newState.lists[i].cards = [...state.lists[i].cards];
        if (newState.lists[i].id === action.listId) {
          newState.lists[i].cards = [
            ...state.lists[i].cards,
            {
              id: Number(action.e.dataTransfer.getData("cardId")),
              content: action.e.dataTransfer.getData("cardContent"),
              isDragged: false
            }
          ];
        }
      }
      return newState;
    // ---------------- //
    // ACTIONS ON CARDS //
    // ---------------- //
    case "ADD_CARD":
      newState = { ...state };
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        if (newState.lists[i].id === action.listId) {
          newState.lists[i].cards = [
            ...state.lists[i].cards,
            {
              id: state.countCards,
              content: "",
              isDragged: false
            }
          ];
          newState.countCards++;
        } else {
          newState.lists[i].cards = [...state.lists[i].cards];
        }
      }
      return newState;
    case "EDIT_CARD":
      newState = { ...state };
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        newState.lists[i].cards = [...state.lists[i].cards];
      }
      newState.lists.forEach(list => {
        if (list.id === action.listId) {
          list.cards.forEach(card => {
            if (card.id === action.cardId) {
              card.content = action.newCardName;
            }
          });
        }
      });
      return newState;
    case "DELETE_CARD":
      newState = { ...state };
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        newState.lists[i].cards = [...state.lists[i].cards];
      }
      newState.lists.forEach(list => {
        if (list.id === Number(action.listId)) {
          list.cards = list.cards.filter(
            card => card.id !== Number(action.cardId)
          );
        }
      });
      return newState;
    case "ON_DRAG_CARD_START":
      action.e.dataTransfer.setData("cardId", action.card.id);
      action.e.dataTransfer.setData("cardContent", action.card.content);
      action.e.dataTransfer.setData("listId", action.listId);
      newState = { ...state };
      newState.dragType = "card";
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        newState.lists[i].cards = [...state.lists[i].cards];
      }
      newState.lists.forEach(list => {
        if (list.id === action.listId) {
          list.cards.forEach(card => {
            if (card.id === action.cardId) {
              card.isDragged = true;
            }
          });
        }
      });
      return newState;
    case "ON_DRAG_CARD_END":
      action.e.dataTransfer.clearData();
      newState = { ...state };
      newState.dragType = "none";
      newState.lists = [...state.lists];
      for (let i = 0; i < state.lists.length; i++) {
        newState.lists[i].cards = [...state.lists[i].cards];
      }
      newState.lists.forEach(list => {
        if (list.id === action.listId) {
          list.cards.forEach(card => {
            if (card.id === action.cardId) {
              card.isDragged = false;
            }
          });
        }
      });
      return newState;
    default:
      return state;
  }
};
