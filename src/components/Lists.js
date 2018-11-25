import React from "react";
import ListContainer from "../containers/ListContainer";

const renderList = list => {
  return (
    <div key={list.id} className="col-sm" draggable>
      <ListContainer list={list} />
    </div>
  );
};

const Lists = ({ lists }) => (
  <div>
    <React.Fragment>
      <div className="row">{lists.map(renderList)}</div>
    </React.Fragment>
  </div>
);

export default Lists;
