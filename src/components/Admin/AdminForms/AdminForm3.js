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

const AdminForm3 = () => {
  const [Clerk_Q, setClerk_Q] = useState("");
  const [Superintendent_Q, setSuperintendent_Q] = useState("");
  const [Director_Q, setDirector_Q] = useState("");
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
                <label className="header">Personal Details</label>
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
                    <FormLabels text={"Father Name"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Father_Name} />
                    </div>

                    <FormLabels text={"Mother Name"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Mother_Name} />
                    </div>

                    <FormLabels text={"Religion"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.vReligion} />
                    </div>

                    <FormLabels text={"Caste Category"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.vCaste} />
                    </div>

                    <FormLabels text={"Birth State"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.vBirth_State} />
                    </div>

                    <FormLabels text={"Birth District"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.vBirth_District} />
                    </div>

                    <FormLabels text={"Birth Place"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Birth_Place} />
                    </div>

                    <FormLabels text={"Adhaar No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Adhaar} />
                    </div>

                    <FormLabels text={"Voter Id"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Voter_Id} />
                    </div>

                    <FormLabels text={"PAN Card No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.PAN} />
                    </div>

                    <FormLabels text={"CSD No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.CSD} />
                    </div>

                    <FormLabels text={"ECHS No"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.ECHS} />
                    </div>

                    <FormLabels text={"Identification Mark 1"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Id_Mark1} />
                    </div>

                    <FormLabels text={"Identification Mark 2"} />
                    <div className="col-lg-4 space">
                      <FormInput value={user.Id_Mark2} />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/adminform2">Back</Link>{" "}
                </button>
                <button className="btn my-2 my-sm-0 " type="submit">
                  <Link to="/adminform4">Next</Link>{" "}
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

export default AdminForm3;
