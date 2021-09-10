import React from "react";

const Family = () => {
  return (
    <div className="form-group pt-3">
      <label htmlFor="family" className="d-block">
        Family
      </label>
      <input id="family" type="text" className="form-control"></input>
      <small id="fillfamily" className="form-text text-muted"></small>
    </div>
  );
};

export default Family;
