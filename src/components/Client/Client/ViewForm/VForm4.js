import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
 
 
const VForm4 = () => {
   
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
    // {/**/}

    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Contact Details</label>
      </div>

      <div className = "left-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name} &nbsp;<br/>
       </div>

      <div className="upperForm1Content">

      {users.map((user, index) => (

        <div className="row"key={user.id}> 

             <div className="row">

                 <div className = "row">

                     <div className = "col-md-6">

                          <label><b><u>PERMANENT ADDRESS</u></b></label><br></br><br></br>

                            <FormLabel text={"Pincode"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Pincode} />
                            </div>

                            <FormLabel text={"State"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_State} />
                            </div>

                            <FormLabel text={"District"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_District} />
                            </div>

                            <FormLabel text={"Taluk Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Taluk_Name} />
                            </div>

                             <FormLabel text={"City/Village"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_City_Village} />
                            </div>

                            <FormLabel text={"Locality"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Locality} />
                            </div>

                            <FormLabel text={"Street"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Street} />
                            </div>


                            <FormLabel text={"House No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_House_No} />
                            </div>

                            <FormLabel text={"House Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_House_Name} />
                            </div>

                            <FormLabel text={"Police Station"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Police_Station} />
                            </div>

                            <FormLabel text={"Telephone No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Tele_No} />
                            </div>

                      </div>

                      <div className= "col-md-6">

                          <label><b><b><u>PRESENT ADDRESS</u></b></b></label><br></br><br></br>

                            <FormLabel text={" Pincode"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Pincode} />
                            </div>

                            <FormLabel text={" State"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.State} />
                            </div>

                            <FormLabel text={" District"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.District} />
                            </div>

                            <FormLabel text={" Taluk Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Taluk_Name} /></div>

                            <FormLabel text={"City/Village"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.City_Village} />
                            </div>

                            <FormLabel text={"Locality"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Locality} />
                            </div>

                            <FormLabel text={" Street"} />
                            <div className="col-lg-12 space">
                            <FormInput value={user.Street} />
                            </div>

                             <FormLabel text={" House No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.House_No} />
                            </div>


                            <FormLabel text={" House Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.House_Name} />
                            </div>

                            <FormLabel text={" Police Station"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Police_Station} />
                             </div>
                      </div>

                  </div>

              </div>

        </div>
    ))}
  </div>

        <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
        <button className=" btn" ><Link to="/vform3">Back</Link> </button>
        <button className="btn my-2 my-sm-0 " type="submit"><Link to="/vform5">Next</Link> </button>
        </div>
    </form>

</div>
</div>

</div>
</div>
    )
}

export default VForm4
