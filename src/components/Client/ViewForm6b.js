import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
import ms from 'ms';
import moment from 'moment';

const ViewForm6Edit = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [Marital_Status, setMarital_Status] = useState(localStorage.getItem('V_Marital_Status'));
    const [Marriage_Date, setMarriage_Date] = useState(localStorage.getItem('V_Marriage_Date'));
    const [Spouse_Name, setSpouse_Name] = useState(localStorage.getItem('V_Spouse_Name'));
    const [Spouse_Relation, setSpouse_Relation] = useState(localStorage.getItem('V_Spouse_Relation'));
    const [Spouse_DOB, setSpouse_DOB] = useState(localStorage.getItem('V_Spouse_DOB'));
    const [Spouse_Id_Mark, setSpouse_Id_Mark] = useState(localStorage.getItem('V_Spouse_Id_Mark'));
    const [Spouse_Adhaar, setSpouse_Adhaar] = useState(localStorage.getItem('V_Spouse_Adhaar'));
    const [Spouse_Voter_Id, setSpouse_Voter_Id] = useState(localStorage.getItem('V_Spouse_Voter_Id'));
    const [Spouse_PAN, setSpouse_PAN] = useState(localStorage.getItem('V_Spouse_PAN'));
    const [Spouse_CSD, setSpouse_CSD] = useState(localStorage.getItem('V_Spouse_CSD'));
    const [Spouse_ECHS, setSpouse_ECHS] = useState(localStorage.getItem('V_Spouse_ECHS'));
    const [Spouse_Qualification, setSpouse_Qualification] = useState(localStorage.getItem('V_Spouse_Qualification'));
    const [Spouse_Emp_Status, setSpouse_Emp_Status] = useState(localStorage.getItem('V_Spouse_Emp_Status'));
    const [Spouse_Sector, setSpouse_Sector] = useState(localStorage.getItem('V_Spouse_Sector'));
    const [Spouse_Dept, setSpouse_Dept] = useState(localStorage.getItem('V_Spouse_Dept'));
    const [Spouse_Employer, setSpouse_Employer] = useState(localStorage.getItem('V_Spouse_Employer'));


    const [Spouse_Pres_Desg, setSpouse_Pres_Desg] = useState(localStorage.getItem('V_Spouse_Pres_Desg'));
    const [Spouse_Month_Income, setSpouse_Month_Income] = useState(localStorage.getItem('V_Spouse_Month_Income'));
    const [Spouse_Official_No, setSpouse_Official_No] = useState(localStorage.getItem('V_Spouse_Official_No'));
    const [Spouse_Desg_Retire, setSpouse_Desg_Retire] = useState(localStorage.getItem('V_Spouse_Desg_Retire'));
    const [Spouse_Retire_Date, setSpouse_Retire_Date] = useState(localStorage.getItem('V_Spouse_Retire_Date'));
    const [Spouse_Civil_PPO_No, setSpouse_Civil_PPO_No] = useState(localStorage.getItem('V_Spouse_Civil_PPO_No'));
    const [Court_Order, setCourt_Order] = useState(localStorage.getItem('V_Court_Order'));
    const [Divorce_Date, setDivorce_Date] = useState(localStorage.getItem('V_Divorce_Date'));
    const [Death_Date, setDeath_Date] = useState(localStorage.getItem('Death_Date'));

    const [civil, setCivil] = useState([]);

    const [Img, setImg] = useState();
    const [ImgName, setImgName] = useState();
    const [Imgpicture, setImgpicture] = useState();
    const [AdhaarErr, setAdhaarErr] = useState('');
    const [DOB, setDOB] = useState(localStorage.getItem('DOB'));
    const [DOB1, setDOB1] = useState(localStorage.getItem('DOB'));
    const [CDate, setCDate] = useState('')
    const [C1Date, setC1Date] = useState('')
    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');
    const [smaxDate, setsmaxDate]= useState('');
    const [sminDate, setsminDate]= useState('');

    const[visible,setVisible]=useState(false);
    const[visible2,setVisible2]=useState(false);
    const[visible3,setVisible3]=useState(false);

    const[D_visible,setD_Visible]=useState(false);
    const[W_visible,setW_Visible]=useState(false);

    const[disabled,setdisabled]=useState(true);
    const[checked, setchecked] = useState('false');
    const [NSErr, setNSErr] = useState('');
    const [VSErr, setVSErr] = useState('');
    const [PANErr, setPANErr] = useState('');
    const [ICErr, setICErr] = useState('');
    const [SOErr, setSOErr] = useState('');
    const [SAdhaarErr, setSAdhaarErr] = useState('');

    const [dep, setdep] = useState([]);

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getDDOB();
      getCivil();
      getdep();
    }, []);


