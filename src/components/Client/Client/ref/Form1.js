 import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS} from "../../view/FormLabel";
import ms from 'ms';
import moment from 'moment';
import LinearProgress from "./Form0";
import FormDisplay from "./Form0"

const Form1 = () => {
// localStorage.clear();
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Service_Name, setService_Name] = useState(localStorage.getItem('Service_Name'));
    const [Corps_Name, setCorps_Name] = useState(localStorage.getItem('Corps_Name'));
    const [Record_Office_Name, setRecord_Office_Name] = useState(localStorage.getItem('record'));
    const [Group_Name, setGroup_Name] = useState(localStorage.getItem('Group_Name'));
    const [Trade_Name, setTrade_Name] = useState(localStorage.getItem('Trade_Name'));
    const [Rank_Name, setRank_Name] = useState(localStorage.getItem('Rank_Name'));
    const [Rank_Category, setRank_Category] = useState(localStorage.getItem('Rank_Category'));
    const [Rank_Category_Id, setRank_Category_Id] = useState(localStorage.getItem('Rank_Category_Id'));
    const [A_Rank_Category, setA_Rank_Category] = useState(localStorage.getItem('A_Rank_Category'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
    const [Gender, setGender] = useState(localStorage.getItem('Gender'));
    const [DOB, setDOB] = useState(localStorage.getItem('DOB'));
    const [pp, setpp] = useState(localStorage.getItem('pp'));
    const [Img, setImg] = useState();
    const [ImgName, setImgName] = useState();
    const [Imgpicture, setImgpicture] = useState();


    const [minDate, setminDate]= useState('');
    // const [mindobDate, setmindobDate]= useState('');

    const [enroll, setenroll]= useState('');

    const [Enroll_Date, setEnroll_Date] = useState(localStorage.getItem('Enroll_Date'));
    const [World_War2, setWorld_War2] = useState(localStorage.getItem('World_War2'));
    const [Opt_Attend, setOpt_Attend] = useState(localStorage.getItem('Opt_Attend'));
    const [Deco, setDeco] = useState(localStorage.getItem('Deco'));
    const [ErrorMessage, setErrorMessage] = useState('')

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [userss, setUserss] = useState([]);
    const [record, setRecord] = useState([]);
    const [trade, setTrade] = useState([]);
    const [rank, setRank] = useState([]);
    const [corp, setCorp] = useState([]);
    const [services, setServices] = useState([]);
    const [rankc, setRankc] = useState([]);
    const[visible,setVisible]=useState(false);
    const[visible2,setVisible2]=useState(false);

    const [disabled, setDisabled] = useState(false);
   const [userStatus, setUserStatus] = useState([]);
    const [Form_1, setForm1] = useState([]);

 const [file, setFile] = useState();

    useEffect(() => {
     getCorp();
    //getRecord();
    //getTrade();
    //getRank();
    getForm1();
    getServices();
    getRankc();
    getUserStatus();
    checkStatus();
    }, []);

    useEffect(() => {
       const minsec = ms('5479d')
       const min_date = new Date(+new Date(DOB) + minsec);
       // const max_date = new Date(+new Date(DOB) + minsec);

       setminDate(moment(min_date).format('YYYY-MM-DD'));
       // setmaxDate(moment(max_date).format('YYYY-MM-DD'));
       console.log( min_date)

     }, [DOB]);


     const GENDER = ['M', 'F', 'Transgender'];

     function handleChange(e) {
             console.log(e.target.files);
             setFile(URL.createObjectURL(e.target.files[0]));
         }

const axiosJWT = axios.create();
const sn=localStorage.getItem('Service_No');
const getUserStatus = async () => {
const response = await axiosJWT.get('http://localhost:5000/getUserStatus',
{
  params:{Service_No:sn}
});
setUserStatus(response.data);

}
const checkStatus = async () => {
if( userStatus==='Submitted'){
  setDisabled(!disabled);
}else{
  setDisabled(disabled);
}
}

    const getForm1 = async () => {
    const response = await axiosJWT.get('http://localhost:5000/getForm1');
    setForm1(response.data);
    }

    const getServices = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Service_D');
    setServices(response.data);
    }

    const getCorp = async () => {
    const response = await axiosJWT.get('http://localhost:5000/corp_D');
    setCorp(response.data);
    }


 {/*const getCorp = async () => {
      localStorage.setItem('Corps_Name',Corps_Name)

      const sn=localStorage.getItem('Corps_Name');
      const response = await axiosJWT.get('http://localhost:5000/Corps_Depend',
          {
              params:{corps:sn}
          });
      setCorp(response.data);
    }
*/}
const getRecord = async () => {

   localStorage.setItem('Corps_Name',Corps_Name)
   const sn=localStorage.getItem('Corps_Name');

   const response = await axiosJWT.get('http://localhost:5000/record_D',
       {
           params:{record:sn}
       }
 );

   setRecord(response.data);

 }



  const getServiceRecord = async () => {

  localStorage.setItem('Service_Name',Service_Name)
  const dd=localStorage.getItem('Service_Name');

  if(dd=="Air Force"){
    setRecord("Air Force Record");
  }else if(dd=="Navy"){
    setRecord("Navy Record");

  }else{
    getRecord()
  }

  }

    const getTrade = async () => {
      localStorage.setItem('Service_Name',Service_Name)
      const sn=localStorage.getItem('Service_Name');

      localStorage.setItem('Group_Name',Group_Name)
      const g=localStorage.getItem('Group_Name');

    const response = await axiosJWT.get('http://localhost:5000/trade_D',
    {
      params:{Service_Name:sn,
      Group:g}
    });
    setTrade(response.data);
    }


  const getRank = async () => {
      localStorage.setItem('Service_Name',Service_Name)
      const sn=localStorage.getItem('Service_Name');

      localStorage.setItem('Rank_Category',Rank_Category)
      const rc=localStorage.getItem('Rank_Category');

    const response = await axiosJWT.get('http://localhost:5000/rank_D',
  {
    params:{Service_Name:sn,
    Rank_Category:rc}
  });
    setRank(response.data);
    }

  const getRankc = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Rank_Category_D');
    setRankc(response.data);
    }

