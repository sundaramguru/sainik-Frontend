import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm4Edit = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [Mail_Id, setMail_Id] = useState(localStorage.getItem('Mail_Id'));
    const [Mobile, setMobile] = useState(localStorage.getItem('Mobile'));

    const [P_Pincode, setP_Pincode] = useState(localStorage.getItem('V_P_Pincode'));
    const [P_State, setP_State] = useState(localStorage.getItem('V_P_State'));
    const [P_District, setP_District] = useState(localStorage.getItem('V_P_District'));
    const [P_Taluk_Name, setP_Taluk_Name] = useState(localStorage.getItem('V_P_Taluk_Name'));
    const [P_City_Village, setP_City_Village] = useState(localStorage.getItem('V_P_City_Village'));
    const [P_Locality, setP_Locality] = useState(localStorage.getItem('V_P_Locality'));
    const [P_Street, setP_Street] = useState(localStorage.getItem('V_P_Street'));
    const [P_House_No, setP_House_No] = useState(localStorage.getItem('V_P_House_No'));
    const [P_House_Name, setP_House_Name] = useState(localStorage.getItem('V_P_House_Name'));
    const [P_Police_Station, setP_Police_Station] = useState(localStorage.getItem('V_P_Police_Station'));
    const [Tele_No, setTele_No] = useState(localStorage.getItem('V_Tele_No'));


    const [Pincode, setPincode] = useState(localStorage.getItem('V_Pincode'));
    const [State, setState] = useState(localStorage.getItem('V_State'));
    const [District, setDistrict] = useState(localStorage.getItem('V_District'));
    const [Taluk_Name, setTaluk_Name] = useState(localStorage.getItem('V_Taluk_Name'));
    const [City_Village, setCity_Village] = useState(localStorage.getItem('V_City_Village'));
    const [Locality, setLocality] = useState(localStorage.getItem('V_Locality'));
    const [Street, setStreet] = useState(localStorage.getItem('V_Street'));
    const [House_No, setHouse_No] = useState(localStorage.getItem('V_House_No'));
    const [House_Name, setHouse_Name] = useState(localStorage.getItem('V_House_Name'));
    const [Police_Station, setPolice_Station] = useState(localStorage.getItem('V_Police_Station'));

    const [checked, setchecked] = useState('false');
    const [states, setStates] = useState([]);
    const [dist, setDist] = useState([]);
    const [taluks, setTaluks] = useState([]);
    const [streets, setStreets] = useState([]);
    const [distP, setDistP] = useState([]);
    const [taluksP, setTaluksP] = useState([]);
    const [PinErr, setPinErr] = useState('');
    const [telErr, settelErr] = useState('');
    const [PPinErr, setPPinErr] = useState('');


    const [dep, setdep] = useState([]);

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      // getUsers();
      // getService();
      getdep();
      getStates();
      getStreets();
    }, []);

