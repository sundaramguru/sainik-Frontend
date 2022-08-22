import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm5Edit = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const [Civil_Qualification, setCivil_Qualification] = useState(localStorage.getItem('V_Civil_Qualification'));
    const [Addi_Course, setAddi_Course] = useState(localStorage.getItem('V_Addi_Course'));

    const [Equi_Test, setEqui_Test] = useState(localStorage.getItem('V_Equi_Test'));
    const [Civil_Emp_Status, setCivil_Emp_Status] = useState(localStorage.getItem('V_Civil_Emp_Status'));
    const [Sector, setSector] = useState(localStorage.getItem('V_Sector'));
    const [Dept, setDept] = useState(localStorage.getItem('V_Dept'));
    const [Pres_Desg, setPres_Desg] = useState(localStorage.getItem('V_Pres_Desg'));
    const [Employer, setEmployer] = useState(localStorage.getItem('V_Employer'));
    const [Month_Income, setMonth_Income] = useState(localStorage.getItem('V_Month_Income'));
    const [Official_No, setOfficial_No] = useState(localStorage.getItem('V_Official_No'));
    const [Desg_Retire, setDesg_Retire] = useState(localStorage.getItem('V_Desg_Retire'));
    const [Retire_Date, setRetire_Date] = useState(localStorage.getItem('V_Retire_Date'));
    const [Civil_PPO_No, setCivil_PPO_No] = useState(localStorage.getItem('V_Civil_PPO_No'));
    const [PPOErr, setPPOErr] = useState('');
    const [OffErr, setOffErr] = useState('');
    const [MINCErr, setMINCErr] = useState('');

    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');
    const[visiblebutton1,setvisiblebutton1]=useState(false);
    const[visiblebutton2,setvisiblebutton2]=useState(false);
    const[visiblebutton3,setvisiblebutton3]=useState(false);

    const [civil, setCivil] = useState([]);
    const[visible,setVisible]=useState(false);


  const [dep, setdep] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      getdep();
      getCivil();
    }, []);



    const axiosJWT = axios.create();

