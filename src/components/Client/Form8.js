import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormDisplay from "./Form0"
import ms from 'ms';
import moment from 'moment';

const Form8 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Registered_date, setRegistered_date] = useState('');

    const [Name, setName] = useState('');
    const [Dep_Name, setDep_Name] = useState('');
    const [Relation, setRelation] = useState('');
    const [Dep_DOB, setDep_DOB] = useState('');
    const [Dep_Adhaar, setDep_Adhaar] = useState('');
    const [Dep_Qualification, setDep_Qualification] = useState('');
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState('');
    const [Dep_Employment_Status, setDep_Employment_Status] = useState('');
    const [Dep_Marital_Status, setDep_Marital_Status] = useState('');
    const [dep, setdep] = useState([]);
    const[visible,setVisible]=useState(true);
    const[visible2,setVisible2]=useState(false);
    const[visibled,setVisibled]=useState(true);
    const[visibledd,setVisibledd]=useState(false);

    const [DOB1, setDOB1] = useState(localStorage.getItem('Marriage_Date'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [CDate, setCDate] = useState('')

    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');
    const [DOB, setDOB] = useState(localStorage.getItem('DOB'));
    const [DOB2, setDOB2] = useState(localStorage.getItem('DOB'));
    const [fminDate, setfminDate]= useState('');
    const [fmaxDate, setfmaxDate]= useState('');
    const [dminDate, setdminDate]= useState('');
    const [dmaxDate, setdmaxDate]= useState('');

 useEffect(() => {
   getName();
        getDDOB();
        // getdep();
         getRegisterDate();
         // creatDRow();

    }, []);


useEffect(() => {

       const minsecs = ms('1d');
       const minsec = ms('1d');

       const max_date = new Date(+new Date(CDate) - minsecs);
       const min_date = new Date(+new Date(DOB1) + minsec);

       setdmaxDate(moment(max_date).format('YYYY-MM-DD'));
       setdminDate(moment(min_date).format('YYYY-MM-DD'));

     }, [CDate] , [DOB1]);

     //SUCCESS ELD DEPENDENT DATE OF BIRTH

     // useEffect(() => {
     //
     //       const minsecsss = ms('3650d');
     //       const minsece = ms('3650d');
     //
     //       const max_date = new Date(+new Date(DOB1) - minsecsss);
     //       const min_date = new Date(+new Date(DOB2) - minsece);
     //
     //       setfmaxDate(moment(max_date).format('YYYY-MM-DD'));
     //       setfminDate(moment(min_date).format('YYYY-MM-DD'));
     //
     //     }, [DOB1] , [DOB2]);

    //SUCCESS ELD DEPENDENT DATE OF BIRTH

    const getRegisterDate  = async () => {
           const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getRegisterDate`,{

             params:{
               Service_No: Service_No
             }
           });
           setRegistered_date(response.data);
         }



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


const creatDRow = async (e) => {
   // const formData = new FormData();
   // formData.append("Service_No", Service_No);
   // formData.append("Dep_Name", Dep_Name);
   // formData.append("Relation", Relation);


   try {
      await axios.post("${process.env.REACT_APP_BACKEND_URL}/creatDRow",{
       Service_No:Service_No,
       Dep_Name:Dep_Name,
       Relation:Relation}
     );
   } catch (ex) {
     console.log(ex);
   }
 };


const RELATION = ['Father`, 'Mother`, 'Daughter`, 'Son'];
const MARITAL_STATUS = ['Single`, 'Married`, 'Divorced`, 'Widow/Widower'];

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
                setVisible2(true)
                  setVisibledd(true)
                    setVisibled(false)
                 setVisible(false)
                break
            case "Mother":
                setDep_Marital_Status("Married")
                setVisible2(true)
                  setVisibledd(true)
                    setVisibled(false)
                 setVisible(false)
                break
            default:
              setVisible(true)
                setVisible2(false)
                setDep_Marital_Status("")
                  setVisibled(true)
                    setVisibledd(false)
        }
    }

const onDepNameChange = (e) =>  {
    const a = /^[A-Z- /]+$/;
    if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {
     setDep_Name(e.target.value.toUpperCase());
    }

}


    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    {/*const getdep = async () => {
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/dep');
        setdep(response.data);
    }*/}

    // const getdep = async () => {
    //     const sn=localStorage.getItem('A_Dep_Name')
    //     const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/Form8dep`,{
    //         params:{
    //             Dep_Name: sn
    //         }
    //     });
    //     setdep(response.data);
    // }


    const Form8 = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/u_dependent_details`, {
                Service_No:Service_No,
                Dep_Name: Dep_Name,
                Registered_date:Registered_date,
                Relation:Relation,
                Dep_DOB: Dep_DOB,
                Dep_Adhaar: Dep_Adhaar,
                Dep_Qualification: Dep_Qualification,
                Dep_Academic_Yr: Dep_Academic_Yr,
                Dep_Employment_Status: Dep_Employment_Status,
                Dep_Marital_Status: Dep_Marital_Status
            });
            localStorage.setItem('Dep_Name`,Dep_Name)
            localStorage.setItem('Relation`,Relation)

creatDRow()
 navigate("/D_DocForm");
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
    <form onSubmit={Form8}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>


     <div className = "left-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
    </div>



    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">
    <input type="hidden"   name="Registered_date"  value={Registered_date} onChange={(e) => setRegistered_date(e.target.value)} />

         <input type="hidden"  class="  textInput" name="CDate"  value={CDate} onChange={(e) => setCDate(e.target.value)} />

         <input type="hidden"  class="  formInput" maxlength= "20" autocomplete = "off" name="DOB1"  value={DOB1} onChange={(e) => setMarriage_Date(e.target.value)}  />


         <FormLabel text={"Dependent Name "} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Name" value={Dep_Name} onChange={onDepNameChange} required/>
         <label>(Enter FullName)</label>

         </div>

<input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />


         <FormLabel text={"Relation"} />

         <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" value={Relation} onChange={onRelationChange} required>
         <option value="" disabled>--Select One--</option>
        {RELATION.map(c => <option key={c}>{c}</option>)}
        </select>
</div>


{ visibled &&
           <div className = "row">
         <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="Date"  class=" fadeIn second formInput" name="Dep_DOB"  min = {dminDate} max = {dmaxDate} value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required/>
         </div></div>}


         { visibledd &&
                    <div className = "row">
                    <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="hidden"  class=" fadeIn third formInput" maxlength= "20" autocomplete = "off" name="DOB2"  value={DOB2} onChange={(e) => setDOB(e.target.value)}  />

         <input type="Date"  class="  formInput" name="Dep_DOB"  value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required/>
         </div>
         </div>}


         <FormLabels text={"Dependent Adhaar Card No."} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Adhaar" maxlength="12" minlength = "12" value={Dep_Adhaar}  onChange={onAdhaarChange}  />
         </div>
         <FormLabels text={"Dependent Qualification"} />

          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" name="Dep_Qualification " value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} />
          </div>
          <FormLabels text={"Dependent Academic Year"} />

          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" name="Dep_Academic_Yr" maxlength="4" minlength = "4" value={Dep_Academic_Yr} onChange={onAcademicChange}  />
          </div>

          <FormLabel text={"Dependent Employment Status"} required/>
          <div className="col-lg-4 space">

          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio"  id="inlineRadio1" name="Dep_Employment_Status"  value="Employed" onChange={(e) => setDep_Employment_Status(e.target.value)} required/>
          <label className="form-check-label" for="inlineRadio1">Employed</label>
          </div>

          <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="inlineRadio2" name="Dep_Employment_Status"  value="UnEmployed" onChange={(e) => setDep_Employment_Status(e.target.value)} required/>
          <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
          </div>

        </div>

        { visible &&
                   <div className = "row">

         <FormLabel text={"Dependent Marital Status"} />

         <div className="col-lg-4 space">

         <select  className="col-lg-9 dropdown_align" value={Dep_Marital_Status} onChange={e => setDep_Marital_Status (e.target.value)} required>
         <option value="" disabled>--Select One--</option>
        {MARITAL_STATUS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
         </div>

         </div>
     }

 { visible2 &&
           <div className = "row">
        <FormLabel text={"Dependent Marital Status"} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Marital_Status"  value={Dep_Marital_Status}   required/>
         </div>

         </div>
 }


</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>

<div className="col-lg-12 right-align " >
     <span style={{color: 'red`, fontWeight : '900`, fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
     </div>
    <button className=" btn" ><Link to="/form7">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    </div>
    </form>
</div>
</div>
</div>


    )
}
const Form8Display = () => <FormDisplay step={8} Form={Form8} />
export default Form8Display
