import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel, {
  StarLabel,
  FormLabelS,
  FormLabel4,
  FormLabels,
} from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
// import Corrections from "../Corrections";
import CorrectionEmp from "../CorrectionEmp";

const AdminFormUE = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [Service_Name, setService_Name] = useState("");
  const [Service_No, setService_No] = useState(
    localStorage.getItem("A_Service_No")
  );
  const [Name, setName] = useState("");
  const [Mail_Id, setMail_Id] = useState("");
  const [gclerkQ, setgClerkQ] = useState([]);

  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    getName();
    // getTrades();
    // getCivilQualification();
  }, []);

  const axiosJWT = axios.create();
  const getClerkQ = async () => {
    const sn = localStorage.getItem("A_Service_No");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getClerkQ`,
      {
        params: {
          A_Service_No: sn,
        },
      }
    );
    setgClerkQ(response.data);
  };

  const getName = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getName`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setName(response.data);
  };

  const getUsers = async () => {
    const sn = localStorage.getItem("A_Service_No");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/adminformue`,
      {
        params: {
          A_Service_No: sn,
        },
      }
    );
    setUsers(response.data);
  };

  const ClerkQ = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ClerkQ`, {
        ClerkQ: Clerk_Q,
        Service_No: localStorage.getItem("A_Service_No"),
      });
      localStorage.setItem("Clerk_Query", Clerk_Q);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const SuperintendentQ = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/SuperintendentQ`, {
        SuperintendentQ: Superintendent_Q,
        Service_No: localStorage.getItem("A_Service_No"),
      });
      localStorage.setItem("Superintendent_Query", Superintendent_Q);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const DirectorQ = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/DirectorQ`, {
        DirectorQ: Director_Q,
        Service_No: localStorage.getItem("A_Service_No"),
      });
      localStorage.setItem("Director_Query", Director_Q);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const ad = localStorage.getItem("A_Designation");
  const Verify = async (e) => {
    e.preventDefault();
    const sn = localStorage.getItem("A_Service_No");

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Everify`, {
        Service_No: sn,
      });
      navigate("/superDash");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const Recommend = async (e) => {
    e.preventDefault();
    const sn = localStorage.getItem("A_Service_No");

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Erecommend`, {
        Service_No: sn,
      });
      navigate("/superDash");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const Approve = async (e) => {
    navigate("/Emp_No");
  };

  const getTrades = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getTrades`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setUsers(response.data);
  };

  const getCivilQualification = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getCivilQualification`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setUsers(response.data);
  };

  return (
    <div className="footer-body">
      <div className="center">
        <div class="wrapper fadeInDown">
          <div id="form1Content">
            <form>
              {/*---------------------------------------------HEADER ----------------------------------------*/}
              <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: "#008E89" }}
              >
                <label className="header">Employment Details</label>
              </div>

              <div className="left-align dis">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;
                <br />
              </div>
              {/*---------------------------------------------HEADER ----------------------------------------*/}

              <div className="upperForm1Content">
                {/*---------------------------------------------GET KEY ----------------------------------------*/}

                {users.map((user, index) => (
                  <div className="row" key={user.id}>
                    {/*---------------------------------------------GET KEY ----------------------------------------*/}

                    <FormLabels text={"Age"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Age}
                      />
                    </div>

                    {users.map((user, index) => (
                      <div className="row" key={user.id}>
                        <FormLabels text={"Civil Qualification"} />
                        <div className="col-lg-4 space">
                          <input
                            type="text"
                            className="fadeIn third formInput"
                            value={user.vCivil_Qualification}
                          />
                        </div>

                        <FormLabels text={"Trade Name "} />
                        <div className="col-lg-4 space">
                          <input
                            type="text"
                            className="fadeIn third formInput"
                            value={user.vTrade}
                          />
                        </div>
                      </div>
                    ))}

                    <FormLabels text={"Additional Course 1"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Addi_Course1}
                      />
                    </div>

                    <FormLabels text={"Additional Course 2"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Addi_Course2}
                      />
                    </div>

                    <FormLabels text={"Additional Course 3"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Addi_Course3}
                      />
                    </div>

                    <FormLabels text={"Additional Course 4"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Addi_Course4}
                      />
                    </div>

                    <FormLabels text={"Equivalent test Passed "} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Equi_Test}
                      />
                    </div>

                    <FormLabels text={"Trade Code"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Trade_Code}
                      />
                    </div>

                    <FormLabels text={"ESM No"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.ESM_No}
                      />
                    </div>

                    {/*---------------------------------------------GET KEY ----------------------------------------*/}
                  </div>
                ))}
                {/*---------------------------------------------GET KEY ----------------------------------------*/}
              </div>
              {/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/SuperDash">Back</Link>{" "}
                </button>
                <button className=" btn  ">
                  <Link to="/Query">Send Query</Link>{" "}
                </button>

                {(() => {
                  if (ad == "Clerk") {
                    return (
                      <button
                        id="verified"
                        onClick={Verify}
                        className="btn my-2 my-sm-0 right-align "
                      >
                        Verify{" "}
                      </button>
                    );
                  } else if (ad == "Superintendent") {
                    return (
                      <button
                        id="verified"
                        onClick={Recommend}
                        className="btn my-2 my-sm-0 right-align "
                      >
                        Recommend{" "}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="btn my-2 my-sm-0 right-align "
                        onClick={Approve}
                      >
                        Approve{" "}
                      </button>
                    );
                  }
                })()}
              </div>
              {/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
            </form>

            {gclerkQ.map((user, index) => (
              <div key={user.id}>
                <div>
                  {(() => {
                    if (ad == "Clerk") {
                      return (
                        <div>
                          <h2>Clerk</h2>
                          <textarea
                            rows="4"
                            cols="150"
                            value={Clerk_Q}
                            onChange={(e) => setClerk_Q(e.target.value)}
                          />
                          <button
                            className="btn my-2 my-sm-0 "
                            onClick={ClerkQ}
                          >
                            <strong>Post</strong>{" "}
                          </button>
                        </div>
                      );
                    } else if (ad == "Superintendent") {
                      return (
                        <div>
                          <h2>Clerk</h2>
                          <textarea
                            rows="4"
                            cols="150"
                            value={user.C_Remark}
                            onChange={(e) => setClerk_Q(e.target.value)}
                          />

                          <h2>Superintendent</h2>
                          <textarea
                            rows="4"
                            cols="150"
                            value={Superintendent_Q}
                            onChange={(e) =>
                              setSuperintendent_Q(e.target.value)
                            }
                          />
                          <button
                            className="btn my-2 my-sm-0 "
                            onClick={SuperintendentQ}
                          >
                            <strong>Post</strong>{" "}
                          </button>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <h2>
                            <strong>Clerk</strong>
                          </h2>
                          <textarea
                            rows="4"
                            cols="150"
                            value={user.C_Remark}
                            onChange={(e) => setClerk_Q(e.target.value)}
                          />
                          <h2>
                            <strong>Superintendent</strong>
                          </h2>
                          <textarea
                            rows="4"
                            cols="150"
                            value={user.S_Remark}
                            onChange={(e) =>
                              setSuperintendent_Q(e.target.value)
                            }
                          />
                          <h2>
                            <strong>Director</strong>
                          </h2>
                          <textarea
                            rows="4"
                            cols="150"
                            name="obs"
                            value={Director_Q}
                            onChange={(e) => setDirector_Q(e.target.value)}
                          />
                          <button
                            className="btn my-2 my-sm-0 "
                            onClick={DirectorQ}
                          >
                            <strong>Post</strong>{" "}
                          </button>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CorrectionEmp />
      </div>
    </div>
  );
};

export default AdminFormUE;