//SUCCESS MARRIAGE DATE OF ESM

 useEffect(() => {

       const minsecs = ms('1d');
       const minsec = ms('4383d');

       const max_date = new Date(+new Date(CDate) - minsecs);
       const min_date = new Date(+new Date(DOB1) + minsec);

       setmaxDate(moment(max_date).format('YYYY-MM-DD'));
       setminDate(moment(min_date).format('YYYY-MM-DD'));

     }, [CDate] , [DOB1]);

//SUCCESS MARRIAGE DATE OF ESM


//SUCCESS DOB  OF SPOUSE

 useEffect(() => {

       const sminsec = ms('3652d');
       const ssminsec = ms('1d');


       const max_date = new Date(+new Date(C1Date) - sminsec);
       const min_date = new Date(+new Date(C1Date) - ssminsec);

       setsmaxDate(moment(max_date).format('YYYY-MM-DD'));
       setsminDate(moment(min_date).format('YYYY-MM-DD'));


     }, [C1Date]);

//SUCCESS DOB  OF SPOUSE


const getDDOB  = async () => {
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getDOB`,{

          params:{
            Service_No: Service_No
          }
        });
        setCDate(response.data);
        setC1Date(response.data);
      }



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
       "${process.env.REACT_APP_BACKEND_URL}/upload_SImg",
       formData
     );
     console.log(res);
   } catch (ex) {
     console.log(ex);
   }
 };



    const axiosJWT = axios.create();

         const getCivil = async () => {
     const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/civil_D');
    setCivil(response.data);
    }



const onSNameChange = (e) =>  {
 const a = /^[A-Z/ \b]+$/;

     if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
    {

        setSpouse_Name(e.target.value.toUpperCase());
         setNSErr('')
    }
    else{
        setSpouse_Name('')
        setNSErr('Enter only Letters')
    }


}


const onSAdhaarChange = (e) =>  {
 const a = /^[0-9/\b]+$/;

     if (e.target.value === "" || a.test(e.target.value))
    {

        setSpouse_Adhaar(e.target.value);
        setSAdhaarErr('')
    }
    else{
        setSpouse_Adhaar('')
        setSAdhaarErr('Enter only numbers')
    }

}
const onSVoterChange = (e) =>  {
 const v = /^[A-Z0-9/\b]+$/;

     if (e.target.value.toUpperCase() === "" || v.test(e.target.value.toUpperCase()))
    {

        setSpouse_Voter_Id(e.target.value.toUpperCase());
        setVSErr('')
    }
    else{
        setSpouse_Voter_Id('')
        setVSErr('Enter only Alphanumeric Letters')
    }

}
const onSPANChange = (e) =>  {
 const p = /^[A-Z0-9\b]+$/;

     if (e.target.value.toUpperCase() === "" || p.test(e.target.value.toUpperCase()))
    {

        setSpouse_PAN(e.target.value.toUpperCase());
        setPANErr('')

    }
    else{
        setSpouse_PAN('')
        setPANErr('Enter only Alphanumeric Letters')
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
 const h = /^[0-9A-Za-z\b]+$/;

     if (e.target.value === "" || h.test(e.target.value))
    {

        setSpouse_ECHS(e.target.value);
    }

}

const creatSRow = async (e) => {
   const formData = new FormData();
   formData.append("Service_No", Service_No);
   formData.append("Spouse_Name", Spouse_Name);
   // formData.append("Img", Img);
   // formData.append("ImgName", ImgName);

   try {
     const res = await axios.post(
       "${process.env.REACT_APP_BACKEND_URL}/creatSRow",
       formData
     );
     console.log(res);
   } catch (ex) {
     console.log(ex);
   }
 };


const onSIncomeChange = (e) =>  {
 const z = /^[0-9\b]+$/;

     if (e.target.value === "" || z.test(e.target.value))
    {

        setSpouse_Month_Income(e.target.value);
        setICErr('')
    }
     else{
        setSpouse_Month_Income('')
        setICErr('Enter only Numbers')
    }

}

const onSTelChange = (e) =>  {
 const r = /^[0-9-\b]+$/;

     if (e.target.value === "" || r.test(e.target.value))
    {

        setSpouse_Official_No(e.target.value);
         setSOErr('')
    }
    else{
        setSpouse_Official_No('')
        setSOErr('Enter only Numbers')
    }


}

const onSCivilChange = (e) =>  {
 const s = /^[0-9A-Z\b]+$/;

     if (e.target.value.toUpperCase() === "" || s.test(e.target.value.toUpperCase()))
    {

        setSpouse_Civil_PPO_No(e.target.value.toUpperCase());
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


const SECTOR = ['State`, 'Central`, 'PSU`, 'Private`, 'Govt.Societies'];
const MARITAL_STATUS = ['Single`, 'Married`, 'Divorced`, 'Widow/Widower'];

