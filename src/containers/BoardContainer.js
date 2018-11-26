import { connect } from "react-redux";
import { addList } from "../actions/listActions";
import Board from "../components/Board";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addList: () => dispatch(addList())
  };
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;
