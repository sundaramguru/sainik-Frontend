import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    // try {
    //     await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/logout`);
    //     navigate("/");
    // } catch (error) {
    //     console.log(error);
    // }
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="brand-pad">
        <a className="navbar-brand " href="#">
          <img
            src="https://apsainik.org.in/assets/img/sainiklogo.png"
            width="30"
            height="28"
            alt="logo"
          />
        </a>
      </div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active brand-pad">
          <a class="nav-link " href="/">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 logout-pad">
        <button
          onClick={Logout}
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Logout
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
{
  /*<nav className="navbar  navbar-light bg-light navbar-fixed-top">
    <div className="navbar-header">
  <ul className="nav navbar-nav navbar-left">

      <li><a href="/">home</a></li>


  </ul>
  <ul className="nav navbar-nav navbar-right">

      <li><button onClick={Logout} className="btn btn-outline-success my-2 my-sm-0">
          Log Out
      </button></li>


  </ul>
</div>
</nav>*/
}

{
  /*          <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container">
    <div className="navbar-brand d-flex justify-content-start align-items-start">
        <a className="navbar-item" href="#">
            <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="28" height="28" alt="logo" />
        </a>





              <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>





          <div className="d-flex justify-content-end align-items-end">
              <div className="navbar-item">

                      <button onClick={Logout} className="btn btn-outline-success my-2 my-sm-0">
                          Log Out
                      </button>

              </div>
          </div>


    </div>

</div>
</nav>*/
}

{
  /*<nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="container">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="28" height="28" alt="logo" />
            </a>

            <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a href="/" className="navbar-item">
                    Home
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button onClick={Logout} className="button is-light">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>*/
}
{
  /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>


    </ul>
    <form class="form-inline my-2 my-lg-0">

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */
}
