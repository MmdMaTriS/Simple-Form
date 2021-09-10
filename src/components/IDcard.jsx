import React from "react";

const IDcard = () => {
  return (
    <div className="form-group pt-3">
      <label htmlFor="idcard" className="d-block">
        ID CARD
      </label>
      <input id="idcard" type="text" className="form-control"></input>
      <small id="fillcard" className="form-text text-muted"></small>
    </div>
  );
};

export default IDcard;
