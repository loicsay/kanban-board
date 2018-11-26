import { connect } from "react-redux";
import { addCard } from "../actions/cardActions";
import { editCard } from "../actions/cardActions";
import { deleteCard } from "../actions/cardActions";
import { onDragCardStart } from "../actions/cardActions";
import { onDropCard } from "../actions/cardActions";
import { onDragCardEnd } from "../actions/cardActions";

import Card from "../components/Card";

const mapDispatchToProps = dispatch => {
  return {
    addCard: id => dispatch(addCard(id)),
    editCard: (id, newCardName) => dispatch(editCard(id, newCardName)),
    deleteCard: id => dispatch(deleteCard(id)),
    onDragCardStart: (id, target) => dispatch(onDragCardStart(id, target)),
    onDropCard: (id, target) => dispatch(onDropCard(id, target)),
    onDragCardEnd: (id, target) => dispatch(onDragCardEnd(id, target))
  };
};

const CardContainer = connect(
  null,
  mapDispatchToProps
)(Card);

export default CardContainer;
