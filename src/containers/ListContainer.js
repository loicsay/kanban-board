import { connect } from "react-redux";
import { sortLists } from "../actions/listActions";
import { editList } from "../actions/listActions";
import { deleteList } from "../actions/listActions";
import { onDragListStart } from "../actions/listActions";
import { onDropList } from "../actions/listActions";
import { onDropCardOnList } from "../actions/listActions";
import { onDragListEnd } from "../actions/listActions";
import { addCard } from "../actions/cardActions";
import { deleteCard } from "../actions/cardActions";
import List from "../components/List";

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists.filter(l => l.id === ownProps.listId)[0],
    dragType: state.dragType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortLists: () => dispatch(sortLists()),
    editList: (id, newListName) => dispatch(editList(id, newListName)),
    deleteList: id => dispatch(deleteList(id)),
    onDragListStart: (id, target) => dispatch(onDragListStart(id, target)),
    onDropList: (id, target) => dispatch(onDropList(id, target)),
    onDropCardOnList: (e, listId) => dispatch(onDropCardOnList(e, listId)),
    onDragListEnd: (id, target) => dispatch(onDragListEnd(id, target)),
    addCard: listId => dispatch(addCard(listId)),
    deleteCard: (listId, cardId) => dispatch(deleteCard(listId, cardId))
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
