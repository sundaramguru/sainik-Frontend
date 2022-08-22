import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";

import FormDisplay from "./Form0"
import ms from 'ms';
import moment from 'moment';


const Form2 = () => {
 // localStorage.clear();
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Unit_Last_Served, setUnit_Last_Served] = useState(localStorage.getItem('Unit_Last_Served'));
    const [Discharge_Date, setDischarge_Date] = useState(localStorage.getItem('Discharge_Date'));
    const [Discharge_Reason, setDischarge_Reason] = useState(localStorage.getItem('Discharge_Reason'));
    const [Discharge_Med_Cat, setDischarge_Med_Cat] = useState(localStorage.getItem('Discharge_Med_Cat'));
    const [Discharge_Character, setDischarge_Character] = useState(localStorage.getItem('Discharge_Character'));
    const [Discharge_Book_No, setDischarge_Book_No] = useState(localStorage.getItem('Discharge_Book_No'));
    const [If_Pensioner, setIf_Pensioner] = useState(localStorage.getItem('If_Pensioner'));
    const [PPO_No, setPPO_No] = useState(localStorage.getItem('PPO_No'));
    const [Pension_Sanctioned, setPension_Sanctioned] = useState(localStorage.getItem('Pension_Sanctioned'));
    const [Present_Pension, setPresent_Pension] = useState(localStorage.getItem('Present_Pension'));
    const [If_Sanctioned_Dis_Pension, setIf_Sanctioned_Dis_Pension] = useState(localStorage.getItem('If_Sanctioned_Dis_Pension'));
    const [Disability_Pension, setDisability_Pension] = useState(localStorage.getItem('Disability_Pension'));
    const [Disability_Percentage, setDisability_Percentage] = useState(localStorage.getItem('Disability_Percentage'));
    const [Pension_AC_No, setPension_AC_No] = useState(localStorage.getItem('Pension_AC_No'));
    const [Bank_Name, setBank_Name] = useState(localStorage.getItem('Bank_Name'));
    const [Branch, setBranch] = useState(localStorage.getItem('Branch'));
    const [IFSC, setIFSC] = useState(localStorage.getItem('IFSC'));
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [medicals , setMedicals] = useState([]);
    const [reasons , setReasons] = useState([]);
    const [Name, setName] = useState('');
    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');

    const [DBErr, setDBErr] = useState('');
    const [PCErr, setPCErr] = useState('');
    const [PSCErr, setPSCErr] = useState('');
    const [DCErr, setDCErr] = useState('');
    const [ACErr, setACErr] = useState('');
    const [DPPErr, setDPPErr] = useState('');


    const [characters , setCharacters] = useState([]);
    const [banks, setBanks] = useState([]);
    const [branchs, setBranchs] = useState([]);
    const [ifscs, setIfscs] = useState([]);
    const [visible,setVisible]=useState(false);
    const [visiible,setVisiible]=useState(false);
    const [DOB1, setDOB1] = useState(localStorage.getItem('Enroll_Date'));
    const [Enroll_Date, setEnroll_Date] = useState(localStorage.getItem('Enroll_Date'));
    const [DDOB, setDDOB] = useState('');
    const [CDate, setCDate] = useState('')


 useEffect(() => {
getName();
    getDDOB();
    getMedicals();
    getReasons();
    getCharacters();
    getBanks();
  //  getBranchs();
  //  getIfscs();


}, []);


//SUCCESS DISCHARGE OF ESM

 useEffect(() => {

       const minsecs = ms('1d');
       const minsec = ms('1d');
       const max_date = new Date(+new Date(CDate) - minsecs);
       const min_date = new Date(+new Date(Enroll_Date) + minsec);

       setmaxDate(moment(max_date).format('YYYY-MM-DD'));
       setminDate(moment(min_date).format('YYYY-MM-DD'));

     },  [CDate] , [Enroll_Date]);

 //SUCCESS DISCHARGE OF ESM


