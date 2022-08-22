import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Corrections from "../Corrections";
import FormLabel, {
  StarLabel,
  FormLabelS,
  FormLabel4,
  FormLabels,
  FormLabel4a,
} from "../../../view/FormLabel";

const AdminForm7 = () => {
  const [users, setUsers] = useState([]);
  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );
  const [Name, setName] = useState("");
  const [Dep_Name, setDep_Name] = useState("");
  const [Relation, setRelation] = useState("");
  const [Dep_DOB, setDep_DOB] = useState("");
  const [Dep_Adhaar, setDep_Adhaar] = useState("");
  const [Dep_Qualification, setDep_Qualification] = useState("");
  const [Dep_Academic_Yr, setDep_Academic_Yr] = useState("");
  const [Dep_Employment_Status, setDep_Employment_Status] = useState("");
  const [Dep_Marital_Status, setDep_Marital_Status] = useState("");
  const [dep, setdep] = useState([]);
  const [ADep_Name, setADep_Name] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const [Clerk_Q, setClerk_Q] = useState(localStorage.getItem("Clerk_Query"));
  const [Superintendent_Q, setSuperintendent_Q] = useState(
    localStorage.getItem("Superintendent_Query")
  );
  const [Director_Q, setDirector_Q] = useState(
    localStorage.getItem("Director_Query")
  );
  const [Mail_Id, setMail_Id] = useState("");
  const [gclerkQ, setgClerkQ] = useState([]);
  const [obs, setobs] = useState("");

  useEffect(() => {
    getUsers();
    getMail();
    getName();
    getClerkQ();
  }, []);

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
  // GET MAIL FROM DB

  const getMail = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getForgetMail1`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setMail_Id(response.data);
  };

  // GET MAIL FROM DB

  // SEND MAIL TO USER

  // SEND MAIL TO USER

  const axiosJWT = axios.create();

  // GET ALL STATUS FROM STATUS DB

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

  // GET ALL STATUS FROM STATUS DB

  // GET DEPAENDENT DETAILS FROM DEP PAGE
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
      `${process.env.REACT_APP_BACKEND_URL}/Form7`,
      {
        params: { D_Service_No: sn },
      }
    );
    setUsers(response.data);
  };

  // GET DEPAENDENT DETAILS FROM DEP PAGE

  // GET DEPAENDENT DETAILS  FOR EDIT

  const AdminForm7a = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("A_Dep_Name", Dep_Name);
      localStorage.setItem("A_Relation", Relation);
      localStorage.setItem("A_Dep_DOB", Dep_DOB);
      localStorage.setItem("A_Dep_Adhaar", Dep_Adhaar);
      localStorage.setItem("A_Dep_Qualification", Dep_Qualification);
      localStorage.setItem("A_Dep_Academic_Yr", Dep_Academic_Yr);
      localStorage.setItem("A_Dep_Employment_Status", Dep_Employment_Status);
      localStorage.setItem("A_Dep_Marital_Status", Dep_Marital_Status);

      navigate("/adminform7a");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // GET DEPAENDENT DETAILS  FOR EDIT

  const ad = localStorage.getItem("A_Designation");

  const Verify = async (e) => {
    e.preventDefault();
    const sn = localStorage.getItem("A_Service_No");

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify`, {
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
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recommend`, {
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
    navigate("/ESM");
  };
  return (
    <div className="center">
      <div className="wrapper fadeInDown">
        <div className="footer-body">
          {/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}
          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "#008E89" }}
          >
            <label className="header">Dependent Details</label>

            <div className="right-align dis">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
              &nbsp;
              <label className="sn-mar ">{"Name :"}</label>
              {Name}
              <br />
            </div>
          </div>
          {/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

          <div className="upperForm1Content">
            <table className="table is-fullwidth" id="table-to-xls">
              <div class="card space ">
                <div className="card-header colors">
                  <span className=" col-lg-12">
                    <thead>
                      <tr>
                        <th>Sl.No</th>
                        <th>Dep_Name</th>
                        <th>Relation</th>
                        <th>Dependent DOB</th>
                        <th>Dependent Adhaar</th>
                        <th>Dependent Qualification</th>
                        <th>Dependent Academic Year</th>
                        <th>Dependent Employment Status</th>
                        <th>Dependent Marital Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {users.map((user, index) => (
                      <tbody>
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.Dep_Name}</td>
                          <td>{user.Relation}</td>
                          <td>{user.Dep_DOB}</td>
                          <td>{user.Dep_Adhaar}</td>
                          <td>{user.Dep_Qualification}</td>
                          <td>{user.Dep_Academic_Yr}</td>
                          <td>{user.Dep_Employment_Status}</td>
                          <td>{user.Dep_Marital_Status}</td>
                          <td>
                            <button
                              className="btn my-2 my-sm-0 btn-primary"
                              onClick={AdminForm7a}
                              onMouseEnter={function EditMouseHover() {
                                setDep_Name(user.Dep_Name);
                                setRelation(user.Relation);
                                setDep_DOB(user.Dep_DOB);
                                setDep_Adhaar(user.Dep_Adhaar);
                                setDep_Qualification(user.Dep_Qualification);
                                setDep_Academic_Yr(user.Dep_Academic_Yr);
                                setDep_Employment_Status(
                                  user.Dep_Employment_Status
                                );
                                setDep_Marital_Status(user.Dep_Marital_Status);
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </span>
                </div>
              </div>
            </table>
          </div>

          {/*     -----------------------------------------  FOOTER  SECTION -------------------------------------------------


    <input type="text"  class="  textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} /><br/> */}

          <div
            className="text-center text-dark p-3 foot"
            style={{ backgroundColor: "#DBE6FD" }}
          >
            <button className=" btn  ">
              <Link to="/adminform6">Back</Link>{" "}
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
          {/*     -----------------------------------------  FOOTER  SECTION -------------------------------------------------  */}
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
                        <button className="btn my-2 my-sm-0 " onClick={ClerkQ}>
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
                          onChange={(e) => setSuperintendent_Q(e.target.value)}
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
                          onChange={(e) => setSuperintendent_Q(e.target.value)}
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
    </div>
  );
};

export default AdminForm7;

{
  /*import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import emailjs from 'emailjs-com';


const AdminForm7 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Mail_Id, setMail_Id] = useState('');
    const [Service_No, setService_No] = useState('111');
    const [gclerkQ, setgClerkQ] = useState([]);

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      getMail();
      getClerkQ();
    }, []);



    const axiosJWT = axios.create();

    const sn = localStorage.getItem('A_Service_No')

    const getUsers = async () => {
        // const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/adminform7`,{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
    }
    const ad=localStorage.getItem('A_Designation');
    const Verify = async (e) => {
        e.preventDefault();
        const sn = localStorage.getItem('A_Service_No')

        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify`, {
                Service_No:sn
            });
            navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const Recommend = async (e) => {
        e.preventDefault();
        const sn = localStorage.getItem('A_Service_No')

        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recommend`, {
                Service_No:sn
            });
            navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const Approve = async (e) => {
    //     e.preventDefault();
    //     const sn = localStorage.getItem('A_Service_No')
    //
    //     try {
    //         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/approve`, {
    //             Service_No:sn
    //         });
             navigate("/ESM_No");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
     }
    const sendEmail = (e) => {

    e.preventDefault();

        emailjs.sendForm('service_kgpr6mm`, 'template_6bl6sjb`, e.target, 'HaFC-IRHQSI8N8--K')
          .then((result) => {
              console.log('SUCCESS!`,result.text);
          }, (error) => {
              console.log('FAILED...`,error.text);
          });
          e.target.reset()

    };
    const getClerkQ = async () => {
        const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getClerkQ`,{
          params:{
            A_Service_No: sn
          }
        });
        setgClerkQ(response.data);
    }

    const ClerkQ = async (e) => {
        e.preventDefault();
        try {

          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ClerkQ`, {
              ClerkQ:Clerk_Q,
              Service_No:localStorage.getItem('A_Service_No')

            });
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const SuperintendentQ = async (e) => {
    e.preventDefault();
    try {

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/SuperintendentQ`, {
          SuperintendentQ:Superintendent_Q,
          Service_No:localStorage.getItem('A_Service_No')

        });
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
    }
    const DirectorQ = async (e) => {
    e.preventDefault();
    try {

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/DirectorQ`, {
          DirectorQ:Director_Q,
          Service_No:localStorage.getItem('A_Service_No')

        });

    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
    }

    const getMail  = async () => {
      const sn = localStorage.getItem('A_Service_No')

          const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getForgetMail1`,{

            params:{
              Service_No: sn
            }
          });
          setMail_Id(response.data);
        }

    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Dependent Details</label>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Service No"} />
      <FormInput value={user.Service_No} />

      <FormLabel text={"Name"} />
      <FormInput value={user.Name} />

      <FormLabel text={"Dep_Name"} />
      <FormInput value={user.Dep_Name} />

      <FormLabel text={"Relation"} />
      <FormInput value={user.Relation} />

      <FormLabel text={"Dep_DOB"} />
      <FormInput value={user.Dep_DOB} />

      <FormLabel text={"Dep_Adhaar"} />
      <FormInput value={user.Dep_Adhaar} />

      <FormLabel text={"Dep_Qualification"} />
      <FormInput value={user.Dep_Qualification} />

      <FormLabel text={"Dep_Academic_Yr"} />
      <FormInput value={user.Dep_Academic_Yr} />

      <FormLabel text={"Dep_Employment_Status"} />
      <FormInput value={user.PPO_No} />

      <FormLabel text={"Dep_Marital_Status"} />
      <FormInput value={user.Dep_Marital_Status} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn my-2 my-sm-0" ><Link to="/adminform6">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "><Link to="/adminformdoc1">Done</Link> </button>
{/*<button className="btn my-2 my-sm-0 " type="submit"><Link to="#verified">Done</Link> </button>*/
}
{
  /*   </div>

</div>
</div>
<Corrections/>
{ gclerkQ.map((user, index) => (
  <div key={user.id} >
       <div>

{
    (() => {
        if(ad == "Clerk") {
                return (
                  <div>
                <h2>Clerk</h2>
                <textarea rows="4" cols="150" value={Clerk_Q }onChange={(e) => setClerk_Q(e.target.value)} />
                <button className="btn my-2 my-sm-0 "onClick={ClerkQ} type="submit"><strong>Post</strong> </button>
                  </div>
                )
            } else if (ad == "Superintendent") {
                return (
                  <div>
                <h2>Clerk</h2>
                <textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />

                <h2>Superintendent</h2>
                <textarea rows="4" cols="150" value={Superintendent_Q}onChange={(e) => setSuperintendent_Q(e.target.value)} />
                <button className="btn my-2 my-sm-0 "onClick={SuperintendentQ} type="submit"><strong>Post</strong> </button>
                  </div>
                )
            } else {
                return (
                  <div>
                <h2><strong>Clerk</strong></h2>
                <textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />
              <h2><strong>Superintendent</strong></h2>
                <textarea rows="4" cols="150" value={user.S_Remark}onChange={(e) => setSuperintendent_Q(e.target.value)} />
                <h2><strong>Director</strong></h2>
                <textarea rows="4" cols="150" name='obs' value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />
                <button className="btn my-2 my-sm-0 "onClick={DirectorQ} type="submit"><strong>Post</strong> </button>
                  </div>
                )
            }
    })()
}
</div>
</div>
))}

{
    (() => {
        if(ad == "Clerk") {
                return (
                  <div>
                  <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
                  <button id="verified"onClick={Verify}className="btn my-2 my-sm-0 right-align " type="submit">Verify </button>
                  </div>
                  </div>
                )
            } else if (ad == "Superintendent") {
                return (
                  <div>
                  <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
                  <button id="verified"onClick={Recommend}className="btn my-2 my-sm-0 right-align "  type="submit">Recommend </button>
                  </div>
                  </div>
                )
            } else {
                return (
                  <div>
                  <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
                  <button id="verified"className="btn my-2 my-sm-0 view-align " onClick={Approve} type="submit">Approve </button>
                  </div>
                  </div>
                )
            }
    })()
}
<form onSubmit={sendEmail}>

          <input type="text"  class="fadeIn third textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} />
          <button className = "btn btn-primary"  type="submit" >  SEND QUERY TO USER</button>
  </form>
</div>
</div>
    )
}

export default AdminForm7*/
}
