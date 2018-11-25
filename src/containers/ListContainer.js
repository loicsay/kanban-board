import { connect } from "react-redux";
import { editList } from "../actions/listActions";
import List from "../components/List";

const mapDispatchToProps = dispatch => {
  return {
    editList: (listName, newListName) => dispatch(editList(listName, newListName))
  };
};

const VisibleList = connect(
  null,
  mapDispatchToProps
)(List);

export default VisibleList;
