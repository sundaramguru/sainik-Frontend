import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Corrections = () => {
  const [Clerk_Q, setClerk_Q] = useState(localStorage.getItem("Clerk_Query"));
  const [Superintendent_Q, setSuperintendent_Q] = useState(
    localStorage.getItem("Superintendent_Query")
  );
  const [Director_Q, setDirector_Q] = useState(
    localStorage.getItem("Director_Query")
  );
  const [gclerkQ, setgClerkQ] = useState([]);
  const [cvisible, setcvisible] = useState(false);
  const [svisible, setsvisible] = useState(false);
  const [dvisible, setdvisible] = useState(false);
  const [msg, setMsg] = useState("");
  const [Mail_Id, setMail_Id] = useState("");
  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );

  useEffect(() => {
    getMail();
    getClerkQ();
  }, []);

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
  const axiosJWT = axios.create();

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
    // Clerk_Q=gclerkQ;
  };
  // {gclerkQ.map((user, index) => (
  //       key={user.id}
  // Superintendent_Q={user.S_Remark};
  // ))}

  // Clerk_Q=

  const ClerkQ = async (e) => {
    e.preventDefault();
    try {
      //Send Email
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
      //

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
      //
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
      //
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
  const ad = localStorage.getItem("A_Designation");
  // if(ad === "SuperIndendent"){
  //   setsvisible(true)
  // }

  return (
    <div className="footer">
      {gclerkQ.map((user, index) => (
        <div key={user.id}>
          {/*{cvisible &&

  <div>
<form onSubmit={ClerkQ}>
<h2>Clerk</h2>
<textarea rows="4" cols="150" value={Clerk_Q }onChange={(e) => setClerk_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>
</form>
  </div>
}
//Superintendent
{svisible &&

  <div>
<h2>Clerk</h2>
<textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />

<form onSubmit={SuperintendentQ}>
<h2>Superintendent</h2>
<textarea rows="4" cols="150" value={Superintendent_Q}onChange={(e) => setSuperintendent_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>
</form>
  </div>
}
//Director
{dvisible &&
  <div>
<h2>Clerk</h2>
<textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />


<h2>Superintendent</h2>
<textarea rows="4" cols="150" value={user.S_Remark}onChange={(e) => setSuperintendent_Q(e.target.value)} />


<form onSubmit={DirectorQ}>
<h2>Director</h2>
<textarea rows="4" cols="150" value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />
<button className="btn my-2 my-sm-0 " type="submit">Post </button>
</form>
  </div>
}{/*end of dvisible
*/}

          <div>
            {(() => {
              if (ad == "Clerk") {
                return (
                  <div>
                    <form onSubmit={ClerkQ}>
                      <h2>
                        <b>Clerk</b>
                      </h2>
                      <br />
                      <textarea
                        rows="4"
                        cols="150"
                        name="post"
                        value={Clerk_Q}
                        onChange={(e) => setClerk_Q(e.target.value)}
                      />
                      <button className="btn my-2 my-sm-0 " type="submit">
                        <strong>Post</strong>{" "}
                      </button>
                    </form>
                  </div>
                );
              } else if (ad == "Superintendent") {
                return (
                  <div>
                    <h2>
                      <b>Clerk</b>
                    </h2>
                    <br />
                    <textarea
                      rows="4"
                      cols="150"
                      value={user.C_Remark}
                      onChange={(e) => setClerk_Q(e.target.value)}
                    />

                    <form onSubmit={SuperintendentQ}>
                      <h2>
                        <b>Superintendent</b>
                      </h2>
                      <br />
                      <textarea
                        rows="4"
                        cols="150"
                        name="post"
                        value={Superintendent_Q}
                        onChange={(e) => setSuperintendent_Q(e.target.value)}
                      />
                      <button className="btn my-2 my-sm-0 " type="submit">
                        <strong>Post</strong>{" "}
                      </button>
                    </form>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>
                      <b>Clerk</b>
                    </h2>
                    <br />
                    <textarea
                      rows="4"
                      cols="150"
                      value={user.C_Remark}
                      onChange={(e) => setClerk_Q(e.target.value)}
                    />

                    <h2>
                      <b>Superintendent</b>
                    </h2>
                    <br />
                    <textarea
                      rows="4"
                      cols="150"
                      name="post"
                      value={user.S_Remark}
                      onChange={(e) => setSuperintendent_Q(e.target.value)}
                    />

                    <form onSubmit={DirectorQ}>
                      <h2>
                        <strong>Director</strong>
                      </h2>
                      <br />
                      <textarea
                        rows="4"
                        name="post"
                        cols="150"
                        value={Director_Q}
                        onChange={(e) => setDirector_Q(e.target.value)}
                      />

                      {/*<textarea rows="4" name = "post" cols="150" value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />*/}
                      <button className="btn my-2 my-sm-0 " type="submit">
                        <strong>Post</strong>{" "}
                      </button>
                    </form>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Corrections;

// <div>
//            {
//                (() => {
//                    if('a'==='b') {
//                            return (
//                              <div>
//                            <form onSubmit={ClerkQ}>
//                            <h2>Clerk</h2>
//                            <textarea rows="4" cols="150" value={Clerk_Q }onChange={(e) => setClerk_Q(e.target.value)} />
//                            <button className="btn my-2 my-sm-0 " type="submit">Post </button>
//                            </form>
//                              </div>
//                            )
//                        } else if ('b'==='b') {
//                            return (
//                              <div>
//                            <h2>Clerk</h2>
//                            <textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />
//
//                            <form onSubmit={SuperintendentQ}>
//                            <h2>Superintendent</h2>
//                            <textarea rows="4" cols="150" value={Superintendent_Q}onChange={(e) => setSuperintendent_Q(e.target.value)} />
//                            <button className="btn my-2 my-sm-0 " type="submit">Post </button>
//                            </form>
//                              </div>
//                            )
//                        } else {
//                            return (
//                              <div>
//                            <h2>Clerk</h2>
//                            <textarea rows="4" cols="150" value={user.C_Remark }onChange={(e) => setClerk_Q(e.target.value)} />
//
//
//                            <h2>Superintendent</h2>
//                            <textarea rows="4" cols="150" value={user.S_Remark}onChange={(e) => setSuperintendent_Q(e.target.value)} />
//
//
//                            <form onSubmit={DirectorQ}>
//                            <h2>Director</h2>
//                            <textarea rows="4" cols="150" value={Director_Q}onChange={(e) => setDirector_Q(e.target.value)} />
//                            <button className="btn my-2 my-sm-0 " type="submit">Post </button>
//                            </form>
//                              </div>
//                            )
//                        }
//                })()
//            }
//        </div>
