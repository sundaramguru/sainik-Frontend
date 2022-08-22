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

const VForm4 = () => {
  const [Service_No, setService_No] = useState(
    localStorage.getItem("V_Service_No")
  );
  const [Name, setName] = useState(localStorage.getItem("V_Name"));
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
    const sn = localStorage.getItem("V_Service_No");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/adminform1a`,
      {
        params: {
          V_Service_No: sn,
        },
      }
    );
    setUsers(response.data);
  };
  // {/**/}

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
                <label className="header">Contact Details</label>
              </div>

              <div className="left-align dis">
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label>
                {Name} &nbsp;
                <br />
              </div>

              <div className="upperForm1Content">
                {users.map((user, index) => (
                  <div className="row" key={user.id}>
                    <div className="col-md-12">
                      <label>
                        <b>
                          <u>PERMANENT ADDRESS</u>
                        </b>
                      </label>
                      <br></br>
                      <br></br>

                      <FormLabels text={"Pincode"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_Pincode} />
                      </div>

                      <FormLabels text={"State"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.vP_State} />
                      </div>

                      <FormLabels text={"District"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.vP_District} />
                      </div>

                      <FormLabels text={"Taluk Name"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.vP_Taluk_Name} />
                      </div>

                      <FormLabels text={"City_Village"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_City_Village} />
                      </div>

                      <FormLabels text={"Locality"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_Locality} />
                      </div>

                      <FormLabels text={"Street"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_Street} />
                      </div>

                      <FormLabels text={"House No"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_House_No} />
                      </div>

                      <FormLabels text={"House Name"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_House_Name} />
                      </div>

                      <FormLabels text={"Police Station"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.P_Police_Station} />
                      </div>

                      <FormLabels text={"Telephone No"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Tele_No} />
                      </div>
                    </div>

                    {/*}   <div className= "col-md-6">*/}
                    <div className="col-md-12">
                      <label>
                        <b>
                          <b>
                            <u>PRESENT ADDRESS</u>
                          </b>
                        </b>
                      </label>
                      <br></br>
                      <br></br>

                      <FormLabels text={" Pincode"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Pincode} />
                      </div>

                      <FormLabels text={" State"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.State} />
                      </div>

                      <FormLabels text={" District"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.District} />
                      </div>

                      <FormLabels text={" Taluk Name"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Taluk_Name} />
                      </div>

                      <FormLabels text={"City Village"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.City_Village} />
                      </div>

                      <FormLabels text={"Locality"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Locality} />
                      </div>

                      <FormLabels text={" Street"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Street} />
                      </div>

                      <FormLabels text={" House No"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.House_No} />
                      </div>

                      <FormLabels text={" House Name"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.House_Name} />
                      </div>

                      <FormLabels text={" Police Station"} />
                      <div className="col-lg-4 space">
                        <FormInput value={user.Police_Station} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-center text-dark p-3 foot"
                style={{ backgroundColor: "#DBE6FD" }}
              >
                <button className=" btn">
                  <Link to="/vform3">Back</Link>{" "}
                </button>
                <button className="btn my-2 my-sm-0 " type="submit">
                  <Link to="/vform5">Next</Link>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VForm4;
