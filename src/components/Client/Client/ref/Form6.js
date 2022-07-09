  import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form6 = () => {
 //localStorage.clear();

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Marital_Status, setMarital_Status] = useState(localStorage.getItem('Marital_Status'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('Marriage_Date'));
    const [Spouse_Name, setSpouse_Name] = useState(localStorage.getItem('Spouse_Name'));
    const [Spouse_Relation, setSpouse_Relation] = useState(localStorage.getItem('Spouse_Relation'));
    const [Spouse_DOB, setSpouse_DOB] = useState(localStorage.getItem('Spouse_DOB'));
    const [Spouse_Id_Mark, setSpouse_Id_Mark] = useState(localStorage.getItem('Spouse_Id_Mark'));
    const [Spouse_Qualification, setSpouse_Qualification] = useState(localStorage.getItem('Spouse_Qualification'));
    const [Spouse_Emp_Status, setSpouse_Emp_Status] = useState(localStorage.getItem('Spouse_Emp_Status'));
    const [Spouse_Adhaar, setSpouse_Adhaar] = useState(localStorage.getItem('Spouse_Adhaar'));
    const [Spouse_Voter_Id, setSpouse_Voter_Id] = useState(localStorage.getItem('Spouse_Voter_Id'));
    const [Spouse_PAN, setSpouse_PAN] = useState(localStorage.getItem('Spouse_PAN'));
    const [Spouse_CSD, setSpouse_CSD] = useState(localStorage.getItem('Spouse_CSD'));
    const [Spouse_ECHS, setSpouse_ECHS] = useState(localStorage.getItem('Spouse_ECHS'));
    const [Spouse_Dept, setSpouse_Dept] = useState(localStorage.getItem('Spouse_Dept'));
    const [Spouse_Sector, setSpouse_Sector] = useState(localStorage.getItem('Spouse_Sector'));
    const [Spouse_Pres_Desg, setSpouse_Pres_Desg] = useState(localStorage.getItem('Spouse_Pres_Desg'));
    const [Spouse_Employer, setSpouse_Employer] = useState(localStorage.getItem('Spouse_Employer'));
    const [Spouse_Month_Income, setSpouse_Month_Income] = useState(localStorage.getItem('Spouse_Month_Income'));
    const [Spouse_Official_No, setSpouse_Official_No] = useState(localStorage.getItem('Spouse_Official_No'));
    const [Spouse_Desg_Retire, setSpouse_Desg_Retire] = useState(localStorage.getItem('Spouse_Desg_Retire'));
    const [Spouse_Retire_Date, setSpouse_Retire_Date] = useState(localStorage.getItem('Spouse_Retire_Date'));
    const [Spouse_Civil_PPO_No, setSpouse_Civil_PPO_No] = useState(localStorage.getItem('Spouse_Civil_PPO_No'));

    const [Divorce_Date, setDivorce_Date] = useState(localStorage.getItem('Divorce_Date'));
    const [Court_Order, setCourt_Order] = useState(localStorage.getItem('Court_Order'));
    const [Death_Date, setDeath_Date] = useState(localStorage.getItem('Death_Date'));
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
   formData.append("Img", Img);
   formData.append("ImgName", ImgName);

   try {
     const res = await axios.post(
       "http://localhost:5000/upload_SImg",
       formData
     );
     console.log(res);
   } catch (ex) {
     console.log(ex);
   }
 };



    const gotoBackToStep5 = () => navigate("/new/step-5", { replace: true })
    const gotoToNextStep7 = () => navigate("/new/step-7", { replace: true })
    const [civil, setCivil] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const[visible,setVisible]=useState(false);
    const[visible2,setVisible2]=useState(false);
    const[visible3,setVisible3]=useState(false);

    const[D_visible,setD_Visible]=useState(false);
    const[W_visible,setW_Visible]=useState(false);

    const[disabled,setdisabled]=useState(true);
    const[checked, setchecked] = useState('false');


    useEffect(() => {
        getCivil();

    }, []);


const axiosJWT = axios.create();

     const getCivil = async () => {
     const response = await axiosJWT.get('http://localhost:5000/civil_D');
    setCivil(response.data);
    }



const onSNameChange = (e) =>  {
 const a = /^[A-Z/ \b]+$/;

     if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {

        setSpouse_Name(e.target.value.toUpperCase());
    }

}


