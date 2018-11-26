import React from "react";
import ListsContainer from "../containers/ListsContainer";

const Board = ({ addList }) => {
  return (
    <div className="container">
      <h1>
        Kanban board
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addList()}
        >
          Add a list...
        </button>
      </h1>
      <ListsContainer />
    </div>
  );
};

export default Board;
