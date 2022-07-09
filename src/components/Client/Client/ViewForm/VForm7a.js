import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel"; 
import FormInput from "../../view/FormInput";

 

const VForm7a = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('A_Name'));
    const [Dep_Name, setDep_Name] = useState(localStorage.getItem('A_Dep_Name'));
    const [Relation, setRelation] = useState(localStorage.getItem('A_Relation'));
    const [Relate, setRelate] = useState(''); 
    const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem('A_Dep_DOB'));
    const [Dep_Adhaar, setDep_Adhaar] = useState(localStorage.getItem('A_Dep_Adhaar'));
    const [Dep_Qualification, setDep_Qualification] = useState(localStorage.getItem('A_Dep_Qualification'));
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(localStorage.getItem('A_Dep_Academic_Yr'));
    const [Dep_Employment_Status, setDep_Employment_Status] = useState(localStorage.getItem('A_Dep_Employment_Status'));
    const [Dep_Marital_Status, setDep_Marital_Status] = useState(localStorage.getItem('A_Dep_Marital_Status'));
    const [dep, setdep] = useState([]);
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [disabled, setdisabled] = useState('')

  useEffect(() => {
       
        getdep();
    }, []);



    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    const getdep = async () => {
      const sn=localStorage.getItem('A_Dep_Name');
      const response = await axiosJWT.get('http://localhost:5000/form8dep',
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

 
 

    return (
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >
    <form >
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>
     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
     </div>
 </div>
     <div className="upperForm1Content">

 <div className="row">
         
 <FormLabel text={"Dependent Name"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" disabled  name="Dep"value={Dep_Name}  />
 </div>

 <FormLabel text={"Relation"} />
      <div className="col-lg-4 space">
       <input type="text"  className="fadeIn second formInput" disabled name="Relation " value={Relation} />
</div>
 <FormLabel text={"Dependent DOB"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" disabled name="DOB"value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)}  />
 </div>

 <FormLabel text={"Dependent Adhaar Card No."} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"disabled name="DOB"value={Dep_Adhaar}   />
 </div>

 <FormLabel text={"Dependent Qualification"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" disabled   name="DOB"value={Dep_Qualification} />
 </div>

 <FormLabel text={"Dependent Academic Year"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" disabled   name="DOB"value={Dep_Academic_Yr}  />
 </div>

 <FormLabel text={"Dependent Employment Status"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"disabled  name="DOB"value={Dep_Employment_Status}/>
 </div>

 <FormLabel text={"Dependent Marital Status"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"disabled  name="Dep_Marital_Status"value={Dep_Marital_Status} />
 </div>

    </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/vForm7">Back</Link> </button>
    <button className=" btn" ><Link to="/AS_DocForm">Next</Link> </button>

  </div>
    </div>
    </form>
</div>
</div>

</div>


    )
}
export default VForm7a
