import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import FormLabel, {
  StarLabel,
  FormLabelS,
  FormLabel4,
  FormLabels,
} from "../../view/FormLabel";

const FormUE = () => {
  // localStorage.clear();

  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );
  const [Civil_Qualification, setCivil_Qualification] = useState("");
  const [Addi_Course1, setAddi_Course1] = useState(
    localStorage.getItem("Addi_Course1")
  );
  const [Addi_Course2, setAddi_Course2] = useState(
    localStorage.getItem("Addi_Course2")
  );
  const [Addi_Course3, setAddi_Course3] = useState(
    localStorage.getItem("Addi_Course3")
  );
  const [Addi_Course4, setAddi_Course4] = useState(
    localStorage.getItem("Addi_Course4")
  );

  const [Trade_Name, setTrade_Name] = useState(
    localStorage.getItem("Trade_Name")
  );
  const [Equi_Test, setEqui_Test] = useState(localStorage.getItem("Equi_Test"));
  const [Trade_Code, setTrade_Code] = useState(
    localStorage.getItem("Trade_Code")
  );
  const [ESM_No, setESM_No] = useState("");
  const [ESM_No1, setESM_No1] = useState("");
  const [Age, setAge] = useState("");
  const [Emp_No, setEmp_No] = useState("");

  // const [Civil_Qualification, setCivil_Qualification] = useState('');

  const [Name, setName] = useState("");
  const [DOB, setDOB] = useState(localStorage.getItem("DOB"));
  const [EDOB, setEDOB] = useState("");
  const [cal, setcal] = useState("");
  const [Age0, setAge0] = useState("");
  const [civil, setCivil] = useState([]);

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [minDate, setminDate] = useState("");
  const [maxDate, setmaxDate] = useState("");

  const [visible, setvisible] = useState(false);
  const [cem, setcem] = useState("");
  const [em, setem] = useState("");

  const [ErrorCodes, setErrorCodes] = useState("");

  useEffect(() => {
    getName();
    getCivil();
    getEDOB();
    getTrades();
    getCivilQualification();
    //calculateAgeFromDOB(EDOB)
    // getESMs();
    // Emp();
  }, []);

  const getEDOB = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getEDOB`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setEDOB(response.data);
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

  const getES = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getES`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setESM_No(response.data);
  };

  const [visiblebutton1, setvisiblebutton1] = useState(false);
  const [visiblebutton2, setvisiblebutton2] = useState(false);
  const [visiblebutton3, setvisiblebutton3] = useState(false);

  const buts1 = (e) => {
    setvisiblebutton1(true);
  };

  const buts2 = (e) => {
    setvisiblebutton2(true);
  };
  const buts3 = (e) => {
    setvisiblebutton3(true);
  };

  //
  // const calculateAgeFromDOB = (dobAsString) => {
  //     const dob = new Date(dobAsString);
  //     const now = new Date();
  //     return now.getYear() - dob.getYear();
  //    setAge(now.getYear() - dob.getYear())
  // }
  // console.log(Age);
  //
  // const handleClickss = (e) =>  {
  //     e.preventDefault();
  //     console.log(calculateAgeFromDOB(EDOB))
  //     setcal(calculateAgeFromDOB())
  // }

  const calculateAgeFromDOB = (dobAsString) => {
    const dob = new Date(dobAsString);
    const now = new Date();
    return now.getYear() - dob.getYear();
  };

  const calAge = (e) => {
    e.preventDefault();
    //   console.log(calculateAgeFromDOB(EDOB))
    setAge(calculateAgeFromDOB(EDOB));
  };
  //console.log(calAge)

  const axiosJWT = axios.create();
  const getCivil = async () => {
    // const response = await axiosJWT.get(`${process.env.REACT_APP_DOMAIN}/civil_D`);
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/civil_D`
    );
    setCivil(response.data);
  };

  const FormUE = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/FormUE`, {
        Service_No: Service_No,
        Name: Name,
        ESM_No: ESM_No,
        Addi_Course1: Addi_Course1,
        Addi_Course2: Addi_Course2,
        Addi_Course3: Addi_Course3,
        Addi_Course4: Addi_Course4,
        Civil_Qualification: Civil_Qualification,
        Age: Age,
        Trade_Name: Trade_Name,
        Trade_Code: Trade_Code,
        Equi_Test: Equi_Test,
        Emp_No: Emp_No,
      });
      alert("Employment Registration SuccessFully Completed  !!!");

      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const Check = (e) => {
    if (ESM_No1 !== ESM_No) {
      setErrorCodes("Please Enter a correct code !! ");
    } else {
      setErrorCodes(" ");
    }
  };

  const Emp = (e) => {
    getES();
    console.log(calculateAgeFromDOB(EDOB));
    //   calAge(e);

    // console.log(Age)

    if (calculateAgeFromDOB(EDOB) <= "60") {
      setvisible(true);
    } else if (calculateAgeFromDOB(EDOB) > "60") {
      setvisible(false);
      setESM_No("0");
      setAddi_Course1("0");
      setAddi_Course2("0");
      setAddi_Course3("0");
      setAddi_Course4("0");
      setCivil_Qualification("0");
      setEqui_Test("0");
      setTrade_Code("0");
      setTrade_Name("0");
      alert("Your Age is Greater than 60, you can't register ");

      navigate("/");
    }
    // checkesm(e)
  };

  return (
    <div className="center">
      <div class="wrapper ">
        <div id="form1Content">
          <form onSubmit={FormUE}>
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "#008E89" }}
            >
              <label className="header">Employment Details</label>
              <div className="left-align dis">
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label>
                {Name}
                <br />
              </div>
            </div>

            <div className="upperForm1Content">
              <p className="has-text-centered">{msg}</p>

              <div className="row">
                <input
                  type="hidden"
                  class="  formInput"
                  autocomplete="off"
                  maxlength="20"
                  name="EDOB"
                  value={EDOB}
                  onChange={(e) => setEDOB(e.target.value)}
                />

                <input
                  type="hidden"
                  class="  textInput"
                  name="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel text={"Age"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    class="  formInput"
                    name="Age0"
                    value={calculateAgeFromDOB(EDOB)}
                  />
                  <br />
                  <br />
                  <br />
                </div>
                {/*     <button onClick = {handleClickss} >Check</button>*/}
                <input
                  type="hidden"
                  class="  formInput"
                  name="Age"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <br />
                <br />

                <input
                  type="hidden"
                  class="  formInput"
                  name="cem"
                  value={em}
                />
                <br />
                <br />
                <br />

                <input
                  type="hidden"
                  class="  formInput"
                  autocomplete="off"
                  maxlength="20"
                  name="ESM_No"
                  value={ESM_No}
                  onChange={(e) => setESM_No(e.target.value)}
                />
                <FormLabel text={"ESM No"} />
                <div className="col-md-4 space ">
                  <input
                    type="text"
                    class="  formInput"
                    autocomplete="off"
                    maxlength="20"
                    onClick={Emp}
                    name="ESM_No"
                    value={ESM_No}
                    required
                  />
                  <br />
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {ErrorCodes}
                  </span>
                </div>
                {visible && (
                  <div className="row">
                    {users.map((user, index) => (
                      <div className="row" key={user.id}>
                        <FormLabels text={"Civil Qualification"} />
                        <div className="col-md-4 space">
                          <input
                            type="text"
                            class="  formInput"
                            autocomplete="off"
                            disabled
                            maxlength="20"
                            name="Civil_Qualification"
                            value={user.vCivil_Qualification}
                            onChange={(e) =>
                              setCivil_Qualification(e.target.value)
                            }
                            required
                          />
                        </div>

                        <FormLabel text={"Trade /Branch"} />
                        <div className="col-md-4 space">
                          <input
                            type="text"
                            class="  formInput"
                            disabled
                            autocomplete="off"
                            maxlength="20"
                            name="Trade_Name"
                            value={user.vTrade}
                            onChange={(e) => setTrade_Name(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    ))}
                    <FormLabels text={"Additional Courses"} />
                    <div className="col-md-4 space">
                      <input
                        type="text"
                        class="  formInput"
                        autocomplete="off"
                        maxlength="20"
                        name="Addi_Course1"
                        value={Addi_Course1}
                        onChange={(e) =>
                          setAddi_Course1(e.target.value.toUpperCase())
                        }
                      />
                      <button className="btn-info plus" onClick={buts1}>
                        <b>+</b>
                      </button>
                    </div>

                    {visiblebutton1 && (
                      <div className="row">
                        <FormLabels text={"Additional Courses"} />
                        <div className="col-lg-4 space">
                          <input
                            type="text"
                            class=" formInput"
                            autocomplete="off"
                            maxlength="20"
                            name="Addi_Course2"
                            value={Addi_Course2}
                            onChange={(e) =>
                              setAddi_Course2(e.target.value.toUpperCase())
                            }
                          />{" "}
                          &nbsp;
                          <button className="btn-info plus" onClick={buts2}>
                            <b>+</b>
                          </button>
                        </div>
                      </div>
                    )}
                    {visiblebutton2 && (
                      <div className="row">
                        <FormLabels text={"Additional Courses"} />
                        <div className="col-lg-4 space">
                          <input
                            type="text"
                            class=" formInput"
                            autocomplete="off"
                            maxlength="20"
                            name="Addi_Course3"
                            value={Addi_Course3}
                            onChange={(e) =>
                              setAddi_Course3(e.target.value.toUpperCase())
                            }
                          />{" "}
                          &nbsp;
                          <button className="btn-info plus" onClick={buts3}>
                            <b>+</b>
                          </button>
                        </div>
                      </div>
                    )}
                    {visiblebutton3 && (
                      <div className="row">
                        <FormLabels text={"Additional Courses"} />
                        <div className="col-md-4 space">
                          <input
                            type="text"
                            class=" formInput"
                            autocomplete="off"
                            maxlength="20"
                            name="Addi_Course4"
                            value={Addi_Course4}
                            onChange={(e) =>
                              setAddi_Course4(e.target.value.toUpperCase())
                            }
                          />{" "}
                          &nbsp;
                        </div>
                      </div>
                    )}

                    <FormLabels text={"Equivalent Profession in Civil"} />
                    <div className="col-md-4 space">
                      <input
                        type="text"
                        class="  formInput"
                        disabled
                        autocomplete="off"
                        maxlength="20"
                        name="Equi_Test"
                        value={Equi_Test}
                        onChange={(e) => setEqui_Test(e.target.value)}
                        required
                      />
                    </div>

                    <FormLabels text={"Trade Code"} />
                    <div className="col-md-4 space">
                      <input
                        type="text"
                        class="  formInput"
                        autocomplete="off"
                        maxlength="20"
                        name="Trade_Code"
                        onClick={calAge}
                        value={Trade_Code}
                        onChange={(e) =>
                          setTrade_Code(e.target.value.toUpperCase())
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="text-center text-dark p-3 foot"
              style={{ backgroundColor: "#DBE6FD" }}
            >
              {visible && (
                <div>
                  <button className=" btn">
                    <Link to="/formstart">Back</Link>{" "}
                  </button>
                  <button className="btn my-2 my-sm-0 " type="submit">
                    Submit{" "}
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUE;
