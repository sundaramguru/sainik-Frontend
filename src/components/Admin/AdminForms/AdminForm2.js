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

const AdminForm2 = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [Service_Name, setService_Name] = useState("");
  const [Service_No, setService_No] = useState(
    localStorage.getItem("A_Service_No")
  );
  const [Name, setName] = useState("");

  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    getName();
    getService();
  }, []);

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

  return (
    <div className="footer-body">
      <div className="center">
        <div class="wrapper fadeInDown">
          <div id="form1Content">
            <form>
              <div
                className="text-center text-dark p-3"
                style={{ backgroundColor: "#008E89" }}
              >
                <label className="header">Pension Details</label>
              </div>

              <div className="left-align dis">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;
                <br />
              </div>

              <div className="upperForm1Content">
                {users.map((user, index) => (
                  <div className="row" key={user.id}>
                    <FormLabels text={"Unit Last Served"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Unit_Last_Served}
                      />
                    </div>

                    <FormLabels text={"Discharge Date"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Discharge_Date}
                      />
                    </div>

                    <FormLabels text={"Discharge Reason"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vDischarge_Reason}
                      />
                    </div>

                    <FormLabels text={"Discharge Medical Category"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vDischarge_Med_Cat}
                      />
                    </div>

                    <FormLabels text={"Discharge Character"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vDischarge_Character}
                      />
                    </div>

                    <FormLabels text={"Discharge Book No"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Discharge_Book_No}
                      />
                    </div>

                    <FormLabels text={"If Pensioner"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.If_Pensioner}
                      />
                    </div>

                    <FormLabels text={"PPO No"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.PPO_No}
                      />
                    </div>

                    <FormLabels text={"Pension Sanctioned"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Pension_Sanctioned}
                      />
                    </div>

                    <FormLabels text={"If Sanctioned Disability Pension"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.If_Sanctioned_Dis_Pension}
                      />
                    </div>

                    <FormLabels text={"Disability Percentage"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Disability_Percentage}
                      />
                    </div>

                    <FormLabels text={"Disability Pension"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Disability_Pension}
                      />
                    </div>

                    <FormLabels text={"Pension AC No"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.Pension_AC_No}
                      />
                    </div>

                    <FormLabels text={"Bank"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vBank_Name}
                      />
                    </div>

                    <FormLabels text={"Branch"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vBranch}
                      />
                    </div>

                    <FormLabels text={"IFSC"} />
                    <div className="col-lg-4 space">
                      <input
                        type="text"
                        className="fadeIn third formInput"
                        value={user.vIFSC}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/adminform1">Back</Link>{" "}
                </button>
                <button className="btn my-2 my-sm-0 " type="submit">
                  <Link to="/adminform3">Next</Link>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Corrections />
      </div>
    </div>
  );
};

export default AdminForm2;
