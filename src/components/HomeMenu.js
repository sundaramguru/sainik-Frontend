import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeMenu = () => {
    const navigate = useNavigate();

    const AdminLogin = async () => {
        try {

          navigate("/alogin");
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <div>
      <div>
      <nav className="navbar navbar-expand-lg is-info  py-0">
<div className="brand-pad">
        <a className="navbar-brand " href="#">
            <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="30" height="28" alt="logo" />
        </a>
<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
</div>

          <ul class="navbar-nav menu-color" style={{color:"#001D6E"}}>
            <li class="nav-item active brand-pad menu-color">
              <a class="nav-link underlineHover la menu-color" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la " href="/">Contact Us <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la" href="/">RTI <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active brand-pad">
              <a class="nav-link underlineHover la" href="/">Finance Scheme <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 logout-pad">
            <button onClick={AdminLogin} class="btn btn-outline-success my-2 my-sm-0" type="submit">Board Login</button>
          </form>
      </nav>
      <nav class="navbar is-info">
  			<div class="navbar-brand">
  				<a class="navbar-item"
  				href="https://geeksforgeeks.org">
  					<img src=
  "https://media.geeksforgeeks.org/wp-content/uploads/20220121204016/gfglogo300x152-200x101.png" />
  				</a>
  				<div class="navbar-burger"
  					data-target="navBackgroundDemo1">
  					<span></span>
  					<span></span>
  					<span></span>
  				</div>
  			</div>

  			<div id="navBackgroundDemo1"
  				class="navbar-menu">
  				<div class="navbar-start">
  					<a class=" navbar-item underlineHover"
  					href="#">
  						Home
  					</a>
  					<a class="navbar-item"
  					href="#">
  						Courses
  					</a>
  				</div>

  				<div class="navbar-end">
  					<div class="navbar-item">
  						<div class="field is-grouped">
  							<p class="control">
  								<button class="button is-primary">
  									Algorithms
  								</button>
  							</p>

  							<p class="control">
  								<button class="button is-white">
  									Data Structures
  								</button>
  							</p>

  						</div>
  					</div>
  				</div>
  			</div>
  		</nav>

</div>

</div>

    )
}

export default HomeMenu
