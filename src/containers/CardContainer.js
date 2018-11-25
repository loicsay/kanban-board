import { connect } from "react-redux";
import { addCard } from "../actions/cardActions";
import Card from "../components/Card";

const mapDispatchToProps = dispatch => {
  return {
    addCard: id => dispatch(addCard(id))
  };
};

const CardContainer = connect(
  null,
  mapDispatchToProps
)(Card);

export default CardContainer;
