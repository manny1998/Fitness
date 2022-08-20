import React from "react";
import "./PhysicalBenefits.css";
import { Link } from "react-router-dom";

const PhysicalBenefits = () => {
  return (
    <span className="font-link">
      <main>
        <div className="wabr-background">
          <div className="wabr-para flex-row justify-center">
            <div className="wabr-heading flex-row justify-center">
              Positives of Fitness for physical health
            </div>
            <br></br>
           fitness good for physical health
            <br></br>
            The problem is that most of us get bombarded with so many small
            tasks each day that <br></br>
            it's impossible to make any progress on the things that we really
            want to achieve, <br></br>
            our Big Rocks.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            So lets get started signup if you havent or log back in and add your PB's or to your workout <br></br>
            <br></br>
            <br></br>
            <div className="getstarted justify-center">
              <Link
                className="btn btn-lg btn-light m-2 flex-row justify-left"
                to="/signup"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </span>
  );
};

export default PhysicalBenefits;
