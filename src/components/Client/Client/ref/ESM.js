import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel} from "../../view/FormLabel";


const ESM = () => {

    //  const [Service_No, setService_No] = useState('');
    //  const [Reg_Type, setReg_Type] = useState('');
    // const [Service_Name, setService_Name] = useState('');
   const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {

    // }, []);


    return (
      <div className="center">
      <div className="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={ESM}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#DBE6FD"}}>
      <label className="header">REGISTRATION TYPE</label>
      </div>
      <div className="ESMContent">
      <p className="has-text-centered">{msg}</p>
      <div className="row">
      <div className = "right-align">
      <div >

        <label className = "col-lg-10 gap reg">Type of Registeration</label>


            <div className="col-lg-4 space">
                 <label >
                     <input type="checkbox"  className="fadeIn third formInput" required/> ESM
                 </label>
    <div><div>
   <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" value="PBOR"  required/>
     <label className="form-check-label" for="inlineRadio1">PBOR</label>
    </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" value="JCO" required/>
     <label className="form-check-label" for="inlineRadio2">JCO</label>
     </div>
</div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio3" value="HONY"  required/>
     <label className="form-check-label" for="inlineRadio3">HONY</label>
     </div>

      <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio4" value="APS" required/>
     <label className="form-check-label" for="inlineRadio3">APS</label>
     </div>

      <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio5" value="Officer"  required/>
     <label className="form-check-label" for="inlineRadio3">Officer</label>
     </div>

      <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio6" value="MNS" required/>
     <label className="form-check-label" for="inlineRadio3">MNS</label>
     </div>
     </div>
   </div>

                <div className="col-lg-4 space">
                    <label >
                     <input type="checkbox"  className="fadeIn third formInput"  required/>Widow
                   </label>
                </div>

                    <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" id="inlineRadio1"   required/>
                         <label className="form-check-label" for="inlineRadio3">ESM already registered </label>
                           </div>

                       <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id="inlineRadio2"  required/>
                             <label className="form-check-label" for="inlineRadio3">ESM have not registered</label>
                     </div>

            <div className="col-lg-4 space">
                 <label >
                     <input type="checkbox"  className="fadeIn third formInput" required/>Transfer
                 </label>
            </div>

               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" id="inlineRadio1"   required/>
                   <label className="form-check-label" for="inlineRadio3">On Transfer within RSB</label>
               </div>

               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" id="inlineRadio2"  required/>
                    <label className="form-check-label" for="inlineRadio3">On Transfer from other RSB</label>
               </div>


       </div>
       </div>




    {/*<FormLabel text={"Group"} />
<div className="col-lg-4 space">

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Group_Name" value="X" onChange={(e) => setGroup_Name(e.target.value)} required/>
     <label className="form-check-label" for="inlineRadio1">X</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Group_Name" value="Y" onChange={(e) => setGroup_Name(e.target.value)} required/>
     <label className="form-check-label" for="inlineRadio2">Y</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio3" name="Group_Name" value="Z" onChange={(e) => setGroup_Name(e.target.value)} required/>
     <label className="form-check-label" for="inlineRadio3">Z</label>
     </div>

</div>

*/}
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>


    </div>
    </form>
</div>
</div>
</div>
    )
}

export default ESM
