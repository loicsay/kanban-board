import { connect } from "react-redux";
import { sortLists } from "../actions/listActions";
import { editList } from "../actions/listActions";
import { deleteList } from "../actions/listActions";
import { onDragListStart } from "../actions/listActions";
import { onDropList } from "../actions/listActions";
import { onDragListEnd } from "../actions/listActions";
import List from "../components/List";

const mapDispatchToProps = dispatch => {
  return {
    sortLists: () => dispatch(sortLists()),
    editList: (id, newListName) => dispatch(editList(id, newListName)),
    deleteList: id => dispatch(deleteList(id)),
    onDragListStart: (id, target) => dispatch(onDragListStart(id, target)),
    onDropList: (id, target) => dispatch(onDropList(id, target)),
    onDragListEnd: (id, target) => dispatch(onDragListEnd(id, target))
  };
};

const ListContainer = connect(
  null,
  mapDispatchToProps
)(List);

export default ListContainer;
