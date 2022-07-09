import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const VFormue = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('V_Service_No'));
    const [Name, setName] = useState('');
    const [Mail_Id, setMail_Id] = useState('');

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
  getName();
    }, []);

    const getTrades  = async () => {
            const response = await axiosJWT.get('http://localhost:5000/getTrades',{

              params:{
                Service_No: Service_No
              }
            });
            setUsers(response.data);

          }


          const getCivilQualification  = async () => {
                  const response = await axiosJWT.get('http://localhost:5000/getCivilQualification',{

                    params:{
                      Service_No: Service_No
                    }
                  });
                  setUsers(response.data);

                }

    const axiosJWT = axios.create();

    const getName  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getName',{

             params:{
               Service_No: Service_No
             }
           });
           setName(response.data);
         }

    const getUsers = async () => {
        const sn = localStorage.getItem('V_Service_No')
        const response = await axiosJWT.get('http://localhost:5000/adminformue',{
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
      <label className="header">Employment Details</label>
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


                  <FormLabels text={"Age"} />
                  <div className="col-lg-4 space">
                  <input type="text"  className="fadeIn third formInput" value={user.Age}/>
                  </div>



                  {users.map((user, index) => (
                          <div className="row"key={user.id}>

                  <FormLabels text={"Civil_Qualification"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vCivil_Qualification}/>
                  </div>

                  <FormLabels text={"Trade_Name "} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.vTrade}/>
                  </div>


                  </div>
                ))}


                  <FormLabels text={"Additional Course 1"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Addi_Course1}/>
                  </div>

                  <FormLabels text={"Additional Course 2"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Addi_Course2}/>
                  </div>

                  <FormLabels text={"Additional Course 3"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Addi_Course3}/>
                  </div>

                  <FormLabels text={"Additional Course 4"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Addi_Course4}/>
                  </div>

                  <FormLabels text={"Equivalent test Passed "} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Equi_Test}/>
                  </div>

                  <FormLabels text={"Trade Code"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Trade_Code}/>
                  </div>

                  <FormLabels text={"ESM No"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.ESM_No}/>
                  </div>




{/*---------------------------------------------GET KEY ----------------------------------------*/}

      </div>
    ))}
{/*---------------------------------------------GET KEY ----------------------------------------*/}


  </div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/FormStart">Back</Link> </button>
    </div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}

</form>

</div>
</div>

</div>
</div>
    )
}

export default VFormue