const onSAdhaarChange = (e) =>  {
 const a = /^[0-9/\b]+$/;

     if (e.target.value === "" || a.test(e.target.value))
    {

        setSpouse_Adhaar(e.target.value);
    }

}
const onSVoterChange = (e) =>  {
 const v = /^[A-Z0-9/\b]+$/;

     if (e.target.value.toUpperCase() === "" || v.test(e.target.value.toUpperCase()))
    {

        setSpouse_Voter_Id(e.target.value.toUpperCase());
    }

}
const onSPANChange = (e) =>  {
 const p = /^[A-Z0-9\b]+$/;

     if (e.target.value.toUpperCase() === "" || p.test(e.target.value.toUpperCase()))
    {

        setSpouse_PAN(e.target.value.toUpperCase());
    }

}

const onSCSDChange = (e) =>  {
 const c = /^[A-Z0-9/\b]+$/;

     if (e.target.value.toUpperCase() === "" || c.test(e.target.value.toUpperCase()))
    {

        setSpouse_CSD(e.target.value.toUpperCase());
    }

}

const onSECHSChange = (e) =>  {
 const h = /^[0-9\b]+$/;

     if (e.target.value === "" || h.test(e.target.value))
    {

        setSpouse_ECHS(e.target.value);
    }

}

const onSIncomeChange = (e) =>  {
 const z = /^[0-9\b]+$/;

     if (e.target.value === "" || z.test(e.target.value))
    {

        setSpouse_Month_Income(e.target.value);
    }

}

const onSTelChange = (e) =>  {
 const r = /^[0-9-\b]+$/;

     if (e.target.value === "" || r.test(e.target.value))
    {

        setSpouse_Official_No(e.target.value);
    }

}

const onSCivilChange = (e) =>  {
 const s = /^[0-9\b]+$/;

     if (e.target.value === "" || s.test(e.target.value))
    {

        setSpouse_Civil_PPO_No(e.target.value);
    }

}

const onSIdentityChange = (e) =>  {
 const l = /^[A-Za-z\b]+$/;

     if (e.target.value === "" || l.test(e.target.value))
    {

        setSpouse_Id_Mark(e.target.value);
    }

}


const onMaritalStatusChange = (e) =>  {
  if(Marital_Status==="Married"){
    setVisible(true)
    setVisible3(true)
    setD_Visible(false)
    setW_Visible(false)
  }
  else if (Marital_Status==="Single") {
    setVisible(false)
    setVisible3(false)
    setD_Visible(false)
    setW_Visible(false)
  }
  else if(Marital_Status==="Divorced"){
    setVisible(true)
    setVisible3(false)
    setD_Visible(true)
    setW_Visible(false)
  }
  else if(Marital_Status==="Widow/Widower"){
    setVisible(true)
    setVisible3(false)
    setW_Visible(true)
    setD_Visible(false)
  }
  else{
    setVisible(false)
  }

}



// const customStyle = {
//   color: 'blue'
// }

function EnableDisableStatus(e) {
    e.preventDefault();
  }

