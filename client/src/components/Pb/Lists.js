import React from "react";
import ListItem from "./ListItem";

const Lists = ({ pbs, delHandler, doneHandler }) => {
  if (pbs.length <= 0) {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-strong">Dont forgot to add type of weight e.g. kg</h1>
      </div>
    );
  }

  return (
    <span className="font-link">
      <div className="listWrap">
        <ul className="list-group">
          {pbs &&
            pbs.length > 0 &&
            pbs.map((pb) => (
              <ListItem
                key={pb.id}
                id={pb.id}
                title={pb.title}
                done={pb.done}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            ))}
        </ul>
      </div>
    </span>
  );
};

export default Lists;
