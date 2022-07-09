import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel,{FormLabel4} from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form4 = () => {
// localStorage.clear();
    const [Mail_Id, setMail_Id] = useState(localStorage.getItem('Mail_Id'));
    const [Mobile, setMobile] = useState(localStorage.getItem('Mobile'));
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [P_Pincode, setP_Pincode] = useState(localStorage.getItem('P_Pincode'));
    const [P_State, setP_State] = useState(localStorage.getItem('P_State'));
    const [P_District, setP_District] = useState(localStorage.getItem('P_District'));
    const [P_Taluk_Name, setP_Taluk_Name] = useState(localStorage.getItem('P_Taluk_Name'));
    const [P_City_Village, setP_City_Village] = useState(localStorage.getItem('P_City_Village'));
    const [P_Street, setP_Street] = useState(localStorage.getItem('P_Street'));
    const [P_Locality, setP_Locality] = useState(localStorage.getItem('P_Locality'));
    const [P_House_Name, setP_House_Name] = useState(localStorage.getItem('P_House_Name'));
    const [P_House_No, setP_House_No] = useState(localStorage.getItem('P_House_No'));
    const [P_Police_Station, setP_Police_Station] = useState(localStorage.getItem('P_Police_Station'));

    const [Pincode, setPincode] = useState(localStorage.getItem('Pincode'));
    const [State, setState] = useState(localStorage.getItem('State'));
    const [District, setDistrict] = useState(localStorage.getItem('District'));
    const [Taluk_Name, setTaluk_Name] = useState(localStorage.getItem('Taluk_Name'));
    const [City_Village, setCity_Village] = useState(localStorage.getItem('City_Village'));
    const [Locality, setLocality] = useState(localStorage.getItem('Locality'));
    const [House_No, setHouse_No] = useState(localStorage.getItem('House_No'));
    const [House_Name, setHouse_Name] = useState(localStorage.getItem('House_Name'));
    const [Street, setStreet] = useState(localStorage.getItem('Street'));
    const [Police_Station, setPolice_Station] = useState(localStorage.getItem('Police_Station'));
    const [Tele_No, setTele_No] = useState(localStorage.getItem('Tele_No'));

    const[checked, setchecked] = useState('false');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [states, setStates] = useState([]);
    const [dist, setDist] = useState([]);
    const [taluks, setTaluks] = useState([]);
    const [streets, setStreets] = useState([]);
    const [distP, setDistP] = useState([]);
    const [taluksP, setTaluksP] = useState([]);


  useEffect(() => {
     getStates();
  //   getDist();
    // getDistP();
     getStreets();
  //   getTaluks();
  //   getTaluksP();

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

{/* // const getDist = async () => {
    // const response = await axiosJWT.get('http://localhost:5000/dist_D');
    // setDist(response.data);
    // }
   */}

    const getStreets = async () => {
    const response = await axiosJWT.get('http://localhost:5000/street_D');
    setStreets(response.data);
    }

 {/*   const getTaluks = async () => {
    const response = await axiosJWT.get('http://localhost:5000/taluk_D');
    setTaluks(response.data);
    }*/}


 const getDist = async () => {
      localStorage.setItem('A_State',State)

      const sn=localStorage.getItem('A_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDist(response.data);
    }
    const getDistP = async () => {
      localStorage.setItem('A_P_State',P_State)

      const sn=localStorage.getItem('A_P_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDistP(response.data);
    }

 const getTaluksP = async () => {
      localStorage.setItem('A_P_District',P_District)

      const dd=localStorage.getItem('A_P_District');
      const response = await axiosJWT.get('http://localhost:5000/Taluk_Depend',
          {
              params:{districts:dd}
          });
      setTaluksP(response.data);
    }
    const getTaluks = async () => {
      localStorage.setItem('A_District',District)

      const dd=localStorage.getItem('A_District');
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
    }

}
const ontelChange = (e) =>  {
    const t = /^[0-9]+$/;
    if (e.target.value === "" || t.test(e.target.value))
    {

        setTele_No(e.target.value);
    }

}

const onPPincodeChange = (e) =>  {
    const c = /^[0-9]+$/;
    if (e.target.value === "" || c.test(e.target.value))
    {

        setP_Pincode(e.target.value);
    }

}



    const Form4 = async (e) => {
        e.preventDefault();
        try {

                localStorage.setItem('Service_No',Service_No);
                if(checked==0){
                localStorage.setItem('Pincode',P_Pincode);
                localStorage.setItem('State',P_State);
                localStorage.setItem('District',P_District);
                localStorage.setItem('Taluk_Name',P_Taluk_Name);
                localStorage.setItem('City_Village',P_City_Village);
                localStorage.setItem('Locality',P_Locality);
                localStorage.setItem('Street',P_Street);
                localStorage.setItem('House_Name',P_House_Name);
                localStorage.setItem('House_No',P_House_No);
                localStorage.setItem('Police_Station',P_Police_Station);
              }else{
                localStorage.setItem('Pincode',Pincode);
                localStorage.setItem('State',State);
                localStorage.setItem('District',District);
                localStorage.setItem('Taluk_Name',Taluk_Name);
                localStorage.setItem('City_Village',City_Village);
                localStorage.setItem('Locality',Locality);
                localStorage.setItem('Street',Street);
                localStorage.setItem('House_Name',House_Name);
                localStorage.setItem('House_No',House_No);
                localStorage.setItem('Police_Station',Police_Station);
              }
                localStorage.setItem('Tele_No',Tele_No);
                localStorage.setItem('same',checked);
//PERMANENT
                localStorage.setItem('P_Pincode',P_Pincode);
                localStorage.setItem('P_State',P_State);
                localStorage.setItem('P_District',P_District);
                localStorage.setItem('P_Taluk_Name',P_Taluk_Name);
                localStorage.setItem('P_Locality',P_Locality);
                localStorage.setItem('P_City_Village',P_City_Village);
                localStorage.setItem('P_Street',P_Street);
                localStorage.setItem('P_House_Name',P_House_Name);
                localStorage.setItem('P_House_No',P_House_No);
                localStorage.setItem('P_Police_Station',P_Police_Station);

            navigate("/Form5");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={Form4}>

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Contact Details</label>
        <div className = "right-align dis">
             <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
             <label className="sn-mar ">{"Name :"}</label>{Name}<br/>

         </div>
      </div>

      <div className="upperForm1Content">
        <div className="row">
          <div className = "row">

           <div className = "col-md-6">

              <label><b><u>PERMANENT ADDRESS</u></b></label><br></br><br></br>

                <div className="col-lg-4 nospace">
                  <FormLabel4 text={"Pincode"} />
                    <input type="text"  class="  formInput" name="P_Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={P_Pincode} onChange={onPPincodeChange} required/>
                </div>

                <div className="col-lg-9 nospace">
                  <FormLabel4 text={" State"} />
                    <select  className="col-lg-9 dropdown_align" value =
                    {P_State} onChange={(e)=> setP_State(e.target.value)}required>
                    <option value = "" disabled selected>--Select One--</option>
                    {states.map((user, index) => (
                    <option key={user.id}value={user.State}>{user.State}</option>))}
                    </select>
                </div>

               <div className="col-lg-9 nospace">
                  <FormLabel4 text={" District"} />
                  <select  className="col-lg-9 dropdown_align" value =
                  {P_District}  onChange={(e)=> setP_District(e.target.value)} onClick={getDistP}required>
                  <option value = "" disabled selected>--Select One--</option>
                  {distP.map((user, index) => (
                  <option key={user.id}value={user.District}>{user.District}</option> ))}
                  </select>
               </div>

               <div className="col-lg-9 nospace">
                 <FormLabel4 text={" Taluk"} />
                 <select  className="col-lg-9 dropdown_align" value =
                 {P_Taluk_Name}  onClick={getTaluksP}  onChange={(e)=> setP_Taluk_Name(e.target.value)} required>
                 <option value = "" disabled selected>--Select One--</option>
                 {taluksP.map((user, index) => (
                 <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
                 ))}
                 </select>
               </div>

                 {/*   onClick={getTaluks}   onClick={getTaluksP} */}

               <div className="col-lg-12 nospace">
                <FormLabel4 text={"City/Village"} />
                  <input type="text"  class="  formInput" name="P_City_Village" autocomplete = "off" maxlength = "15" minlength = "5"  value={P_City_Village} onChange={(e) => setP_City_Village(e.target.value.toUpperCase())} />
               </div>

               <div className="col-lg-9 nospace">
                 <FormLabel4 text={"Locality/Area"} />
                   <input type="text"  class="  formInput" name="P_Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Locality} onChange={(e) => setP_Locality(e.target.value)} />
               </div>

              <div className="col-lg-12 nospace">
                 <FormLabel4 text={" Street"} />
                   <input type="text"  class="  formInput" name="P_Street" value={P_Street} onChange={(e) => setP_Street(e.target.value.toUpperCase())} required/>
               </div>

              <div className="col-lg-12 nospace">
                <FormLabel4 text={" House No."} />
                  <input type="text"  class="  formInput" name="P_House_No" autocomplete = "off" maxlength = "6" value={P_House_No} onChange={(e) => setP_House_No(e.target.value)} />
              </div>

              <div className="col-lg-12 nospace">
                <FormLabel4 text={" House Name"} />
                  <input type="text"  class="  formInput" name="P_House_Name" autocomplete="off" maxlength = "25" value={P_House_Name} onChange={(e) => setP_House_Name(e.target.value.toUpperCase())} />
              </div>

               <div className="col-lg-12 nospace">
                 <FormLabel4 text={" Police Station"} />
                   <input type="text"  class="  formInput" name="P_Police_Station" autocomplete = "off" maxlength = "15" minlength = "5"  value={P_Police_Station} onChange={(e) => setP_Police_Station(e.target.value.toUpperCase())} required/>
              </div>

              <div className="col-lg-12 nospace">
                <FormLabel4 text={"Telephone No."} />
                  <input type="text"  class="  formInput" name="Tele_No" autocomplete = "off" maxlength = "14" minlength = "12" value={Tele_No} onChange={ontelChange} />
              </div>

             <div className="col-lg-9 nospace">
               <FormLabel4 text={"Email :"} />
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
            <FormLabel4 text={"Pincode"} />
              <input type="text"  class=" formInput" autocomplete="off" minLength ="6" maxlength = "6" value={P_Pincode} onChange={onPincodeChange} required />
         </div>

         <div className="col-lg-9 nospace">
            <FormLabel4 text={"State"} />
              <input type="text"  class=" formInput" autocomplete="off" maxlength = "25" value={P_State}  required />
         </div>

         <div className="col-lg-9 nospace">
           <FormLabel4 text={"District"} />
             <input type="text"  class=" formInput" name="Pincode" autocomplete = "off"  value={P_District} required />
         </div>

         <div className="col-lg-9 nospace">
           <FormLabel4 text={"Taluk"} />
             <input type="text"  class=" formInput"  value={P_Taluk_Name}  required />
        </div>

        <div className="col-lg-12 nospace">
          <FormLabel4 text={"City/Village"} />
            <input type="text"  class=" formInput" name="City_Village" autocomplete="off" maxlength = "25" value={P_City_Village} />
        </div>

        <div className="col-lg-9 nospace">
           <FormLabel4 text={"Locality/Area"} />
             <input type="text"  class="  formInput" name="Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Locality}  />
         </div>

        <div className="col-lg-12 nospace">
          <FormLabel4 text={"Street"} />
            <input type="text"  class="f formInput" name="Street" autocomplete="off" maxlength = "25" value={P_Street} onChange={(e) => setStreet(e.target.value.toUpperCase())} />
        </div>

        <div className="col-lg-12 nospace">
          <FormLabel4 text={"House No."} />
            <input type="text"  class=" formInput" name="House_No"  autocomplete = "off" maxlength= "6" value={P_House_No} onChange={(e) => setHouse_No(e.target.value)} />
        </div>

        <div className="col-lg-12 nospace">
          <FormLabel4 text={"House Name"} />
            <input type="text"  class=" formInput" name="House_Name" autocomplete="off" maxlength = "25" value={P_House_Name} onChange={(e) => setHouse_Name(e.target.value.toUpperCase())} />
        </div>

        <div className="col-lg-9 nospace">
          <FormLabel4 text={"Police Station"} />
            <input type="text"  class=" formInput" name="Police_Station" autocomplete = "off" maxlength = "15" minlength = "5" value={P_Police_Station} onChange={(e) => setPolice_Station(e.target.value.toUpperCase())} required/>
        </div>
</div>
   )
    }else{
   return(
     <div>

       <div className="col-lg-12 nospace">
         <FormLabel4 text={"Pincode"} />
           <input type="text"  class="  formInput" name="Pincode" autocomplete = "off" maxlength = "6" minlength = "6" value={Pincode} onChange={onPincodeChange} required/>
       </div>

      <div className="col-lg-9 nospace">
        <FormLabel4 text={"State"} />
          <select  className="col-lg-9 dropdown_align"  value =
          {State} onClick={getDist} onChange={(e)=> setState(e.target.value)} required>
          <option value = "" disabled selected>--Select One--</option>

          {states.map((user, index) => (
          <option key={user.id}value={user.State}>{user.State}</option>
          ))}
          </select>
      </div>

      <div className="col-lg-9 nospace">
        <FormLabel4 text={"District"} />
          <select  className="col-lg-9 dropdown_align" value =
          {District}  onClick={getTaluks}  onChange={(e)=> setDistrict(e.target.value)} required>
          <option value = "" disabled selected>--Select One--</option>

          {dist.map((user, index) => (
          <option key={user.id}value={user.District}>{user.District}</option>
          ))}
         </select>
      </div>

     <div className="col-lg-9 nospace">
       <FormLabel4 text={"Taluk"} />
         <select  className="col-lg-9 dropdown_align" value =
         {Taluk_Name} onChange={(e)=> setTaluk_Name(e.target.value)}required>
         <option value = "" disabled selected>--Select One--</option>

         {taluks.map((user, index) => (
         <option key={user.id}value={user.Taluk_Name}>{user.Taluk_Name}</option>
         ))}
         </select>
      </div>

      <div className="col-lg-12 nospace">
        <FormLabel4 text={"City/Village"} />
          <input type="text"  class=" formInput" name="City_Village" autocomplete="off" maxlength = "25" value={City_Village} onChange={(e) => setCity_Village(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-12 nospace">
           <FormLabel4 text={"Locality/Area"} />
             <input type="text"  class=" formInput" name="Locality" autocomplete = "off" maxlength = "15" minlength = "5" value={Locality} onChange={(e) => setLocality(e.target.value)} />
      </div>

      <div className="col-lg-12 nospace">
        <FormLabel4 text={"Street"} />
          <input type="text"  class="  formInput" name="Street" autocomplete="off" maxlength = "25" value={Street} onChange={(e) => setStreet(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-12 nospace">
        <FormLabel4 text={"House No."} />
          <input type="text"  class="  formInput" name="House_No"  autocomplete = "off" maxlength= "6" value={House_No} onChange={(e) => setHouse_No(e.target.value)} />
      </div>

      <div className="col-lg-12 nospace">
        <FormLabel4 text={"House Name"} />
          <input type="text"  class="  formInput" name="House_Name" autocomplete="off" maxlength = "25" value={House_Name} onChange={(e) => setHouse_Name(e.target.value.toUpperCase())} />
      </div>

      <div className="col-lg-9 nospace">
        <FormLabel4 text={"Police Station"} />
          <input type="text"  class="  formInput" name="Police_Station" autocomplete = "off" maxlength = "15" minlength = "5" value={Police_Station} onChange={(e) => setPolice_Station(e.target.value.toUpperCase())} required/>
      </div>

    </div>
      )}

})()
}


      <div className="col-lg-9 nospace">
        <FormLabel4 text={"Mobile :"} />
        <input type="text"  class="  formInput" name="Mobile"  value={Mobile}   required/>
      </div>
</div>
</div>
</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/Form3">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
</form>
</div>
</div>
</div>
    )}

const Form4Display = () => <FormDisplay step={4} Form={Form4} />
export default Form4Display
