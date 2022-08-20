import React from "react";
import "./WorkoutplanLayout.css";

const WorkoutplanLayout = ({ children }) => {
  return (
    <div className="container p-2 p-sm-1">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7 col-md-10">
          <div className="card">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutplanLayout;