const Form6 = async (e) => {
        e.preventDefault();
        try {


                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Marital_Status',Marital_Status);
                localStorage.setItem('Marriage_Date',Marriage_Date);
                localStorage.setItem('Spouse_Name',Spouse_Name);
                localStorage.setItem('Spouse_Relation',Spouse_Relation);
                localStorage.setItem('Spouse_DOB',Spouse_DOB);
                localStorage.setItem('Spouse_Id_Mark',Spouse_Id_Mark);
                localStorage.setItem('Spouse_Qualification',Spouse_Qualification);
                localStorage.setItem('Spouse_Emp_Status',Spouse_Emp_Status);
                localStorage.setItem('Spouse_Adhaar',Spouse_Adhaar);
                localStorage.setItem('Spouse_Voter_Id',Spouse_Voter_Id);
                localStorage.setItem('Spouse_PAN',Spouse_PAN);
                localStorage.setItem('Spouse_CSD',Spouse_CSD);
                localStorage.setItem('Spouse_ECHS',Spouse_ECHS);
                localStorage.setItem('Spouse_Dept',Spouse_Dept);
                localStorage.setItem('Spouse_Sector',Spouse_Sector);
                localStorage.setItem('Spouse_Pres_Desg',Spouse_Pres_Desg);
                localStorage.setItem('Spouse_Employer',Spouse_Employer);
                localStorage.setItem('Spouse_Month_Income',Spouse_Month_Income);
                localStorage.setItem('Spouse_Official_No',Spouse_Official_No);
                localStorage.setItem('Spouse_Desg_Retire',Spouse_Desg_Retire);
                localStorage.setItem('Spouse_Retire_Date',Spouse_Retire_Date);
                localStorage.setItem('Spouse_Civil_PPO_No',Spouse_Civil_PPO_No);
                localStorage.setItem('Divorce_Date',Divorce_Date);
                localStorage.setItem('Court_Order',Court_Order);
                localStorage.setItem('Death_Date',Death_Date);
                uploadImg();
if(Marital_Status=='Single'){
            navigate("/Form7");
          }else{
            navigate('/S_DocForm')
          }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
const SECTOR = ['State', 'Central', 'PSU', 'Private', 'Govt.Societies'];
const MARITAL_STATUS = ['Single', 'Married', 'Divorced', 'Widow/Widower'];

    return (
    <div className="center">
    <div class="wrapper  Down">
    <div id="form1Content" >
    <form onSubmit={Form6}>

{/* -------------------------------- HEADER ------------------------------------*/}
     <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
       <label className="header">Spouse Details</label>
       <div className = "right-align dis">
           <label className="sn-mar">{"Service No :"}</label> {Service_No}&nbsp;
           <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
       </div>
     </div>
{/* -------------------------------- HEADER ------------------------------------*/}

    <div className="upperForm1Content">
      <div className="row">

      <FormLabel text={"Marital Status"} />
      <div className="col-md-4 space">
      <select  className="col-lg-9 dropdown_align"value={Marital_Status} onClick={ onMaritalStatusChange} onChange={(e) => setMarital_Status(e.target.value)} required>
      <option value="" selected disabled>--Select One--</option>
      {MARITAL_STATUS.map(c => <option key={c}>{c}</option>)}
      </select>
      </div>


            { visible &&
              <div className = "row">


              <FormLabel text={"Marriage Date"} />
              <div className="col-lg-4 space">
              <input   type="date"  class="  formInput" name="Marriage_Date"  value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} required/>
              </div>

              <FormLabel text={"Spouse Name"} />
              <div className="col-lg-4 space">
              <input type="text"  class="  formInput" name="Spouse_Name" value={Spouse_Name} onChange={onSNameChange} required/>
              </div>

              <FormLabel text={"Spouse Relation"} />
              <div className="col-lg-4 space">
               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio"  id="inlineRadio1" name="Spouse_Relation" value="Wife" onChange={(e) => setSpouse_Relation(e.target.value)} />
                 <label className="form-check-label" for="inlineRadio1">Wife</label>
               </div>

               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" id="inlineRadio2" name="Spouse_Relation" value="Husband" onChange={(e) => setSpouse_Relation(e.target.value)} />
                 <label className="form-check-label" for="inlineRadio2">Husband</label>
               </div>
              </div>


              <FormLabel text={"Spouse DOB"} />
              <div className="col-lg-4 space">
              <input type="Date"  class="  formInput" name="Spouse_DOB " value={Spouse_DOB} onChange={(e) => setSpouse_DOB(e.target.value)} required/>
              </div>
</div>}
              {/*  divorced  */}

              {D_visible && <div className = "row">
                            <FormLabel text={"Date of Divorce"} />
                            <div className="col-lg-4 space">
                            <input type="date"  class=" formInput" name="Divorce_Date" value={Divorce_Date} onChange={(e) => setDivorce_Date(e.target.value)} required/>
                            </div>
                            <FormLabel text={"Court Order"} />
                            <div className="col-lg-4 space">
                            <input type="text"  class=" formInput" name="Court_Order" value={Court_Order} onChange={(e) => setCourt_Order(e.target.value)} required/>
                            </div>
              </div> }
              {/*  divorced  */}

              {/*  divorced  */}

              {W_visible && <div className = "row">
                            <FormLabel text={"Date of Death"} />
                            <div className="col-lg-4 space">
                            <input type="date"  class=" formInput" name="Death_Date" value={Death_Date} onChange={(e) => setDeath_Date(e.target.value)} required/>
                            </div>

              </div> }
              {/*  divorced  */}

{visible3 && <div className = "row">
              <FormLabel text={"Spouse Adhaar No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "12" name="Spouse_Adhaar" value={Spouse_Adhaar} onChange={onSAdhaarChange} />
              </div>

              <FormLabel text={"Spouse Voter Id "} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "10" name="Spouse_Voter_Id" value={Spouse_Voter_Id} onChange={onSVoterChange} />
              </div>

              <FormLabel text={"Spouse CSD Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "15" name="Spouse_CSD" value={Spouse_CSD} onChange={onSCSDChange}/>
              </div>

              <FormLabel text={"Spouse PAN Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "10"  name="Spouse_PAN" value={Spouse_PAN} onChange={onSPANChange}/>
              </div>

              <FormLabel text={"Spouse ECHS Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "15"  name="Spouse_ECHS" value={Spouse_ECHS} onChange={onSECHSChange}/>
              </div>

              <FormLabel text={"Spouse Identification Mark"} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" name="Spouse_Id_Mark" value={Spouse_Id_Mark} onChange={onSIdentityChange} />
              </div>

              <FormLabel text={"Spouse Qualification"} />
              <div className="col-lg-4 space">
              <select  className="col-lg-9 dropdown_align"value={Spouse_Qualification} onChange={(e) => setSpouse_Qualification(e.target.value)} >
               <option value = "" disabled selected >--Select One--</option>

              {civil.map((user, index) => (
              <option key={user.id}value={user.Value}>{user.Value}</option>
              ))}

                </select>
              </div>


              <FormLabel text={"Spouse Employment Status"} />
              <div className="col-lg-4 space">
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio"  id="inlineRadio1" name="Spouse_Emp_Status" value="Employed" value="1" onClick={()=> setVisible2(true)} onChange={(e) => setSpouse_Emp_Status(e.target.value)} />
                <label className="form-check-label" for="inlineRadio1">Employed</label>
                </div>

                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineRadio2" name="Spouse_Emp_Status" value="Un-Employed" value="0" onClick={()=> setVisible2(false)} onChange={(e) => setSpouse_Emp_Status(e.target.value)} />
                <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
                </div>
              </div>


 { visible2 && <div className = "row">

              <FormLabel text={"Spouse Working Sector"} />
              <div className="col-md-4 space">
                 <select  className="col-lg-9 dropdown_align" value={Spouse_Sector} onChange={(e) => setSpouse_Sector(e.target.value)}>
                 <option value="" disabled selected>--Select One--</option>
                 {SECTOR.map(c => <option key={c}>{c}</option>)}
                 </select>
               </div>

               <FormLabel text={"Spouse Working Department"} />
               <div className="col-lg-4 space">
               <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Dept" value={Spouse_Dept} onChange={(e) => setSpouse_Dept(e.target.value.toUpperCase())} />
               </div>

              <FormLabel text={"Spouse Present Designation"} />
              <div className="col-lg-4 space">
              <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Pres_Desg" value={Spouse_Pres_Desg} onChange={(e) => setSpouse_Pres_Desg(e.target.value.toUpperCase())} />
              </div>

              <FormLabel text={"Spouse Employer"} />
              <div className="col-lg-4 space">
              <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Employer" value={Spouse_Employer} onChange={(e) => setSpouse_Employer(e.target.value.toUpperCase())} />
              </div>

             <FormLabel text={"Spouse Monthly Income"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "7" minlength = "3" name="Spouse_Month_Income" value={Spouse_Month_Income} onChange={onSIncomeChange} />
             </div>

            <FormLabel text={"Spouse Offical Contact No."} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "14" minlength = "12"  name="Spouse_Official_No" value={Spouse_Official_No} onChange={onSTelChange} />
            </div>

            <FormLabel text={"Spouse Designation while Retirement"} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "6"   name="Spouse_Desg_Retire" value={Spouse_Desg_Retire} onChange={(e) => setSpouse_Desg_Retire(e.target.value)} />
            </div>

            <FormLabel text={"Spouse Date of Retirement from civil service"} />
            <div className="col-lg-4 space">
            <input type="date"  class=" formInput" name="Spouse_Retire_Date" value={Spouse_Retire_Date} onChange={(e) => setSpouse_Retire_Date(e.target.value)} />
            </div>

            <FormLabel text={"Spouse Civil PPO No."} />
            <div className="col-lg-4 space">
            <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20" name="Spouse_Civil_PPO_No" value={Spouse_Civil_PPO_No} onChange={onSCivilChange}/>
            </div>

    </div>}
    <FormLabel text={"Passport Size Photo"} />
    <div className="col-lg-4 space">
    <input type="file"  className="formInput"  accept="image/*" name="pp" onChange={saveImg} />

    </div>
    </div>

    }

</div>
</div>

{/* ---------------------------------------- FOOTER -------------------------------------------*/}

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form5">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>

{/* ---------------------------------------- FOOTER -------------------------------------------*/}

</form>
</div>
</div>
</div>
)
}

const Form6Display = () => <FormDisplay step={6} Form={Form6} />
export default Form6Display
