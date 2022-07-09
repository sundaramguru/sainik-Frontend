import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewForm3Edit = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const [Father_Name, setFather_Name] = useState(localStorage.getItem('V_Father_Name'));
    const [Mother_Name, setMother_Name] = useState(localStorage.getItem('V_Mother_Name'));
    const [Religion, setReligion] = useState(localStorage.getItem('V_Religion'));
    const [Caste_Category, setCaste_Category] = useState(localStorage.getItem('V_Caste_Category'));
    const [Birth_State, setBirth_State] = useState(localStorage.getItem('V_Birth_State'));
    const [Birth_Dist_Surname, setBirth_Dist_Surname] = useState(localStorage.getItem('V_Birth_Dist_Surname'));
    const [Birth_Place, setBirth_Place] = useState(localStorage.getItem('V_Birth_Place'));
    const [Adhaar, setAdhaar] = useState(localStorage.getItem('V_Adhaar'));
    const [Voter_Id, setVoter_Id] = useState(localStorage.getItem('V_Voter_Id'));
    const [PAN, setPAN] = useState(localStorage.getItem('V_PAN'));
    const [CSD, setCSD] = useState(localStorage.getItem('V_CSD'));
    const [ECHS, setECHS] = useState(localStorage.getItem('V_ECHS'));
    const [Id_Mark1, setId_Mark1] = useState(localStorage.getItem('V_Id_Mark1'));
    const [Id_Mark2, setId_Mark2] = useState(localStorage.getItem('V_Id_Mark2'));

    const [AdhaarErr, setAdhaarErr] = useState('');
    const [caste, setCaste] = useState([]);
    const [dist, setDist] = useState([]);
    const [places, setPlaces] = useState([]);
    const [religions, setReligions] = useState([]);
    const [states, setStates] = useState([]);


  const [dep, setdep] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      // getUsers();
      getdep();
      getCaste();
      getReligions();
      // getDist();
      getStates();
      getPlaces();

    }, []);



    const axiosJWT = axios.create();

    const getCaste = async () => {
    const response = await axiosJWT.get('http://localhost:5000/caste_D');
    setCaste(response.data);
    }

    const getReligions = async () => {
    const response = await axiosJWT.get('http://localhost:5000/religions_D');
    setReligions(response.data);
    }
   const getStates = async () => {
    const response = await axiosJWT.get('http://localhost:5000/state_D');
    setStates(response.data);
    }

    const getPlaces = async () => {
    const response = await axiosJWT.get('http://localhost:5000/place_D');
    setPlaces(response.data);
    }

    const onAdhaarValidateChange = (e) =>  {
    const n = /^[0-9]+$/;
       if (e.target.value === "" || n.test(e.target.value))

       {

           setAdhaar(e.target.value);
           setAdhaarErr('');

       }
       else{
        setAdhaar('')
        setAdhaarErr('Enter only numbers')
       }
    }

    const onVoterChange = (e) =>  {
        const v = /^[0-9A-Z]+$/;
        if (e.target.value === "" || v.test(e.target.value.toUpperCase()))
        {

            setVoter_Id(e.target.value.toUpperCase());
        }

    }

    const onPANChange = (e) =>  {
        const x = /^[A-Z0-9]+$/;
        if (e.target.value.toUpperCase() === "" || x.test(e.target.value.toUpperCase()))
        {

            setPAN(e.target.value.toUpperCase());
        }

    }
    const onECHSChange = (e) =>  {
        const ec = /^[A-Z0-9]+$/;
        if (e.target.value.toUpperCase() === "" || ec.test(e.target.value.toUpperCase()))
        {

            setECHS(e.target.value.toUpperCase());
        }

    }

    const onCSDChange = (e) =>  {
        const y = /^[A-Z0-9]+$/;
        if (e.target.value.toUpperCase() === "" || y.test(e.target.value.toUpperCase()))
        {

            setCSD(e.target.value.toUpperCase());
        }

    }


    const onId1Change = (e) =>  {
        const j = /^[A-Za-z]+$/;
        if (e.target.value === "" || j.test(e.target.value))
        {

            setId_Mark1(e.target.value);
        }

    }
    const onId2Change = (e) =>  {
        const k = /^[A-Za-z]+$/;
        if (e.target.value === "" || k.test(e.target.value))
        {

            setId_Mark2(e.target.value);
        }

    }






 const getDist = async () => {
      localStorage.setItem('Birth_State',Birth_State)

      const sn=localStorage.getItem('Birth_State');
      const response = await axiosJWT.get('http://localhost:5000/District_Depend',
          {
              params:{state:sn}
          });
      setDist(response.data);
    }


