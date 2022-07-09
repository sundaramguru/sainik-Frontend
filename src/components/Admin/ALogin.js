import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ALogin = () => {
    const [service_no, setService_no] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();



     useEffect(() => {
       Autodelete();
    }, []);

// const page = () =>{
//   const asn=localStorage.setItem('ALogin_S',service_no);
//
//   if(asn=== 'pa98765vi'){
//     navigate("/insert");
//   }else{
//   navigate("/superDash");
//   }
// }

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/alogin', {
                service_no: service_no,
                password: password,
                // designation: designation
            });
localStorage.setItem('ALogin_S',service_no);
const asn=localStorage.getItem('ALogin_S');

//localStorage.setItem('ALogin_Board',service_no);
// page();
console.log(asn);
if(asn=== 'sainikPDY'){
  navigate("/insert");
}else{
navigate("/superDash");
}
            // navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const Autodelete = async (e) => {
       try {
         await axios.post("http://localhost:5000/Autodelete",{
                    // Name: Name,
                    // Service_No:Service_No,
                    // Mobile:Mobile,
                    // Mail_Id: Mail_Id,
                    // Password: Password,
                    // Reg_Date: Reg_Date,
                    // ConfPassword: ConfPassword
         });

       }  catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
     }






    return (
            <div className="center">
                <div className="wrapper fadeInDown">
                    <div id="formContent">


                             <div class="fadeIn first">
                                  <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
                             </div>
                                <form onSubmit={Auth} >
                                    <p className="has-text-centered">{msg}</p>
                                      <input type="text" id="login" class="fadeIn second textInput" name="login"  placeholder="Service Number" value={service_no} onChange={(e) => setService_no(e.target.value)} required />
                                      <input type="password" id="login" class="fadeIn second textInput" name="login" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                      <input type="submit" class="fadeIn fourth submitInput" value="Log In" />
                                      </form>
                                      <div id="formFooter">
                                      <a class="underlineHover la"> <Link to="/AForgetPage" > Forgot Password?</Link></a><br/><br/>
                                        <a class="underlineHover la"> <Link to="/" >Back</Link></a>
                                      </div>


                    </div>
                </div>
            </div>
    )
}

export default ALogin
