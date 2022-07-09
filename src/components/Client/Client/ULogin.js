import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const ULogin = () => {
    const [Service_No, setService_No] = useState('');
    const [Password, setPassword] = useState('');
    const [Mail_Id, setMail_Id] = useState('');
    const navigate = useNavigate();
    const [ErrorMessage, setErrorMessage] = useState('')
    const [AltertMsg, setAltertMsg] = useState('')
    const [codes, setcodes] = useState('');
    const [msg, setMsg] = useState('');

const capt = (e) => {
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    var a= alpha[Math.floor(Math.random()*62)];
    var b= alpha[Math.floor(Math.random()*62)];
    var c= alpha[Math.floor(Math.random()*62)];
    var d= alpha[Math.floor(Math.random()*62)];
    var e= alpha[Math.floor(Math.random()*62)];
    var f= alpha[Math.floor(Math.random()*62)];

    var sum = a+b+c+d+e+f;

setcodes(sum);
  }

const onEmailChange = (e) =>  {

 const m = /^[A-Za-z@._0-9\b]+$/;
    if (e.target.value === "" || m.test(e.target.value))
    {

        setMail_Id(e.target.value);
     }
   else
      setErrorMessage('Please Enter a valid  Email')
}

const onSM = (e) =>  {
if((Service_No || Mail_Id) == ''){
setAltertMsg("Please Fill the Service Number and Mail_Id")
}
else
setAltertMsg('')

}




    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/ULogin', {
                Service_No: Service_No,
                Password: Password
            });
            localStorage.setItem('Service_No', Service_No);
            localStorage.setItem('codes', codes);

            navigate("/form1");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>

         <form onSubmit={Auth}>
          <span style=
           {{
            fontWeight: 'bold',
            color: 'red',
           }}>{ErrorMessage}</span>

         <input type="text" id="login" class="fadeIn second textInput" name="login"
         autocomplete = "off" placeholder="Service Number"value={Service_No} onChange={(e) => setService_No(e.target.value)} />
         <input type="email"  class="fadeIn second emailInput" name="Mail_Id"  autocomplete  = "off"  placeholder="Email" value={Mail_Id}   onChange={onEmailChange} /><br/>

         <span style=
           {{
            fontWeight: 'bold',
            color: 'red',
           }}>{AltertMsg}</span>


         <input type="password" id="password" class="fadeIn third passwordInput"   autocomplete ="off"  name="login" placeholder="Password"value={Password} onChange={(e) => setPassword(e.target.value)} />


          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" onClick = {onSM}  > <Link to="/ForgotPage" > Forgot Password?</Link></a>
        </div>

      </div>
      </div>
</div>
    )
}

export default ULogin
