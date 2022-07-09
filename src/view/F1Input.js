import React from "react";

function F1Input(props) {
  return (
    <div className="col-md-4 space">
      <input type="text"  class="fadeIn second formInput" name={props.name} value={props.value} />
    </div>
  );
}

export default F1Input;
