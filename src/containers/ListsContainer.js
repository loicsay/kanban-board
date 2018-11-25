import { connect } from "react-redux";
import { editList } from "../actions/listActions";
import Lists from "../components/Lists";

const mapStateToProps = state => {
  return { lists: state.lists };
};

const VisibleLists = connect(
  mapStateToProps,
  null
)(Lists);

export default VisibleLists;
