import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"

const Form9 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [Dep_Name, setDep_Name] = useState(localStorage.getItem('Dep_Name'));
    const [Relation, setRelation] = useState(localStorage.getItem('Relation'));
    const [Relate, setRelate] = useState(localStorage.getItem('Relate'));
    const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem('Dep_DOB'));
    const [Dep_Adhaar, setDep_Adhaar] = useState(localStorage.getItem('Dep_Adhaar'));
    const [Dep_Qualification, setDep_Qualification] = useState(localStorage.getItem('Dep_Qualification'));
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(localStorage.getItem('Dep_Academic_Yr'));
    const [Dep_Employment_Status, setDep_Employment_Status] = useState(localStorage.getItem('Dep_Employment_Status'));
    const [Dep_Marital_Status, setDep_Marital_Status] = useState(localStorage.getItem('Dep_Marital_Status'));
     const [useredit, setUserEdit] = useState([]);


const RELATION = ['Father`, 'Mother`, 'Daughter`, 'Son'];
const MARITAL_STATUS = ['Single`, 'Married`, 'Divorced`, 'Widower/Widow'];

const onAcademicChange = (e) =>  {
    const p = /^[0-9]+$/;
    if (e.target.value === "" || p.test(e.target.value))
    {

        setDep_Academic_Yr(e.target.value);
    }

}

const onAdhaarChange = (e) =>  {
    const a = /^[0-9]+$/;
    if (e.target.value === "" || a.test(e.target.value))
    {
     setDep_Adhaar(e.target.value);
    }

}

    const onRelationChange = (e) =>  {
        setRelation(e.target.value);
        switch(e.target.value) {
            case "Father":
                setDep_Marital_Status("Married")
                break
            case "Mother":
                setDep_Marital_Status("Married")
                break
            default:
                setDep_Marital_Status("")
        }
    }


    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const axiosJWT = axios.create();


    useEffect(() => {
        getUserEdit();
    }, []);

 const getUserEdit= async () => {
        const sn = localStorage.getItem('Dep_Name')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/EditForm8`,{
          params:{
            Dep_Name: sn
          }
        });
        setUserEdit(response.data);
    }


 const Form9 = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/u_dependent_details`, {
                Service_No:Service_No,
                Dep_Name: Dep_Name,
                Relation:Relation,
                Dep_DOB: Dep_DOB,
                Dep_Adhaar: Dep_Adhaar,
                Dep_Qualification: Dep_Qualification,
                Dep_Academic_Yr: Dep_Academic_Yr,
                Dep_Employment_Status: Dep_Employment_Status,
                Dep_Marital_Status: Dep_Marital_Status
            });

 navigate("/Form7");
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
    <form onSubmit={Form9}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>
            <div className = "right-align dis">
 <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
</div>
      <div className = "left-align dis">
      <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>

</div>
 </div>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">
    <FormLabel text={"Dependent Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Dep_Name" value={useredit.Dep_Name}onChange={(e) => setDep_Name(e.target.value.toUpperCase())}required />
         </div>

         <FormLabel text={"Relation"} />

        <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" value={useredit.Relation} onChange={onRelationChange} required>
         <option value="" disabled>--Select One--</option>
        {RELATION.map(c => <option key={c}>{c}</option>)}
        </select>
</div>


         <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="Date"  class="fadeIn second formInput" name="Dep_DOB" value={useredit.Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required/>
         </div>
         <FormLabel text={"Dependent Adhaar Card No."} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Dep_Adhaar" maxlength = "12" value={useredit.Dep_Adhaar} onChange={onAdhaarChange}required />
         </div>
         <FormLabel text={"Dependent Qualification"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn second formInput" name="Dep_Qualification " value={useredit.Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} required/>
          </div>
          <FormLabel text={"Dependent Academic Year"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Dep_Academic_Yr"  minlength = "4"  maxlength = "4" value={useredit.Dep_Academic_Yr} onChange={onAcademicChange} required />
          </div>

          <FormLabel text={"Dependent Employment Status"} />

 <div className="col-md-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Dep_Employment_Status"  value={useredit.Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} />
     <label className="form-check-label" for="inlineRadio1">Employed</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Dep_Employment_Status"  value={useredit.Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
     </div>
        </div>


         <FormLabel text={"Dependent Marital Status"} />

          <div className="col-md-4 space">

         <select  className="col-lg-9 dropdown_align" value={useredit.Dep_Marital_Status} onChange={e => setDep_Marital_Status
            (e.target.value)}>
         <option value="">--Select One--</option>
        {MARITAL_STATUS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
         </div>
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    {/*  <button className=" btn" onClick={gotoBackToStep7}>Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">ADD </button>*/}

    <button className=" btn" ><Link to="/Form7">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Update </button>
    </div>
    </form>
</div>
</div>

</div>


    )
}

// const Form8Display = () => <FormDisplay step={8} Form={Form8} />
export default Form9
