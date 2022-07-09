import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewFormWa = () => {

  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
//
//const [Service_No, setService_No] = useState('');
    const [Family_Pension, setFamily_Pension] = useState('');
    const [W_Nxt_Kin, setW_Nxt_Kin] = useState('');
    const [Death_Date, setDeath_Date] = useState('');
    const [Death_Nature, setDeath_Nature] = useState('');
    const [ESM_No, setESM_No] = useState('');




    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();

    }, []);



    const axiosJWT = axios.create();


    // const getUsers = async () => {
    //   //  const sn = localStorage.getItem('V_Service_No')
    //     const response = await axiosJWT.get('http://localhost:5000/awidowform',{
    //       params:{
    //         V_Service_No: '111'
    //       }
    //     });
    //     setUsers(response.data);
    // }


   const getUsers = async () => {
        const sn = localStorage.getItem('V_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/awidowform',{
          params:{
            V_Service_No: sn
          }
        });
        setUsers(response.data);
    }

    const EditW = async (e) => {
        e.preventDefault();
        try {
            console.log(Service_No);
                localStorage.setItem('V_Family_Pension',Family_Pension);
                localStorage.setItem('V_W_Nxt_Kin',W_Nxt_Kin);
                localStorage.setItem('V_Death_Date',Death_Date);
                localStorage.setItem('V_Death_Nature',Death_Nature);
                localStorage.setItem('V_ESM_No',ESM_No);

            navigate("/viewFormwb");
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
      <label className="header">Widow Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>

      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      < FormLabels text={"Family Pension"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Family_Pension} />
      </div>

      < FormLabels text={"Wife Next of Kin"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.W_Nxt_Kin} />
      </div>

      < FormLabels text={"Death Date"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Death_Date} />
      </div>

      < FormLabels text={"Death Nature"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.Death_Nature} />
      </div>

      < FormLabels text={"ESM No"} />
      <div className="col-lg-4 space">
      <input type="text" className="fadeIn third formInput" value={user.ESM_No}/>
      </div>






    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Formstart">Back</Link> </button>
    <button className=" btn" ><Link to="/viewform1a">Next</Link> </button>

    <button className="btn my-2 my-sm-0 " onClick={EditW} onMouseEnter={function EditMouseHover(){
    setFamily_Pension(user.Family_Pension)
    setW_Nxt_Kin(user.W_Nxt_Kin)
    setDeath_Date(user.Death_Date)
    setDeath_Nature(user.Death_Nature)
    setESM_No(user.ESM_No)

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

export default ViewFormWa
