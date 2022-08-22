import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm3a = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const [Father_Name, setFather_Name] = useState('');
    const [Mother_Name, setMother_Name] = useState('');
    const [Religion, setReligion] = useState('');
    const [Caste_Category, setCaste_Category] = useState('');
    const [Birth_State, setBirth_State] = useState('');
    const [Birth_Dist_Surname, setBirth_Dist_Surname] = useState('');
    const [Birth_Place, setBirth_Place] = useState('');
    const [Adhaar, setAdhaar] = useState('');
    const [Voter_Id, setVoter_Id] = useState('');
    const [PAN, setPAN] = useState('');
    const [CSD, setCSD] = useState('');
    const [ECHS, setECHS] = useState('');
    const [Id_Mark1, setId_Mark1] = useState('');
    const [Id_Mark2, setId_Mark2] = useState('');


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


 const Edit3 = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
                localStorage.setItem('V_Father_Name`,Father_Name);
                localStorage.setItem('V_Mother_Name`,Mother_Name);
                localStorage.setItem('V_Religion`,Religion);
                localStorage.setItem('V_Caste_Category`,Caste_Category);

                localStorage.setItem('V_Birth_State`,Birth_State);
                localStorage.setItem('V_Birth_Dist_Surname`,Birth_Dist_Surname);
                localStorage.setItem('V_Birth_Place`,Birth_Place);
                localStorage.setItem('V_Adhaar`,Adhaar);
                localStorage.setItem('V_Voter_Id`,Voter_Id);
                localStorage.setItem('V_PAN`,PAN);
                localStorage.setItem('V_CSD`,CSD);
                localStorage.setItem('V_ECHS`,ECHS);
                localStorage.setItem('V_Id_Mark1`,Id_Mark1);
                localStorage.setItem('V_Id_Mark2`,Id_Mark2);

            navigate("/viewForm3b");
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
      <label className="header">Personal Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>


      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      < FormLabels text={"Father Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Father_Name} />
      </div>

      < FormLabels text={"Mother Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Mother_Name} />
      </div>

      < FormLabels text={"Religion"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vReligion} />
      </div>

      < FormLabels text={"Caste Category"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vCaste} />
      </div>

      < FormLabels text={"Birth State"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vBirth_State} />
      </div>

      < FormLabels text={"Birth District"} />
      <div className="col-lg-4 space">
      <FormInput value={user.vBirth_District} />
      </div>

      < FormLabels text={"Birth Place"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Birth_Place} />
      </div>

      < FormLabels text={"Adhaar No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Adhaar} />
      </div>

      < FormLabels text={"Voter Id"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Voter_Id} />
      </div>

      < FormLabels text={"PAN Card No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.PAN} />
      </div>

      < FormLabels text={"CSD No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.CSD} />
      </div>

      < FormLabels text={"ECHS No"} />
      <div className="col-lg-4 space">
      <FormInput value={user.ECHS} />
      </div>

      < FormLabels text={"Identification Mark 1"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Id_Mark1} />
      </div>

      < FormLabels text={"Identification Mark 2"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Id_Mark2} />
      </div>


    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform2a">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewForm4a">Skip</Link> </button>

   <button className="btn my-2 my-sm-0 " onClick={Edit3} onMouseEnter={function EditMouseHover(){
    setFather_Name(user.Father_Name)
    setMother_Name(user.Mother_Name)
    setReligion(user.vReligion)
    setCaste_Category(user.vCaste)
    setBirth_State(user.vBirth_State)
    setBirth_Dist_Surname(user.vBirth_District)
    setBirth_Place(user.Birth_Place)
    setAdhaar(user.Adhaar)
    setVoter_Id(user.Voter_Id)
    setPAN(user.PAN)
    setCSD(user.CSD)
    setECHS(user.ECHS)
    setId_Mark1(user.Id_Mark1)
    setId_Mark2(user.Id_Mark2)

    }}>Edit </button>

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

export default ViewForm3a