const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/viewform6dep`,
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

    const ViewForm6Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ViewForm6Edit`, {
                 Service_No:Service_No,
                Marital_Status:Marital_Status,
                Marriage_Date: Marriage_Date,
                Spouse_Name:Spouse_Name,
                Spouse_Relation: Spouse_Relation,
                Spouse_DOB: Spouse_DOB,
                Spouse_Id_Mark: Spouse_Id_Mark,
                Spouse_Adhaar: Spouse_Adhaar,
                Spouse_Voter_Id: Spouse_Voter_Id,
                Spouse_PAN: Spouse_PAN,
                Spouse_CSD: Spouse_CSD,
                Spouse_ECHS: Spouse_ECHS,
                Spouse_Qualification: Spouse_Qualification,
                Spouse_Emp_Status: Spouse_Emp_Status,
                Spouse_Sector: Spouse_Sector,
                Spouse_Dept: Spouse_Dept,
                Spouse_Pres_Desg: Spouse_Pres_Desg,
                Spouse_Employer: Spouse_Employer,
                Spouse_Month_Income: Spouse_Month_Income,
                Spouse_Official_No: Spouse_Official_No,
                Spouse_Desg_Retire: Spouse_Desg_Retire,
                Spouse_Retire_Date: Spouse_Retire_Date,
                Spouse_Civil_PPO_No: Spouse_Civil_PPO_No,
                Court_Order: Court_Order,
                Divorce_Date: Divorce_Date,
                 // uploadImg();


            });

 navigate("/ViewFormSpouseDoc");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }



    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Spouse Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>

      <div className="upperForm1Content">



      <div className="row">


       < FormLabels text={"Marital Status"} />
      <div className="col-md-4 space">
      <select  className="col-lg-9 dropdown_align"value={Marital_Status} onClick={ onMaritalStatusChange} onChange={(e) => setMarital_Status(e.target.value)} required>
      <option value="" selected disabled>--Select One--</option>
      {MARITAL_STATUS.map(c => <option key={c}>{c}</option>)}
      </select>
      </div>


            { visible &&
              <div className = "row">
         <input type="hidden"  class="  textInput" name="CDate"  value={CDate} onChange={(e) => setCDate(e.target.value)} />
         <input type="hidden"  class="  textInput" name="C1Date"  value={C1Date} onChange={(e) => setC1Date(e.target.value)} />

         <input type="hidden"  class="  formInput" maxlength= "20" autocomplete = "off" name="DOB1"  value={DOB1} onChange={(e) => setDOB(e.target.value)}  />

              < FormLabels text={"Marriage Date"} />
              <div className="col-lg-4 space">
              <input   type="date"  class="  formInput" min = {minDate} max = {maxDate}  name="Marriage_Date"  value={Marriage_Date} onChange={(e) => setMarriage_Date(e.target.value)} required/>
              </div>

              < FormLabels text={"Spouse Name"} />
              <div className="col-lg-4 space">
              <input type="text"  class="  formInput" name="Spouse_Name" value={Spouse_Name}  onClick={ creatSRow}  onChange={onSNameChange} required/><br/>
              <span style={{color: 'red'}} >{NSErr}</span>

              </div>

              < FormLabels text={"Spouse Relation"} />
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


              < FormLabels text={"Spouse DOB"} />
              <div className="col-lg-4 space">
              <input type="Date"  class="  formInput" name="Spouse_DOB "  max = {sminDate} min = {smaxDate} value={Spouse_DOB} onChange={(e) => setSpouse_DOB(e.target.value)} required/>
              </div>
</div>}
              {/*  divorced  */}

              {D_visible && <div className = "row">
                            < FormLabels text={"Date of Divorce"} />
                            <div className="col-lg-4 space">
                            <input type="date"  class=" formInput" name="Divorce_Date" value={Divorce_Date} onChange={(e) => setDivorce_Date(e.target.value)} required/>
                            </div>
                            < FormLabels text={"Court Order"} />
                            <div className="col-lg-4 space">
                            <input type="text"  class=" formInput" name="Court_Order" value={Court_Order} onChange={(e) => setCourt_Order(e.target.value)} required/>
                            </div>
              </div> }
              {/*  divorced  */}

              {/*  divorced  */}

              {W_visible && <div className = "row">
                            < FormLabels text={"Date of Death"} />
                            <div className="col-lg-4 space">
                            <input type="date"  class=" formInput" name="Death_Date" value={Death_Date} onChange={(e) => setDeath_Date(e.target.value)} required/>
                            </div>

              </div> }
              {/*  divorced  */}

