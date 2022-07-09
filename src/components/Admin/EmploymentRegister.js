import React, { useState,useEffect } from 'react'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';

const Emp_login = () => {
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Status, setStatus] = useState('');
    const [Emp_Status, setEmp_Status] = useState('');

    const [Reg_Type, setReg_Type] = useState('');
    const [visibleWidow, setvisibleWidow] = useState(false)
    const [visibleEsm, setvisibleEsm] = useState(false)

    const navigate = useNavigate();
    const [v1, setv1] = useState(false)
    const [v2, setv2] = useState(false);

    const [F, setF] = useState(false)
    const [E, setE] = useState(false);
    const [VF, setVF] = useState(false);
    const [EF, setEF] = useState(false);
    const [WV, setWV] = useState(false);
    const [WE, setWE] = useState(false);
    const [EmpView, setEmpView] = useState(false);
    const [EmpEdit, setEmpEdit] = useState(false);


    useEffect(() => {
    getStatus();
    getReg_Type();
    }, []);

    useEffect(() => {
     ESMReg();
getEmp_Status();
    });

    const axiosJWT = axios.create();

    const getStatus  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getUserStatus',{

             params:{
               Service_No: Service_No
             }
           });
           setStatus(response.data);
         }


              const getEmp_Status  = async () => {
                     const response = await axiosJWT.get('http://localhost:5000/getEmp_Status',{

                       params:{
                         Service_No: Service_No
                       }
                     });
                     setEmp_Status(response.data);
                   }


const  ESMReg = () =>  {
else if(Reg_Type=="Widow"){
  setvisibleEsm(false);
  setvisibleWidow(true);

  if(Status=="Not Submitted"){
    setv2(true);
    // setv1(false);
    setWV(false);
    setWE(false);

  }else if(Status=="Submitted"){
    setv2(false);
    // setv1(false);
    setWV(true);
    setWE(false);

  }else if(Status=="Observation"){
    setv2(false);
    // setv1(false);
    setWV(false);
    setWE(true);

  }else if(Status=="Approved"){
    setv2(false);
    setWV(true);
    setWE(false);
    setv3(true)

  }
}
}

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

         <form >


         <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
         <div><br/>
         <span style={{color: 'white', fontWeight : '900', fontStyle : 'italic' , fontFamily : 'Times New Roman'}} > EMPLOYMENT REGISTRATION</span><br/><br/>

        </div>  </div>

        <input type="text" class="fadeIn third textInput" name="login" value={Emp_Status} />

         <br /><br />
         {visibleEsm && <div>

            {F && <div>

          <button onClick={NewReg} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > New ESM Registration </button><br /><br />


          <button onClick={ViewForm} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > View ESM Registration </button><br /><br />


          <button onClick={ViewForm} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > View ESM Registration </button><br /><br />

          <button onClick={EditForm} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} > Edit ESM Form </button><br /><br />
          </div>}
          <button onClick={Transfer} class=" btn"style={{backgroundColor:"#243A73",color:"#fff"}} >Transfer </button><br /><br />
</div>}


        </form>

        <div id="formFooter">
          <a class="underlineHover la" ><Link to="/"><b>Back</b></Link></a>
        </div>

      </div>
      </div>
</div>
    )
}

export default Emp_login
