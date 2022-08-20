import React, { useEffect, useState } from "react";
import WorkoutplanForm from "../components/Workoutplan/WorkoutplanForm";
import WorkoutplanHeader from "../components/Workoutplan/WorkoutplanHeader";
import WorkoutplanLayout from "../components/Workoutplan/WorkoutplanLayout";
import WorkoutplanLists from "../components/Workoutplan/WorkoutplanLists";
import "./Workoutplan.css";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

const MyWorkoutplans = () => {
  const [error, setError] = useState(null);
  const [workoutplan, setWorkoutplan] = useState("");
  const [workoutplans, setWorkoutplans] = useState([]);

  useEffect(() => {
    const storedWorkoutplans = JSON.parse(localStorage.getItem("workoutplans"));
    if (storedWorkoutplans) setWorkoutplans(storedWorkoutplans);
  }, []);

  // saving the Rocks in browser storage to prevent loss of Rocks on refreshing tab
  useEffect(() => {
    localStorage.setItem("workoutplans", JSON.stringify(workoutplans));
  }, [workoutplans]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (workoutplan.length < 1) {
      setError("At least 1 letter required!");
      return false;
    }

    setWorkoutplans([{ id: Date.now(), title: workoutplan, done: false }, ...workoutplans]);

    setWorkoutplan("");
    setError(null);
  };

  const delHandler = (workoutplanId) => {
    if (window.confirm("Are you sure you want to delete this workoutplan?")) {
      const updatedWorkoutplans = workoutplans.filter((item) => item.id !== workoutplanId);

      setWorkoutplans(updatedWorkoutplans);
    }
  };

  const doneHandler = (workoutplanId) => {
    const index = workoutplans.findIndex((emp) => emp.id === workoutplanId);
    const newWorkoutplan = [...workoutplans];

    newWorkoutplan[index] = {
      id: workoutplans[index].id,
      title: workoutplans[index].title,
      done: !workoutplans[index].done,
    };

    setWorkoutplans(newWorkoutplan);
  };

  return (
    <span className="font-link">
      <WorkoutplanLayout>
        <WorkoutplanHeader />
        <div>
          {Auth.loggedIn() ? (
            <div>
              <WorkoutplanForm
                error={error}
                value={workoutplan}
                submit={submitHandler}
                onChange={(e) => setWorkoutplan(e.target.value)}
              />
              <hr className="border-primary" />
              <WorkoutplanLists
                workoutplans={workoutplans}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            </div>
          ) : (
            <>
              <p>
                You need to be logged in to view your task fit Please{" "}
                <Link to="/login">login</Link>
              </p>
            </>
          )}
        </div>
      </WorkoutplanLayout>
    </span>
  );
};

export default MyWorkoutplans;
