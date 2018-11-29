import React from "react";
import ListContainer from "../containers/ListContainer";

const Lists = ({ lists }) => (
  <div className="row">
    {lists.map(list => {
      return <ListContainer key={list.id} listId={list.id} />;
    })}
  </div>
);

export default Lists;
