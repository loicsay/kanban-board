import React from "react";
import ListsContainer from "../containers/ListsContainer";

const Board = () => (
  <React.Fragment>
    <div className="container">
      <h1>
        Kanban board
        <button type="button" className="btn btn-primary">
          Add a list...
        </button>
      </h1>
      <ListsContainer />
    </div>
  </React.Fragment>
);

export default Board;