const visibleCorps= async (e) =>{
   if(Service_Name==="Army"){
     setVisible(true)
     setVisible2(false)

   }else{
     setVisible(false)
     setVisible2(true)

   }
}
const getVisibleRecord = async (e) => {
  visibleCorps();
  getServiceRecord();
}


const onEnrolld = (e) =>  {

setenroll('');
   }

const onEnrolldChange = (e) =>  {

setEnroll_Date(e.target.value);
   }


 const saveImg = (e) => {
   setImg(e.target.files[0]);
   setImgName(e.target.files[0].name);
   setImgpicture(URL.createObjectURL(e.target.files[0]));
 };
const uploadImg = async (e) => {
   const formData = new FormData();
   formData.append("Service_No", Service_No);
   formData.append("Img", Img);
   formData.append("ImgName", ImgName);

   try {
     const res = await axios.post(
       "http://localhost:5000/uploadImg",
       formData
     );
     console.log(res);
   } catch (ex) {
     console.log(ex);
   }
 };


    const Form1 = async (e) => {
        e.preventDefault();
        try {
                // await axios.post('http://localhost:5000/u_service_details', {
                // Service_No:Service_No,
                // Service_Name:Service_Name,
                // Corps_Name: Corps_Name,
                // Record_Office_Name: Record_Office_Name,
                // Group_Name: Group_Name,
                // Trade_Name: Trade_Name,
                // Rank_Name: Rank_Name,
                // Name: Name,
                // Gender: Gender,
                // DOB: DOB,
                // Enroll_Date: Enroll_Date,
                // World_War2:World_War2,
                // Opt_Attend: Opt_Attend,
                // Deco: Deco
                // });
                localStorage.setItem('Service_No',Service_No);
                localStorage.setItem('Service_Name',Service_Name);
                localStorage.setItem('Corps_Name',Corps_Name);
                localStorage.setItem('Record_Office_Name',record);
                localStorage.setItem('Group_Name',Group_Name);
                localStorage.setItem('Trade_Name',Trade_Name);
                localStorage.setItem('Rank_Name',Rank_Name);
                localStorage.setItem('Rank_Category',Rank_Category);
                localStorage.setItem('Name',Name);
                localStorage.setItem('Gender',Gender);
                localStorage.setItem('DOB',DOB);
                localStorage.setItem('Enroll_Date',Enroll_Date);
                localStorage.setItem('World_War2',World_War2);
                localStorage.setItem('Opt_Attend',Opt_Attend);
                localStorage.setItem('Deco',Deco);
                uploadImg();

            navigate("/Form2");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }

    }


