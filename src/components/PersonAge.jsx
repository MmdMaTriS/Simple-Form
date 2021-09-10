import React from "react";

const PersonAge = () => {
  return (
    <div className="form-group pt-3">
      <label htmlFor="age" className="d-block">
        AGE
      </label>
      <input id="age" type="number" className="form-control"></input>
      <small id="fillage" className="form-text text-muted"></small>
    </div>
  );
};

export default PersonAge;
