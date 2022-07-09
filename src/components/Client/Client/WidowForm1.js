import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const WidowForm1 = () => {
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');
    // const [Next, setnext] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform6',{
          params:{
            V_Service_No: sn
          }
        });
        setUsers(response.data);
    }
    // if(localStorage.getItem('Reg_TypeForm') ==="Not Registered"){
    //   setnext("Next");
    // }else{
    //   setnext("Submit");
    // }
    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Spouse Details</label>
      <p>Check Your Details</p>
      </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      < FormLabels text={"Service No"} />
      <FormInput value={user.Service_No} required/>

      < FormLabels text={"Marital_Status"} />
      <FormInput value={user.Marital_Status} required/>

      < FormLabels text={"Marriage_Date"} />
      <FormInput value={user.Marriage_Date} required/>

      < FormLabels text={"Spouse_Name"} />
      <FormInput value={user.Spouse_Name} required/>

      < FormLabels text={"Spouse_Relation"} />
      <FormInput value={user.Spouse_Relation} required/>

      < FormLabels text={"Spouse_DOB"} />
      <FormInput value={user.Spouse_DOB} required/>

      < FormLabels text={"Spouse_Id_Mark"} />
      <FormInput value={user.Spouse_Id_Mark} />

      < FormLabels text={"Spouse_Qualification"} />
      <FormInput value={user.Spouse_Qualification} />

      < FormLabels text={"Spouse_Emp_Status"} />
      <FormInput value={user.Spouse_Emp_Status} />

      < FormLabels text={"Spouse_Emp_Profession"} />
      <FormInput value={user.Spouse_Emp_Profession} />

      < FormLabels text={"Spouse_Retirement_Date"} />
      <FormInput value={user.Spouse_Retirement_Date} />

      < FormLabels text={"Spouse_Adhaar"} />
      <FormInput value={user.Spouse_Adhaar} />

      < FormLabels text={"Spouse_Voter_Id"} />
      <FormInput value={user.Spouse_Voter_Id} />

      < FormLabels text={"Spouse_PAN"} />
      <FormInput value={user.Spouse_PAN} />

      < FormLabels text={"Spouse_CSD"} />
      <FormInput value={user.Spouse_CSD} />

      < FormLabels text={"Spouse_ECHS"} />
      <FormInput value={user.Spouse_ECHS} />

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/widowform">Submit</Link> </button>
    </div>
    </form>

</div>
</div>

</div>
</div>
    )
}

export default WidowForm1
