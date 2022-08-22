import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormDisplay from "./Form0"
import FormInput from "../../view/FormInput";
import ms from 'ms';
import moment from 'moment';


const Form7Edit = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState('');
    const [Dep_Name, setDep_Name] = useState(localStorage.getItem('V_Dep_Name'));
    const [Relation, setRelation] = useState(localStorage.getItem('V_Relation'));
    const [Relate, setRelate] = useState('');
    const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem('V_Dep_DOB'));
    const [Dep_Adhaar, setDep_Adhaar] = useState(localStorage.getItem('V_Dep_Adhaar'));
    const [Dep_Qualification, setDep_Qualification] = useState(localStorage.getItem('V_Dep_Qualification'));
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(localStorage.getItem('V_Dep_Academic_Yr'));
    const [Dep_Employment_Status, setDep_Employment_Status] = useState(localStorage.getItem('V_Dep_Employment_Status'));
    const [Dep_Marital_Status, setDep_Marital_Status] = useState(localStorage.getItem('V_Dep_Marital_Status'));
    const [dep, setdep] = useState([]);
    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');
    const [DOB1, setDOB1] = useState(localStorage.getItem('Marriage_Date'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [CDate, setCDate] = useState('')

  useEffect(() => {
    getName();
        getDDOB();
        getdep();
    }, []);



useEffect(() => {

       const minsecs = ms('1d');
       const minsec = ms('1d');

       const max_date = new Date(+new Date(CDate) - minsecs);
       const min_date = new Date(+new Date(DOB1) + minsec);

       setmaxDate(moment(max_date).format('YYYY-MM-DD'));
       setminDate(moment(min_date).format('YYYY-MM-DD'));

     }, [CDate] , [DOB1]);

     const getName  = async () => {
            const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getName`,{

              params:{
                Service_No: Service_No
              }
            });
            setName(response.data);
          }

const getDDOB  = async () => {
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getDOB`,{

          params:{
            Service_No: Service_No
          }
        });
        setCDate(response.data);
      }





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

const onDepNameChange = (e) =>  {
    const a = /^[A-Z- /]+$/;
    if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {
     setDep_Name(e.target.value.toUpperCase());
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

    const getdep = async () => {
      const sn=localStorage.getItem('V_Dep_Name');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/form8dep`,
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

 const Form7Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Form7Edit`, { // TO  UPDATE
                Service_No:Service_No,
                checkDep_Name: localStorage.getItem('V_Dep_Name'),
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
    const Delete = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Form7Delete`, {
              Service_No:Service_No,
              checkDep_Name: Dep_Name,
              Relation:Relation

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
    <form onSubmit={Form7Edit}>
    <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
      <label className="header">Details of Family Members</label>
     <div>

     <div className = "left-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

 </div>
      </div>
     <div className="upperForm1Content">

 <div className="row">
          <input type="hidden"  class="  textInput" name="CDate"  value={CDate} onChange={(e) => setCDate(e.target.value)} />

         <input type="hidden"  class="  formInput" maxlength= "20" autocomplete = "off" name="DOB1"  value={DOB1} onChange={(e) => setMarriage_Date(e.target.value)}  />


 <FormLabel text={"Dependent Name"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"  autocomplete = "off" name="Dep"value={Dep_Name} onChange={onDepNameChange} required/>
 </div>
<input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />
 <FormLabel text={"Relation"} />
      <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" value={Relation} onChange={onRelationChange} required>
         <option value="" disabled selected>--Select One--</option>
        {RELATION.map(c => <option key={c}>{c}</option>)}
        </select>
</div>
 <FormLabel text={"Dependent DOB"} />
 <div className="col-lg-4 space">
 <input type="date"  className="fadeIn second formInput" min = {minDate} max = {maxDate}   autocomplete = "off" name="DOB"value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required />
 </div>

 <FormLabels text={"Dependent Adhaar Card No."} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" maxlength="12" minlength="12" autocomplete = "off" name="DOB"value={Dep_Adhaar} onChange={onAdhaarChange}  />
 </div>

 <FormLabel text={"Dependent Qualification"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"  autocomplete = "off" name="DOB"value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} required/>
 </div>

 <FormLabel text={"Dependent Academic Year"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput" maxlength="4" minlength="4" autocomplete = "off" name="DOB"value={Dep_Academic_Yr}  onChange={onAcademicChange}required/>
 </div>

 <FormLabel text={"Dependent Employment Status"} />
 <div className="col-lg-4 space">
 <input type="text"  className="fadeIn second formInput"  autocomplete = "off" name="DOB"value={Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} required/>
 </div>

 <FormLabel text={"Dependent Marital Status"} />
 <div className="col-md-4 space">

         <select  className="col-lg-9 dropdown_align" value={Dep_Marital_Status} onChange={e => setDep_Marital_Status(e.target.value)} required>
         <option value="" disabled selected>--Select One--</option>
        {MARITAL_STATUS.map(c => <option key={c} value={c}>{c}</option>) }
        </select>
         </div>

    </div>
    </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <div className="col-lg-12 right-align " >
    <span style={{color: 'red`, fontWeight : '900`, fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
    </div>
    <button className=" btn" ><Link to="/Form7">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={Form7Edit}>Edit </button>
    <button className="btn my-2 my-sm-0 " onClick={Delete} >Delete </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/D_DocForm">Next </Link></button>

    </div>

    </form>
</div>
</div>

</div>


    )
}
export default Form7Edit
