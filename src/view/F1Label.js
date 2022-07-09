import React from "react";

function F1Label(props) {
  return (
    <div>
    <div className="col-sm-2 space noSpace">
      <label className="formLable">{props.name}</label>
    </div>
    <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name={props.name} value={props.value} />
    </div>
    </div>
  );
}

export default F1Label;
