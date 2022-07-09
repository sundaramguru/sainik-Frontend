import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const VWidowForm = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('V_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('V_Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('V_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/awidowform',{
          params:{
            A_Service_No: sn
          }
        });
        setUsers(response.data);
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
      <div className = "left-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
       </div>
      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      <FormLabel text={"Family Pension"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Family_Pension} />
      </div>

      <FormLabel text={"Wife Next of Kin"} />
      <div className="col-lg-4 space">
      <FormInput value={user.W_Nxt_Kin} />
      </div>

      <FormLabel text={"Death Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Death_Date} />
      </div>

      <FormLabel text={"Death Nature"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Death_Nature} />
      </div>

      <FormLabel text={"ESM No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.ESM_No} />
      </div>

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/formstart">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "><Link to="/vform1">Next </Link></button>
    </div>
    </form>

</div>
</div>

</div>
</div>
    )
}

export default VWidowForm