const GROUP = ['X', 'Y', 'Z', 'Others'];

    return (
      <div className="center">
      <div className="wrapper fadeInDown">
      <div id="form1Content" >
      <form onSubmit={Form1}>

      <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
      <label className="header">Service Details</label>
     <div>

     <div className = "right-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

 </div>
      </div>
      <div className="upperForm1Content"  disabled={disabled}>
      <p className="has-text-centered">{msg}</p>
      <div className="row">

<div className="col-lg-12 space  ">
<div className = "row">

      <FormLabel text={"Service *"} />

       <div className="col-lg-4 space">
      <select className="col-lg-9 dropdown_align" value =
{Service_Name}  onChange={(e)=> setService_Name(e.target.value)}  onClick={getVisibleRecord} required>
 <option value = "" disabled selected >-- Select Service --</option>
         {services.map((user,
            index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
         </select>
        </div>  </div></div>


          { visible &&
            <div className = "row">

    <FormLabel text={"Corps *"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align"value ={Corps_Name}  onChange={(e)=> setCorps_Name(e.target.value)} onClick={getServiceRecord} required>
    <option value = "" disabled selected >-- Select Corps --</option>

         {corp.map((user, index) => (
         <option key={user.id}value={user.Value}>{user.Value}</option>
         ))}
    </select>
    </div>




    <FormLabel text={"Record Office *"} />

    <div className="col-lg-4 space ">

    <input type="text"  class=" formInput"  value ={record}   required/>
</div></div>}

{ visible2 &&
  <div className = "row" >
<FormLabel text={"Record Office *"} />

<div className="col-lg-4 ">

<input type="text"  class=" formInput"  value ={record}   required/>
</div></div>}



 <FormLabel text={"Rank Category *"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" value =
{Rank_Category} onChange={(e)=> setRank_Category(e.target.value)} required>
<option value = "" disabled selected >-- Select Rank Category --</option>

         {rankc.map((user, index) => (

         <option key={user.id}value={user.Value}>{user.Value} </option>
         ))}
    </select>
    </div>

  <FormLabel text={"Rank *"} />
   <div className="col-lg-4 space">
   <select  className="col-lg-9 dropdown_align"  value = {Rank_Name}  onClick={getRank} onChange={(e)=> setRank_Name(e.target.value)} required>
         <option value = "" disabled selected >-- Select Rank --</option>

         {rank.map((user, index) => (
         <option key={user.id}value={user.Rank_Name}>{user.Rank_Name}</option>
         ))}
    </select>
   </div>


    <FormLabel text={"Group *"} />
   <div className="col-md-4 space">

    <select  className="col-lg-9 dropdown_align" value = {Group_Name}  onChange={(e)=> setGroup_Name(e.target.value)}>
    <option value="Group_Name" disabled selected>-- Select Group --</option>
   {GROUP.map(c => <option key={c}>{c}</option>)}
   </select>
    </div>


    <FormLabel text={"Trade /Branch *"} />
    <div className="col-lg-4 space">
    <select className="col-lg-9 dropdown_align" value =
    {Trade_Name} onClick={getTrade}  onChange={(e)=> setTrade_Name(e.target.value)} >
    <option value = "" disabled selected >-- Select Trade/Branch --</option>
    {trade.map((user, index) => (
    <option key={user.id}value={user.Trade_Name}>{user.Trade_Name}</option>
    ))}
    </select>
    </div>




      <FormLabel text={"Gender *"} />
<div className="col-lg-4 space">
     <select  className="col-lg-9 dropdown_align"  value = {Gender} onChange={(e)=> setGender(e.target.value)} required>
     <option value="Gender" selected disabled>--Select Gender--</option>
    {GENDER.map(c => <option key={c}>{c}</option>)}
    </select>
</div>

  {/*     <label htmlFor ="">DOB</label><br/>*/}
       <FormLabel text={"DOB *"} />

       <div className="col-lg-4 space">
       <input type="date"  className=" formInput"   name="DOB"value={DOB} onChange={(e) => setDOB(e.target.value)} required/>
       </div>

       <FormLabel text={"Enrollment  Date *"} />
       <div className="col-lg-4 space">
       <input type="date"  className="formInput"  min = {minDate}   name="Enroll_Date" value={Enroll_Date}   onChange = {onEnrolldChange} onKeyPress = {onEnrolld} required/>
       </div>

       <FormLabel text={"World War II Veteran"} />
<div className="col-lg-4 space">

       <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio"  id="inlineRadio1" name="World_War2" value="Yes" onChange={(e) => setWorld_War2(e.target.value)} />
       <label className="form-check-label" for="inlineRadio1">Yes</label>
       </div>

       <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio"  id="inlineRadio3" name="World_War2" value="No" onChange={(e) => setWorld_War2(e.target.value)} />
       <label className="form-check-label" for="inlineRadio3">No</label>
       </div>
</div>

          <FormLabel text={"Operations Attended"} />
          <div className="col-lg-4 space">
          <input type="text"  className=" formInput" autocomplete = "off"  maxlength= "100"  name="Opt_Attend" value={Opt_Attend} onChange={(e) => setOpt_Attend(e.target.value.toUpperCase())} />
          </div>

          <FormLabel text={"Decoration"} />
          <div className="col-lg-4 space">
          <input type="text"  className="formInput"  name="Deco"value={Deco} onChange={(e) => setDeco(e.target.value)} />
          </div>


         <FormLabel text={"Passport Size Photo"} />
         <div className="col-lg-4 space">
         <input type="file"  className="formInput"  accept="image/*" name="pp" value={pp} onChange={saveImg} />

         </div>


          <div>
         </div>

</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/">Back</Link> </button>
    <button className="btn my-2 my-sm-0 "  type="submit"  > Next </button>


    </div>
    </form>
</div>
</div>
</div>
    )
}

function Form1Display() {
    return <FormDisplay step={1} Form={Form1} />
}

export default Form1Display
