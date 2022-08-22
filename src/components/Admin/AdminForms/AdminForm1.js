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
import Corrections from "../Corrections";

const AdminForm1 = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [Service_Name, setService_Name] = useState("");
  const [Service_No, setService_No] = useState(
    localStorage.getItem("A_Service_No")
  );
  const [Name, setName] = useState("");
  const [Mail_Id, setMail_Id] = useState("");
  const [Reg_Type, setReg_Type] = useState([]);

  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    getName();
  }, []);
  useEffect(() => {
    Back();
  });

  const axiosJWT = axios.create();

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
      `${process.env.REACT_APP_BACKEND_URL}/adminform1`,
      {
        params: {
          A_Service_No: sn,
        },
      }
    );
    setUsers(response.data);
  };

  const getService = async () => {
    const sn = localStorage.getItem("getService_Name");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getService_Name`,
      {
        params: {
          getService_Name: sn,
        },
      }
    );
    setService_Name(response.data);
  };
  // const Back  = async () => {
  //   const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getReg_Type`,{
  //
  //     params:{
  //       Service_No: Service_No
  //     }
  //   });
  //   setReg_Type(response.data);
  //    console.log(Reg_Type[0]);
  //   if(Reg_Type[0] == 'ESM'){
  //     navigate('/superDash')
  //   }else if(Reg_Type[0] == 'Widow'){
  //     navigate('/adminform1')
  //   }
  //      }

  const Back = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getReg_Type`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setReg_Type(response.data);
    localStorage.setItem("BackReg_Type", Reg_Type);
  };
  const BackReg_Type = localStorage.getItem("BackReg_Type");
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
                <label className="header">Service Details</label>
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

                    <FormLabels text={"Service Name"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vService}
                      />
                    </div>

                    <FormLabels text={"Corps"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Corps_Name}
                      />
                    </div>

                    <FormLabels text={"Record Office"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Record_Office_Name}
                      />
                    </div>

                    <FormLabels text={"Group"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Group_Name}
                      />
                    </div>

                    <FormLabels text={"Trade Name"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vTrade}
                      />
                    </div>
                    <FormLabels text={"Rank_Category "} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vRank_Category}
                      />
                    </div>

                    <FormLabels text={"Rank "} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vRank}
                      />
                    </div>

                    <FormLabels text={"Name"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Name}
                      />
                    </div>

                    <FormLabels text={"Gender"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Gender}
                      />
                    </div>

                    <FormLabels text={"DOB"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.DOB}
                      />
                    </div>

                    <FormLabels text={"Enrollment Date"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Enroll_Date}
                      />
                    </div>

                    <FormLabels text={"World War2"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.World_War2}
                      />
                    </div>

                    <FormLabels text={"Operation Attended"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Opt_Attend}
                      />
                    </div>

                    <FormLabels text={"Decorations"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Deco}
                      />
                    </div>

                    {/*---------------------------------------------GET KEY ----------------------------------------*/}
                  </div>
                ))}
                {/*---------------------------------------------GET KEY ----------------------------------------*/}
              </div>
            </form>
            {/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
            <div
              className="text-center text-dark p-3 foot"
              style={{ backgroundColor: "#DBE6FD" }}
            >
              {(() => {
                if (BackReg_Type == "ESM") {
                  return (
                    <button className=" btn">
                      <Link to="/SuperDash">Back</Link>{" "}
                    </button>
                  );
                } else if (BackReg_Type == "Widow") {
                  return (
                    <button className=" btn">
                      <Link to="/awidowform">Back</Link>{" "}
                    </button>
                  );
                }
              })()}

              <button className="btn my-2 my-sm-0 ">
                <Link to="/adminform2">Next</Link>{" "}
              </button>
            </div>
            {/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
          </div>
        </div>
        <Corrections />
      </div>
    </div>
  );
};

export default AdminForm1;