const axiosJWT = axios.create();

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



    const getMedicals  = async () => {
    const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/med_D`,
  {
    params:{
      Service_Name:localStorage.getItem('Service_Name')
    }
  });
    setMedicals(response.data);
    }
    const getReasons = async () => {
    const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/reason_D');
    setReasons(response.data);
    }

    const getCharacters = async () => {
    const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/char_D');
    setCharacters(response.data);
    }

    const getBanks = async () => {
    const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/bank_D');
    setBanks(response.data);
    }

   const getBranchs = async () => {
      localStorage.setItem('D_Branch`,Bank_Name)

      const dd=localStorage.getItem('D_Branch');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/Branch_Depend`,
          {
              params:{branches:dd}
          });
      setBranchs(response.data);
    }

const getIfscs = async () => {
      localStorage.setItem('D_IFSC`,Branch)

      const dd=localStorage.getItem('D_IFSC');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/IFSC_Depend`,
          {
              params:{ifs:dd}
          });
      setIfscs(response.data);
    }


 const onDischargeBookChange = (e) =>  {
 const d = /^[/A-Z0-9\b]+$/;

     if (e.target.value.toUpperCase() === "" || d.test(e.target.value.toUpperCase()))
    {

        setDischarge_Book_No(e.target.value.toUpperCase());
        setDBErr('');
    }
    else{
        setDischarge_Book_No('')
        setDBErr('Enter only numbers')
       }

}

 const onPresentChange = (e) =>  {
 const p = /^[0-9\b]+$/;

     if (e.target.value === "" || p.test(e.target.value))
    {

        setPresent_Pension(e.target.value);
         setPCErr('');
    }
 else{
        setPresent_Pension('')
        setPCErr('Enter only numbers')
       }

}

 const onPensionSanctionChange = (e) =>  {
 const ps = /^[0-9\b]+$/;

     if (e.target.value === "" || ps.test(e.target.value))
    {

        setPension_Sanctioned(e.target.value);
        setPSCErr('');
    }

     else{
        setPension_Sanctioned('')
        setPSCErr('Enter only numbers')
       }

}

 const onDisabilityChange = (e) =>  {
 const dp = /^[0-9\b]+$/;

     if (e.target.value === "" || dp.test(e.target.value))
    {

        setDisability_Pension(e.target.value);
        setDCErr('');
    }
    else{
        setDisability_Pension('')
        setDCErr('Enter only numbers')
       }

}
const onPensionAccountChange = (e) =>  {
 const pa = /^[0-9\b]+$/;

     if (e.target.value === "" || pa.test(e.target.value))
    {

        setPension_AC_No(e.target.value);
        setACErr('');
    }
 else{
        setPension_AC_No('')
        setACErr('Enter only numbers')
       }
}


const onDisabilityPercentageChange = (e) =>  {
 const d = /^[0-9\b]+$/;

     if (e.target.value === "" || d.test(e.target.value))
    {

        setDisability_Percentage(e.target.value);
        setDPPErr('');
    }
    else{
        setDisability_Percentage('')
        setDPPErr('Enter only numbers')
       }

}
const checkPension = (e) =>  {
  setVisible(false)

if(If_Pensioner==='No'){
  setVisible(false)

   localStorage.setItem('PPO_No`,null);
   localStorage.setItem('Pension_Sanctioned`,null);
    localStorage.setItem('Present_Pension`,null);
}
// else{
//     setVisible(true)
//     localStorage.setItem('PPO_No`,PPO_No);
//     localStorage.setItem('Pension_Sanctioned`,Pension_Sanctioned);
//     localStorage.setItem('Present_Pension`,Present_Pension);
// }

}
const checkPensionYes = (e) =>  {
  setVisible(true)


    setVisible(true)
    localStorage.setItem('PPO_No`,PPO_No);
    localStorage.setItem('Pension_Sanctioned`,Pension_Sanctioned);
    localStorage.setItem('Present_Pension`,Present_Pension);


}

const checkDisPension = (e) =>  {
  setVisiible(false)

   localStorage.setItem('Disability_Pension`,null);
   localStorage.setItem('Disability_Percentage`,null);
 }
const checkDisPensionYes = (e) =>  {

    setVisiible(true)
    localStorage.setItem('Disability_Pension`,Disability_Pension);
    localStorage.setItem('Disability_Percentage`,Disability_Percentage);
    // localStorage.setItem('Present_Pension`,Present_Pension);
}



  const Form2 = async (e) => {

        e.preventDefault();
        try {

                localStorage.setItem('Service_No`,Service_No);
                localStorage.setItem('Unit_Last_Served`,Unit_Last_Served);
                localStorage.setItem('Discharge_Date`,Discharge_Date);
                localStorage.setItem('Discharge_Reason`,Discharge_Reason);
                localStorage.setItem('Discharge_Med_Cat`,Discharge_Med_Cat);
                localStorage.setItem('Discharge_Character`,Discharge_Character);
                localStorage.setItem('Discharge_Book_No`,Discharge_Book_No);
                localStorage.setItem('If_Pensioner`,If_Pensioner);
                localStorage.setItem('PPO_No`,PPO_No);
                localStorage.setItem('Pension_Sanctioned`,Pension_Sanctioned);
                localStorage.setItem('Present_Pension`,Present_Pension);
                localStorage.setItem('If_Sanctioned_Dis_Pension`,If_Sanctioned_Dis_Pension);
                localStorage.setItem('Disability_Pension`,Disability_Pension);
                localStorage.setItem('Disability_Percentage`,Disability_Percentage);
                localStorage.setItem('Pension_AC_No`,Pension_AC_No);
                localStorage.setItem('Bank_Name`,Bank_Name);
                localStorage.setItem('Branch`,Branch);
                localStorage.setItem('IFSC`,IFSC);


            navigate("/Form3");
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
    <form onSubmit={Form2}>
    <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
    <label className="header">Pension Details</label>
   <div>

   <div className = "left-align dis">
    <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
    <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

</div>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">


         <FormLabels text={"Unit Last Served"} />
         <div className="col-lg-4 space">
         <input type="text"  class="  formInput" maxlength= "20" autocomplete = "off" name="Unit_Last_Served"  value={Unit_Last_Served} onChange={(e) => setUnit_Last_Served(e.target.value)}   />
         </div>
<input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />
         <input type="hidden"  class="  textInput" name="CDate"  value={CDate} onChange={(e) => setCDate(e.target.value)} />


         <input type="hidden"  class="  formInput" maxlength= "20" autocomplete = "off" name="DOB1"  value={DOB1} onChange={(e) => setEnroll_Date(e.target.value)}  />

       {/*<label htmlFor =""> From  {minDate} To {maxDate} </label><br/>*/}
         <FormLabel text={"Date of Discharge"} />
         <div className="col-lg-4 space">
         <input type="date"  class="  formInput"  min = {minDate} max = {maxDate} name="Discharge_Date" value={Discharge_Date} onChange={(e) => setDischarge_Date(e.target.value)} required/>

         </div>


         <FormLabel text={"Reason for Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align" value={Discharge_Reason} onChange={(e) => setDischarge_Reason(e.target.value)} >
         <option value = "" disabled selected >--Select One--</option>

         {reasons.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
          </div>

         <FormLabel text={"Medical Category while Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align" value =
        {Discharge_Med_Cat} onChange={(e)=> setDischarge_Med_Cat(e.target.value)}>
        <option value = "" disabled selected >--Select One--</option>

         {medicals.map((user, index) => (
         <option key={user.id}value={user.Discharge_Med_Cat}>{user.Discharge_Med_Cat}</option>
         ))}
         </select>
         </div>

         <FormLabel text={"Character while Discharge"} />
         <div className="col-lg-4 space">
         <select  className="col-lg-9 dropdown_align"value ={Discharge_Character} onChange={(e)=> setDischarge_Character(e.target.value)} >
         <option value = "" disabled selected >--Select One--</option>

         {characters.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
          </div>

          <FormLabel text={"Discharge Book No"} />
          <div className="col-lg-4 space">
          <input type="text"  class="formInput" autocomplete = "off" maxlength= "15"  name="Discharge_Book_No" value={Discharge_Book_No}  onChange={onDischargeBookChange} required/><br/>
          <span style={{color: 'red'}} >{DBErr}</span>
          </div>



          <FormLabel text={"Whether Pensioner"} required/>
          <div className="col-lg-4 space noSpace">

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio1" name="If_Pensioner" value="Yes"  onClick={checkPensionYes} onChange={(e) => setIf_Pensioner(e.target.value)} required />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="If_Pensioner" value="No"  onClick={checkPension} onChange={(e) => setIf_Pensioner(e.target.value)} required/>
          <label class="form-check-label" for="inlineRadio2">No</label>
          </div></div>

          { visible &&
            <div className = "row">
            <FormLabel text={"PPO No."} />
            <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off"  maxlength= "20"  name="PPO_No" value={PPO_No} onChange={(e) => setPPO_No(e.target.value.toUpperCase())} required />
          </div>

          <FormLabel text={"Pension sanctioned"} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off" name="Pension_Sanctioned" maxlength ="6" value={Pension_Sanctioned} onChange={onPensionSanctionChange} required/><br/>
          <span style={{color: 'red'}} >{PSCErr}</span>
          </div>

          <FormLabel text={"Present Pension"} />
          <div className="col-lg-4 space">

          <input type="text"
           class="  formInput"
           autocomplete = "off"
           minlength = "4"
           maxlength ="6"
           name="Present_Pension"
           value={Present_Pension}
           onChange={onPresentChange} /><br/><span style={{color: 'red'}} >{PCErr}</span>  </div>
      </div>
          }

          <FormLabel text={"Whether sanctioned disability Pension"} required/>
         {/*  <FormLabel2 text={"Whether sanctioned disability Pension"} />*/}

          <div className="col-lg-4 space noSpace" >

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio3" name="If_Sanctioned_Dis_Pension" value="Yes"  onClick={checkDisPensionYes} onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)} />
          <label class="form-check-label" for="inlineRadio4">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio4" name="If_Sanctioned_Dis_Pension" value="No" onClick={checkDisPension} onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)}required />
          <label class="form-check-label" for="inlineRadio4">No</label>
          </div></div>

          { visiible &&
            <div className = "row">
            <FormLabel text={"Percentage of Disability (%)"} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off"  maxlength= "3" minlength="2" name="Disability_Percentage" value={Disability_Percentage} onChange={onDisabilityPercentageChange} required/><br/>
          <span style={{color: 'red'}} >{DPPErr}</span>
          </div>

          <FormLabel text={"Disability Pension"} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off" maxlength= "6" minlength="3" name="Disability_Pension" value={Disability_Pension} onChange={onDisabilityChange} required/><br/>
          <span style={{color: 'red'}} >{DCErr}</span>
          </div>


          </div>
      }

          <FormLabel text={"Pension A/C No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInput" autocomplete = "off" maxlength= "20"  name="Pension_AC_No" value={Pension_AC_No} onChange={onPensionAccountChange} required/><br/>
          <span style={{color: 'red'}} >{ACErr}</span>
          </div>

          <FormLabel text={"Bank Name"} />
          <div className="col-lg-4 space">
          <select  className="col-lg-9 dropdown_align"  value =
          {Bank_Name} onClick={getBranchs} onChange={(e)=> setBank_Name(e.target.value)} required>
         <option value = "" disabled selected >--Select One--</option>

         {banks.map((user, index) => (
         <option key={user.id}value={user.Bank_Name}>{user.Bank_Name}</option>
         ))}
    </select>
          </div>

          <FormLabel text={"Branch"} />
          <div className="col-lg-4 space">
       <select   className="col-lg-9 dropdown_align" value = {Branch} onClick={getIfscs} onChange={(e)=> setBranch(e.target.value)} required>
         <option value = ""  selected >--Select One--</option>

         {branchs.map((user, index) => (
         <option key={user.id}value={user.Branch}>{user.Branch}</option>
         ))}
        </select >          </div>

          <FormLabel text={"IFSC"} />
          <div className="col-lg-4 space">
         <select   className="col-lg-9 dropdown_align" value =
{IFSC}    onChange={(e)=> setIFSC(e.target.value)} required>
         <option value = "" disabled selected >--Select One--</option>

         {ifscs.map((user, index) => (
         <option key={user.id}value={user.IFSC}>{user.IFSC}</option>
         ))}    </select>       </div>
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
  {/*  <button className=" btn" onClick={gotoBackToStep1}>Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"  onClick={gotoToNextStep3} >Next </button>*/}

    <div className="col-lg-12 right-align " >
     <span style={{color: 'red`, fontWeight : '900`, fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
     </div>
    <button className=" btn" ><Link to="/Form1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    </div>
    </form>
</div>
</div>
</div>
 )
}

const Form2Display = () => <FormDisplay step={2} Form={Form2} />

export default Form2Display

{/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/}

         {/* <FormLabel text={"Whether sanctioned disability Pension"} />*/}
