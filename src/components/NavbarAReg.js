import React from 'react'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavbarHome = () => {
    const navigate = useNavigate();

    const AdminLogin = async () => {
        try {

          navigate("/aregister");
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
<div className="brand-pad">
        <a className="navbar-brand " href="#">
            <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="30" height="28" alt="logo" />
        </a>
</div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active brand-pad">
              <a class="nav-link " href="/">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 logout-pad">
            <button onClick={AdminLogin} class="btn btn-outline-success my-2 my-sm-0" type="submit">Admin Register</button>
          </form>
      </nav>


    )
}

export default NavbarHome