const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/viewform5dep`,
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }


    const getCivil = async () => {
    // const response = await axiosJWT.get(`${process.env.REACT_APP_DOMAIN}/civil_D`);
     const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/civil_D');
    setCivil(response.data);
    }

const onPPOChange = (e) =>  {
    const pp = /^[0-9A-Z]+$/;
    if (e.target.value.toUpperCase() === "" || pp.test(e.target.value.toUpperCase()))
    {

        setCivil_PPO_No(e.target.value.toUpperCase());
         setPPOErr('');
    }
    else{
        setCivil_PPO_No('')
        setPPOErr('Enter only alphanumeric letters')
       }

}

const onOffChange = (e) =>  {
    const op = /^[0-9]+$/;
    if (e.target.value === "" || op.test(e.target.value))
    {

        setOfficial_No(e.target.value);
        setOffErr('')
    }
    else{
        setOfficial_No('')
        setOffErr('Enter only numbers')
       }

}


 const onMonthlyIncomeChange = (e) =>  {
 const y = /^[0-9\b]+$/;

     if (e.target.value === "" || y.test(e.target.value))
    {

        setMonth_Income(e.target.value);
        setMINCErr('')
    }
else{
        setMonth_Income('')
       setMINCErr('Enter only numbers')
       }

}



 const buts1 = (e) =>  {
setvisiblebutton1(true)

}

const buts2 = (e) =>  {
setvisiblebutton2(true)

}
const buts3 = (e) =>  {
setvisiblebutton3(true)

}


const SECTOR = ['State`, 'Central`, 'PSU`, 'Private`, 'Govt.Societies'];



   const ViewForm5Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ViewForm5Edit`, {
                Service_No:Service_No,
                Civil_Qualification: Civil_Qualification,
                Addi_Course:Addi_Course,
                Equi_Test: Equi_Test,
                Civil_Emp_Status: Civil_Emp_Status,
                Sector: Sector,
                Dept: Dept,
                Pres_Desg: Pres_Desg,
                Employer: Employer,
                Month_Income: Month_Income,
                Official_No: Official_No,
                Desg_Retire: Desg_Retire,
                Retire_Date: Retire_Date,
                Civil_PPO_No: Civil_PPO_No,


            });
navigate("/ViewFormDoc");
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
      <label className="header">Employment Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>
      <div className="upperForm1Content">



      <div className="row">


      < FormLabels text={"Civil Qualification"} />

      <div className="col-md-4 space">
         <select  className="col-lg-9 dropdown_align" value={Civil_Qualification} onChange={(e) => setCivil_Qualification(e.target.value)}required>
          <option value = "" disabled selected >--Select One--</option>

         {civil.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>      </div>


              < FormLabels text={"Equivalent Test passed in Service"} />
        <div className="col-md-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Equi_Test" value="Yes" onChange={(e) => setEqui_Test(e.target.value)} />
     <label className="form-check-label" for="inlineRadio1">Yes</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Equi_Test" value="No" onChange={(e) => setEqui_Test(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">No</label>
     </div>
        </div>


        < FormLabels text={"Additional Courses"} />
        <div className="col-lg-4 space">
        <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course" value={Addi_Course} onChange={(e) => setAddi_Course(e.target.value.toUpperCase())} /> &nbsp;
    {/*  <button className = "btn-info plus" onClick  = {buts1}><b>+</b></button>*/}
</div>
      {/*  { visiblebutton1 &&
           <div className = "row">

             < FormLabels text={"Additional Courses"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course2" value={Addi_Course2} onChange={(e) => setAddi_Course2(e.target.value.toUpperCase())} /> &nbsp;
               <button className = "btn-info plus" onClick  = {buts2}><b>+</b></button>
             </div>

      </div>
      }
      { visiblebutton2 &&
           <div className = "row">

             < FormLabels text={"Additional Courses"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course3" value={Addi_Course3} onChange={(e) => setAddi_Course3(e.target.value.toUpperCase())} /> &nbsp;
               <button className = "btn-info plus" onClick  = {buts3}><b>+</b></button>
             </div>

      </div>
}
{ visiblebutton3 &&
           <div className = "row">

             < FormLabels text={"Additional Courses"} />
             <div className="col-md-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course4" value={Addi_Course4} onChange={(e) => setAddi_Course4(e.target.value.toUpperCase())} /> &nbsp;

             </div>

      </div>}
*/}






        < FormLabels text={"Civil Employement Status"} />
        <div className="col-md-4 space">
<div className="form-check form-check-inline">
     <input className="form-check-input" type="radio"  id="inlineRadio1" name="Civil_Emp_Status" value="Employed" onClick={()=> setVisible(true)} onChange={(e) => setCivil_Emp_Status(e.target.value)}/>
     <label className="form-check-label" for="inlineRadio1">Employed</label>
     </div>

     <div className="form-check form-check-inline">
     <input className="form-check-input" type="radio" id="inlineRadio2" name="Civil_Emp_Status" value="Un-Employed" onClick={()=> setVisible(false)} onChange={(e) => setCivil_Emp_Status(e.target.value)} />
     <label className="form-check-label" for="inlineRadio2">Un-Employed</label>
     </div>
        </div>

 { visible &&
           <div className = "row">

             < FormLabels text={"Sector"} />
             <div className="col-md-4 space">
             <select  className="col-lg-9 dropdown_align"value={Sector} onChange={(e) => setSector(e.target.value)}required>
             <option value="Sector" disabled selected>--Select One--</option>
             {SECTOR.map(c => <option key={c}>{c}</option>)}
             </select>
             </div>

             < FormLabels text={"Department"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Dept" value={Dept} onChange={(e) => setDept(e.target.value.toUpperCase())} required/>
             </div>

             < FormLabels text={"Present Designation"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Pres_Desg" value={Pres_Desg} onChange={(e) => setPres_Desg(e.target.value.toUpperCase())} />
             </div>

             < FormLabels text={"Employer"} />
             <div className="col-lg-4 space">
             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Employer" value={Employer} onChange={(e) => setEmployer(e.target.value.toUpperCase())} />
             </div>

            < FormLabels text={"Monthly Income"} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "6" minlength = "3" name="Month_Income" value={Month_Income} onChange={onMonthlyIncomeChange} /><br/>
             <span style={{color: 'red'}} >{MINCErr}</span>

            </div>

            < FormLabels text={"Offical Contact No."} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off" maxlength = "14" minlength = "12"  name="Official_No" value={Official_No} onChange={onOffChange}  /><br/>
             <span style={{color: 'red'}} >{OffErr}</span>

            </div>

            < FormLabels text={"Designation while Retirement"} />
            <div className="col-lg-4 space">
            <input type="text"  class=" formInput" autocomplete = "off"  name="Desg_Retire" value={Desg_Retire} onChange={(e) => setDesg_Retire(e.target.value)} />
            </div>

            < FormLabels text={"Date of Retirement from civil service"} />
            <div className="col-lg-4 space">
            <input type="date"  class=" formInput" name="Retire_Date" value={Retire_Date} onChange={(e) => setRetire_Date(e.target.value)} />
            </div>

            < FormLabels text={"Civil PPO No."} />
            <div className="col-lg-4 space">
            <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20" name="Civil_PPO_No" value={Civil_PPO_No} onChange={onPPOChange} /><br/>
             <span style={{color: 'red'}} >{PPOErr}</span>

            </div>

</div>
      }
      </div>

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform5a">Back</Link> </button>

    <button className="btn my-2 my-sm-0 "  onClick={ViewForm5Edit}>Update </button>


    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm5Edit
