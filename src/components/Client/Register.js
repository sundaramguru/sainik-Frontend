import React, { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useform } from "react-hook-form";
import validator from 'validator';
import FormLabel,{FormLabel4} from "../../view/FormLabel";

const Register = () => {

  // localStorage.clear();
    const [Name, setName] = useState('');
    const [Service_No1, setService_No1] = useState('');
    const [Service_No2, setService_No2] = useState('');
    const [Service_No3, setService_No3] = useState('');
    const Service_No = useMemo(
        () => Service_No1 + "" + Service_No2 + "" + Service_No3,
        [Service_No1, Service_No2, Service_No3])
    const [Mail_Id, setMail_Id] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');
    const [Reg_Date, setReg_Date] = useState('');
    const [Prefixx, setPrefixx] = useState('');
    const [Suffix, setSuffix] = useState('');
    const [prefix, setPrefix] = useState([]);
    const [msg, setMsg] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('')
    const [value, setValue] = useState("");
    const navigate = useNavigate();
const [emailError, setEmailError] = useState('')
const [RT, setRT] = useState('');

    useEffect(() => {
        getPrefix();
    }, []);

const axiosJWT = axios.create();

const getPrefix = async () => {
    const response = await axiosJWT.get('http://localhost:5000/prefix_D');
    setPrefix(response.data);
    }

const SUFFIX = ['A','B','C','D','E','F','G','H','I','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const REG = ['ESM','Widow'];



const onChange = (e) =>  {
    const re = /^[-A-Z/ \b]+$/;
    if (e.target.value.toUpperCase() === "" || re.test(e.target.value.toUpperCase()))
    {

        setName(e.target.value.toUpperCase());
    }

}

const onService2Change = (e) =>  {
   const n = /^[0-9\b]+$/;
    if (e.target.value === "" || n.test(e.target.value))
    {

        setService_No2(e.target.value);
    }
}

const onMobileChange = (e) =>  {
   const m = /^[0-9\b]+$/;
    if (e.target.value === "" || m.test(e.target.value))
    {




        setMobile(e.target.value);
    }

}

const onEmailChange = (e) =>  {

 const em = /^[A-Za-z@._0-9\b]+$/;
    if (e.target.value === "" || em.test(e.target.value))
    {

        setMail_Id(e.target.value);
     }

}

const validateEmail = (e) => {

    if (validator.isEmail(Mail_Id)) {
      setEmailError('')
    } else if (Mail_Id== ""){
      setEmailError('Enter Your Mail id')
    }
    else {
      setEmailError('It is not a correct email')

    }
  }


const onpasswordChange = (e) =>  {
//A-Z/*%!a-z0-9&$_@#\b
 const ps = /^[A-Z/*%!a-z0-9&$_@#\b]+$/;
    if (e.target.value === "" || ps.test(e.target.value))
    {

        setPassword(e.target.value);
    }
  }
//[A-Za-z0-9&$_@#\b]
const validate = (value) => {
       if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    } else if (Password == ""){
      setErrorMessage('Enter a strong Password')
    }
    else {
      setErrorMessage('Is not a Strong Password')
    }
 }

const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_user_reg', {
                Name: Name,
                Service_No:Service_No,
                Mobile:Mobile,
                Mail_Id: Mail_Id,
                Password: Password,
                ConfPassword: ConfPassword,
                RT:RT
            });


localStorage.clear();
            localStorage.setItem('Service_No', Service_No);
            localStorage.setItem('Name', Name);
            localStorage.setItem('Mobile', Mobile);
            localStorage.setItem('Mail_Id', Mail_Id);

         navigate("/login");
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

      <form onSubmit={Register}>
      <p className="has-text-centered">{msg}</p>
      <input type="text" id="login" class="fadeIn second textInput" autocomplete = "off" name="login" placeholder="Name as per Service Records"value={Name} onChange={onChange} />


{/*        ********************SERVICE NUMBER*******************   */}
     <div className='fadeIn second  textInput'>

       <div className='row service-pad'>
           <div className="col-lg-3  ">
           <select className =" textInput2" id = "1" placeholder="Prefix" value={Service_No1} onChange={e => setService_No1(e.target.value)}>
           {prefix.map((user, index) => (
           <option key={user.id} value={user.Value}>{user.Value}</option>
           ))}
           </select>
           </div>

{/*        ********************end pre NUMBER************************   */}

            <div className="col-lg-6  ">
            <input type="text"  id ="2" class="  textInput2" autocomplete= 'off' maxlength = "10" name="login" placeholder="Service Number"value={Service_No2} onChange={onService2Change} required  />
            </div>

{/*        ******************** end service NUMBER*******************   */}

            <div className="col-lg-3 ">
            <select className =" textInput2" id = "3" placeholder="Suffix" value={Service_No3} onChange={e => setService_No3(e.target.value)}>
            <option >Suffix</option>
            {SUFFIX.map(c => <option key={c}>{c}</option>)}
            </select>
            </div>

{/*        ********************end suff NUMBER***********************   */}

            </div>
            <input type="hidden" id="4"  class="fadeIn second space textInput1" autocomplete= 'off' maxlength = "10" name="login" placeholder="Service Number"value={Service_No}   />
            </div>


{/*        ******************** SERVICE NUMBER *******************


       ************************ STATES ************************
           <div className = "  col-lg-12 fadeIn second  textInput">
           <select  className=" textInput2"  value =
           {State}  onClick={getStates}  onChange={(e)=> setState(e.target.value)} >
           <option value = "" disabled selected >--Select State--</option>
           {states.map((user, index) => (
           <option key={user.id}value={user.State}>{user.State}</option>
           ))}
           </select>
           </div>

      ********************  STATES  *******************

       ********************  DISTRICTS  ********************/}
          <div className = "col-lg-12 fadeIn   textInput">
          <select  className="textInput2"  onChange={(e) => setRT(e.target.value)} required>
          <option value="" selected disabled>--REG TYPE--</option>
          {REG.map(c => <option key={c}>{c}</option>)}
          </select>
          </div>


          <input type="email" id="login" class="fadeIn second emailInput" name="login"  autocomplete  = "off"  placeholder="Email" value={Mail_Id}     onClick={(e) => validateEmail(e.target.value)} onChange={onEmailChange} required /><br/>

                 <span style={{

                   color: 'red',
                 }}>{emailError}</span>




          <input type="text" id="login" class="fadeIn second numberInput" name="login"   autocomplete = "off"  placeholder="Mobile"  minlength = "10" maxlength= "12" value={Mobile} onChange={onMobileChange}  />

          <input type="password" id="password" class="fadeIn third passwordInput" name="login"   autocomplete = "off" maxlength = "25" minlength = "8" placeholder="Password"value={Password}  onClick={(e) => validate(e.target.value)} onChange={onpasswordChange} /><br/>

          <span style={{
          fontWeight: 'bold',
          color: 'red',
          }}>{ErrorMessage}</span>

          <input type="password" id="password" class="fadeIn third passwordInput" name="login"   autocomplete = "off"  maxlength = "25" placeholder="Confirm Password"value={ConfPassword} onChange={(e) => setConfPassword(e.target.value)} />

          <input type="submit" class="fadeIn fourth submitInput" value="SUBMIT" />
        </form>

        <div id="formFooter">
        <a class="underlineHover la" href="/login">Already Registered?</a>
        </div>
      </div>
      </div>
</div>
    )
}

export default Register
