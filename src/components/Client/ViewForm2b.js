import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
 import ms from 'ms';
import moment from 'moment';

const ViewForm2Edit = () => {

  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [Unit_Last_Served, setUnit_Last_Served] = useState(localStorage.getItem('V_Unit_Last_Served'));
    const [Discharge_Date, setDischarge_Date] = useState(localStorage.getItem('V_Discharge_Date'));
    const [Discharge_Reason, setDischarge_Reason] = useState(localStorage.getItem('V_Discharge_Reason'));
    const [Discharge_Med_Cat, setDischarge_Med_Cat] = useState(localStorage.getItem('V_Discharge_Med_Cat'));
    const [Discharge_Character, setDischarge_Character] = useState(localStorage.getItem('V_Discharge_Character'));
    const [Discharge_Book_No, setDischarge_Book_No] = useState(localStorage.getItem('V_Discharge_Book_No'));
    const [If_Pensioner, setIf_Pensioner] = useState(localStorage.getItem('V_If_Pensioner'));
    const [PPO_No, setPPO_No] = useState(localStorage.getItem('V_PPO_No'));
    const [Pension_Sanctioned, setPension_Sanctioned] = useState(localStorage.getItem('V_Pension_Sanctioned'));
    const [Present_Pension, setPresent_Pension] = useState(localStorage.getItem('V_Present_Pension'));

    const [If_Sanctioned_Dis_Pension, setIf_Sanctioned_Dis_Pension] = useState(localStorage.getItem('V_If_Sanctioned_Dis_Pension'));
    const [Disability_Percentage, setDisability_Percentage] = useState(localStorage.getItem('V_Disability_Percentage'));
    const [Disability_Pension, setDisability_Pension] = useState(localStorage.getItem('V_Disability_Pension'));
    const [Pension_AC_No, setPension_AC_No] = useState(localStorage.getItem('V_Pension_AC_No'));
    const [Bank_Name, setBank_Name] = useState(localStorage.getItem('V_Bank_Name'));
    const [Branch, setBranch] = useState(localStorage.getItem('V_Branch'));
    const [IFSC, setIFSC] = useState(localStorage.getItem('V_IFSC'));

    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');

//--------------- DROPDOWN - ARRAY ---------------------------------
    const [medicals , setMedicals] = useState([]);
    const [reasons , setReasons] = useState([]);
    const [dep, setdep] = useState([]);
    const [characters , setCharacters] = useState([]);
    const [banks, setBanks] = useState([]);
    const [branchs, setBranchs] = useState([]);
    const [ifscs, setIfscs] = useState([]);

//--------------- DROPDOWN - ARRAY ---------------------------------

//----------------------- ERROR ---------------------------------

    const [PCErr, setPCErr] = useState('');
    const [DBErr, setDBErr] = useState('');
    const [PSCErr, setPSCErr] = useState('');
    const [DCErr, setDCErr] = useState('');
    const [ACErr, setACErr] = useState('');
    const [DPPErr, setDPPErr] = useState('');

//----------------------- ERROR ---------------------------------

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');
    const [visible,setVisible]=useState(false);
    const [visiible,setVisiible]=useState(false);
    const [DOB1, setDOB1] = useState(localStorage.getItem('Enroll_Date'));
    const [Enroll_Date, setEnroll_Date] = useState(localStorage.getItem('Enroll_Date'));
    const [DDOB, setDDOB] = useState('');
    const [CDate, setCDate] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
      getDDOB();
      getdep();
      getReasons();
      getMedicals();
      getCharacters();
      getBanks();

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


const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/viewform2dep`,
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }


// ----------------------FUNCTIONS ----------------------------

const onDischargeBookChange = (e) =>  {
 const d = /^[A-Z0-9\b]+$/;

     if (e.target.value === "" || d.test(e.target.value))
    {

        setDischarge_Book_No(e.target.value);
        setDBErr('');
    }
    else{
        setDischarge_Book_No('')
        setDBErr('Enter only Alphanumeric Letters')
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


// ----------------------FUNCTIONS ----------------------------


    const ViewForm2Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ViewForm2Edit`, {
                Service_No:Service_No,
                Unit_Last_Served: Unit_Last_Served,
                Discharge_Date:Discharge_Date,
                Discharge_Reason: Discharge_Reason,
                Discharge_Med_Cat: Discharge_Med_Cat,
                Discharge_Character: Discharge_Character,
                Discharge_Book_No: Discharge_Book_No,
                If_Pensioner: If_Pensioner,
                PPO_No: PPO_No,
                Pension_Sanctioned: Pension_Sanctioned,
                Present_Pension: Present_Pension,
                If_Sanctioned_Dis_Pension: If_Sanctioned_Dis_Pension,
                Disability_Percentage: Disability_Percentage,
                Disability_Pension: Disability_Pension,
                Pension_AC_No: Pension_AC_No,
                Bank_Name: Bank_Name,
                Branch: Branch,
                IFSC: IFSC,

            });

 navigate("/viewForm3a");
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
      <label className="header">Pension Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>


      <div className="upperForm1Content">

      <div className="row">


      < FormLabels text={"Unit Last Served"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" maxlength= "20" autocomplete = "off" name="Unit_Last_Served" value={Unit_Last_Served} onChange={(e) => setUnit_Last_Served(e.target.value.toUpperCase())} required/>
      </div>

      <input type="hidden"  class="  textInput" name="CDate"  value={CDate} onChange={(e) => setCDate(e.target.value)} />

      <input type="hidden"  class="  formInput" maxlength= "20" autocomplete = "off" name="DOB1"  value={DOB1} onChange={(e) => setEnroll_Date(e.target.value)}  />


      < FormLabels text={"Date of Discharge"} />
      <div className="col-lg-4 space">
      <input type="date" className="fadeIn third formInput"  name="Discharge_Date" value={Discharge_Date} onChange={(e) => setDischarge_Date(e.target.value)} required/>
      </div>

      < FormLabels text={"Reason for Discharge"} />
      <div className="col-lg-4 space">

  {/* <input type="text" className="fadeIn third formInput" value={Discharge_Reason} onChange={(e) => setDischarge_Reason(e.target.value)}/>*/}
      <select  className="col-lg-9 dropdown_align" value={Discharge_Reason} onChange={(e) => setDischarge_Reason(e.target.value)} >
      <option value = "" disabled selected >--Select One--</option>
      {reasons.map((user, index) => (
      <option key={user.id}value={user.Value}>{user.Value}</option>
      ))}
      </select>

      </div>

      < FormLabels text={"Medical Category while Discharge"} />
      <div className="col-lg-4 space">

   {/*<input type="text" className="fadeIn third formInput" value={Discharge_Med_Cat} onChange={(e) => setDischarge_Med_Cat(e.target.value)}/>*/}
      <select  className="col-lg-9 dropdown_align" value =
      {Discharge_Med_Cat} onChange={(e)=> setDischarge_Med_Cat(e.target.value)}>
      <option value = "" disabled selected >--Select One--</option>
      {medicals.map((user, index) => (
      <option key={user.id}value={user.Discharge_Med_Cat}>{user.Discharge_Med_Cat}</option>
      ))}
      </select>

      </div>

      < FormLabels text={"Character while Discharge"} />
      <div className="col-lg-4 space">

   {/*<input type="text" className="fadeIn third formInput" value={Discharge_Character} onChange={(e) => setDischarge_Character(e.target.value)}/>*/}
      <select  className="col-lg-9 dropdown_align"value ={Discharge_Character} onChange={(e)=> setDischarge_Character(e.target.value)} >
      <option value = "" disabled selected >--Select One--</option>
      {characters.map((user, index) => (
      <option key={user.id}value={user.Value}>{user.Value}</option>
      ))}
      </select>

      </div>

      < FormLabels text={"Discharge Book No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" utocomplete = "off" maxlength= "15"  name="Discharge_Book_No" value={Discharge_Book_No} onChange={onDischargeBookChange} required/><br/>
      <span style={{color: 'red'}} >{DBErr}</span>
      </div>

      < FormLabels text={"Whether Pensioner"} />
      <div className="col-lg-4 space">
    {/*<input type="text" className="fadeIn third formInput" value={If_Pensioner} onChange={(e) => setIf_Pensioner(e.target.value)}/>*/}

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio1" name="If_Pensioner" value="Yes"  onClick={()=> setVisible(true)} onChange={(e) => setIf_Pensioner(e.target.value)} />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio2" name="If_Pensioner" value="No" onClick={()=> setVisible(false)}  onChange={(e) => setIf_Pensioner(e.target.value)} />
          <label class="form-check-label" for="inlineRadio2">No</label>
          </div>
      </div>

     { visible &&
            <div className = "row">
      < FormLabels text={"PPO No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={PPO_No} autocomplete = "off"  maxlength= "20"  name="PPO_No" onChange={(e) => setPPO_No(e.target.value)}/>
      </div>

      < FormLabels text={"Pension Sanctioned"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput"  autocomplete = "off" name="Pension_Sanctioned" maxlength ="6" value={Pension_Sanctioned} onChange={onPensionSanctionChange}required/><br/>
      <span style={{color: 'red'}} >{PSCErr}</span>
      </div>

       < FormLabels text={"Present Pension"} />
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

       < FormLabels text={"Whether Sanctioned Disability Pension"} required/>
       <div className="col-lg-4 space noSpace">

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio3" name="If_Sanctioned_Dis_Pension" value="Yes"  onClick={()=> setVisiible(true)} onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)} />
          <label class="form-check-label" for="inlineRadio4">Yes</label>
          </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio"  id="inlineRadio4" name="If_Sanctioned_Dis_Pension" value="No" onClick={()=> setVisiible(false)} onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)} />
          <label class="form-check-label" for="inlineRadio4">No</label>
          </div>

     {/* <input type="text" className="fadeIn third formInput" value={If_Sanctioned_Dis_Pension} onChange={(e) => setIf_Sanctioned_Dis_Pension(e.target.value)}/>*/}
      </div>


       { visiible &&
            <div className = "row">
      < FormLabels text={"Percentage of Disability"} />
      <div className="col-lg-4 space ">
      <input type="text" className="fadeIn third formInput"  maxlength= "3" minlength="2" name="Disability_Percentage" value={Disability_Percentage} onChange={onDisabilityPercentageChange} required/><br/>
       <span style={{color: 'red'}} >{DPPErr}</span>
      </div>

      < FormLabels text={"Disability Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" autocomplete = "off" maxlength= "6" minlength="3" name="Disability_Pension" value={Disability_Pension} onChange={onDisabilityChange} required/><br/>
       <span style={{color: 'red'}} >{DCErr}</span>
      </div>


          </div>
      }


      < FormLabels text={"Pension AC No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" autocomplete = "off" maxlength= "20"  name="Pension_AC_No" value={Pension_AC_No}   onChange={onPensionAccountChange} required/><br/>
        <span style={{color: 'red'}} >{ACErr}</span>
      </div>

      < FormLabels text={"Bank"} />
      <div className="col-lg-4 space">

      {/*<input type="text" className="fadeIn third formInput" value={Bank_Name}  onChange={(e) => setBank_Name(e.target.value)}/>*/}
      <select  className="col-lg-9 dropdown_align"  value =
      {Bank_Name}  onChange={(e)=> setBank_Name(e.target.value)} required>
      <option value = "" disabled selected >--Select One--</option>
      {banks.map((user, index) => (
      <option key={user.id}value={user.Bank_Name}>{user.Bank_Name}</option>
      ))}
      </select>

       </div>

      < FormLabels text={"Branch"} />
      <div className="col-lg-4 space">
    {/*<input type="text" className="fadeIn third formInput" value={Branch} onChange={(e) => setBranch(e.target.value)}/>*/}
      <select   className="col-lg-9 dropdown_align" value = {Branch} onClick={getBranchs}  onChange={(e)=> setBranch(e.target.value)} required>
      <option value = ""  disabled selected >--Select One--</option>
      {branchs.map((user, index) => (
      <option key={user.id}value={user.Branch}>{user.Branch}</option>
      ))}
      </select >
      </div>

      < FormLabels text={"IFSC"} />
      <div className="col-lg-4 space">

   {/*<input type="text" className="fadeIn third formInput" value={IFSC} onChange={(e) => setIFSC(e.target.value)}/>*/}

      <select   className="col-lg-9 dropdown_align" value =
      {IFSC}  onClick={getIfscs} onChange={(e)=> setIFSC(e.target.value)} required>
      <option value = "" disabled selected >--Select One--</option>
      {ifscs.map((user, index) => (
      <option key={user.id}value={user.IFSC}>{user.IFSC}</option>
      ))}
      </select>

      </div>

</div>

    </div>
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/ViewForm2a">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={ViewForm2Edit}>Update </button>

    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm2Edit
