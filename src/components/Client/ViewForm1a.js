import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm1a = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [Service_Name, setService_Name] = useState('');
    const [Corps_Name, setCorps_Name] = useState('');
    const [Record_Office_Name, setRecord_Office_Name] = useState('');
    const [Group_Name, setGroup_Name] = useState('');
    const [Trade_Name, setTrade_Name] = useState('');

    const [Rank_Category, setRank_Category] = useState('');


    const [Rank_Name, setRank_Name] = useState('');
    const [Gender, setGender] = useState('');
    const [DOB, setDOB] = useState('');
    const [Enroll_Date, setEnroll_Date] = useState('');
    const [World_War2, setWorld_War2] = useState('');
    const [Opt_Attend, setOpt_Attend] = useState('');
    const [Deco, setDeco] = useState('');



     const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
       getService();

    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('Service_No')
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

    localStorage.setItem('V_Service_No`,Service_No);

    const Edit1 = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
            localStorage.setItem('V_Service_No`,Service_No);

                localStorage.setItem('V_Service_Name`,Service_Name);
                localStorage.setItem('V_Corps_Name`,Corps_Name);
                localStorage.setItem('V_Record_Office_Name`,Record_Office_Name);
                localStorage.setItem('V_Group_Name`,Group_Name);
                localStorage.setItem('V_Trade_Name`,Trade_Name);
                localStorage.setItem('V_Rank_Category`,Rank_Category);
                localStorage.setItem('V_Rank_Name`,Rank_Name);
                localStorage.setItem('V_Gender`,Gender);
                localStorage.setItem('V_DOB`,DOB);
                localStorage.setItem('V_Enroll_Date`,Enroll_Date);
                localStorage.setItem('V_World_War2`,World_War2);
                localStorage.setItem('V_Opt_Attend`,Opt_Attend);
                localStorage.setItem('V_Deco`,Deco);

            navigate("/viewForm1b");
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
      <form>



{/*---------------------------------------------HEADER ----------------------------------------*/}
<div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
<label className="header">Service Details</label>
</div>

<div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
 <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
 <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
</div>
{/*---------------------------------------------HEADER ----------------------------------------*/}

      <div className="upperForm1Content">
{/*---------------------------------------------GET KEY ----------------------------------------*/}

      {users.map((user, index) => (
              <div className="row"key={user.id}>
{/*---------------------------------------------GET KEY ----------------------------------------*/}

                  < FormLabels text={"Service Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vService}/>
                  </div>

                  < FormLabels text={"Corps"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Corps_Name}/>
                  </div>

                  < FormLabels text={"Record Office"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Record_Office_Name}/>
                  </div>

                  < FormLabels text={"Group"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Group_Name}/>
                  </div>

                  < FormLabels text={"Trade Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vTrade}/>
                  </div>


                  < FormLabels text={"Rank Category"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vRank_Category}/>
                  </div>

                  < FormLabels text={"Rank "} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vRank}/>
                  </div>

                  < FormLabels text={"Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Name}/>
                  </div>

                  < FormLabels text={"Gender"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Gender}/>
                  </div>

                  < FormLabels text={"DOB"} />
                  <div className="col-lg-4 space">
                  <input type="text"  className="fadeIn third formInput" value={user.DOB}/>
                  </div>

                  < FormLabels text={"Enrollment Date"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Enroll_Date}/>
                  </div>

                  < FormLabels text={"World War2"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.World_War2}/>
                  </div>

                  < FormLabels text={"Operation Attended"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Opt_Attend}/>
                  </div>

                  < FormLabels text={"Decorations"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Deco}/>
                  </div>


{/*
<button className="btn my-2 my-sm-0 " onClick={Edit1} onMouseEnter={function EditMouseHover(){

setService_Name(user.Service_Name)
setCorps_Name(user.Corps_Name)
setRecord_Office_Name(user.Record_Office_Name)
setGroup_Name(user.Group_Name)
setTrade_Name(user.Trade_Name)
setRank_Category(user.Rank_Category)
setRank_Name(user.Rank_Name)
setGender(user.Gender)
setDOB(user.DOB)
setEnroll_Date(user.Enroll_Date)
setWorld_War2(user.World_War2)
setOpt_Attend(user.Opt_Attend)
setDeco(user.Deco)

                  }}>Edit/Delete </button>

*/}
{/*---------------------------------------------GET KEY ----------------------------------------*/}


{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/FormStart">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewForm2a">Skip</Link> </button>
     <button className="btn my-2 my-sm-0 " onClick={Edit1} onMouseEnter={function EditMouseHover(){

     setService_Name(user.vService)
     setCorps_Name(user.Corps_Name)
     setRecord_Office_Name(user.Record_Office_Name)
     setGroup_Name(user.Group_Name)
     setTrade_Name(user.vTrade)
     setRank_Category(user.vRank_Category)
     setRank_Name(user.vRank)
     setGender(user.Gender)
     setDOB(user.DOB)
     setEnroll_Date(user.Enroll_Date)
     setWorld_War2(user.World_War2)
     setOpt_Attend(user.Opt_Attend)
     setDeco(user.Deco)

   }}>Edit </button>


    </div>
    </div>
  ))}
{/*---------------------------------------------GET KEY ----------------------------------------*/}


</div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}

</form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm1a
