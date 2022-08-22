import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "emailjs-com";
import FormLabel from "../../view/FormLabel";
import validator from "validator";

const ForgotPage = () => {
  const [Mail_Id, setMail_Id] = useState("");
  const [codes, setcodes] = useState("");
  const [code1, setcode1] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [Service_No, setService_No] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [ErrorCodes, setErrorCodes] = useState("");
  const [visible, setVisible] = useState(false);
  const [ErrorPassMessage, setErrorPassMessage] = useState("");
  const [pass, setpass] = useState("");
  const [conpass, setconpass] = useState("");
  const [capt, setCapt] = useState("");

  useEffect(() => {
    getCapt();
    //    getMail();
  }, []);

  const getMail = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getForgetMail`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setMail_Id(response.data);
  };

  const axiosJWT = axios.create();
  const getCapt = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/capt`
    );
    setcodes(response.data);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_080xmpx",
        "template_gv085xg",
        e.target,
        "PaHWpUgrsCFyqSKRl"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  const ForgetPass = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ForgetPass`, {
        Service_No: Service_No,

        Password: Password,

        ConfPassword: ConfPassword,
      });
      // navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    navigate("/login");
  };

  const Check = (e) => {
    if (codes !== code1) {
      setErrorCodes("Please Enter a correct code !! ");
    } else {
      setErrorCodes(" ");
      setVisible(true);
    }
  };

  const PasswordCheck = (e) => {
    if (pass !== conpass) {
      setErrorPassMessage("Password and Confirm Password do not match !! ");
    } else setErrorPassMessage(" ");
  };

  const onpasswordChange = (e) => {
    const ps = /^[A-Za-z0-9_@#\b]+$/;
    if (e.target.value === "" || ps.test(e.target.value)) {
      setPassword(e.target.value);
    }
  };

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
    } else if (Password == "") {
      setErrorMessage("Enter a strong Password");
    } else {
      setErrorMessage("Is not a Strong Password");
    }
  };

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

          <form onSubmit={sendEmail}>
            <input
              type="text"
              id="Service_No"
              class="fadeIn second textInput"
              name="Service_No"
              autocomplete="off"
              placeholder="Service Number"
              value={Service_No}
              onChange={(e) => setService_No(e.target.value)}
            />
            <input
              type="email"
              class="fadeIn third textInput"
              autocomplete="off"
              name="Mail_Id"
              value={Mail_Id[0]}
              onChange={(e) => setMail_Id(e.target.value)}
            />
            <br />
            <a onClick={getMail} class="btn btn-primary">
              get mail
            </a>
            <br />
            <br />
            <input
              type="submit"
              class="btn btn-secondary"
              value="SEND EMAIL TO USER FOR VERIFICATION"
            />
            <input
              type="hidden"
              id="codes"
              class="fadeIn third textInput"
              autocomplete="off"
              name="codes"
              value={codes}
              onChange={(e) => setcodes(e.target.value)}
            />
            <input
              type="text"
              id="code1"
              class="fadeIn third passwordInput"
              name="login"
              autocomplete="off"
              maxlength="6"
              minlength="6"
              placeholder="Enter the code "
              value={code1}
              onChange={(e) => setcode1(e.target.value)}
            />{" "}
            <a onClick={Check} class="underlineHover la">
              Verify
            </a>{" "}
            <br />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {ErrorCodes}
            </span>
            {visible && (
              <div>
                <input
                  type="password"
                  id="password"
                  class="fadeIn third passwordInput"
                  autocomplete="off"
                  name="pass"
                  placeholder="Create New Password"
                  value={Password}
                  onClick={(e) => validate(e.target.value)}
                  onChange={onpasswordChange}
                />
                <br />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {ErrorMessage}
                </span>

                <input
                  type="password"
                  id="password"
                  class="fadeIn third passwordInput"
                  name="conpass"
                  autocomplete="off"
                  maxlength="10"
                  placeholder="Confirm Password"
                  value={ConfPassword}
                  onCick={PasswordCheck}
                  onChange={(e) => setConfPassword(e.target.value)}
                />

                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {ErrorPassMessage}
                </span>
              </div>
            )}
          </form>

          <div id="formFooter">
            <a class="underlineHover la">
              <Link to="/ULogin">Back</Link>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              onClick={ForgetPass}
              class=" btn btn-info"
              value="Reset Password"
            />
          </div>
          {/*</form>*/}
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
