import { connect } from "react-redux";
import { editCard } from "../actions/cardActions";
import { deleteCard } from "../actions/cardActions";
import { onDragCardStart } from "../actions/cardActions";
import { onDragCardEnd } from "../actions/cardActions";

import Card from "../components/Card";

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.lists
      .filter(l => l.id === ownProps.listId)[0]
      .cards.filter(c => c.id === ownProps.cardId)[0],
    listId: ownProps.listId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCard: (listId, cardId, newCardName) =>
      dispatch(editCard(listId, cardId, newCardName)),
    deleteCard: (listId, cardId) => dispatch(deleteCard(listId, cardId)),
    onDragCardStart: (e, listId, card) =>
      dispatch(onDragCardStart(e, listId, card)),
    onDragCardEnd: (e, listId, cardId) =>
      dispatch(onDragCardEnd(e, listId, cardId))
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