function toggle(value){
  return !value;
}
  const handleClick=()=>{

    setchecked('toggle')

           }

    const axiosJWT = axios.create();

  const getStates = async () => {
    const response = await axiosJWT.get('http://localhost:5000/state_D');
    setStates(response.data);
    }


 const getStreets = async () => {
    const response = await axiosJWT.get('http://localhost:5000/street_D');
    setStreets(response.data);
    }

 const getDist = async () => {
      localStorage.setItem('V_State',State)

      const sn=localStorage.getItem('V_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDist(response.data);
    }
    const getDistP = async () => {
      localStorage.setItem('V_P_State',P_State)

      const sn=localStorage.getItem('V_P_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDistP(response.data);
    }

 const getTaluksP = async () => {
      localStorage.setItem('V_P_District',P_District)

      const dd=localStorage.getItem('V_P_District');
      const response = await axiosJWT.get('http://localhost:5000/Taluk_Depend',
          {
              params:{districts:dd}
          });
      setTaluksP(response.data);
    }
    const getTaluks = async () => {
      localStorage.setItem('V_District',District)

      const dd=localStorage.getItem('V_District');
      const response = await axiosJWT.get('http://localhost:5000/Taluk_Depend',
          {
              params:{districts:dd}
          });
      setTaluks(response.data);
    }

const onPincodeChange = (e) =>  {
    const i = /^[0-9]+$/;
    if (e.target.value === "" || i.test(e.target.value))
    {

        setPincode(e.target.value);
          setPinErr('');
    }
else{
        setPincode('')
        setPinErr('Enter only numbers')
       }

}
const ontelChange = (e) =>  {
    const t = /^[0-9]+$/;
    if (e.target.value === "" || t.test(e.target.value))
    {

        setTele_No(e.target.value);
         settelErr('');
    }
    else{
        setTele_No('')
        settelErr('Enter only numbers')
       }

}

const onPPincodeChange = (e) =>  {
    const c = /^[0-9]+$/;
    if (e.target.value === "" || c.test(e.target.value))
    {

        setP_Pincode(e.target.value);
         setPPinErr('');
    }
    else{
        setP_Pincode('')
        setPPinErr('Enter only numbers')
       }

}

const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/viewform4dep',
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }

    const ViewForm4Edit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:5000/ViewForm4Edit', {
            //     Service_No:Service_No,
            //     P_State: P_State,
            //     P_District:P_District,
            //     P_Pincode: P_Pincode,
            //     P_Taluk_Name: P_Taluk_Name,
            //     P_City_Village: P_City_Village,
            //     P_Locality: P_Locality,
            //     P_Street: P_Street,
            //     P_House_No: P_House_No,
            //     P_House_Name: P_House_Name,
            //     P_Police_Station: P_Police_Station,
            //     Tele_No: Tele_No,
            //     Pincode: Pincode,
            //     State: State,
            //     District: District,
            //     Taluk_Name: Taluk_Name,
            //     City_Village: City_Village,
            //     Locality: Locality,
            //     Street: Street,
            //     House_No: House_No,
            //     House_Name: House_Name,
            //     Police_Station: Police_Station,
            //             });

            if(checked == '0'){

           await axios.post('http://localhost:5000/ViewForm4Edit', {

               Service_No:Service_No,
               Pincode: P_Pincode,
               State: P_State,
               District: P_District,
               Taluk_Name: P_Taluk_Name,
               City_Village: P_City_Village,
               Locality: P_Locality,
               Street: P_Street,
               House_No: P_House_No,
               House_Name: P_House_Name,
               Police_Station: P_Police_Station,

               P_State: P_State,
               P_District:P_District,
               P_Pincode: P_Pincode,
               P_Taluk_Name: P_Taluk_Name,
               P_City_Village: P_City_Village,
               P_Locality: P_Locality,
               P_Street: P_Street,
               P_House_No: P_House_No,
               P_House_Name: P_House_Name,
               P_Police_Station: P_Police_Station,
               Tele_No: Tele_No,
               same:checked

         }); }

           else{

            await axios.post('http://localhost:5000/ViewForm4Edit', {

               Service_No:Service_No,
               Pincode: Pincode,
               State: State,
               District: District,
               Taluk_Name: Taluk_Name,
               City_Village: City_Village,
               Locality: Locality,
               Street: Street,
               House_No: House_No,
               House_Name: House_Name,
               Police_Station: Police_Station,

               P_State: P_State,
               P_District:P_District,
               P_Pincode: P_Pincode,
               P_Taluk_Name: P_Taluk_Name,
               P_City_Village: P_City_Village,
               P_Locality: P_Locality,
               P_Street: P_Street,
               P_House_No: P_House_No,
               P_House_Name: P_House_Name,
               P_Police_Station: P_Police_Station,
               Tele_No: Tele_No,
               same:checked

             });
       }

 navigate("/viewForm5a");
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



      <div className="row">

         <div className = "row">

           <div className = "col-md-6">

              <label><b><u>PERMANENT ADDRESS</u></b></label><br></br><br></br>

                <div className="col-lg-4 nospace">
                  <  FormLabels text={"Pincode"} />
                    <input type="text"  class="  formInput" name="P_Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={P_Pincode} onChange={onPPincodeChange} required/><br/>
                 <span style={{color: 'red'}} >{PPinErr}</span>
                </div>

                <div className="col-lg-9 nospace">
                  <  FormLabels text={" State"} />
                    <select  className="col-lg-9 dropdown_align" value =
                    {P_State} onChange={(e)=> setP_State(e.target.value)}required>
                    <option value = "" disabled selected>--Select One--</option>
                    {states.map((user, index) => (
                    <option key={user.id}value={user.State}>{user.State}</option>))}
                    </select>
                </div>

               <div className="col-lg-9 nospace">
                  <  FormLabels text={" District"} />
                  <select  className="col-lg-9 dropdown_align" value =
                  {P_District}  onChange={(e)=> setP_District(e.target.value)} onClick={getDistP}required>
                  <option value = "" disabled selected>--Select One--</option>
                  {distP.map((user, index) => (
                  <option key={user.id}value={user.District}>{user.District}</option> ))}
                  </select>
               </div>

               <div className="col-lg-9 nospace">
                 <  FormLabels text={" Taluk"} />
                 <select  className="col-lg-9 dropdown_align" value =
                 {P_Taluk_Name}  onClick={getTaluksP}  onChange={(e)=> setP_Taluk_Name(e.target.value)} required>
                 <option value = "" disabled selected>--Select One--</option>
                 {taluksP.map((user, index) => (
                 <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
                 ))}
                 </select>
               </div>


               <div className="col-lg-12 nospace">
                <  FormLabels text={"City/Village"} />
                  <input type="text"  class="  formInput" name="P_City_Village" autocomplete = "off" maxlength = "15" minlength = "5"  value={P_City_Village} onChange={(e) => setP_City_Village(e.target.value.toUpperCase())} />
               </div>

               <div className="col-lg-9 nospace">
                 <  FormLabels text={"Locality/Area"} />
                   <input type="text"  class="  formInput" name="P_Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Locality} onChange={(e) => setP_Locality(e.target.value)} />
               </div>

              <div className="col-lg-12 nospace">
                 <  FormLabels text={" Street"} />
                   <input type="text"  class="  formInput" name="P_Street" value={P_Street} onChange={(e) => setP_Street(e.target.value.toUpperCase())} required/>
               </div>

              <div className="col-lg-12 nospace">
                <  FormLabels text={" House No."} />
                  <input type="text"  class="  formInput" name="P_House_No" autocomplete = "off" maxlength = "6" value={P_House_No} onChange={(e) => setP_House_No(e.target.value)} />
              </div>

              <div className="col-lg-12 nospace">
                <  FormLabels text={" House Name"} />
                  <input type="text"  class="  formInput" name="P_House_Name" autocomplete="off" maxlength = "25" value={P_House_Name} onChange={(e) => setP_House_Name(e.target.value.toUpperCase())} />
              </div>

               <div className="col-lg-12 nospace">
                 <  FormLabels text={" Police Station"} />
                   <input type="text"  class="  formInput" name="P_Police_Station" autocomplete = "off" maxlength = "15" minlength = "5"  value={P_Police_Station} onChange={(e) => setP_Police_Station(e.target.value.toUpperCase())} required/>
              </div>

              <div className="col-lg-12 nospace">
                <  FormLabels text={"Telephone No."} />
                  <input type="text"  class="  formInput" name="Tele_No" autocomplete = "off" maxlength = "14" minlength = "12" value={Tele_No} onChange={ontelChange} /><br/>
               <span style={{color: 'red'}} >{telErr}</span>
              </div>

             <div className="col-lg-9 nospace">
               <  FormLabels text={"Email :"} />
                <input type="text"  class="  formInput" name="Mail_Id"  value={Mail_Id}  />
            </div>



</div>
{/* ///////////////////////////////////     PERMENANT ADDRESS CLOSE   ///////////////////////////////////////////////////// */}


<div className = "vl"></div>

  <div className= "col-md-6">

    <label><b><b><u>PRESENT ADDRESS</u></b></b></label><br></br>

       <label >
         <input type="checkbox"  className="formInput"  checked={!checked} onChange={() => setchecked(toggle)}  /> Same as Permanent Address
       </label>
{
 (() => {



        if(checked=='0'){
        return(
        <div>
          <div className="col-lg-12 nospace">
            <  FormLabels text={"Pincode"} />
              <input type="text"  class=" formInput" autocomplete="off" minLength ="6" maxlength = "6" value={P_Pincode} onChange={onPincodeChange} required />
         </div>

         <div className="col-lg-9 nospace">
            <  FormLabels text={"State"} />
              <input type="text"  class=" formInput" autocomplete="off" maxlength = "25" value={P_State}  required />
         </div>

         <div className="col-lg-9 nospace">
           <  FormLabels text={"District"} />
             <input type="text"  class=" formInput" name="Pincode" autocomplete = "off"  value={P_District} required />
         </div>

         <div className="col-lg-9 nospace">
           <  FormLabels text={"Taluk"} />
             <input type="text"  class=" formInput"  value={P_Taluk_Name}  required />
        </div>

        <div className="col-lg-12 nospace">
          <  FormLabels text={"City/Village"} />
            <input type="text"  class=" formInput" name="City_Village" autocomplete="off" maxlength = "25" value={P_City_Village} />
        </div>

        <div className="col-lg-9 nospace">
           <  FormLabels text={"Locality/Area"} />
             <input type="text"  class="  formInput" name="Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Locality}  />
         </div>

        <div className="col-lg-12 nospace">
          <  FormLabels text={"Street"} />
            <input type="text"  class="f formInput" name="Street" autocomplete="off" maxlength = "25" value={P_Street} onChange={(e) => setStreet(e.target.value.toUpperCase())} />
        </div>

        <div className="col-lg-12 nospace">
          <  FormLabels text={"House No."} />
            <input type="text"  class=" formInput" name="House_No"  autocomplete = "off" maxlength= "6" value={P_House_No} onChange={(e) => setHouse_No(e.target.value)} />
        </div>

        <div className="col-lg-12 nospace">
          <  FormLabels text={"House Name"} />
            <input type="text"  class=" formInput" name="House_Name" autocomplete="off" maxlength = "25" value={P_House_Name} onChange={(e) => setHouse_Name(e.target.value.toUpperCase())} />
        </div>

        <div className="col-lg-9 nospace">
          <  FormLabels text={"Police Station"} />
            <input type="text"  class=" formInput" name="Police_Station" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Police_Station} onChange={(e) => setPolice_Station(e.target.value.toUpperCase())} required/>
        </div>
</div>
   )
    }else{
   return(
     <div>

       <div className="col-lg-12 nospace">
         <  FormLabels text={"Pincode"} />
           <input type="text"  class="  formInput" name="Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={Pincode} onChange={onPincodeChange} required/><br/>
        <span style={{color: 'red'}} >{PinErr}</span>
       </div>

      <div className="col-lg-9 nospace">
        <  FormLabels text={"State"} />
          <select  className="col-lg-9 dropdown_align"  value =
          {State} onClick={getDist} onChange={(e)=> setState(e.target.value)} required>
          <option value = "" disabled selected>--Select One--</option>

          {states.map((user, index) => (
          <option key={user.id}value={user.State}>{user.State}</option>
          ))}
          </select>
      </div>

      <div className="col-lg-9 nospace">
        <  FormLabels text={"District"} />
          <select  className="col-lg-9 dropdown_align" value =
          {District}  onClick={getTaluks}  onChange={(e)=> setDistrict(e.target.value)} required>
          <option value = "" disabled selected>--Select One--</option>

          {dist.map((user, index) => (
          <option key={user.id}value={user.District}>{user.District}</option>
          ))}
         </select>
      </div>

     <div className="col-lg-9 nospace">
       <  FormLabels text={"Taluk"} />
         <select  className="col-lg-9 dropdown_align" value =
         {Taluk_Name} onChange={(e)=> setTaluk_Name(e.target.value)}required>
         <option value = "" disabled selected>--Select One--</option>

         {taluks.map((user, index) => (
         <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
         ))}
         </select>
      </div>

      <div className="col-lg-12 nospace">
        <  FormLabels text={"City/Village"} />
          <input type="text"  class=" formInput" name="City_Village" autocomplete="off" maxlength = "25" value={City_Village} onChange={(e) => setCity_Village(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-12 nospace">
           <  FormLabels text={"Locality/Area"} />
             <input type="text"  class=" formInput" name="Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={Locality} onChange={(e) => setLocality(e.target.value)} />
      </div>

      <div className="col-lg-12 nospace">
        <  FormLabels text={"Street"} />
          <input type="text"  class="  formInput" name="Street" autocomplete="off" maxlength = "25" value={Street} onChange={(e) => setStreet(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-12 nospace">
        <  FormLabels text={"House No."} />
          <input type="text"  class="  formInput" name="House_No"  autocomplete = "off" maxlength= "6" value={House_No} onChange={(e) => setHouse_No(e.target.value)} />
      </div>

      <div className="col-lg-12 nospace">
        <  FormLabels text={"House Name"} />
          <input type="text"  class="  formInput" name="House_Name" autocomplete="off" maxlength = "25" value={House_Name} onChange={(e) => setHouse_Name(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-9 nospace">
        <  FormLabels text={"Police Station"} />
          <input type="text"  class="  formInput" name="Police_Station" autocomplete = "off" maxlength = "15" minlength = "5" value={Police_Station} onChange={(e) => setPolice_Station(e.target.value.toUpperCase())} required/>
      </div>

    </div>
      )}

})()
}


      <div className="col-lg-9 nospace">
        <  FormLabels text={"Mobile :"} />
        <input type="text"  class="  formInput" name="Mobile"  value={Mobile}   required/>
      </div>
</div>
</div>
      </div>

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/ViewForm3a">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  onClick={ViewForm4Edit}>Update </button>

    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm4Edit
