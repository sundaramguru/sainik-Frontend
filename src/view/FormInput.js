import React from 'react';
function FormInput(props){
  return (
    <div className="col-md-10 space">
      <input type="text"  class="fadeIn second formInput" value={props.value} />
    </div>
    );

}
export default FormInput;
