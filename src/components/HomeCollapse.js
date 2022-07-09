      import React, { Component } from 'react'
      import Navbar from 'react-bootstrap/Navbar';
      import Container from 'react-bootstrap/Container';
      import Nav from 'react-bootstrap/Nav';
      import NavDropdown from 'react-bootstrap/NavDropdown';
      import LoginIcon from '@mui/icons-material/Login';
      import HowToRegIcon from '@mui/icons-material/HowToReg';

      export class HomeCollapse extends Component {

              render() {

                      return (
                              <div className=" Home-bg">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
{/*}  <Navbar.Brand href="#home">Sainik Pondicherry</Navbar.Brand>*/}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <a class="nav-link underlineHover la " href="/">Home <span class="sr-only">(current)</span></a>

    <a class="nav-link underlineHover la " href="#contact">Contact Us <span class="sr-only">(current)</span></a>

    <a class="nav-link underlineHover la" href="#rti">RTI <span class="sr-only">(current)</span></a>

    <a class="nav-link underlineHover la" href="/">Finance Scheme <span class="sr-only">(current)</span></a>

    </Nav>
    <Nav>
    <NavDropdown title="Login" id="collasible-nav-dropdown">
         <NavDropdown.Item href="/login"><LoginIcon />User Login</NavDropdown.Item>
         <NavDropdown.Item href="/register"><HowToRegIcon />User Registration</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="/alogin">Board Login</NavDropdown.Item>
       </NavDropdown>
    {/*  <Nav.Link href="#deets">Admin Login</Nav.Link>

      <a class="nav-link underlineHover la btn-login" href="/alogin">Admin Login <span class="sr-only"></span></a>
*/}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<div className=" Home-bg" style={{height:'2px'}}>
</div>


{/*<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
<Container>

<div className=" Home-bg">
<nav className="navbar  nc  py-0" >
<div className="brand-pad">
  <a className="navbar-brand " href="#">
      <img src="https://apsainik.org.in/assets/img/sainiklogo.png" width="30" height="28" alt="logo" />
  </a>
</div>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />

<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">

    <ul class="navbar-nav">
      <li class="nav-item active brand-pad">
        <a class=" underlineHover la "style={{color:'white'}} href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la "style={{color:'white'}} href="#contact">Contact Us <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la"style={{color:'white'}} href="#rti">RTI <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active brand-pad">
        <a class="underlineHover la"style={{color:'white'}} href="/">Finance Scheme <span class="sr-only">(current)</span></a>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0 logout-pad">
    <a ><button  class="login-btn" id="logout">Admin Login</button></a>

    </form>
</Nav>
    </Navbar.Collapse>

</nav>

<div className=" Home-bg" style={{height:'2px'}}>
</div>
</div>
</Container>

</Navbar>*/}
                              </div>
                      )
              }
      }

      export default HomeCollapse
