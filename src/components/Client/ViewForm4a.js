import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm4a = () => {
    // const [Clerk_Q, setClerk_Q] = useState('');
    // const [Superintendent_Q, setSuperintendent_Q] = useState('');
    // const [Director_Q, setDirector_Q] = useState('');
    // const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

//const [Service_No, setService_No] = useState('');
    const [P_Pincode, setP_Pincode] = useState('');
    const [P_State, setP_State] = useState('');
    const [P_District, setP_District] = useState('');
    const [P_Taluk_Name, setP_Taluk_Name] = useState('');
    const [P_City_Village, setP_City_Village] = useState('');
    const [P_Locality, setP_Locality] = useState('');
    const [P_Street, setP_Street] = useState('');
    const [P_House_No, setP_House_No] = useState('');
    const [P_House_Name, setP_House_Name] = useState('');
    const [P_Police_Station, setP_Police_Station] = useState('');
    const [Tele_No, setTele_No] = useState('');
    const [Pincode, setPincode] = useState('');
    const [State, setState] = useState('');
    const [District, setDistrict] = useState('');
    const [Taluk_Name, setTaluk_Name] = useState('');
    const [City_Village, setCity_Village] = useState('');
    const [Locality, setLocality] = useState('');
    const [Street, setStreet] = useState('');
    const [House_No, setHouse_No] = useState('');
    const [House_Name, setHouse_Name] = useState('');
    const [Police_Station, setPolice_Station] = useState('');



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
            localStorage.setItem('V_P_Pincode`,P_Pincode);
                localStorage.setItem('V_P_State`,P_State);
                localStorage.setItem('V_P_District`,P_District);
                localStorage.setItem('V_P_Taluk_Name`,P_Taluk_Name);
                localStorage.setItem('V_P_City_Village`,P_City_Village);
                localStorage.setItem('V_P_Locality`,P_Locality);
                localStorage.setItem('V_P_Street`,P_Street);
                localStorage.setItem('V_P_House_No`,P_House_No);
                localStorage.setItem('V_P_House_Name`,P_House_Name);
                localStorage.setItem('V_P_Police_Station`,P_Police_Station);
                localStorage.setItem('V_Tele_No`,Tele_No);
                localStorage.setItem('V_Pincode`,Pincode);
                localStorage.setItem('V_State`,State);
                localStorage.setItem('V_District`,District);
                localStorage.setItem('V_Taluk_Name`,Taluk_Name);
                localStorage.setItem('V_City_Village`,City_Village);
                localStorage.setItem('V_Locality`,Locality);
                localStorage.setItem('V_Street`,Street);

                localStorage.setItem('V_House_No`,House_No);
                localStorage.setItem('V_House_Name`,House_Name);
                localStorage.setItem('V_Police_Station`,Police_Station);


            navigate("/viewForm4b");
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
      <label className="header">Contact Details</label>
      </div>

      <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
      </div>


      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>


      <div className="row">

                 <div className = "row">

                     <div className = "col-md-6">

                          <label><b><u>PERMANENT ADDRESS</u></b></label><br></br><br></br>

                            < FormLabels text={"Pincode"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Pincode} />
                            </div>

                            < FormLabels text={"State"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.vP_State} />
                            </div>

                            < FormLabels text={"District"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.vP_District} />
                            </div>

                            < FormLabels text={"Taluk"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.vP_Taluk_Name} />
                            </div>

                             < FormLabels text={"City/Village"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_City_Village} />
                            </div>

                            < FormLabels text={"Locality"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Locality} />
                            </div>

                            < FormLabels text={"Street"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Street} />
                            </div>


                            < FormLabels text={"House No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_House_No} />
                            </div>

                            < FormLabels text={"House Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_House_Name} />
                            </div>

                            < FormLabels text={"Police Station"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.P_Police_Station} />
                            </div>

                            < FormLabels text={"Telephone No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Tele_No} />
                            </div>

                      </div>

                      <div className= "col-md-6">

                          <label><b><b><u>PRESENT ADDRESS</u></b></b></label><br></br><br></br>

                            < FormLabels text={" Pincode"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Pincode} />
                            </div>

                            < FormLabels text={" State"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.State} />
                            </div>

                            < FormLabels text={" District"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.District} />
                            </div>

                            < FormLabels text={" Taluk"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Taluk_Name} /></div>

                            < FormLabels text={"City/Village"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.City_Village} />
                            </div>

                            < FormLabels text={"Locality"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Locality} />
                            </div>

                            < FormLabels text={" Street"} />
                            <div className="col-lg-12 space">
                            <FormInput value={user.Street} />
                            </div>

                             < FormLabels text={" House No"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.House_No} />
                            </div>


                            < FormLabels text={" House Name"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.House_Name} />
                            </div>

                            < FormLabels text={" Police Station"} />
                            <div className="col-lg-12 ">
                            <FormInput value={user.Police_Station} />
                             </div>
                      </div>

                  </div>

              </div>






    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform3a">Back</Link> </button>
    <button className=" btn" ><Link to="/ViewForm5a">Skip</Link> </button>

    <button className="btn my-2 my-sm-0 " onClick={Edit} onMouseEnter={function EditMouseHover(){
 setP_Pincode(user.P_Pincode)
 setP_State(user.vP_State)
 setP_District(user.vP_District)
 setP_Taluk_Name(user.vP_Taluk_Name)
 setP_City_Village(user.P_City_Village)
 setP_Locality(user.P_Locality)
 setP_Street(user.P_Street)
 setP_House_No(user.P_House_No)
 setP_House_Name(user.P_House_Name)
 setP_Police_Station(user.P_Police_Station)
 setTele_No(user.Tele_No)
 setPincode(user.Pincode)
 setState(user.State)
 setDistrict(user.District)
 setTaluk_Name(user.Taluk_Name)
 setCity_Village(user.City_Village)
 setLocality(user.Locality)
 setStreet(user.Street)
 setHouse_No(user.House_No)
 setHouse_Name(user.House_Name)
 setPolice_Station(user.Police_Station)


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

export default ViewForm4a
