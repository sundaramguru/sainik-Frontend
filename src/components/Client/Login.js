import React, { useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  // localStorage.clear();

    const [Service_No, setService_No] = useState('');
    const [Password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [ErrorMessage, setErrorMessage] = useState('')
    const [AltertMsg, setAltertMsg] = useState('')
    const [User_Status, setUser_Status] = useState('')
    const [User_Stat, setUser_Stat] = useState('')

    const getUS  = async () => {
           const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getUS`,{

             params:{
               Service_No: Service_No
             }
           });
           setUser_Status(response.data);
         }

         const [file, setFile] = useState();

         const axiosJWT = axios.create();


    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Login`, {
                Service_No: Service_No,
                Password: Password
            });


            localStorage.setItem('Service_No`, Service_No);
            localStorage.setItem('V_Service_No`, Service_No);

  getCheck();
            // navigate("/formStart");



        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    // const getFormOpen= async (e) =>{
    //   getCheck();
    // }
    //


    const getCheck= async (e) =>{
       if(User_Stat==="Submitted"){
         navigate("/viewform2b");

       }else if(User_Stat==="Not Submitted")
       {
         navigate("/form1");


       }
       else if(User_Stat==="Query")
       {
         navigate("/viewform2a");
       }
       else{
          navigate("/formStart");
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
        <p className="has-text-centered">{msg}</p>
          <input type="text" id="login" class="fadeIn second textInput" autocomplete = "off" name="login" placeholder="Service Number"value={Service_No} onChange={(e) => setService_No(e.target.value)} />
          <input type="password" id="password" class="fadeIn third passwordInput"  autocomplete = "off" name="login" placeholder="Password"value={Password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" class="fadeIn fourth submitInput" value="Log In" />

          <input type="hidden"   name="User_Stat"  value={User_Status}onClick = {  getUS}  onChange={(e) => setUser_Status(e.target.value)} />


        </form>

        <div id="formFooter">
        <a class="underlineHover la"> <Link to="/ForgotPage" > Forgot Password?</Link></a><br/><br/>
          <a class="underlineHover la"> <Link to="/Register" >For Sign Up </Link></a>
        </div>

      </div>
      </div>
</div>
    )
}

export default Login
