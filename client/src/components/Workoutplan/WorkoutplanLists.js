import React from "react";
import WorkoutplanListItem from "./WorkoutplanListItem";
import "./WorkoutplanLists.css";

const WorkoutplanLists = ({ workoutplans, delHandler, doneHandler }) => {
  if (workoutplans.length <= 0) {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-strong"> No current workout plan</h1>
      </div>
    );
  }

  return (
    <span className="font-link">
      <div className="listWrap">
        <ul className="list-group">
          {workoutplans &&
            workoutplans.length > 0 &&
            workoutplans.map((workoutplan) => (
              <WorkoutplanListItem
                key={workoutplan.id}
                id={workoutplan.id}
                title={workoutplan.title}
                done={workoutplan.done}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            ))}
        </ul>
      </div>
    </span>
  );
};

export default WorkoutplanLists;
