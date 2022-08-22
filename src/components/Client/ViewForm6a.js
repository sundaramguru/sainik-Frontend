                         import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm6a = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
//
//const [Service_No, setService_No] = useState('');
    const [Marital_Status, setMarital_Status] = useState('');
    const [Marriage_Date, setMarriage_Date] = useState('');
    const [Spouse_Name, setSpouse_Name] = useState('');
    const [Spouse_Relation, setSpouse_Relation] = useState('');
    const [Spouse_DOB, setSpouse_DOB] = useState('');
    const [Spouse_Id_Mark, setSpouse_Id_Mark] = useState('');
    const [Spouse_Adhaar, setSpouse_Adhaar] = useState('');
    const [Spouse_Voter_Id, setSpouse_Voter_Id] = useState('');
    const [Spouse_PAN, setSpouse_PAN] = useState('');
    const [Spouse_CSD, setSpouse_CSD] = useState('');
    const [Spouse_ECHS, setSpouse_ECHS] = useState('');
    const [Spouse_Qualification, setSpouse_Qualification] = useState('');
    const [Spouse_Emp_Status, setSpouse_Emp_Status] = useState('');
    const [Spouse_Sector, setSpouse_Sector] = useState('');
    const [Spouse_Dept, setSpouse_Dept] = useState('');
    const [Spouse_Pres_Desg, setSpouse_Pres_Desg] = useState('');
    const [Spouse_Employer, setSpouse_Employer] = useState('');
    const [Spouse_Month_Income, setSpouse_Month_Income] = useState('');
    const [Spouse_Official_No, setSpouse_Official_No] = useState('');
    const [Spouse_Desg_Retire, setSpouse_Desg_Retire] = useState('');
    const [Spouse_Retire_Date, setSpouse_Retire_Date] = useState('');
    const [Spouse_Civil_PPO_No, setSpouse_Civil_PPO_No] = useState('');
    const [Court_Order, setCourt_Order] = useState('');
    const [Divorce_Date, setDivorce_Date] = useState('');

    const [Death_Date, setDeath_Date] = useState('');

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
      // getService();
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
    // const getService = async () => {
    //      const sn = localStorage.getItem('getService_Name')
    //     const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getService_Name`,{
    //       params:{
    //         getService_Name: sn
    //       }
    //     });
    //     setService_Name(response.data);
    // }
    const Edit = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
            localStorage.setItem('V_Marital_Status`,Marital_Status);
                localStorage.setItem('V_Marriage_Date`,Marriage_Date);
                localStorage.setItem('V_Spouse_Name`,Spouse_Name);
                localStorage.setItem('V_Spouse_Relation`,Spouse_Relation);
                localStorage.setItem('V_Spouse_DOB`,Spouse_DOB);
                localStorage.setItem('V_Spouse_Id_Mark`,Spouse_Id_Mark);
                localStorage.setItem('V_Spouse_Adhaar`,Spouse_Adhaar);
                localStorage.setItem('V_Spouse_Voter_Id`,Spouse_Voter_Id);
                localStorage.setItem('V_Spouse_PAN`,Spouse_PAN);
                localStorage.setItem('V_Spouse_CSD`,Spouse_CSD);
                localStorage.setItem('V_Spouse_ECHS`,Spouse_ECHS);
                localStorage.setItem('V_Spouse_Qualification`,Spouse_Qualification);
                localStorage.setItem('V_Spouse_Emp_Status`,Spouse_Emp_Status);
                localStorage.setItem('V_Spouse_Sector`,Spouse_Sector);
                localStorage.setItem('V_Spouse_Dept`,Spouse_Dept);
                localStorage.setItem('V_Spouse_Pres_Desg`,Spouse_Pres_Desg);
                localStorage.setItem('V_Spouse_Employer`,Spouse_Employer);
                localStorage.setItem('V_Spouse_Month_Income`,Spouse_Month_Income);
                localStorage.setItem('V_Spouse_Official_No`,Spouse_Official_No);
                localStorage.setItem('V_Spouse_Desg_Retire`,Spouse_Desg_Retire);
                localStorage.setItem('V_Spouse_Retire_Date`,Spouse_Retire_Date);
                localStorage.setItem('V_Spouse_Civil_PPO_No`,Spouse_Civil_PPO_No);
                localStorage.setItem('V_Court_Order`,Court_Order);
                localStorage.setItem('V_Divorce_Date`,Divorce_Date);
                localStorage.setItem('V_Death_Date`,Death_Date);

            navigate("/viewForm6b");
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
      <label className="header">Spouse Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>


      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      < FormLabels text={"Marital Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Marital_Status} />
      </div>

      < FormLabels text={"Marriage Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Marriage_Date} />
      </div>

      < FormLabels text={"Spouse Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Name} />
      </div>

      < FormLabels text={"Spouse Relation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Relation} />
      </div>

      < FormLabels text={"Spouse DOB"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_DOB} />
      </div>

      < FormLabels text={"Spouse Identification Mark"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Id_Mark} />
      </div>


      < FormLabels text={"Spouse Adhaar No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Adhaar} />
      </div>

      < FormLabels text={"Spouse Voter Id"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Voter_Id} />
      </div>

      < FormLabels text={"Spouse PAN No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_PAN} />
      </div>

      < FormLabels text={"Spouse CSD No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_CSD} />
      </div>

      < FormLabels text={"Spouse ECHS No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_ECHS} />
      </div>


      < FormLabels text={"Spouse Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Qualification} />
      </div>

      < FormLabels text={"Spouse Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Emp_Status} />
      </div>


      < FormLabels text={"Spouse Working Sector"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Sector} />
      </div>

      < FormLabels text={"Spouse Working Department"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Dept} />
      </div>

      < FormLabels text={"Spouse Present Designation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Pres_Desg} />
      </div>

      < FormLabels text={"Spouse Employer"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Employer} />
      </div>

      < FormLabels text={"Spouse Monthly Income"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Month_Income} />
      </div>

      < FormLabels text={"Spouse Official No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Official_No} />
      </div>


      < FormLabels text={"Spouse Designation while Retirement"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Desg_Retire} />
      </div>

      < FormLabels text={"Spouse Retirement Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Retire_Date} />
      </div>

      < FormLabels text={"Spouse Civil PPO No."} />
      <div className="col-lg-4 space">
      <FormInput value={user.Spouse_Civil_PPO_No} />
      </div>

      < FormLabels text={"Court Order"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Court_Order} />
      </div>

      < FormLabels text={"Divorce Date"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Divorce_Date} />
      </div>

      < FormLabels text={"Date of Divorce"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Death_Date} />
      </div>



    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/ViewFormDoc">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewFormSpouseDoc">Skip</Link> </button>


         <button className="btn my-2 my-sm-0 " onClick={Edit} onMouseEnter={function EditMouseHover(){

    setMarital_Status(user.Marital_Status)
    setMarriage_Date(user.Marriage_Date)
    setSpouse_Name(user.Spouse_Name)
    setSpouse_Relation(user.Spouse_Relation)
    setSpouse_DOB(user.Spouse_DOB)
    setSpouse_Id_Mark(user.Spouse_Id_Mark)
    setSpouse_Adhaar(user.Spouse_Adhaar)
    setSpouse_Voter_Id(user.Spouse_Voter_Id)
    setSpouse_PAN(user.Spouse_PAN)
    setSpouse_CSD(user.Spouse_CSD)
    setSpouse_ECHS(user.Spouse_ECHS)
    setSpouse_Qualification(user.Spouse_Qualification)
    setSpouse_Emp_Status(user.Spouse_Emp_Status)
    setSpouse_Sector(user.Spouse_Sector)
    setSpouse_Dept(user.Spouse_Dept)
    setSpouse_Pres_Desg(user.Spouse_Pres_Desg)
    setSpouse_Employer(user.Spouse_Employer)
    setSpouse_Month_Income(user.Spouse_Month_Income)
    setSpouse_Official_No(user.Spouse_Official_No)
    setSpouse_Desg_Retire(user.Spouse_Desg_Retire)
    setSpouse_Retire_Date(user.Spouse_Retire_Date)
    setSpouse_Civil_PPO_No(user.Spouse_Civil_PPO_No)
    setCourt_Order(user.Court_Order)
    setDivorce_Date(user.Divorce_Date)
    setDeath_Date(user.Death_Date)

  }}>Edit</button>

          </div>  </div>
        ))}

    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm6a
