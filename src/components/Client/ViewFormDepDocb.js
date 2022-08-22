import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";


const DocForm = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [Dep_Name, setDep_Name] = useState(localStorage.getItem('V_Dep_Name'));
  const [Registered_date, setRegistered_date] = useState('');

  const [D_Adhar, setD_Adhar] = useState();
  const [D_AdharName, setD_AdharName] = useState("");
  const [D_Adharpicture, setD_AdharPicture] = useState('');
  const [D_PAN, setD_PAN] = useState();
  const [D_PANName, setD_PANName] = useState("");
  const [D_PANpicture, setD_PANPicture] = useState('');
  const [D_ECHS, setD_ECHS] = useState();
  const [D_ECHSName, setD_ECHSName] = useState("");
  const [D_ECHSpicture, setD_ECHSPicture] = useState('');
  const [D_Voter, setD_Voter] = useState();
  const [D_VoterName, setD_VoterName] = useState("");
  const [D_Voterpicture, setD_VoterPicture] = useState('');
  const [Name, setName] = useState(localStorage.getItem('Name'));
  const [Img, setImg] = useState();
  const [ImgName, setImgName] = useState();
  const [Imgpicture, setImgpicture] = useState();
  const [Relation, setRelation] = useState(localStorage.getItem('V_Relation'));


  const axiosJWT = axios.create();

  useEffect(() => {
   getRegisterDate();

  }, []);


  const getRegisterDate  = async () => {
         const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getRegisterDate`,{

           params:{
             Service_No: Service_No
           }
         });
         setRegistered_date(response.data);
       }


  const onDepNameChange = (e) =>  {
      const a = /^[A-Z- /]+$/;
      if (e.target.value.toUpperCase() === "" || a.test(e.target.value.toUpperCase()))
      {
       setDep_Name(e.target.value.toUpperCase());
      }

  }

  const saveImg = (e) => {
    setImg(e.target.files[0]);
    setImgName(e.target.files[0].name);
    setImgpicture(URL.createObjectURL(e.target.files[0]));
  };
 const upload_DImg = async (e) => {
    const formData = new FormData();
    formData.append("Service_No", Service_No);
    formData.append("Dep_Name", Dep_Name);
    formData.append("Relation", Relation);
    formData.append("Registered_date", Registered_date);

    formData.append("Img", Img);
    formData.append("ImgName", ImgName);

    try {
      const res = await axios.post(
        "${process.env.REACT_APP_BACKEND_URL}/upload_DImg",
        formData
      );
      alert ("Photo uploaded Successfully");

      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

      const saveD_Adhar = (e) => {
        setD_Adhar(e.target.files[0]);
        setD_AdharName(e.target.files[0].name);
        setD_AdharPicture(URL.createObjectURL(e.target.files[0]));
      };


      const saveD_PAN = (e) => {
        setD_PAN(e.target.files[0]);
        setD_PANName(e.target.files[0].name);
        setD_PANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveD_ECHS = (e) => {
        setD_ECHS(e.target.files[0]);
        setD_ECHSName(e.target.files[0].name);
        setD_ECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveD_Voter = (e) => {
        setD_Voter(e.target.files[0]);
        setD_VoterName(e.target.files[0].name);
        setD_VoterPicture(URL.createObjectURL(e.target.files[0]));
      };



  const uploadD_Adhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
          formData.append("Dep_Name", Dep_Name);
          formData.append("Relation", Relation);

        formData.append("D_Adhar", D_Adhar);
        formData.append("D_AdharName", D_AdharName);

        try {
          const res = await axios.post(
            "${process.env.REACT_APP_BACKEND_URL}/uploadD_Adhar",
            formData
          );
          alert ("Adhaar uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadD_PAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
            formData.append("Dep_Name", Dep_Name);
            formData.append("Relation", Relation);

        formData.append("D_PAN", D_PAN);
        formData.append("D_PANName", D_PANName);

        try {
          const res = await axios.post(
            "${process.env.REACT_APP_BACKEND_URL}/uploadD_PAN",
            formData
          );
          alert ("PAN uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadD_ECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
            formData.append("Dep_Name", Dep_Name);
            formData.append("Relation", Relation);

        formData.append("D_ECHS", D_ECHS);
        formData.append("D_ECHSName", D_ECHSName);
        try {
          const res = await axios.post(
            "${process.env.REACT_APP_BACKEND_URL}/uploadD_ECHS",
            formData
          );
          alert ("ECHS Card uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadD_Voter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
    formData.append("Dep_Name", Dep_Name);

    formData.append("Relation", Relation);


        formData.append("D_Voter", D_Voter);
        formData.append("D_VoterName", D_VoterName);


        try {
          const res = await axios.post(
            "${process.env.REACT_APP_BACKEND_URL}/UploadD_Voter",
            formData
          );
          alert ("Voter uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const customStyle={
        color:'yellow'
      }

      const [styleph, setStyleph] = useState("btn btn-primary");

      const [stylea, setStylea] = useState("btn btn-primary");
      const [stylep, setStylep] = useState("btn btn-primary");
      const [stylev, setStylev] = useState("btn btn-primary");
      const [stylee, setStylee] = useState("btn btn-primary");
      const [disable, setDisable] = useState(false);

      const [buttonTexta, setButtonTexta] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
      const [buttonTextp, setButtonTextp] = useState("Upload");
      const [buttonTexte, setButtonTexte] = useState("Upload");
      const [buttonTextv, setButtonTextv] = useState("Upload");
      const [buttonTextph, setButtonTextph] = useState("Upload");


      const changeStyleph = () => {
        console.log("you just clicked");
         setButtonTextph("uploaded");
         setDisable(true)

        setStyleph("btn btn-secondary");
      };

      const changeStylea = () => {
        console.log("you just clicked");
         setButtonTexta("uploaded");
         setDisable(true)

        setStylea("btn btn-secondary");
      };

     const changeStylep = () => {
        console.log("you just clicked");
         setButtonTextp("uploaded");
         setDisable(true)

        setStylep("btn btn-secondary");
      };

       const changeStylee = () => {
        console.log("you just clicked");
         setButtonTexte("uploaded");
         setDisable(true)

        setStylee("btn btn-secondary");
      };

const changeStylev = () => {
        console.log("you just clicked");
         setButtonTextv("uploaded");
         setDisable(true)

        setStylev("btn btn-secondary");
      };

      const DuploadAdhar = async (e) => {
            uploadD_Adhar();
            changeStylea()
          };


      const DuploadPAN = async (e) => {
            uploadD_PAN();
            changeStylep()
          };


      const DuploadVoter = async (e) => {
            uploadD_Voter();
            changeStylev()
          };

      const DuploadECHS = async (e) => {
            uploadD_ECHS();
            changeStylee()
          };

          const CuploadPhoto = async (e) => {
                upload_DImg();
                changeStyleph()
              };


const RELATION = ['Father`, 'Mother`, 'Daughter`, 'Son'];

      return (
        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">
{/*      //************************** HEADERS ******************************** */}
  <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
<label className="header">Dependent Documents</label>
<div>

<div className = "left-align dis">
<label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
<label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

</div>
</div>
  {/*    //************************** HEADERS ********************************  */}
<div className="upperForm1Content">
<div className="row">
<div>

{/*
<label>DEPENDENT NAME : </label> <h1>AAA</h1><br/><br/><br/>*/}
<div className="col-lg-12 space row ">

<FormLabel text={"Dependent Name"} />
<div className="col-lg-4 space">
<input type="text" disabled class="  formInput" name="Dep_Name" value={Dep_Name} onChange={onDepNameChange} required/>
</div>
</div>

<input type="hidden"   name="Registered_date"  value={Registered_date} onChange={(e) => setRegistered_date(e.target.value)} />

<br/><br/><br/>
<FormLabel text={"Relation"} />

<div className="col-md-4 space">
{/*}<select  className="col-lg-9 dropdown_align" value={Relation} onChange={(e) => setRelation(e.target.value)} required>
<option value="" disabled>--Select One--</option>
{RELATION.map(c => <option key={c}>{c}</option>)}
</select>*/}
<input type="text"  class="  formInput" name="Relation" value={Relation} onChange={(e) => setRelation(e.target.value)}required/>


</div>

<FormLabel text={"Passport Size Photo"} />
<div className="col-lg-4 space">
<input type="file"  className="formInput"  accept="image/*" name="pp" onChange={saveImg} required /><br/>
&nbsp;<button  className={styleph} onClick={CuploadPhoto}>{buttonTextph}</button>

</div>



        <FormLabels text={"Adhaar Card :"} />
          <div className="col-md-4 space box line">
          <input type="file" name='D_Adhar' accept='application/pdf' onChange={saveD_Adhar} /><br/>
          <button className={stylea} onClick={DuploadAdhar}>{buttonTexta}</button>

          </div>

        <FormLabels text={" PAN Card :"} />
          <div className="col-md-4 box space">
          <input type="file" name='D_PAN'accept='application/pdf'  onChange={saveD_PAN} /><br/>
          <button className={stylep} onClick={DuploadPAN}>{buttonTextp}</button>

          </div>

        <FormLabels text={" Voter Id :"} />
          <div className="col-md-4 box space">
          <input type="file" name='D_Voter' accept='application/pdf' onChange={saveD_Voter} /><br/>
          <button className={stylev} onClick={DuploadVoter}>{buttonTextv}</button>
          </div>

        <FormLabels text={" ECHS Card :"} />
          <div className="col-md-4  box space">
          <input type="file" name='D_ECHS'accept='application/pdf'  onChange={saveD_ECHS} /><br/>
          <button className={stylee} onClick={DuploadECHS}>{buttonTexte}</button>

          </div>

</div>
</div></div>
{/*      //************   FOOTERS *************************   */}

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <div className="col-lg-12 right-align " >
              <span style={{color: 'red`, fontWeight : '900`, fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
              </div>
              <button className=" btn" ><Link to="/ViewFormDepDoc">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " ><Link to="/ViewForm7a">Add</Link> </button>


              </div>
{/*      //************   FOOTERS *************************   */}

      </div>
      </div>
      </div>

      )
      }

      export default DocForm;
