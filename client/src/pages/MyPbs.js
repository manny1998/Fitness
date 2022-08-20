import React, { useEffect, useState } from "react";
import Form from "../components/Pb/Form";
import Header from "../components/Pb/PbHeader";
import Layout from "../components/Pb/Layout";
import Lists from "../components/Pb/Lists";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import MyWorkoutplans from "./MyWorkoutplans";

const MyPbs = () => {
  const [error, setError] = useState(null);
  const [pb, setPb] = useState("");
  const [pbs, setPbs] = useState([]);

  useEffect(() => {
    const storedPbs = JSON.parse(localStorage.getItem("pbs"));
    if (storedPbs) setPbs(storedPbs);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem("pbs", JSON.stringify(pbs));
  }, [pbs]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (pb.length < 1) {
      setError("At least 1 letter required!");
      return false;
    }

    setPbs([{ id: Date.now(), title: pb, done: false }, ...pbs]);

    setPb("");
    setError(null);
  };

  const delHandler = (pbId) => {
    if (window.confirm("Are you sure")) {
      const updatedPbs = pbs.filter((item) => item.id !== pbId);

      setPbs(updatedPbs);
    }
  };

  const doneHandler = (pbId) => {
    const index = pbs.findIndex((emp) => emp.id === pbId);
    const newPb = [...pb];

    newPb[index] = {
      id: pbs[index].id,
      title: pbs[index].title,
      done: !pbs[index].done,
    };

    setPbs(newPb);
  };

  return (
    <span className="font-link">
      <Layout>
        <div>
          {Auth.loggedIn() ? (
            <div>
              <Header />
              <Form
                error={error}
                value={pb}
                submit={submitHandler}
                onChange={(e) => setPb(e.target.value)}
              />
              <hr className="border-primary" />
              <Lists
                pbs={pbs}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            </div>
          ) : (
            <>
              <p>
                You need to be logged in to view your pbs. Please{" "}
                <Link to="/login">login</Link>
              </p>
            </>
          )}
        </div>
      </Layout>
    </span>
  );
};

export default MyPbs;
