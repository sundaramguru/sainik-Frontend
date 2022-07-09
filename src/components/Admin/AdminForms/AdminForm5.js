import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm5 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');
    const [visible, setvisible] = useState(false);

const [Civil_Emp_Status, setCivil_Emp_Status] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
        getName();
        v();
    }, []);



    const axiosJWT = axios.create();

    const getName  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getName',{

             params:{
               Service_No: Service_No
             }
           });
           setName(response.data);
         }

    const getUsers = async () => {
        const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform1',{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
    }

    const v = (e) =>  {
if(Civil_Emp_Status=='Un-Employed'){
  setvisible(false)
}
else{
  setvisible(true)

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
       <label className="sn-mar ">{"Name :"}</label>{Name}&nbsp;<br/>
       </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabels text={"Civil Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vCivil_Qualification} />
      </div>

      <FormLabels text={"Additional Course"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Addi_Course} />
      </div>

      <FormLabels text={"Equivalent Test passed"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Equi_Test} />
      </div>

      <FormLabels text={"Civil Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_Emp_Status} onChange={(e) => setCivil_Emp_Status(e.target.value)} />
      </div>




{visible && <div>
      <FormLabels text={"Department"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dept} />
      </div>

      <FormLabels text={"Present Designation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Pres_Desg} />
      </div>

      <FormLabels text={"Employer"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Employer} />
      </div>

      <FormLabels text={"Monthly Income"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Month_Income} />
      </div>

      <FormLabels text={"Official No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Official_No} />
      </div>

      <FormLabels text={"Designation Retirement"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Desg_Retire} />
      </div>

      <FormLabels text={"Retirement Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Retire_Date} />
      </div>

      <FormLabels text={"Civil PPO No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Civil_PPO_No} />
      </div>
</div>}
      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform4">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/ADocForm1">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm5
// {(() => {
//   if(user.Civil_Emp_Status=='Un-Employed'){
//     setvisible(false)
//   }
//   else{
//     setvisible(true)
//
//   }
//         })()}
