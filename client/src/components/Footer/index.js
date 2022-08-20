import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <span className="font-link">
        <div className="container text-center mb-5">
          {location.pathname !== "/" && (
            <button
              className="btn btn-light mb-3"
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          )}
        </div>
      </span>
    </footer>
  );
};

export default Footer;
