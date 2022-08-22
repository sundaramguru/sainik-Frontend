import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ULogin = () => {
  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );
  const [Status, setStatus] = useState("");
  const [Emp_Status, setEmp_Status] = useState("");

  const [Reg_Type, setReg_Type] = useState("");
  const [visibleWidow, setvisibleWidow] = useState(false);
  const [visibleEsm, setvisibleEsm] = useState(false);

  const navigate = useNavigate();
  const [v1, setv1] = useState(false);
  const [v2, setv2] = useState(false);
  const [v3, setv3] = useState(false);
  const [visibleEmp, setvisibleEmp] = useState(false);
  const [regemp, setregemp] = useState(false);

  const [F, setF] = useState(false);
  const [E, setE] = useState(false);
  const [VF, setVF] = useState(false);
  const [EF, setEF] = useState(false);
  const [WV, setWV] = useState(false);
  const [WE, setWE] = useState(false);
  const [EmpView, setEmpView] = useState(false);
  const [EmpEdit, setEmpEdit] = useState(false);

  useEffect(() => {
    getStatus();
    getReg_Type();
    // ESMReg();
  }, []);
  useEffect(() => {
    ESMReg();
    getEmp_Status();
  });

  const axiosJWT = axios.create();

  const getStatus = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getUserStatus`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setStatus(response.data);
  };

  const getReg_Type = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getReg_Type`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setReg_Type(response.data);
  };

  const getEmp_Status = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getEmp_Status`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setEmp_Status(response.data);
    console.log(Emp_Status);
  };

  const ESMReg = () => {
    if (Reg_Type == "ESM") {
      setvisibleEsm(true);
      setvisibleWidow(false);

      if (Status == "Not Submitted") {
        setF(true);
        setE(false);
        setVF(false);
        setEF(false);
        setvisibleEmp(false);
      } else if (Status == "Submitted") {
        setE(false);
        setVF(true);
        setF(false);
        setEF(false);
        setvisibleEmp(false);
      } else if (Status == "Observation") {
        setF(false);
        setE(false);
        setVF(false);
        setEF(true);
        setvisibleEmp(false);
      } else if (Status == "Approved") {
        setF(false);
        setE(true);
        setVF(false);
        setEF(false);
        setvisibleEmp(true);
        setv3(true);

        if (Emp_Status == "Submitted") {
          setF(false);
          setE(true);
          setVF(false);
          setEF(false);
          setEmpView(true);
          setv3(false);
          setvisibleEmp(true);
        } else if (Emp_Status == "Observation") {
          setF(false);
          setE(true);
          setVF(false);
          setEF(false);
          setEmpView(false);
          setEmpEdit(true);
          setv3(false);
        } else if (Emp_Status == "Approved") {
          setF(false);
          setE(true);
          setVF(false);
          setEF(false);
          setEmpView(true);
        }
      }
      // setv1(true);
      // setv2(false);
    }
    //Emp
    // else if(Reg_Type=="Emp"){
    //  setF(false);
    //  setE(true)
    //  setVF(false);
    //  setEF(false);
    //   setEmpView(true)
    // }
    // if(Reg_Type=="Emp" && Emp_Status=="Submitted"){
    //  setF(false);
    //  setE(true)
    //  setVF(false);
    //  setEF(false);
    //   setEmpView(true)
    // }
    // else if(Emp_Status=="Observation"){
    //   setF(false);
    //   setE(true)
    //   setVF(false);
    //   setEF(false);
    //    setEmpView(false)
    //    setEmpEdit(true)
    //
    //  }
    // else if(Emp_Status=="Approved"){
    //   setF(false);
    //   setE(true)
    //   setVF(false);
    //   setEF(false);
    //    setEmpView(true)
    //  }
    //end of emp

    // const  WidowReg= (e) =>  {
    else if (Reg_Type == "Widow") {
      setvisibleEsm(false);
      setvisibleWidow(true);

      if (Status == "Not Submitted") {
        setv2(true);
        // setv1(false);
        setWV(false);
        setWE(false);
      } else if (Status == "Submitted") {
        setv2(false);
        // setv1(false);
        setWV(true);
        setWE(false);
      } else if (Status == "Observation") {
        setv2(false);
        // setv1(false);
        setWV(false);
        setWE(true);
      } else if (Status == "Approved") {
        setv2(false);
        setWV(true);
        setWE(false);
      }
    }
  };

  const NewReg = (e) => {
    navigate("/form1");
    localStorage.setItem("Reg_Type", "ESM");
  };
  const EmpReg = (e) => {
    navigate("/FormUE");
    // localStorage.setItem('Reg_Type`,'EmpReg')
  };
  const ViewForm = (e) => {
    navigate("/vForm1");
    localStorage.setItem("Reg_Type", "ESM");
  };
  const EditForm = (e) => {
    navigate("/ViewForm1a");
    localStorage.setItem("Reg_Type", "ESM");
  };

  const Transfer = (e) => {
    navigate("/");
    localStorage.setItem("Reg_Type", "Transfer");
  };

  const WEsmAready = (e) => {
    navigate("/widowform");
    localStorage.setItem("Reg_Type", "Widow");
    localStorage.setItem("Reg_TypeForm", "Registered");
  };

  const WNotReg = (e) => {
    navigate("/widowform");
    localStorage.setItem("Reg_Type", "Widow");
    localStorage.setItem("Reg_TypeForm", "Not Registered");
  };
  return (
    <div className="center">
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <form>
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "#008E89" }}
            >
              <div>
                <br />
                <span
                  style={{
                    color: "white",
                    fontWeight: "900",
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                  }}
                >
                  {" "}
                  SELECT YOUR REGISTRATION TYPE
                </span>
                <br />
                <br />
                <span
                  style={{
                    color: "white",
                    fontWeight: "900",
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                  }}
                >
                  {" "}
                  {Service_No}
                </span>
                <br />
                <br />
                <span
                  style={{
                    color: "white",
                    fontWeight: "900",
                    fontStyle: "italic",
                    fontFamily: "Times New Roman",
                  }}
                >
                  {" "}
                  {Status}
                </span>
                <br />
                <br />
              </div>{" "}
            </div>

            <input
              type="hidden"
              class="fadeIn third textInput"
              name="login"
              value={Reg_Type}
            />
            <input
              type="hidden"
              class="fadeIn third textInput"
              name="login"
              value={Emp_Status}
            />

            <br />
            <br />
            {visibleEsm && (
              <div>
                {F && (
                  <div>
                    <button
                      onClick={NewReg}
                      class=" btn"
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      {" "}
                      New ESM Registration{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {E && (
                  <div>
                    <button
                      onClick={ViewForm}
                      class=" btn"
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      {" "}
                      View ESM Registration{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {/**/}{" "}
                {visibleEmp && (
                  <div>
                    {v3 && (
                      <div>
                        <button
                          class=" btn"
                          style={{ backgroundColor: "#243A73", color: "#fff" }}
                        >
                          <Link to="/formue"> Employment Registration </Link>
                        </button>
                        <br />
                        <br />
                      </div>
                    )}

                    {EmpView && (
                      <div>
                        <button
                          class="btn "
                          style={{ backgroundColor: "#243A73", color: "#fff" }}
                        >
                          <Link to="/Vformue">
                            View Employment Registration{" "}
                          </Link>
                        </button>
                        <br />
                        <br />
                      </div>
                    )}
                    {EmpEdit && (
                      <div>
                        <button
                          class="btn "
                          style={{ backgroundColor: "#243A73", color: "#fff" }}
                        >
                          <Link to="/viewformuea">
                            Edit Employment Registration{" "}
                          </Link>{" "}
                        </button>
                        <br />
                        <br />
                      </div>
                    )}
                  </div>
                )}
                {VF && (
                  <div>
                    <button
                      onClick={ViewForm}
                      class=" btn"
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      {" "}
                      View ESM Registration{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {EF && (
                  <div>
                    <button
                      onClick={EditForm}
                      class=" btn"
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      {" "}
                      Edit ESM Form{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                <button
                  onClick={Transfer}
                  class=" btn"
                  style={{ backgroundColor: "#243A73", color: "#fff" }}
                >
                  Transfer{" "}
                </button>
                <br />
                <br />
              </div>
            )}

            {visibleWidow && (
              <div>
                {v2 && (
                  <div>
                    <button
                      onClick={WEsmAready}
                      class="btn "
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      ESM Already Registered{" "}
                    </button>
                    <br />
                    <br />
                    <button
                      onClick={WNotReg}
                      class="btn "
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      ESM Not Registered{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {WV && (
                  <div>
                    <button
                      class="btn "
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      <Link to="/Vwidwform">View Registration </Link>
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {WE && (
                  <div>
                    <button
                      class="btn "
                      style={{ backgroundColor: "#243A73", color: "#fff" }}
                    >
                      <Link to="/Viewformwa">Edit Registration </Link>{" "}
                    </button>
                    <br />
                    <br />
                  </div>
                )}
              </div>
            )}
          </form>

          <div id="formFooter">
            <a class="underlineHover la">
              <Link to="/">
                <b>Back</b>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ULogin;
