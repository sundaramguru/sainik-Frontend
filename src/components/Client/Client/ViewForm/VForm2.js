import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
 
 
const VForm2 = () => {
   
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('A_Name'));


    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      getService();
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
    const getService = async () => {
         const sn = localStorage.getItem('getService_Name')
        const response = await axiosJWT.get('http://localhost:5000/getService_Name',{
          params:{
            getService_Name: sn
          }
        });
        setService_Name(response.data);
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

       <div className = "right-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
       </div>


      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      <FormLabel text={"Unit Last Served"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Unit_Last_Served}/>
      </div>

      <FormLabel text={"Discharge Date"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Date}/>
      </div>

      <FormLabel text={"Discharge Reason"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Reason}/>
      </div>

      <FormLabel text={"Discharge Medical Category"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Med_Cat}/>
      </div>

      <FormLabel text={"Discharge Character"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Character}/>
      </div>

      <FormLabel text={"Discharge Book No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Discharge_Book_No}/>
      </div>

      <FormLabel text={"If Pensioner"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.If_Pensioner}/>
      </div>

      <FormLabel text={"PPO No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.PPO_No}/>
      </div>

      <FormLabel text={"Pension Sanctioned"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Pension_Sanctioned}/>
      </div>

      <FormLabel text={"If Sanctioned Disability Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.If_Sanctioned_Dis_Pension}/>
      </div>

      <FormLabel text={"Disability Percentage"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Disability_Percentage}/>
      </div>

      <FormLabel text={"Disability Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Disability_Pension}/>
      </div>

      <FormLabel text={"Pension AC No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Pension_AC_No}/>
      </div>

      <FormLabel text={"Bank"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Bank_Name}/>
      </div>

      <FormLabel text={"Branch"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Branch}/>
      </div>

      <FormLabel text={"IFSC"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.IFSC}/>
      </div>

      </div>
    ))}
  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/vform1">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit"><Link to="/vform3">Next</Link> </button>
    </div>
    </form>

</div>
</div>

</div>
</div>
    )
}

export default VForm2
