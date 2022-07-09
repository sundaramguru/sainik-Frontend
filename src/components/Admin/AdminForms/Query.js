import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import emailjs from 'emailjs-com';


const Query = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));
    const [Name, setName] = useState('');
    const [Mail_Id, setMail_Id] = useState('');
    const [obs, setobs] = useState('');
    const [C, setC] = useState(false);
    const [S, setS] = useState(false);
    const [D, setD] = useState(false);

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
    getMail();
  getName();
  // check();
    }, []);
  //   useEffect(() => {
  //
  // check();
  //   });
const des=localStorage.getItem('A_Designation')

const check=() =>  {
if(des=="Clerk"){
  setC(true)
}else if(des=="Superintendent"){
  setS(true)
}else if(des=="Director"){
  setD(true)
}
}
    const axiosJWT = axios.create();

    const getName  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getName',{

             params:{
               Service_No: Service_No
             }
           });
           setName(response.data);
         }

         const getMail  = async () => {
             const response = await axiosJWT.get('http://localhost:5000/getForgetMail1',{

               params:{
                 Service_No: Service_No
               }
             });
             setMail_Id(response.data);
             check()
           }

     // GET MAIL FROM DB


     // SEND MAIL TO USER

     const sendEmail = (e) => {

     e.preventDefault();

         emailjs.sendForm('service_rbzd1k8', 'template_wmme75m', e.target, 'k5EQQST9u4rPVvIWi')
           .then((result) => {
               console.log('SUCCESS!',result.text);
           }, (error) => {
               console.log('FAILED...',error.text);
           });
           e.target.reset()

           alert('mail sent Successfully')
           navigate('/superDash')

     };

    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >



{/*---------------------------------------------HEADER ----------------------------------------*/}
      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Query</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>
{/*---------------------------------------------HEADER ----------------------------------------*/}

      <div className="upperForm1Content">

<form onSubmit={sendEmail}>
<div className="col-lg-9 nospace">

<label>Email :</label> &nbsp;&nbsp; <input type="text" className='textInput'  autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} /><br/><br/>
</div>
 {C && <div>
<textarea rows="4" cols="100" name = "obs"  value={localStorage.getItem('Clerk_Query')} onChange={(e) => setobs(e.target.value)}  /><br/>
</div>}
{S && <div>

<textarea rows="4" cols="100" name = "obs"  value={localStorage.getItem('Superintendent_Query')} onChange={(e) => setobs(e.target.value)}  /><br/>
</div>}

{D && <div>

<textarea rows="4" cols="100" name = "obs"  value={localStorage.getItem('Director_Query')} onChange={(e) => setobs(e.target.value)}  /><br/>
</div>}


<button className = "btn btn-primary "  type="submit" >  SEND QUERY TO USER =></button><br/><br/>

    </form>
</div>

</div>
</div>

</div>
</div>
    )
}

export default Query
