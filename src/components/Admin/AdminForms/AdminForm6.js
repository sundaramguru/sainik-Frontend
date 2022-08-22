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

const AdminForm6 = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
  const [Service_No, setService_No] = useState(
    localStorage.getItem("A_Service_No")
  );
  const [Name, setName] = useState(localStorage.getItem("Name"));
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    getName();
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
                <label className="header">Spouse Details</label>
              </div>

              <div className="left-align dis">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label>
                {Name}&nbsp;
                <br />
              </div>

              <div className="upperForm1Content">
                {users.map((user, index) => (
                  <div className="row" key={user.id}>
                    <FormLabels text={"Marital Status"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Marital_Status} />
                    </div>

                    <FormLabels text={"Marriage Date"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Marriage_Date} />
                    </div>

                    <FormLabels text={"Spouse Name"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Name} />
                    </div>

                    <FormLabels text={"Spouse Relation"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Relation} />
                    </div>

                    <FormLabels text={"Spouse DOB"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_DOB} />
                    </div>

                    <FormLabels text={"Spouse Identification Mark"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Id_Mark} />
                    </div>

                    <FormLabels text={"Spouse Adhaar No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Adhaar} />
                    </div>

                    <FormLabels text={"Spouse Voter Id"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Voter_Id} />
                    </div>

                    <FormLabels text={"Spouse PAN No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_PAN} />
                    </div>

                    <FormLabels text={"Spouse CSD No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_CSD} />
                    </div>

                    <FormLabels text={"Spouse ECHS No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_ECHS} />
                    </div>

                    <FormLabels text={"Spouse Qualification"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Qualification} />
                    </div>

                    <FormLabels text={"Spouse Employment Status"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Emp_Status} />
                    </div>

                    <FormLabels text={"Spouse Working Sector"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Sector} />
                    </div>

                    <FormLabels text={"Spouse Working Department"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Dept} />
                    </div>

                    <FormLabels text={"Spouse Present Designation"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Pres_Desg} />
                    </div>

                    <FormLabels text={"Spouse Employer"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Employer} />
                    </div>

                    <FormLabels text={"Spouse Monthly Income"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Month_Income} />
                    </div>

                    <FormLabels text={"Spouse Official No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Official_No} />
                    </div>

                    <FormLabels text={"Spouse Designation while Retirement"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Desg_Retire} />
                    </div>

                    <FormLabels text={"Spouse Retirement Date"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Retire_Date} />
                    </div>

                    <FormLabels text={"Spouse Civil PPO No."} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Spouse_Civil_PPO_No} />
                    </div>

                    <FormLabels text={"Court Order"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Court_Order} />
                    </div>

                    <FormLabels text={"Divorce Date"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Divorce_Date} />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/adminform5">Back</Link>{" "}
                </button>
                <button className="btn my-2 my-sm-0 " type="submit">
                  <Link to="/AS_DocForm">Next</Link>{" "}
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

export default AdminForm6;
