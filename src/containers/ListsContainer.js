import { connect } from "react-redux";
import Lists from "../components/Lists";

const mapStateToProps = state => {
  return state;
};

const ListsContainer = connect(
  mapStateToProps,
  null
)(Lists);

export default ListsContainer;
