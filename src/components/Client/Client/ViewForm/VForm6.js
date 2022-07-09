import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const VForm6 = () => {

    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('A_Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
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



    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Spouse Details</label>
      </div>

       <div className = "left-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name}&nbsp;<br/>
       </div>

      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabel text={"Marital Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Marital_Status} />
      </div>

      <FormLabel text={"Marriage Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Marriage_Date} />
      </div>

      <FormLabel text={"Spouse Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Name} />
      </div>

      <FormLabel text={"Spouse Relation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Relation} />
      </div>

      <FormLabel text={"Spouse DOB"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_DOB} />
      </div>

      <FormLabel text={"Spouse Identification Mark"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Id_Mark} />
      </div>


      <FormLabel text={"Spouse Adhaar No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Adhaar} />
      </div>

      <FormLabel text={"Spouse Voter Id"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Voter_Id} />
      </div>

      <FormLabel text={"Spouse PAN No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_PAN} />
      </div>

      <FormLabel text={"Spouse CSD No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_CSD} />
      </div>

      <FormLabel text={"Spouse ECHS No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_ECHS} />
      </div>


      <FormLabel text={"Spouse Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Qualification} />
      </div>

      <FormLabel text={"Spouse Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Emp_Status} />
      </div>


      <FormLabel text={"Spouse Working Sector"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Sector} />
      </div>

      <FormLabel text={"Spouse Working Department"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Dept} />
      </div>

      <FormLabel text={"Spouse Present Designation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Pres_Desg} />
      </div>

      <FormLabel text={"Spouse Employer"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Employer} />
      </div>

      <FormLabel text={"Spouse Monthly Income"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Month_Income} />
      </div>

      <FormLabel text={"Spouse Official No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Official_No} />
      </div>


      <FormLabel text={"Spouse Designation while Retirement"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Desg_Retire} />
      </div>

      <FormLabel text={"Spouse Retirement Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Retire_Date} />
      </div>

      <FormLabel text={"Spouse Civil PPO No."} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Civil_PPO_No} />
      </div>

      <FormLabel text={"Court Order"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Court_Order} />
      </div>

      <FormLabel text={"Divorce Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Divorce_Date} />
      </div>


      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/VDoc">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/VS_Doc">Next</Link> </button>
    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default VForm6
