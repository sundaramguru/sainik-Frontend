import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NavbarHome from "./NavbarHome";
import HomeCarousel from "./HomeCarousel";
import HomeCollapse from "./HomeCollapse";

import HomeContact from './HomeContact';
// localStorage.clear()
const Home = () => {


    return (

      <div class="">

<HomeCollapse/>
{/*  <NavbarHome/>
<HomeCollapse/>
   first code
      <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
              <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://img.naidunia.com/naidunia/indian_armed_forces_16_05_2019.jpg" width="428" height="428" alt="logo" style={{float:'center'}} />
              </div>

                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 " >
                      <a href="/login" class="btn btn-primary btn-lg active " role="button" aria-pressed="true">User Login</a><br /><br />

                      <a href="/register" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">User Register</a>
                  </div>
          </div>
      </div>*/}
      <div className="container ta">

      <marquee direction = "left"> <b><a href=  "#rti"> Before filling up of the online form the Ex-servicemen and Widows of Ex-servicemen are requested to read the important guidelines.</a> </b></marquee>


      <p className = "p_size">Following the rapid expansion of the Defence Forces after 1962, the number of Ex-servicemen in all over the country grow gradually to the level of  about 60,000 per year. The definition of Ex-servicemen has under gone changes from time to time and has been broadly categorized.  The definition of Ex-servicemen has been broadly categorized in the Bye laws G.O.Ms,No.51 dated 3.10.2012 of Home Department, Government of Puducherry.  The personnel who full fill the above definition are need to be register themselves immediately on relieve from the tri services Army/Navy/Air Force to avail Financial benefits /Concessions/ Welfare Schemes  announced by the State /UT and Central Governments.

The Department of Sainik Welfare, Puducherry initiated and developed a online Registration Form.
</p>

      </div>
      <HomeCarousel/>
    {/*  <Carousel variant="dark">
        <Carousel.Item>
          <img
            className=" "
            src="https://apsainik.org.in/assets/img/sainiklogo.png" width={900} height={50}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{/**/}

      <div className='colored-section' id='rti'>
      <div class="container ">
      <div class="container ">
      <div class="container al-p ">
<strong  className='contact-h bot-pad'>Instruction for New Registration of Ex-servicemen/Widow of Ex-servicemen </strong><br /><br />
      <p class="about-hos">The User (Ex-serviceman or Widow of Ex-serviceman should create login /Signup Registration  themselves with the limited information. On successful Login Registration, the user can login. On successful login, the user will get menu Registration and sub menu ESM, Widow and Transfer. Select as applicable.  The user will be given a Blank digital Registration form ESM Registration/ Widow Registration respectively, contains 8 pages.<br/><br/>

The form is user friendly, maximum information are to be selected from the drop down, need not to type. Complete all the applicable / Mandatory columns. On completion of mandatory fields, by click ‘NEXT’ button the user will be navigated to the next form and your data is temporarily stored till completion of all the forms. The user login registration will be terminated, if the user does not complete the forms,   not uploaded required documents and not submitted within 30 days of the Login Registration.<br/>
<br/>
The user form will be process through three levels i.e.,  Welfare Organiser, Office Superintendent and Director. If any observation on process, the application will be placed under Querry, the user should clear the observation and resubmit the form within 10 days of Observation. After, Verification, Recommendation and Approval the user will be allotted with ESM Registration No./ Widow Registration No.   Further, the ESM, those who are unemployed, eligible and willing can apply for the Employment Registration. On approval, the applicant will be given with Emp.Reg.No.<br/><br/>

If the required items are not available in the drop down box or  any other difficulty, on filling up of the form, the user can approach the Department of Sainik Welfare, Puducherry on mail puducherrydsw@gmail.com or by phone 0413-2253107.<br/><br/>

<b>Keep scanned orginal copy of the following service and civil documents</b><br/><br/>
a)	Discharge Book *<br/>
b)	Pension payment order * for pensioners<br/>
c)	ECHS card<br/>
d)	Canteen card<br/>
e)	First page of the pension account Bank Pass Book.<br/>
f)	Adhar Card *  - Self, Spouse and dependents if any.<br/>
g)	Voter Card -  Self and Spouse and dependents if eligible<br/>
h)	Passport size photo *– self<br/>
j)	Joint photo *	- self and spouse


</p>
</div></div>

</div>

</div>
<HomeContact/>

      </div>

    )
}

export default Home
{/*
<div class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
          alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>


          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</div>
*/}
