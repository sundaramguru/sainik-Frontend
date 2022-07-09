import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewFormWEdit = () => {

  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [Family_Pension, setFamily_Pension] = useState(localStorage.getItem('V_Family_Pension'));
    const [W_Nxt_Kin, setW_Nxt_Kin] = useState(localStorage.getItem('A_W_Nxt_Kin'));
    const [Death_Date, setDeath_Date] = useState(localStorage.getItem('V_Death_Date'));
    const [Death_Nature, setDeath_Nature] = useState(localStorage.getItem('V_Death_Nature'));
    const [ESM_No, setESM_No] = useState(localStorage.getItem('V_ESM_No'));
    const [FFPErr, setFFPErr] = useState('');
    const [ESMErr, setESMErr] = useState('');

    const [dep, setdep] = useState([]);
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getdep();
    }, []);



    const axiosJWT = axios.create();

const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/viewformwdep',
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

    const ViewFormWEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/ViewFormWEdit', {
                A_Service_No:Service_No,
                Family_Pension: Family_Pension,
                W_Nxt_Kin:W_Nxt_Kin,
                Death_Date: Death_Date,
                Death_Nature: Death_Nature,
                ESM_No: ESM_No,

            });
        if(localStorage.getItem('Reg_TypeForm') ==="Not Registered"){
              navigate("/form1");
            }else{
              navigate("/WidowForm1");
            }

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

const onFPChange = (e) =>  {
 const d = /^[0-9\b]+$/;

     if (e.target.value === "" || d.test(e.target.value))
    {

        setFamily_Pension(e.target.value);
        setFFPErr('');
    }
    else{
        setFamily_Pension('')
        setFFPErr('Enter only numbers')
       }

}

const onESChange = (e) =>  {
 const de = /^[0-9A-Z-\b]+$/;

     if (e.target.value.toUpperCase() === "" || de.test(e.target.value.toUpperCase()))
    {

        setESM_No(e.target.value.toUpperCase());
        setESMErr('');
    }
    else{
        setESM_No('')
        setESMErr('Enter only Alphanumeric Letters')
       }

}

    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Widow Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>

      <div className="upperForm1Content">
      <div className="row">


        < FormLabels text={"ESM No."} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn third formInput" disabled autocomplete = "off" name="ESM_No" value={ESM_No} onChange={onESChange} required/>
        <br/><span style={{color: 'red'}} >{ESMErr}</span>
        </div>

        < FormLabels text={"Death Date"} />
        <div className="col-lg-4 space">
        <input type="date"  class="fadeIn second formInput" name="Death_Date" value={Death_Date} onChange={(e) => setDeath_Date(e.target.value)} required/>
        </div>

        < FormLabels text={"Death Nature"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "35" minlength = "5" name="Death_Nature " value={Death_Nature} onChange={(e) => setDeath_Nature(e.target.value)} required/>
        </div>

        < FormLabels text={"Family Pension"} />
        <div className="col-lg-4 space">
        <input type="text"  class="fadeIn second formInput" autocomplete = "off" maxlength = "6" minlength = "3" name="Family_Pension" value={Family_Pension} onChange={onFPChange}  required/>
        <br/><span style={{color: 'red'}} >{FFPErr}</span>
        </div>

      </div>

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/ViewFormWa">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={ViewFormWEdit}>Update </button>

    </div>
    </form>

</div>
</div>

</div>
</div>
    )
}

export default ViewFormWEdit
