import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form8 = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
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
    const [Img, setImg] = useState();
    const [ImgName, setImgName] = useState();
    const [Imgpicture, setImgpicture] = useState();

 const saveImg = (e) => {
   setImg(e.target.files[0]);
   setImgName(e.target.files[0].name);
   setImgpicture(URL.createObjectURL(e.target.files[0]));
 };
const uploadImg = async (e) => {
   const formData = new FormData();
   formData.append("Service_No", Service_No);
   formData.append("Name", Name);

   formData.append("Img", Img);
   formData.append("ImgName", ImgName);

   try {
     const res = await axios.post(
       "http://localhost:5000/uploadImg",
       formData
     );
     console.log(res);
   } catch (ex) {
     console.log(ex);
   }
 };


const RELATION = ['Father', 'Mother', 'Daughter', 'Son'];
const MARITAL_STATUS = ['Unmarried', 'Married', 'Divorced', 'Widower/Widow'];

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
                 setVisible(false)
                break
            case "Mother":
                setDep_Marital_Status("Married")
                setVisible2(true)
                 setVisible(false)
                break
            default:
              setVisible(true)
                setVisible2(false)
                setDep_Marital_Status("")
        }
    }

const onDepNameChange = (e) =>  {
    const a = /^[A-Z- /]+$/;
    if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {
     setDep_Name(e.target.value.toUpperCase());
    }

}

    useEffect(() => {
        getdep();
    }, []);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    {/*const getdep = async () => {
        const response = await axiosJWT.get('http://localhost:5000/dep');
        setdep(response.data);
    }*/}

    const getdep = async () => {
        const sn=localStorage.getItem('A_Dep_Name')
        const response = await axiosJWT.get('http://localhost:5000/Form8dep',{
            params:{
                Dep_Name: sn
            }
        });
        setdep(response.data);
    }


    const Form8 = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/u_dependent_details', {
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

            uploadImg();

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
    <div className = "right-align dis">
     <div className = "right-align dis">
           <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
         </div>{/*
         <div className = "left-align dis">
            <label className="sn-mar ">{"Name :"}</label> <h1>{Name}</h1>
         </div>*/}
       </div>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">



         <FormLabel text={"Dependent Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Name" value={Dep_Name} onChange={onDepNameChange} required/>
         </div>

         <FormLabel text={"Relation"} />

         <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" value={Relation} onChange={onRelationChange} required>
         <option value="" disabled>--Select One--</option>
        {RELATION.map(c => <option key={c}>{c}</option>)}
        </select>
</div>
         <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="Date"  class="  formInput" name="Dep_DOB" value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required/>
         </div>
         <FormLabel text={"Dependent Adhaar Card No."} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Adhaar" maxlength="12" minlength = "12" value={Dep_Adhaar}  onChange={onAdhaarChange} required />
         </div>
         <FormLabel text={"Dependent Qualification"} />

          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" name="Dep_Qualification " value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} />
          </div>
          <FormLabel text={"Dependent Academic Year"} />

          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" name="Dep_Academic_Yr" maxlength="4" minlength = "4" value={Dep_Academic_Yr} onChange={onAcademicChange}  />
          </div>

          <FormLabel text={"Dependent Employment Status"} />
          <div className="col-md-4 space">
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
                   <div>

         <FormLabel text={"Dependent Marital Status"} />

         <div className="col-md-4 space">

         <select  className="col-lg-9 dropdown_align" value={Dep_Marital_Status} onChange={e => setDep_Marital_Status (e.target.value)} required>
         <option value="" disabled>--Select One--</option>
        {MARITAL_STATUS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
         </div>

         </div>
     }

 { visible2 &&
           <div>
        <FormLabel text={"Dependent Marital Status"} />

         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" name="Dep_Marital_Status"  value={Dep_Marital_Status}   required/>
         </div>

         </div>
 }

 <FormLabel text={"Passport Size Photo"} />
 <div className="col-lg-4 space">
 <input type="file"  className="formInput"  accept="image/*" name="pp" onChange={saveImg} />
 </div>

</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form7">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">ADD </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}
const Form8Display = () => <FormDisplay step={8} Form={Form8} />
export default Form8Display
