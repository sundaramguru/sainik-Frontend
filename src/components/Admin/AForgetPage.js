import React, { useState, useEffect, useRef  } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import FormLabel from "../../view/FormLabel";
import validator from 'validator';

const AForgetPage = () => {

const [email, setemail] = useState('');
const [codes, setcodes] = useState('');
const [code1, setcode1] = useState('');
const [ErrorMessage, setErrorMessage] = useState('')
const [password, setpassword] = useState('');
const [confPassword, setconfPassword] = useState('');
const [service_no, setservice_no] = useState('');
const [msg, setMsg] = useState('');
const navigate = useNavigate();
const [ErrorCodes, setErrorCodes] = useState('')
const[visible,setVisible]=useState(false);
const [ErrorPassMessage, setErrorPassMessage] = useState('')
const [pass, setpass] = useState('')
const [conpass, setconpass] = useState('')
const [capt, setCapt] = useState('')

 useEffect(() => {
   getCapt();
    //    getMail();
}, []);



const getAMail  = async () => {
    const response = await axiosJWT.get('http://localhost:5000/getAForgetMail',{

      params:{
       service_no: service_no
      }
    });
    setemail(response.data);
  }

const axiosJWT = axios.create();
    const getCapt  = async () => {
    const response = await axiosJWT.get('http://localhost:5000/capt');
    setcodes
    (response.data);
    }

const sendEmail = (e) => {

  e.preventDefault();

      emailjs.sendForm('service_080xmpx', 'template_1lwrmyo', e.target, 'PaHWpUgrsCFyqSKRl')
        .then((result) => {
            console.log('SUCCESS!',result.text);
        }, (error) => {
            console.log('FAILED...',error.text);
        });
        e.target.reset()

  };

const AForgetPass = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/AForgetPass', {

                service_no: service_no,
                password: password,
                confPassword: confPassword
            });
             navigate("/alogin");
        }

        catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
            //navigate("/alogin");

    }


const Check = (e) => {
if(codes!==code1){
	 setErrorCodes('Please Enter a correct code !! ')
 }

else{
	 setErrorCodes(' ');
    setVisible(true);
}
}


const PasswordCheck = (e) => {

if(pass!==conpass){
     setErrorPassMessage('Password and Confirm Password do not match !! ')
 }

else
     setErrorPassMessage(' ')

}

const onpasswordChange = (e) =>  {

 const ps = /^[A-Za-z0-9_@#\b]+$/;
    if (e.target.value === "" || ps.test(e.target.value))
    {

        setpassword(e.target.value);
    }
  }


const validate = (value) => {
       if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    } else if (password == ""){
      setErrorMessage('Enter a strong Password')
    }
    else {
      setErrorMessage('Is not a Strong Password')
    }
    }



return (

	 <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>

        <form onSubmit={sendEmail}>
  <p className="has-text-centered">{msg}</p>
  		<input type="text" id="service_no" class="  textInput" name="service_no"
         autocomplete = "off" placeholder="Service Number" name = "Service_no" value={service_no} onChange={(e) => setservice_no(e.target.value)} />

        <input type="email"  class="  textInput"   autocomplete ="off"  name="email"  value={email}  onChange={(e) => setemail(e.target.value)} /><br/>



       <a onClick = {getAMail} class="btn btn-primary">get mail</a><br/><br/>

        <input type="submit" class =  "btn-secondary btn" value = "SEND EMAIL FOR VERIFICATION"  />

        <input type="hidden" id="codes" class="textInput"   autocomplete ="off"  name="codes"  value={codes} onChange={(e) => setcodes(e.target.value)} />

        <input type="text" id="code1" class=" passwordInput" name="login"   autocomplete = "off"  maxlength = "6" minlength = "6" placeholder="Enter the code " value={code1}  onChange={(e) => setcode1(e.target.value)} /> <a onClick = {Check} class="underlineHover la">Verify</a> <br/>
 		<span style=
           {{
            fontWeight: 'bold',
            color: 'red',
           }}>{ErrorCodes}</span>

 { visible &&
            <div>

        <input type="password" id="password" class="  passwordInput"   autocomplete ="off"  name="pass" placeholder="Create New Password" value={password}  onClick={(e) => validate(e.target.value)} onChange={onpasswordChange}/><br/>
           <span style=
           {{
            fontWeight: 'bold',
            color: 'red',
           }}>{ErrorMessage}</span>

           <input type="password" id="password" class="  passwordInput" name="conpass"   autocomplete = "off"  maxlength = "10" placeholder="Confirm Password"value={confPassword}  onCick={PasswordCheck} onChange={(e) => setconfPassword(e.target.value)} />


           <span style=
           {{
            fontWeight: 'bold',
            color: 'red',
           }}>{ErrorPassMessage}</span>

</div>}


         </form>

        <div id="formFooter">
          <a class="underlineHover la"><Link to="/alogin">Back</Link></a>
          <input onClick={AForgetPass}  class="btn btn-info "   value="Reset Password" />

        </div>

      </div>
      </div>
</div>



)
}

export default AForgetPage
