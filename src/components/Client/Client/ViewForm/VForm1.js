import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const VForm1 = () => {

    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('A_Service_No'));

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
      <form>



{/*---------------------------------------------HEADER ----------------------------------------*/}
      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Service Details</label>
      </div>

      <div className = "left-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
   {/*    <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>*/}
      </div>
{/*---------------------------------------------HEADER ----------------------------------------*/}

      <div className="upperForm1Content">
{/*---------------------------------------------GET KEY ----------------------------------------*/}

      {users.map((user, index) => (
              <div className="row"key={user.id}>
{/*---------------------------------------------GET KEY ----------------------------------------*/}

                  <FormLabel text={"Service Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vService}/>
                  </div>

                  <FormLabel text={"Corps"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Corps_Name}/>
                  </div>

                  <FormLabel text={"Record Office"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Record_Office_Name}/>
                  </div>

                  <FormLabel text={"Group"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Group_Name}/>
                  </div>

                  <FormLabel text={"Trade Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vTrade}/>
                  </div>
                  <FormLabel text={"Rank Category "} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Rank_Category}/>
                  </div>

                  <FormLabel text={"Rank "} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Rank_Name}/>
                  </div>

                  <FormLabel text={"Name"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Name}/>
                  </div>

                  <FormLabel text={"Gender"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Gender}/>
                  </div>

                  <FormLabel text={"DOB"} />
                  <div className="col-lg-4 space">
                  <input type="text"  className="fadeIn third formInput" value={user.DOB}/>
                  </div>

                  <FormLabel text={"Enrollment Date"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Enroll_Date}/>
                  </div>

                  <FormLabel text={"World War2"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.World_War2}/>
                  </div>

                  <FormLabel text={"Operation Attended"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Opt_Attend}/>
                  </div>

                  <FormLabel text={"Decorations"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Deco}/>
                  </div>

{/*---------------------------------------------GET KEY ----------------------------------------*/}

      </div>
    ))}
{/*---------------------------------------------GET KEY ----------------------------------------*/}


  </div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/login">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/vform2">Next</Link> </button>
    </div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}

</form>

</div>
</div>

</div>
</div>
    )
}

export default VForm1
