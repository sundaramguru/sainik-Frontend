import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Login from "./ULogin";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Service_No: "",
    Service_Name: "",
    Corps_Name: "",
    Record_Office_Name: "",
    Group_Name: "",
    Trade_Name: "",
    Rank_Name: "",
    Name: "",
     Gender: "",
      DOB: "",
       Enroll_Date: "",
        World_War2: "",
         Opt_Attend: "",
          Deco: "",

  });

  const FormTitles = ["Form1", "Form2", "Login"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Login formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
