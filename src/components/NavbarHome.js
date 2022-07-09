import React from 'react'
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

const NavbarHome = () => {
    const navigate = useNavigate();

    const AdminLogin = async () => {
        try {

          navigate("/alogin");
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <div className=" Home-bg">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 Home-bg" >
<div className="brand-pad">
        <a className="navbar-brand " href="#">
            <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="30" height="28" alt="logo" />
        </a>
</div>
          <ul class="navbar-nav">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la " href="/">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la " href="#contact">Contact Us <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la" href="#rti">RTI <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la" href="/">Finance Scheme <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 logout-pad">
          <a ><button onClick={AdminLogin} class="login-btn" id="logout">Admin Login</button></a>
          </form>
      </nav>

    {/*  <nav class="navbar navbar-expand-lg navbar-dark">

        <a class="navbar-brand" href="">eyeCare</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#footer">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="data.php">My Appoinment</a>
            </li>
            <li class="nav-item">
              <a href="login.html"><button class="login-btn" id="logout">Login</button></a>

            </li>
          </ul>

        </div>
      </nav>*/}
      <div className=" Home-bg" style={{height:'2px'}}>
</div>
</div>

    )
}

export default NavbarHome
{/*            <button onClick={AdminLogin} class="btn btn-outline-success my-2 my-sm-0" type="submit">Admin Login</button>
*/}
