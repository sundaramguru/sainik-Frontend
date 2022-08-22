/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Director = () => {
  const [name, setName] = useState("");
  const [users_C, setUsers_C] = useState([]);
  const [users_S, setUsers_S] = useState([]);
  const [users_D, setUsers_D] = useState([]);
  //widow
  const [W_C, setW_C] = useState([]);
  const [W_S, setW_S] = useState([]);
  const [W_D, setW_D] = useState([]);
  //end widow
  const [E_C, setE_C] = useState([]);
  const [E_S, setE_S] = useState([]);
  const [E_D, setE_D] = useState([]);

  const [design, setDesign] = useState([]);
  const [Designation, setDesignation] = useState([]);

  const [Service_No, setService_No] = useState("");
  const [A_Service_No, setA_Service_No] = useState("");

  const [Clerk, setClerk] = useState([]);
  const [Superintendent, setSuperintendent] = useState([]);

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUsers_C();
    getUsers_S();
    getUsers_D();
    getDesign();

    getW_C();
    getW_S();
    getW_D();

    getE_C();
    getE_S();
    getE_D();
  }, []);

  const axiosJWT = axios.create();

  const getUsers_C = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/Users_C`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setUsers_C(response.data);
  };
  const getUsers_S = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/Users_S`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setUsers_S(response.data);
  };
  const getUsers_D = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/Users_D`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setUsers_D(response.data);
  };
  //WidowForm
  const getW_C = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/W_C`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setW_C(response.data);
  };
  const getW_S = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/W_S`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setW_S(response.data);
  };
  const getW_D = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/W_D`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setW_D(response.data);
  };
  // end
  //Employment Form
  const getE_C = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/E_C`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setE_C(response.data);
  };
  const getE_S = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/E_S`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setE_S(response.data);
  };
  const getE_D = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/E_D`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setE_D(response.data);
  };
  // end

  const getDesign = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/designation`,
      {
        params: {
          ALogin_S: localStorage.getItem("ALogin_S"),
        },
      }
    );
    setDesign(response.data);
    localStorage.setItem("A_Designation", design[1]);
  };
  localStorage.setItem("A_Designation", "Director");

  // const next = function next(e){
  //   function p() { setService_No(user.Service_No)};
  //   SuperDash()
  // }
  const SuperDash = async (e) => {
    e.preventDefault();
    // const Service_No=
    try {
      // await axios.post(`${process.env.REACT_APP_BACKEND_URL}/superForm3`,{
      // Service_No:Service_No
      // });
      console.log(Service_No);

      localStorage.setItem("A_Service_No", Service_No);
      // localStorage.setItem('A_Designation`,Designation);

      navigate("/adminform1");
      // ,{state:{name:Service_No}}
      // console.log(Service_No);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const WidowDash = async (e) => {
    e.preventDefault();
    try {
      console.log(Service_No);

      localStorage.setItem("A_Service_No", Service_No);
      localStorage.setItem("V_Service_No", Service_No);

      navigate("/AWidowForm");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const EmpDash = async (e) => {
    e.preventDefault();
    try {
      console.log(Service_No);

      localStorage.setItem("A_Service_No", Service_No);
      localStorage.setItem("V_Service_No", Service_No);
      localStorage.setItem("Service_No", Service_No);

      navigate("/adminFormUE");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="right-align for-btn">
        <form onSubmit={SuperDash}>
          <h1>
            <strong>Search By Service No</strong>
          </h1>
          <input
            type="text"
            class="fadeIn formInput"
            value={Service_No}
            onChange={(e) => setService_No(e.target.value)}
          />{" "}
          <br />
          <button
            className="btn my-2 my-sm-0 view-align nextButton "
            type="submit"
          >
            Search{" "}
          </button>
        </form>
      </div>
      <div>
        {users_C.map((user, index) => (
          <form onSubmit={SuperDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {users_S.map((user, index) => (
          <form onSubmit={SuperDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td>{user.Clerk}</td>
                        <td>{user.Superintendent}</td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {users_D.map((user, index) => (
          <form onSubmit={SuperDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>
      <div className="superTitle">
        <strong>Widow</strong>
      </div>

      <div>
        {W_C.map((user, index) => (
          <form onSubmit={WidowDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {W_S.map((user, index) => (
          <form onSubmit={WidowDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td>{user.Clerk}</td>
                        <td>{user.Superintendent}</td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {W_D.map((user, index) => (
          <form onSubmit={WidowDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div className="superTitle">
        <strong>Employment</strong>
      </div>

      <div>
        {E_C.map((user, index) => (
          <form onSubmit={EmpDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {E_S.map((user, index) => (
          <form onSubmit={EmpDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td>{user.Clerk}</td>
                        <td>{user.Superintendent}</td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                  disabled
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>

      <div>
        {E_D.map((user, index) => (
          <form onSubmit={EmpDash}>
            <div class="card space for-btn">
              <div className="card-header color" key={user.id}>
                <h3 className="color">
                  {" "}
                  <strong> {user.Name} </strong>
                </h3>
              </div>
              <div class="card-body row">
                {/*<input type="text"  class="fadeIn formInput" value={Service_No} onMouseEnter={() =>setService_No(user.Service_No)} />*/}

                <span
                  class="card-text col-sm-3"
                  value={Service_No}
                  onChange={(e) => setService_No(user.Service_No)}
                >
                  {user.Service_No}
                </span>
                <span className="card-title col-sm-4">
                  <table className="table  is-fullwidth">
                    <tbody>
                      <tr key={user.id}>
                        <td
                          value={Clerk}
                          onChange={(e) => setClerk(user.Clerk)}
                        >
                          {user.Clerk}
                        </td>
                        <td
                          value={Superintendent}
                          onChange={(e) =>
                            setSuperintendent(user.Superintendent)
                          }
                        >
                          {user.Superintendent}
                        </td>
                        <td>{user.Director}</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <button
                  className="btn my-2 my-sm-0 col-sm-1 view-align"
                  type="submit"
                  onMouseEnter={() => setService_No(user.Service_No)}
                >
                  View{" "}
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Director;
