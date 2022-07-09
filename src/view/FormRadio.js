import React from 'react';
function FormRadio(props){
  return (
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name={props.name} id="inlineRadio1" value={props.value} />
      <label class="form-check-label" for="inlineRadio1">{props.text}</label>
    </div>
    );

}
export default FormRadio;
