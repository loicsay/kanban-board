import { connect } from "react-redux";
import { editCard } from "../actions/cardActions";
import { deleteCard } from "../actions/cardActions";
import { onDragCardStart } from "../actions/cardActions";
import { onDropCard } from "../actions/cardActions";
import { onDragCardEnd } from "../actions/cardActions";

import Card from "../components/Card";

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.lists
      .filter(l => l.id === ownProps.listId)[0]
      .cards.filter(c => c.id === ownProps.cardId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCard: (id, newCardName) => dispatch(editCard(id, newCardName)),
    deleteCard: id => dispatch(deleteCard(id)),
    onDragCardStart: (id, target) => dispatch(onDragCardStart(id, target)),
    onDropCard: (id, target) => dispatch(onDropCard(id, target)),
    onDragCardEnd: (id, target) => dispatch(onDragCardEnd(id, target))
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
