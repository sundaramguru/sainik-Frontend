import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import File from "../../../view/file";

const AS_DocForm = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [img, setImg] = useState();

  const [pdf, setPdf] = useState();
  const [users, setUsers] = useState([]);
  const [S, setS] = useState([]);

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchImage();
    getUsers();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
    const sn = localStorage.getItem("A_Service_No");
    const dn = localStorage.getItem("A_Dep_Name");
    const r = localStorage.getItem("A_Relation");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/AD_DocForm`,
      {
        params: {
          A_Service_No: sn,
          A_Name: dn,
          A_Relation: r,
        },
      }
    );
    setUsers(response.data);
  };

  const fetchImage = async () => {
    const res = await fetch(users[1]);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const fetchpdf = async () => {
    const apiURL = users[1];

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
  };

  return (
    <>
      {/**/}
      <div className="footer-body">
        <div className="center">
          <div class="wrapper fadeInDown">
            <div id="form1Content">
              {/* //************************** HEADERS *********************************/}
              <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: "#008E89" }}
              >
                <label className="header"> Dependent Document </label>
                <div className="left-align dis">
                  <label className="sn-mar">{"Service No :"}</label>{" "}
                  <p>{users[0]}</p>
                  <label className="sn-mar">{"Dep name :"}</label>{" "}
                  <p>{users[6]}</p>
                </div>
              </div>
              {/*    //************************** HEADERS ********************************  */}

              <div>
                <div className="right-align ">
                  <img
                    src={users[5]}
                    className="docPhoto"
                    width="150"
                    onClick={() => window.open(users[5], "_blank")}
                  />
                </div>

                <FormLabel text={"Adhaar Card :"} />
                <div className="col-md-4 space box line">
                  <input type="text" value={users[1]} />
                  <File v={users[1]} name={"Adhar"}></File>
                </div>

                <FormLabel text={"Voter ID:"} />
                <div className="col-md-4 space box line">
                  {/*<img src={users[3]} alt={users[3]} width='350' />*/}
                  <input type="text" value={users[2]} />
                  <File v={users[2]} name={"voter"}></File>
                </div>

                <FormLabel text={"PAN :"} />
                <div className="col-md-4 space box line">
                  <input type="text" value={users[3]} />
                  <File v={users[3]} name={"PAN"}></File>
                </div>

                <FormLabel text={"ECHS :"} />
                <div className="col-md-4 space box line">
                  <input type="text" value={users[4]} />
                  <File v={users[4]}></File>
                </div>

                <button onClick={() => window.open(users[5], "_blank")}>
                  Open image
                </button>
              </div>

              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/adminform7a">Back</Link>{" "}
                </button>
                <button className="btn my-2 my-sm-0 ">
                  <Link to="/adminform7">Next</Link>{" "}
                </button>
              </div>
            </div>
          </div>

          <Corrections />
        </div>
      </div>
    </>
  );
};

export default AS_DocForm;
