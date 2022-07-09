import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";


const AdminForm0 = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [reg, setReg] = useState([]);

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
getReg();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminform1',{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
    }



reg.map((user, index) => (
  localStorage.getItem('getService_No',user.Service_Name),
  localStorage.getItem('getRank_Category',user.Rank_Category),
  localStorage.getItem('getTrade_Name',user.Trade_Name)
  // localStorage.getItem('getCorps_Name',user.Corps_Name);
  // localStorage.getItem('getCorps_Name',user.Corps_Name);
  // localStorage.getItem('getCorps_Name',user.Corps_Name);
  // localStorage.getItem('getCorps_Name',user.Corps_Name);
  // localStorage.getItem('getCorps_Name',user.Corps_Name);

))



    const getReg = async () => {
         const sn = localStorage.getItem('A_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/getReg',{
          params:{
            getReg: sn
          }
        });
        setReg(response.data);
    }


    return (


      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Service Details</label>
      </div>
      <div className="upperForm1Content">


      {reg.map((user, index) => (

      <div className="row"key={user.id}>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Service_No</label>
          <input type="" class="form-control" id="inputEmail4" value={user.Service_No} />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Name</label>
          <input type="" class="form-control" id="inputPassword4"  value={user.Name} onChange={localStorage.setItem('A_Name',user.Name)}/>
        </div>
      </div>
      <div class="form-row">

      <div class="form-group col-md-6">
        <label for="inputAddress">Mail_Id</label>
        <input type="text" class="form-control" id="inputAddress"  value={user.Mail_Id} />
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress2">Mobile</label>
        <input type="text" class="form-control" id="inputAddress2"  value={user.Mobile} />
      </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">reg date</label>
          <input type="text" class="form-control" id="inputCity" value={user.Reg_Date} />
        </div>
      </div>
      </div>










    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/SuperDash">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/adminform1">Next</Link> </button>
    </div>
    </form>

</div>
</div>
<Corrections/>

</div>
</div>
    )
}

export default AdminForm0
