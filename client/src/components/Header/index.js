import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="nav-container text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <span className="font-link">
          <div>
            {Auth.loggedIn() ? (
              <>
                <span>Hello,  {Auth.getProfile().data.username}!</span>
                <Link className="btn btn-lg btn-light m-2" to="/fitnesshighscores">
                  My Fitness highscores
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/workoutplans">
                  My workoutplans
                </Link>
                <Link
                  to="/"
                  className="btn btn-lg btn-light m-2"
                  onClick={logout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-light m-2" to="/mentalhealth">
                  Mental Health Benefits
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/physicalbenefits"
                >
                  Physical Health Benefits
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/login">
                  Login
                </Link>

                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </span>
      </div>
    </header>
  );
};

export default Header;