{visible3 && <div className = "row">
              < FormLabels text={"Spouse Adhaar No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "12" name="Spouse_Adhaar" value={Spouse_Adhaar} onChange={onSAdhaarChange} /><br/>
              <span style={{color: 'red'}} >{SAdhaarErr}</span>
              </div>

              < FormLabels text={"Spouse Voter Id "} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "10" name="Spouse_Voter_Id" value={Spouse_Voter_Id} onChange={onSVoterChange} /><br/>
              <span style={{color: 'red'}} >{VSErr}</span>

              </div>

              < FormLabels text={"Spouse CSD Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "15" name="Spouse_CSD" value={Spouse_CSD} onChange={onSCSDChange}/>
              </div>

              < FormLabels text={"Spouse PAN Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "10"  name="Spouse_PAN" value={Spouse_PAN} onChange={onSPANChange}/><br/>
              <span style={{color: 'red'}} >{PANErr}</span>

              </div>

              < FormLabels text={"Spouse ECHS Card No."} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" autocomplete = "off" maxlength = "15"  name="Spouse_ECHS" value={Spouse_ECHS} onChange={onSECHSChange}/>
              </div>

              < FormLabels text={"Spouse Identification Mark"} />
              <div className="col-lg-4 space">
              <input type="text"  class="    formInput" name="Spouse_Id_Mark" value={Spouse_Id_Mark} onChange={onSIdentityChange} />
              </div>

              < FormLabels text={"Spouse Qualification"} />
              <div className="col-lg-4 space">
              <select  className="col-lg-9 dropdown_align"value={Spouse_Qualification} onChange={(e) => setSpouse_Qualification(e.target.value)} >
               <option value = "" disabled selected >--Select One--</option>

              {civil.map((user, index) => (
              <option key={user.id}value={user.Value}>{user.Value}</option>
              ))}

                </select>
              </div>


              < FormLabels text={"Spouse Employment Status"} />
              <div className="col-lg-4 space">
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio"  id="inlineRadio1" name="Spouse_Emp_Status" value="Employed" value="Yes" onClick={()=> setVisible2(true)} onChange={(e) => setSpouse_Emp_Status(e.target.value)} />
                <label className="form-check-label" for="inlineRadio1">Employed</label>
                </div>

                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="inlineRadio2" name="Spouse_Emp_Status" value="Un-Employed" value="No" onClick={()=> setVisible2(false)} onChange={(e) => setSpouse_Emp_Status(e.target.value)} />
                <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
                </div>
              </div>


 { visible2 && <div className = "row">

              < FormLabels text={"Spouse Working Sector"} />
              <div className="col-md-4 space">
                 <select  className="col-lg-9 dropdown_align" value={Spouse_Sector} onChange={(e) => setSpouse_Sector(e.target.value)}>
                 <option value="" disabled selected>--Select One--</option>
                 {SECTOR.map(c => <option key={c}>{c}</option>)}
                 </select>
               </div>

               < FormLabels text={"Spouse Working Department"} />
               <div className="col-lg-4 space">
               <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Dept" value={Spouse_Dept} onChange={(e) => setSpouse_Dept(e.target.value.toUpperCase())} />
               </div>

              < FormLabels text={"Spouse Present Designation"} />
              <div className="col-lg-4 space">
              <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Pres_Desg" value={Spouse_Pres_Desg} onChange={(e) => setSpouse_Pres_Desg(e.target.value.toUpperCase())} />
              </div>

              < FormLabels text={"Spouse Employer"} />
              <div className="col-lg-4 space">
              <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Spouse_Employer" value={Spouse_Employer} onChange={(e) => setSpouse_Employer(e.target.value.toUpperCase())} />
              </div>

             < FormLabels text={"Spouse Monthly Income"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "7" minlength = "3" name="Spouse_Month_Income" value={Spouse_Month_Income} onChange={onSIncomeChange} /><br/>
             <span style={{color: 'red'}} >{ICErr}</span>

             </div>

            < FormLabels text={"Spouse Offical Contact No."} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "14" minlength = "12"  name="Spouse_Official_No" value={Spouse_Official_No} onChange={onSTelChange} /><br/>
            <span style={{color: 'red'}} >{SOErr}</span>

            </div>

            < FormLabels text={"Spouse Designation while Retirement"} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "6"   name="Spouse_Desg_Retire" value={Spouse_Desg_Retire} onChange={(e) => setSpouse_Desg_Retire(e.target.value)} />
            </div>

            < FormLabels text={"Spouse Date of Retirement from civil service"} />
            <div className="col-lg-4 space">
            <input type="date"  class=" formInput" name="Spouse_Retire_Date" value={Spouse_Retire_Date} onChange={(e) => setSpouse_Retire_Date(e.target.value)} />
            </div>

            < FormLabels text={"Spouse Civil PPO No."} />
            <div className="col-lg-4 space">
            <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20" name="Spouse_Civil_PPO_No" value={Spouse_Civil_PPO_No} onChange={onSCivilChange}/>
            </div>

    </div>}
    
    </div>

    }


      </div>

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/ViewFormDoc">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={ViewForm6Edit}>Update </button>


    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm6Edit
