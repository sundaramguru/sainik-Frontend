import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";


const WidowForm = () => {

  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Widow_Reg_No, setWidow_Reg_No] = useState('');
    const [Family_Pension, setFamily_Pension] = useState('');
    const [Death_Date, setDeath_Date] = useState('');
    const [Death_Nature, setDeath_Nature] = useState('');
    const [ESM_No, setESM_No] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [Registered_date, setRegistered_date] = useState('');




    const axiosJWT = axios.create();

    useEffect(() => {
     getRegisterDate();

    }, []);


    const getRegisterDate  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getRegisterDate',{

             params:{
               Service_No: Service_No
             }
           });
           setRegistered_date(response.data);
         }



    const WidowForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_widow_details', {
                Service_No:Service_No,
                Family_Pension:Family_Pension,
                Death_Date: Death_Date,
                Death_Nature: Death_Nature,
                ESM_No: ESM_No,
                Registered_date: Registered_date


            });
            alert(' Widow Registration Successfully Completed !!!');
            if(localStorage.getItem('Reg_TypeForm') ==="Not Registered"){
              navigate("/form1");
            }else{
              navigate("/WidowForm1");
            }

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >
    <form onSubmit={WidowForm}>
    {/* -------------------------------- HEADER ------------------------------------*/}
         <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
           <label className="header">Widow Details</label>
           <div className = "right-align dis">
               <label className="sn-mar">{"Service No :"}</label> {Service_No}
          </div>
         </div>
    {/* -------------------------------- HEADER ------------------------------------*/}
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">

    <input type="hidden"   name="Registered_date"  value={Registered_date} onChange={(e) => setRegistered_date(e.target.value)} />

        <FormLabel text={"ESM No."} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" autocomplete = "off" name="ESM_No" value={ESM_No} onChange={(e) => setESM_No(e.target.value)} required/>
          </div>
        <FormLabel text={"Death Date"} />

         <div className="col-lg-4 space">
         <input type="date"  class="fadeIn second formInput" name="Death_Date" value={Death_Date} onChange={(e) => setDeath_Date(e.target.value)} required/>
         </div>
          <FormLabel text={"Death Nature"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "35" minlength = "5" name="Death_Nature " value={Death_Nature} onChange={(e) => setDeath_Nature(e.target.value)} required/>
          </div>


         <FormLabel text={"Family Pension"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "6" minlength = "3" name="Family_Pension" value={Family_Pension} onChange={(e) => setFamily_Pension(e.target.value)} required/>
         </div>


</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/widowform1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

export default WidowForm
