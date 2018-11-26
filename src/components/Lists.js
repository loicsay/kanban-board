import React from "react";
import ListContainer from "../containers/ListContainer";

const Lists = ({ lists }) => (
  <div className="row">
    {lists.map(list => (
      <ListContainer key={list.id} list={list} />
    ))}
  </div>
);

export default Lists;