const getdep = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/viewform3dep',
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }


     const ViewForm3Edit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/ViewForm3Edit', {
                Service_No:Service_No,
                Father_Name: Father_Name,
                Mother_Name: Mother_Name,
                Religion: Religion,
                Caste_Category: Caste_Category,
                Birth_State: Birth_State,
                Birth_Dist_Surname: Birth_Dist_Surname,
                Birth_Place: Birth_Place,
                Adhaar: Adhaar,
                Voter_Id: Voter_Id,
                PAN:PAN,
                CSD: CSD,
                ECHS: ECHS,
                Id_Mark1: Id_Mark1,
                Id_Mark2: Id_Mark2,



            });

 navigate("/viewForm4a");
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



      <div className="row">


         < FormLabels text={"Father's Name"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput"  autocomplete = "off" maxlength= "75" name="Father_Name" value={Father_Name} onChange={(e) => setFather_Name(e.target.value.toUpperCase())} required/>
           </div>

         < FormLabels text={"Mother's Name"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "75" name="Mother_Name" value={Mother_Name} onChange={(e) => setMother_Name(e.target.value.toUpperCase())} />
           </div>

         < FormLabels text={"Religion"} />
           <div className="col-lg-4 space">
           <select  className="col-lg-9 dropdown_align" value={Religion} onChange={(e) => setReligion(e.target.value)} >
           <option value = "" disabled selected >--Select One--</option>

           {religions.map((user, index) => (
           <option key={user.id}value={user.Value}>{user.Value}</option>
           ))}
           </select>
           </div>

         < FormLabels text={"Caste Category"} />
           <div className="col-lg-4 space">
           <select  className="col-lg-9 dropdown_align"  value={Caste_Category} onChange={(e) => setCaste_Category(e.target.value)}>
           <option value = "" disabled selected >--Select One--</option>

           {caste.map((user, index) => (
           <option key={user.id}value={user.Value}>{user.Value}</option>
           ))}
           </select>
           </div>

          < FormLabels text={"Birth State"} />
            <div className="col-lg-4 ">
            <select  className="col-lg-9 dropdown_align"  value =
            {Birth_State}   onChange={(e)=> setBirth_State(e.target.value)} required>
            <option value = "" disabled selected >--Select One--</option>

            {states.map((user, index) => (
            <option key={user.id}value={user.State}>{user.State}</option>
            ))}
            </select>
           </div>

         < FormLabels text={"Birth District"} />
           <div className="col-lg-4 space ">
           <select  className="col-lg-9 dropdown_align " value =
           {Birth_Dist_Surname}  onClick={getDist} onChange={(e)=> setBirth_Dist_Surname(e.target.value)}required >
           <option value = "" disabled selected >--Select One--</option>

           {dist.map((user, index) => (
           <option key={user.id}value={user.District}>{user.District}</option>
           ))}
           </select>
           </div>

           < FormLabels text={"Birth_Place"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" minlength = "5" name="Birth_Place" value={Birth_Place} onChange={(e) => setBirth_Place(e.target.value.toUpperCase())} required/>
           </div>


          < FormLabels text={"Adhaar No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInputunderline  formInput" autocomplete= 'off' maxlength = "12" minLength = "12" name="Adhaar"value={Adhaar} onChange={onAdhaarValidateChange} required/><br/>
          <span style={{color: 'red'}} >{AdhaarErr}</span>

          </div>



        < FormLabels text={"Voter ID No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" autocomplete = "off" minlength = "10" maxlength = "10" name="Voter_Id" value={Voter_Id} onChange={onVoterChange} />
          </div>

        < FormLabels text={"CSD Card No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" name="CSD"  autocomplete = "off"  maxlength = "15"   value={CSD} onChange={onCSDChange}  />
          </div>

        < FormLabels text={"PAN No."} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" minlength = "10"  maxlength = "10"  name="PAN" value={PAN} onChange={onPANChange} />
           </div>


        < FormLabels text={"ECHS Card No."} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "15" name="ECHS" value={ECHS}onChange={onECHSChange}  />
           </div>

        < FormLabels text={"Identificaion Mark 1"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "60" name="Id_Mark1" value={Id_Mark1} onChange={onId1Change} required />
           </div>

        < FormLabels text={"Identificaion Mark 2"} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" autocomplete = "off" maxlength = "60" name="Id_Mark2" value={Id_Mark2}  onChange={onId2Change}  />
          </div>

      </div>

  </div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/viewform3a">Back</Link> </button>
     <button className="btn my-2 my-sm-0 "  onClick={ViewForm3Edit}>Update </button>

    </div>
    </form>

</div>
</div>


</div>
</div>
    )
}

export default ViewForm3Edit
