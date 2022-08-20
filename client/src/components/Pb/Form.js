import React from "react";

const Form = ({ error, value, submit, onChange }) => {
  return (
    <span className="font-link">
      <form onSubmit={submit}>
        <div className="form-group row align-items-center">
          <div className="col-9 pr-0">
            <input
              type="text"
              className="form-control-plaintext"
              placeholder="Add a PB at the gym e.g. Benchpress"
              required
              value={value}
              onChange={onChange}
            />
            {error && <small className="form-text text-danger">{error}</small>}
          </div>
          <div className="col-7 text-right">
            <button type="submit" className="btn btn-light">
              Add a PB
            </button>
          </div>
        </div>
      </form>
    </span>
  );
};

export default Form;
