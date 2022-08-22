import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm2a = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
//
//const [Service_No, setService_No] = useState('');
    const [Unit_Last_Served, setUnit_Last_Served] = useState('');
    const [Discharge_Date, setDischarge_Date] = useState('');
    const [Discharge_Reason, setDischarge_Reason] = useState('');
    const [Discharge_Med_Cat, setDischarge_Med_Cat] = useState('');
    const [Discharge_Character, setDischarge_Character] = useState('');
    const [Discharge_Book_No, setDischarge_Book_No] = useState('');
    const [If_Pensioner, setIf_Pensioner] = useState('');
    const [PPO_No, setPPO_No] = useState('');
    const [Pension_Sanctioned, setPension_Sanctioned] = useState('');
    const [Present_Pension, setPresent_Pension] = useState('');
    const [If_Sanctioned_Dis_Pension, setIf_Sanctioned_Dis_Pension] = useState('');
    const [Disability_Pension, setDisability_Pension] = useState('');
    const [Disability_Percentage, setDisability_Percentage] = useState('');
    const [Pension_AC_No, setPension_AC_No] = useState('');
    const [Bank_Name, setBank_Name] = useState('');
    const [Branch, setBranch] = useState('');
    const [IFSC, setIFSC] = useState('');


    //const [users, setUsers] = useState([]);
    const [medicals , setMedicals] = useState([]);
    const [reasons , setReasons] = useState([]);
  //  const [Name, setName] = useState('');
    const [Enroll_Date, setEnroll_Date] = useState('');
    const [d_date, setd_date] = useState('');
//

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      getService();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('V_Service_No')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/adminform1a`,{
          params:{
            V_Service_No: sn
          }
        });
        setUsers(response.data);
    }
    const getService = async () => {
         const sn = localStorage.getItem('getService_Name')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getService_Name`,{
          params:{
            getService_Name: sn
          }
        });
        setService_Name(response.data);
    }
    const Edit = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
            localStorage.setItem('V_Unit_Last_Served`,Unit_Last_Served);
                localStorage.setItem('V_Discharge_Date`,Discharge_Date);
                localStorage.setItem('V_Discharge_Reason`,Discharge_Reason);
                localStorage.setItem('V_Discharge_Med_Cat`,Discharge_Med_Cat);
                localStorage.setItem('V_Discharge_Character`,Discharge_Character);
                localStorage.setItem('V_Discharge_Book_No`,Discharge_Book_No);
                localStorage.setItem('V_If_Pensioner`,If_Pensioner);
                localStorage.setItem('V_PPO_No`,PPO_No);
                localStorage.setItem('V_Pension_Sanctioned`,Pension_Sanctioned);
                localStorage.setItem('V_Present_Pension`,Present_Pension);
                localStorage.setItem('V_If_Sanctioned_Dis_Pension`,If_Sanctioned_Dis_Pension);
                localStorage.setItem('V_Disability_Pension`,Disability_Pension);
                localStorage.setItem('V_Disability_Percentage`,Disability_Percentage);
                localStorage.setItem('V_Pension_AC_No`,Pension_AC_No);
                localStorage.setItem('V_Bank_Name`,Bank_Name);
                localStorage.setItem('V_Branch`,Branch);
                localStorage.setItem('V_IFSC`,IFSC);
            navigate("/viewForm2b");
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

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      < FormLabels text={"Unit Last Served"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Unit_Last_Served} />
      </div>

      < FormLabels text={"Discharge Date"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Date} />
      </div>

      < FormLabels text={"Discharge Reason"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vDischarge_Reason} />
      </div>

      < FormLabels text={"Discharge Medical Category"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vDischarge_Med_Cat} />
      </div>

      < FormLabels text={"Discharge Character"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vDischarge_Character}/>
      </div>

      < FormLabels text={"Discharge Book No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Book_No}/>
      </div>

      < FormLabels text={"If Pensioner"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.If_Pensioner}/>
      </div>

      < FormLabels text={"PPO No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.PPO_No}/>
      </div>

      < FormLabels text={"Pension Sanctioned"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Pension_Sanctioned} />
      </div>

      < FormLabels text={"Present Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Present_Pension} />
      </div>


      < FormLabels text={"If Sanctioned Disability Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.If_Sanctioned_Dis_Pension} />
      </div>

      < FormLabels text={"Disability Percentage"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Disability_Percentage} />
      </div>

      < FormLabels text={"Disability Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Disability_Pension} />
      </div>

      < FormLabels text={"Pension AC No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Pension_AC_No}/>
      </div>

      < FormLabels text={"Bank"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vBank_Name}/>
      </div>

      < FormLabels text={"Branch"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vBranch} />
      </div>

      < FormLabels text={"IFSC"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.vIFSC} />
      </div>



    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform1a">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewForm3a">Skip</Link> </button>

    <button className="btn my-2 my-sm-0 " onClick={Edit} onMouseEnter={function EditMouseHover(){
  setUnit_Last_Served(user.Unit_Last_Served)
  setDischarge_Date(user.Discharge_Date)
  setDischarge_Reason(user.vDischarge_Reason)
  setDischarge_Med_Cat(user.vDischarge_Med_Cat)
  setDischarge_Character(user.vDischarge_Character)
  setDischarge_Book_No(user.Discharge_Book_No)
  setIf_Pensioner(user.If_Pensioner)
  setPPO_No(user.PPO_No)
  setPension_Sanctioned(user.Pension_Sanctioned)
  setPresent_Pension(user.Present_Pension)
  setIf_Sanctioned_Dis_Pension(user.If_Sanctioned_Dis_Pension)
  setDisability_Pension(user.Disability_Pension)
  setDisability_Percentage(user.Disability_Percentage)
  setPension_AC_No(user.Pension_AC_No)
  setBank_Name(user.vBank_Name)
  setBranch(user.vBranch)
  setIFSC(user.vIFSC)
  }}>Edit </button>
   </div>
     </div>
   ))}



    </div>

    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm2a
