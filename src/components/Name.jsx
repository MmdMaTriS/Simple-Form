import React from "react";

const Name = () => {
  return (
    <div className="form-group">
      <label htmlFor="name" className="d-block">
        Name
      </label>
      <input id="name" type="text" className="form-control"></input>
      <small id="fillname" className="form-text text-muted"></small>
    </div>
  );
};

export default Name;
