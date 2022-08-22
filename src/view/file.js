import React, { useState, useEffect } from "react";
import axios from "axios";

function File(props) {
  const [pdf, setPdf] = useState();

  function fetchpdf(p) {
    const apiURL = p;

    axios(`${apiURL}`, {
      method: "GET",
      responseType: "blob", //Force to receive data in a Blob Format
    })
      .then((response) => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], { type: "application/pdf" });
        //Build a URL from the file
        const pdf = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(pdf);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      {" "}
      <br />
      <button value={props.v} onClick={(e) => fetchpdf(e.target.value)}>
        Open file {props.name}
      </button>
    </div>
  );
}
export default File;
