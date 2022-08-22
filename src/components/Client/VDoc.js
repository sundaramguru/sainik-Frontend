import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel, {
  StarLabel,
  FormLabelS,
  FormLabel4,
  FormLabels,
} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
import File from "../../view/file";

const ADocForm1 = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [img, setImg] = useState();
  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );

  const [pdf, setPdf] = useState();
  const [users, setUsers] = useState([]);
  const [S, setS] = useState([]);
  const [Name, setName] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchImage();
    getUsers();
    getName();
  }, []);

  const axiosJWT = axios.create();
  const getName = async () => {
    const response = await axiosJWT.get(
      "${process.env.REACT_APP_BACKEND_URL}/getName",
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setName(response.data);
  };
  const getUsers = async () => {
    const sn = localStorage.getItem("V_Service_No");
    const response = await axiosJWT.get(
      "${process.env.REACT_APP_BACKEND_URL}/UserViewFormDoc",
      {
        params: {
          V_Service_No: sn,
        },
      }
    );
    setUsers(response.data);
  };

  const imageUrl = `${process.env.REACT_APP_URL}/images/` + users[1];
  console.log(imageUrl);

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  localStorage.setItem("image", img);
  console.log(users[0]);

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
              {/* //********* HEADERS ************/}
              <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: "#008E89" }}
              >
                <label className="header"> ESM Documents</label>
                <div className="left-align dis">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="sn-mar">{"Service No :"}</label>{" "}
                  <p>{users[0]}</p>
                </div>
              </div>
              {/*    //********* HEADERS ***********  */}

              <div>
                <div className="right-align ">
                  <img
                    src={users[7]}
                    className="docPhoto"
                    width="150"
                    onClick={() => window.open(users[7], "_blank")}
                  />
                </div>

                <FormLabels text={"Adhaar Card"} />
                <div className="col-md-4 space box line">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[1]}
                  />
                  <br />
                  <File v={users[1]} name={"Adhar"}></File>
                </div>
                <br />

                {/*<img src={users[3]} alt={users[3]} width='350' />*/}
                <FormLabels text={"Voter ID "} />
                <div className="col-md-4 space box ">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[2]}
                  />
                  <br />
                  <File v={users[2]} name={"voter"}></File>
                </div>
                <br />

                <FormLabels text={"PAN Card"} />
                <div className="col-md-4 space box ">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[3]}
                  />
                  <br />
                  <File v={users[3]} name={"PAN"}></File>
                </div>
                <br />

                <FormLabels text={"PPO Card"} />
                <div className="col-md-4 space box ">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[4]}
                  />
                  <br />
                  <File v={users[4]}></File>
                </div>
                <br />

                <FormLabels text={"ECHS Card"} />
                <div className="col-md-4 space box ">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[5]}
                  />
                  <br />
                  <File v={users[5]}></File>
                </div>
                <br />

                <FormLabels text={"Discharge Book "} />
                <div className="col-md-4 space box ">
                  <input
                    type="text"
                    className="trial col-lg-12 "
                    value={users[6]}
                  />
                  <br />
                  <File v={users[6]}></File>
                </div>
                <br />

                <button
                  className=" btn btn-secondary"
                  onClick={() => window.open(users[7], "_blank")}
                >
                  Open ESM Photo
                </button>
                <div
                  className="text-center text-dark p-3 foot"
                  style={{ backgroundColor: "#DBE6FD" }}
                >
                  <button className=" btn">
                    <Link to="/vForm5">Back</Link>{" "}
                  </button>
                  <button className="btn my-2 my-sm-0 ">
                    <Link to="/VForm6">Next</Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADocForm1;
