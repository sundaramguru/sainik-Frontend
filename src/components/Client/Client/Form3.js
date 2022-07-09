import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormDisplay from "./Form0"


const Form3 = () => {
  // localStorage.clear();

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Father_Name, setFather_Name] = useState(localStorage.getItem('Father_Name'));
    const [Mother_Name, setMother_Name] = useState(localStorage.getItem('Mother_Name'));
    const [Religion, setReligion] = useState(localStorage.getItem('Religion'));
    const [Caste_Category, setCaste_Category] = useState(localStorage.getItem('Caste_Category'));
    const [Birth_State, setBirth_State] = useState(localStorage.getItem('Birth_State'));
    const [Birth_Dist_Surname, setBirth_Dist_Surname] = useState(localStorage.getItem('Birth_Dist_Surname'));
    const [Birth_Place, setBirth_Place] = useState(localStorage.getItem('Birth_Place'));
    const [Adhaar, setAdhaar] = useState(localStorage.getItem('Adhaar'));
    const [Voter_Id, setVoter_Id] = useState(localStorage.getItem('Voter_Id'));
    const [PAN, setPAN] = useState(localStorage.getItem('PAN'));
    const [CSD, setCSD] = useState(localStorage.getItem('CSD'));
    const [ECHS, setECHS] = useState(localStorage.getItem('ECHS'));
    const [Id_Mark1, setId_Mark1] = useState(localStorage.getItem('Id_Mark1'));
    const [Id_Mark2, setId_Mark2] = useState(localStorage.getItem('Id_Mark2'));
    const [msg, setMsg] = useState('');
        const [AdhaarErr, setAdhaarErr] = useState('');
        const [PCCCErr, setPCCCErr] = useState('');
    const [PCCCCErr, setPCCCCErr] = useState('');

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [caste, setCaste] = useState([]);
    const [dist, setDist] = useState([]);
    const [places, setPlaces] = useState([]);
    const [religions, setReligions] = useState([]);
    const [states, setStates] = useState([]);
    const gotoBackToStep2 = () => navigate("/new/step-2", { replace: true })
    const gotoToNextStep4 = () => navigate("/new/step-4", { replace: true })
    const [Name, setName] = useState('');



    useEffect(() => {
     getCaste();
     getReligions();
     // getDist();
     getStates();
     getPlaces();
     getName();
     }, []);

    const axiosJWT = axios.create();

    const getName  = async () => {
       const response = await axiosJWT.get('http://localhost:5000/getName',{

         params:{
           Service_No: Service_No
         }
       });
       setName(response.data);
     }

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


    const onPchange = (e) =>  {
    const pcc = /^[ A-Z\b]+$/;

        if (e.target.value.toUpperCase() === "" || pcc.test(e.target.value.toUpperCase()))
       {

           setFather_Name(e.target.value.toUpperCase());
           setPCCCErr('');
       }

        else{
           setFather_Name('')
           setPCCCErr('Enter only Letters')
          }

   }
   const onPQchange = (e) =>  {
   const pcq = /^[ A-Z\b]+$/;

       if (e.target.value.toUpperCase() === "" || pcq.test(e.target.value.toUpperCase()))
      {

          setMother_Name(e.target.value.toUpperCase());
          setPCCCCErr('');
      }

       else{
          setMother_Name('')
          setPCCCCErr('Enter only Letters')
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


    const Form3 = async (e) => {  //defining the forms here
           e.preventDefault();
           try {

               localStorage.setItem('Service_No',Service_No);
               localStorage.setItem('Father_Name',Father_Name);
               localStorage.setItem('Mother_Name',Mother_Name);
               localStorage.setItem('Religion',Religion);
               localStorage.setItem('Caste_Category',Caste_Category);
               localStorage.setItem('Birth_State',Birth_State);
               localStorage.setItem('Birth_Dist_Surname',Birth_Dist_Surname);
               localStorage.setItem('Birth_Place',Birth_Place);
               localStorage.setItem('Adhaar',Adhaar);
               localStorage.setItem('Voter_Id',Voter_Id);
               localStorage.setItem('PAN',PAN);
               localStorage.setItem('CSD',CSD);
               localStorage.setItem('ECHS',ECHS);
               localStorage.setItem('Id_Mark1',Id_Mark1);
               localStorage.setItem('Id_Mark2',Id_Mark2);

               navigate("/Form4");
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
         <form onSubmit={Form3}>

     {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ HEADER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

     <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
<label className="header">Personal Details</label>
<div>

<div className = "left-align dis">
<label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
<label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

</div>
</div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ HEADER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

         <div className="upperForm1Content">
         <div className="row">
<input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />
         <FormLabel text={"Father's Name"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput"  autocomplete = "off" maxlength= "75" name="Father_Name" value={Father_Name} onChange={onPchange} required/><br/>
           <span style={{color: 'red'}} >{PCCCErr}</span>

           </div>

         <FormLabel text={"Mother's Name"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "75" name="Mother_Name" value={Mother_Name} onChange={onPQchange} required /><br/>
           <span style={{color: 'red'}} >{PCCCCErr}</span>

           </div>

         <FormLabel text={"Religion"} />
           <div className="col-lg-4 space">
           <select  className="col-lg-9 dropdown_align" value={Religion} onChange={(e) => setReligion(e.target.value)} required>
           <option value = "" disabled selected >--Select One--</option>

           {religions.map((user, index) => (
           <option key={user.id}value={user.Value}>{user.Value}</option>
           ))}
           </select>
           </div>

         <FormLabel text={"Caste Category"} />
           <div className="col-lg-4 space">
           <select  className="col-lg-9 dropdown_align"  value={Caste_Category} onChange={(e) => setCaste_Category(e.target.value)}required>
           <option value = "" disabled selected >--Select One--</option>

           {caste.map((user, index) => (
           <option key={user.id}value={user.Value}>{user.Value}</option>
           ))}
           </select>
           </div>

          <FormLabel text={"Birth State"} />
            <div className="col-lg-4 ">
            <select  className="col-lg-9 dropdown_align"  value =
            {Birth_State}   onChange={(e)=> setBirth_State(e.target.value)} required>
            <option value = "" disabled selected >--Select One--</option>

            {states.map((user, index) => (
            <option key={user.id}value={user.State}>{user.State}</option>
            ))}
            </select>
           </div>

         <FormLabel text={"Birth District"} />
           <div className="col-lg-4 space ">
           <select  className="col-lg-9 dropdown_align " value =
           {Birth_Dist_Surname}  onClick={getDist} onChange={(e)=> setBirth_Dist_Surname(e.target.value)}required >
           <option value = "" disabled selected >--Select One--</option>

           {dist.map((user, index) => (
           <option key={user.id}value={user.District}>{user.District}</option>
           ))}
           </select>
           </div>

           <FormLabel text={"Birth Place"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" minlength = "5" name="Birth_Place" value={Birth_Place} onChange={(e) => setBirth_Place(e.target.value.toUpperCase())} required/>
           </div>


          <FormLabels text={"Adhaar No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="  formInputunderline  formInput" autocomplete= 'off' maxlength = "12" minLength = "12" name="Adhaar"value={Adhaar} onChange={onAdhaarValidateChange} /><br/>
          <span style={{color: 'red'}} >{AdhaarErr}</span>

          </div>



        <FormLabels text={"Voter ID No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" autocomplete = "off" minlength = "10" maxlength = "10" name="Voter_Id" value={Voter_Id} onChange={onVoterChange} />
          </div>

        <FormLabels text={"CSD Card No."} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" name="CSD"  autocomplete = "off"  maxlength = "15"   value={CSD} onChange={onCSDChange}  />
          </div>

        <FormLabels text={"PAN No."} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" minlength = "10"  maxlength = "10"  name="PAN" value={PAN} onChange={onPANChange} />
           </div>


        <FormLabels text={"ECHS Card No."} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "15" name="ECHS" value={ECHS}onChange={onECHSChange}  />
           </div>

        <FormLabel text={"Identificaion Mark 1"} />
           <div className="col-lg-4 space">
           <input type="text"  class="   formInput" autocomplete = "off" maxlength = "60" name="Id_Mark1" value={Id_Mark1} onChange={onId1Change} required />
           </div>

        <FormLabels text={"Identificaion Mark 2"} />
          <div className="col-lg-4 space">
          <input type="text"  class="   formInput" autocomplete = "off" maxlength = "60" name="Id_Mark2" value={Id_Mark2}  onChange={onId2Change}  />
          </div>

    </div>
    </div>

    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^FOOTERS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

       <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
<div className="col-lg-12 right-align " >
     <span style={{color: 'red', fontWeight : '900', fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
     </div>
       <button className=" btn" ><Link to="/Form2">Back</Link> </button>
       <button className="btn my-2 my-sm-0 " type="submit">Next </button>

    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ FOOTERS  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

       </div>
       </form>

   </div>
   </div>
   </div>
       )
   }
   const Form3Display = () => <FormDisplay step={3} Form={Form3} />

   export default Form3Display
