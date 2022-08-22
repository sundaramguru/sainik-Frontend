import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm5a = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const [Civil_Qualification, setCivil_Qualification] = useState('');
    const [Addi_Course, setAddi_Course] = useState('');
    const [Equi_Test, setEqui_Test] = useState('');
    const [Civil_Emp_Status, setCivil_Emp_Status] = useState('');
    const [Sector, setSector] = useState('');

    const [Dept, setDept] = useState('');
    const [Pres_Desg, setPres_Desg] = useState('');
    const [Employer, setEmployer] = useState('');
    const [Month_Income, setMonth_Income] = useState('');
    const [Official_No, setOfficial_No] = useState('');
    const [Desg_Retire, setDesg_Retire] = useState('');
    const [Retire_Date, setRetire_Date] = useState('');
    const [Civil_PPO_No, setCivil_PPO_No] = useState('');



    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
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

    const Edit5 = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
                localStorage.setItem('V_Civil_Qualification`,Civil_Qualification);
                localStorage.setItem('V_Addi_Course`,Addi_Course);
                localStorage.setItem('V_Equi_Test`,Equi_Test);
                localStorage.setItem('V_Civil_Emp_Status`,Civil_Emp_Status);
                localStorage.setItem('V_Sector`,Sector);
                localStorage.setItem('V_Dept`,Dept);
                localStorage.setItem('V_Pres_Desg`,Pres_Desg);
                localStorage.setItem('V_Employer`,Employer);
                localStorage.setItem('V_Month_Income`,Month_Income);
                localStorage.setItem('V_Official_No`,Official_No);
                localStorage.setItem('V_Desg_Retire`,Desg_Retire);
                localStorage.setItem('V_Retire_Date`,Retire_Date);
                localStorage.setItem('V_Civil_PPO_No`,Civil_PPO_No);

            navigate("/viewForm5b");
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

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      < FormLabels text={"Civil Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vCivil_Qualification} />
      </div>

      < FormLabels text={"Additional Course 1"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Addi_Course} />
      </div>


      < FormLabels text={"Equivalent Test passed"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Equi_Test} />
      </div>

      < FormLabels text={"Civil Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_Emp_Status} />
      </div>

        < FormLabels text={"Sector"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Sector} />
      </div>

      < FormLabels text={"Department"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dept} />
      </div>

      < FormLabels text={"Present Designation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Pres_Desg} />
      </div>

      < FormLabels text={"Employer"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Employer} />
      </div>

      < FormLabels text={"Monthly Income"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Month_Income} />
      </div>

      < FormLabels text={"Official No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Official_No} />
      </div>

      < FormLabels text={"Designation Retirement"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Desg_Retire} />
      </div>

      < FormLabels text={"Retirement Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Retire_Date} />
      </div>

      < FormLabels text={"Civil PPO No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_PPO_No} />
      </div>



    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform4a">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewFormDoc">Skip</Link> </button>

    <button className="btn my-2 my-sm-0 " onClick={Edit5} onMouseEnter={function EditMouseHover(){
  setCivil_Qualification(user.vCivil_Qualification)
  setAddi_Course(user.Addi_Course)
  setEqui_Test(user.Equi_Test)
  setCivil_Emp_Status(user.Civil_Emp_Status)
  setSector(user.Sector)
  setDept(user.Dept)
  setPres_Desg(user.Pres_Desg)
  setEmployer(user.Employer)
  setMonth_Income(user.Month_Income)
  setOfficial_No(user.Official_No)
  setDesg_Retire(user.Desg_Retire)
  setRetire_Date(user.Retire_Date)
  setCivil_PPO_No(user.Civil_PPO_No)

}}>Edit</button>

    </div></div>
  ))}
    </div>

    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm5a
