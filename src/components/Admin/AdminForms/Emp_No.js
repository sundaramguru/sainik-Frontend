import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Emp_No = () => {
  const [Service_No, setService_no] = useState("");
  const [Emp, setEmp] = useState("");
  const [FullEmp, setFullEmp] = useState("");

  const [P_Emp, setP_Emp] = useState("");
  const [users, setUsers] = useState("");
  const [ids, setIds] = useState("");
  const [RT, setRT] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
    getIds();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/Prev_Emp`
    );
    setUsers(response.data);
  };
  const getIds = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/ZR`,
      {
        params: { ALogin_S: localStorage.getItem("ALogin_S") },
      }
    );
    setIds(response.data);
    setService_no(ids[0]);
    console.log(ids);
  };
  const Auth = async (e) => {
    e.preventDefault();
    try {
      const sn = localStorage.getItem("A_Service_No");

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Emp_No`, {
        Service_No: sn,
        Emp_No: a,
      });
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/approve`, {
        Service_No: sn,
      });
      navigate("/superDash");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  var a = "".concat(ids[0], "-`,ids[1]," - `,Emp,'/`, "Emp");

  return (
    <div className="center">
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src="https://apsainik.org.in/assets/img/sainiklogo.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form onSubmit={Auth}>
            <p className="has-text-centered">{msg}</p>
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              name="Emp"
              placeholder="Service Number"
              value={a}
              onChange={(e) => setFullEmp(e.target.value)}
            />
            <input
              type="number"
              maxlength="6"
              class="fadeIn third textInput"
              name="login"
              placeholder="Emp"
              value={Emp}
              onChange={(e) => setEmp(e.target.value)}
            />

            <input
              type="submit"
              class="fadeIn fourth submitInput"
              value="Set Employment Registration Number"
            />
          </form>

          <div id="formFooter">
            <a class="underlineHover la" href="/AdminForm7">
              Back
            </a>
            <p class=" la right-align" value={P_Emp}>
              {users}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emp_No;
