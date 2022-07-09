import React, { useState ,  useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from 'validator';



const ARegister = () => {
    const [name, setName] = useState('');
    const [service_no, setService_no] = useState('');
    const [board, setBoard] = useState('');
    const [board_name, setBoard_name] = useState('');
    const [RSB, setRSB] = useState('');
     const [rsb, setrsb] = useState([]);
     const [ZSB, setZSB] = useState('');
      const [zsb, setzsb] = useState([]);

     const [visible,setvisible]=useState(false);
     const [visible1,setvisible1]=useState(false);
     const [visible2,setvisible2]=useState(false);

    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const BOARD = ['KSB','RSB','ZSB'];
    const DESIGNATION = ['Director','Superintendent','Clerk'];

    const [ErrorMessage, setErrorMessage] = useState('')

    const [emailError, setEmailError] = useState('')




    useEffect(() => {
     getRSB();

     }, []);

     const axiosJWT = axios.create();




const checkBoard = (e) =>  {
  if(board === 'RSB'){
    setvisible(true)
    setvisible1(false)
    setvisible2(false)

  }

  else if(board === 'ZSB'){
    setvisible(true)
    setvisible1(true)
    setvisible2(false)

  }

  else if(board === 'KSB'){
    setvisible(false)
    setvisible1(false)
    setvisible2(true)

  }


 }

    const ARegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/admin', {
                name: name,
                service_no:service_no,
                board:board,
                board_name:board_name,
                designation: designation,
                email: email,
                mobile:mobile,
                password: password,
                confPassword: confPassword
            });
            navigate("/insert");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const getRSB = async () => {
     const response = await axiosJWT.get('http://localhost:5000/RSB_D');
     setrsb(response.data);
     }

     // const getZSB = async () => {
     //  const response = await axiosJWT.get('http://localhost:5000/ZSB_D');
     //  setzsb(response.data);
     //  }
     //


const getZSB = async () => {
          localStorage.setItem('RSB_Name',RSB)

           const sn=localStorage.getItem('RSB_Name');
           const response = await axiosJWT.get('http://localhost:5000/ZSB_D',
               {
                   params:{rsb:sn}
               });
           setzsb(response.data);
         }

         const onChange = (e) =>  {
             const re = /^[-A-Z/ \b]+$/;
             if (e.target.value.toUpperCase() === "" || re.test(e.target.value.toUpperCase()))
             {

                 setName(e.target.value.toUpperCase());
             }

         }

// onChange={(e) => setName(e.target.value)}
const onEmailChange = (e) =>  {

 const em = /^[A-Za-z@._0-9\b]+$/;
    if (e.target.value === "" || em.test(e.target.value))
    {

       setEmail(e.target.value);
     }
//onChange={(e) => setEmail(e.target.value)}
}

const validateEmail = (e) => {

    if (validator.isEmail(email)) {
      setEmailError('')
    } else if (email== ""){
      setEmailError('Enter Your Mail id')
    }
    else {
      setEmailError('It is not a correct email')

    }
  }


  const onMobileChange = (e) =>  {
     const m = /^[0-9\b]+$/;
      if (e.target.value === "" || m.test(e.target.value))
      {
          setMobile(e.target.value);
      }
      //onChange={(e) => setMobile(e.target.value)}

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


   const onpasswordChange = (e) =>  {

    const ps = /^[A-Z/*%!a-z0-9&$_@#\b]+$/;
       if (e.target.value === "" || ps.test(e.target.value))
       {
   // onChange={(e) => setPassword(e.target.value)}
           setPassword(e.target.value);
       }
     }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>
        <form onSubmit={ARegister}>
        <p className="has-text-centered">{msg}</p>
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Name"value={name}  onChange={onChange} required />
        <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="Service Number"value={service_no} onChange={(e) => setService_no(e.target.value)} required/>

          <input type="email" id="login" class="fadeIn second emailInput" name="login" placeholder="Email"value={email}  onClick={(e) => validateEmail(e.target.value)}  onChange={onEmailChange}  required/><br/>

                           <span style={{

                             color: 'red',
                           }}>{emailError}</span>

          <input type="text" id="login" class="fadeIn second numberInput" name="login" minlength = "10" maxlength= "12" placeholder="Mobile"value={mobile} onChange={onMobileChange}  />

<div className='row remove-pad '>
<div className='col-sm-5'>
<select id="login" class="fadeIn second textInput" value={board} onClick = {checkBoard} onChange={(e) => setBoard(e.target.value)} required>
<option value = "" disabled selected>Select Board</option>

{BOARD.map(c => <option key={c}>{c}</option>)}
</select>
</div></div>


{ visible &&
  <div className = "row">
<div className='row remove-pad '>
<div className='col-sm-5'>
<select  class="fadeIn second textInput" name = "RSB" value={RSB}onChange={(e) => setRSB(e.target.value)} required>
<option value = "" disabled selected>Select RSB</option>

{rsb.map((user, index) => (
<option key={user.id}value={user.RSB_Name}>{user.RSB_Name}</option>
))}</select>
</div></div>

<div className='row remove-pad '>
<div className='col-sm-5'>
{/*}<select  class="fadeIn second textInput" name = "ZSB"  onClick = {getZSB} value={ZSB}onChange={(e) => setBoard_name(e.target.value)} required>

<option value = "" disabled selected>Select ZSB</option>

{zsb.map((user, index) => (
<option key={user.id}value={user.ZSB_Name}>{user.ZSB_Name}</option>
))}</select>
<input type="text" class=" numberInput" name="login" value={board_name}  />
*/}
</div></div>


</div>

}


{ visible1 &&
  <div className = "row">
<div className='row remove-pad '>
<div className='col-sm-5'>
<select  class="fadeIn second textInput" name = "ZSB"  onClick = {getZSB} value={ZSB}onChange={(e) => setBoard_name(e.target.value)}>
<option value = "" disabled selected>Select ZSB</option>

{zsb.map((user, index) => (
<option key={user.id}value={user.ZSB_Name}>{user.ZSB_Name}</option>
))}</select>
<input type="text" class=" numberInput" name="login" value={board_name} onChange={(e) => setBoard_name(e.target.value)} />

</div></div></div>}

{ visible2  &&   <div className = "col-sm-6">

<input type="text" class=" numberInput" name="login" value="Delhi" onChange={(e) => setBoard_name(e.target.value)} />
</div>}


          {/*}<div className='col-sm-6 '>
          <input type="text" id="login" class="fadeIn second textInput" name="login" placeholder="board_name"value={board_name} onChange={(e) => setBoard_name(e.target.value)} />
          </div>*/}
          <select id="login" class="fadeIn second textInput" value={designation}onChange={(e) => setDesignation(e.target.value)} required>
          <option style={{color:'grey'}} >select Designation</option>

          {DESIGNATION.map(c => <option key={c}>{c}</option>)}
          </select>

          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Password"value={password} onClick={(e) => validate(e.target.value)} onChange={onpasswordChange} required/><br/>
          <span style={{
          fontWeight: 'bold',
          color: 'red',
          }}>{ErrorMessage}</span>



          <input type="password" id="password" class="fadeIn third passwordInput" name="login" placeholder="Confirm Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required/>


          <input type="submit" class="fadeIn fourth submitInput" value="Register" />
        </form>

                            </div>
                            </div>
                      </div>
    )
}

export default ARegister
