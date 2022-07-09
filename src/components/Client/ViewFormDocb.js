import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
// import ButtonUpload from "../../view/ButtonUpload";


const ViewFormDocb = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [Name, setName] = useState(localStorage.getItem('Name'));
  const [Registered_date, setRegistered_date] = useState('');

  const [Adhar, setAdhar] = useState();
  const [AdharName, setAdharName] = useState("");
  const [Adharpicture, setAdharPicture] = useState('');
  const [Discharge_Book, setDischarge_Book] = useState();
  const [Discharge_BookName, setDischarge_BookName] = useState("");
  const [Discharge_Bookpicture, setDischarge_BookPicture] = useState('');
  const [PPO, setPPO] = useState();
  const [PPOName, setPPOName] = useState("");
  const [PPOpicture, setPPOPicture] = useState('');
  const [PAN, setPAN] = useState();
  const [PANName, setPANName] = useState("");
  const [PANpicture, setPANPicture] = useState('');
  const [ECHS, setECHS] = useState();
  const [ECHSName, setECHSName] = useState("");
  const [ECHSpicture, setECHSPicture] = useState('');
  const [Voter, setVoter] = useState();
  const [VoterName, setVoterName] = useState("");
  const [Voterpicture, setVoterPicture] = useState('');
  const [pp, setpp] = useState(localStorage.getItem('pp'));
  const [Img, setImg] = useState();
  const [ImgName, setImgName] = useState();
  const [Imgpicture, setImgpicture] = useState();



  const axiosJWT = axios.create();

  useEffect(() => {
   getRegisterDate();

  }, []);


  const getRegisterDate  = async () => {
         const response = await axiosJWT.get('http://localhost:5000/getRegisterDate',{

           params:{
             Service_No: Service_No
           }
         });
         setRegistered_date(response.data);
       }




      const saveAdhar = (e) => {
        setAdhar(e.target.files[0]);
        setAdharName(e.target.files[0].name);
        setAdharPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveDischarge_Book = (e) => {
        setDischarge_Book(e.target.files[0]);
        setDischarge_BookName(e.target.files[0].name);
        setDischarge_BookPicture(URL.createObjectURL(e.target.files[0]));
      };
      const savePPO = (e) => {
        setPPO(e.target.files[0]);
        setPPOName(e.target.files[0].name);
        setPPOPicture(URL.createObjectURL(e.target.files[0]));
      };

      const savePAN = (e) => {
        setPAN(e.target.files[0]);
        setPANName(e.target.files[0].name);
        setPANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveECHS = (e) => {
        setECHS(e.target.files[0]);
        setECHSName(e.target.files[0].name);
        setECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveVoter = (e) => {
        setVoter(e.target.files[0]);
        setVoterName(e.target.files[0].name);
        setVoterPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveImg = (e) => {
        setImg(e.target.files[0]);
        setImgName(e.target.files[0].name);
        setImgpicture(URL.createObjectURL(e.target.files[0]));
      };

      const uploadImg = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
         formData.append("Name", Name);
        formData.append("Img", Img);
        formData.append("ImgName", ImgName);
        formData.append("Registered_date", Registered_date);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadImg",
            formData


          );
          alert ("Photo uploaded Successfully");
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };


  const uploadAdhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Name", Name);

        formData.append("Adhar", Adhar);
        formData.append("AdharName", AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadAdhar",
            formData
          );
          alert ("Adhaar uploaded Successfully");

          console.log(res);

        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadPAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Name", Name);

        formData.append("PAN", PAN);
        formData.append("PANName", PANName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadPAN",
            formData
          );
          alert ("PAN uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
               formData.append("Name", Name);

        formData.append("ECHS", ECHS);
        formData.append("ECHSName", ECHSName);
        try {
          const res = await axios.post(
            "http://localhost:5000/uploadECHS",
            formData
          );
          alert ("ECHS uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadVoter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Name", Name);


        formData.append("Voter", Voter);
        formData.append("VoterName", VoterName);


        try {
          const res = await axios.post(
            "http://localhost:5000/UploadVoter",
            formData
          );
          alert ("Voter uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadDischarge_Book = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Name", Name);

        formData.append("Discharge_Book", Discharge_Book,Service_No);
        formData.append("Discharge_BookName", Discharge_BookName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadDischarge_Book",
            formData
          );
          alert ("Discharge Book uploaded Successfully");


          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadPPO = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Name", Name);

        formData.append("PPO", PPO);
        formData.append("PPOName", PPOName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadPPO",
            formData
          );
          alert ("PPO uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };


const [styleph, setStyleph] = useState("btn btn-primary");
const [stylea, setStylea] = useState("btn btn-primary");
const [stylep, setStylep] = useState("btn btn-primary");
const [stylev, setStylev] = useState("btn btn-primary");
const [stylee, setStylee] = useState("btn btn-primary");
const [styled, setStyled] = useState("btn btn-primary");
const [styleppo, setStyleppo] = useState("btn btn-primary");
const [disable, setDisable] = useState(false);

const [buttonTexta, setButtonTexta] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
const [buttonTextp, setButtonTextp] = useState("Upload");
const [buttonTexte, setButtonTexte] = useState("Upload");
const [buttonTextv, setButtonTextv] = useState("Upload");
const [buttonTextd, setButtonTextd] = useState("Upload");
const [buttonTextppo, setButtonTextppo] = useState("Upload");
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

 const changeStyled = () => {
          console.log("you just clicked");
           setButtonTextd("uploaded");
           setDisable(true)

          setStyled("btn btn-secondary");
        };
 const changeStyleppo = () => {
          console.log("you just clicked");
           setButtonTextppo("uploaded");
           setDisable(true)

          setStyleppo("btn btn-secondary");
        };



        const CuploadAdhar = async (e) => {
              uploadAdhar();
              changeStylea()
            };


        const CuploadPAN = async (e) => {
              uploadPAN();
              changeStylep()
            };


        const CuploadVoter = async (e) => {
              uploadVoter();
              changeStylev()
            };

        const CuploadECHS = async (e) => {
              uploadECHS();
              changeStylee()
            };

        const CuploadDischarge = async (e) => {
              uploadDischarge_Book();
              changeStyled()
            };

        const CuploadPPO = async (e) => {
              uploadPPO();
              changeStyleppo()
            };

            const CuploadPhoto = async (e) => {
                  uploadImg();
                  changeStyleph()
                };

      return (
        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">

{/*      //********* HEADERS *********** */}
  <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
  <label className="header">ESM Document Upload Page</label>
 <div>

 <div className = "left-align dis">
  <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
  <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
</div>

</div>
  </div>
  {/*    //********* HEADERS ***********  */}
<div className="upperForm1Content">
<div className="row">
<div>




<input type="text" value={Name} /><br/><br/>

<FormLabel text={"Passport Size Photo"} />
<div className="col-lg-4 space ">
<input type="file"  className="formInput"  accept="image/*" name="pp" value={pp} onChange={saveImg} required /><br/>
&nbsp;<button  className={styleph} onClick={CuploadPhoto}>{buttonTextph}</button>


</div>
<input type="hidden"   name="Registered_date"  value={Registered_date} onChange={(e) => setRegistered_date(e.target.value)} />

<FormLabel text={"Discharge Book"} />
  <div className="col-md-4 box space">
  <input type="file" name='Discharge_Book' accept='application/pdf' onChange={saveDischarge_Book} required/><br/>
  <button className={styled} onClick={CuploadDischarge}>{buttonTextd}</button>

  </div>


        <FormLabels text={"Adhaar Card "} />
          <div className="col-md-4 space box line"disabled={disable}>
          <input type="file" name='Adhar' accept='application/pdf' onChange={saveAdhar} /><br/>
          <button className={stylea} onClick={CuploadAdhar}>{buttonTexta}</button>
          </div>

        <FormLabels text={"PAN Card "} />
          <div className="col-md-4 box space">
          <input type="file" name='PAN' accept='application/pdf' onChange={savePAN} /><br/>
          <button className={stylep} onClick={CuploadPAN}>{buttonTextp}</button>

          </div>

        <FormLabels text={"Voter Id "} />
          <div className="col-md-4 box space">
          <input type="file" name='Voter'  accept='application/pdf' onChange={saveVoter} /><br/>
          <button className={stylev} onClick={CuploadVoter}>{buttonTextv}</button>
          </div>

        <FormLabels text={"ECHS Card "} />
          <div className="col-md-4  box space">
          <input type="file" name='ECHS'  accept='application/pdf' onChange={saveECHS} /><br/>
          <button className={stylee} onClick={CuploadECHS}>{buttonTexte}</button>

          </div>




            <FormLabels text={"PPO "} />
              <div className="col-md-4 box space">
              <input type="file" name='PPO' accept='application/pdf' onChange={savePPO} /><br/>
              <button className={styleppo} onClick={CuploadPPO}>{buttonTextppo}</button>
              </div>

</div>
</div></div>
{/*      //****   FOOTERS *********   */}

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <div className="col-lg-12 right-align " >
              <span style={{color: 'red', fontWeight : '900', fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
              </div>
              <button className=" btn" ><Link to="/ViewFormDoc">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " ><Link to="/ViewForm6a">Next</Link> </button>
              </div>
{/*      //****   FOOTERS *********   */}


      </div>
      </div>
      </div>

      )
      }

export default ViewFormDocb






















































{/*}
// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import { useNavigate,useLocation, Link } from "react-router-dom";
// import FormLabel from "../../view/FormLabel";
// import ButtonUpload from "../../view/ButtonUpload";*/}


// const DocForm = () => {
//   const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
//   const [Adhar, setAdhar] = useState();
//   const [AdharName, setAdharName] = useState("");
//   const [Adharpicture, setAdharPicture] = useState('');
//   const [Discharge_Book, setDischarge_Book] = useState();
//   const [Discharge_BookName, setDischarge_BookName] = useState("");
//   const [Discharge_Bookpicture, setDischarge_BookPicture] = useState('');
//   const [PPO, setPPO] = useState();
//   const [PPOName, setPPOName] = useState("");
//   const [PPOpicture, setPPOPicture] = useState('');
//   const [PAN, setPAN] = useState();
//   const [PANName, setPANName] = useState("");
//   const [PANpicture, setPANPicture] = useState('');
//   const [ECHS, setECHS] = useState();
//   const [ECHSName, setECHSName] = useState("");
//   const [ECHSpicture, setECHSPicture] = useState('');
//   const [Voter, setVoter] = useState();
//   const [VoterName, setVoterName] = useState("");
//   const [Voterpicture, setVoterPicture] = useState('');
//
//
//       const saveAdhar = (e) => {
//         setAdhar(e.target.files[0]);
//         setAdharName(e.target.files[0].name);
//         setAdharPicture(URL.createObjectURL(e.target.files[0]));
//       };
//
//       const saveDischarge_Book = (e) => {
//         setDischarge_Book(e.target.files[0]);
//         setDischarge_BookName(e.target.files[0].name);
//         setDischarge_BookPicture(URL.createObjectURL(e.target.files[0]));
//       };
//       const savePPO = (e) => {
//         setPPO(e.target.files[0]);
//         setPPOName(e.target.files[0].name);
//         setPPOPicture(URL.createObjectURL(e.target.files[0]));
//       };
//
//       const savePAN = (e) => {
//         setPAN(e.target.files[0]);
//         setPANName(e.target.files[0].name);
//         setPANPicture(URL.createObjectURL(e.target.files[0]));
//       };
//       const saveECHS = (e) => {
//         setECHS(e.target.files[0]);
//         setECHSName(e.target.files[0].name);
//         setECHSPicture(URL.createObjectURL(e.target.files[0]));
//       };
//       const saveVoter = (e) => {
//         setVoter(e.target.files[0]);
//         setVoterName(e.target.files[0].name);
//         setVoterPicture(URL.createObjectURL(e.target.files[0]));
//       };
//
//
//
//   const uploadAdhar = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//         formData.append("Adhar", Adhar);
//         formData.append("AdharName", AdharName);
//
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/uploadAdhar",
//             formData
//           );
//           console.log(res);
//
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//
//       const uploadPAN = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//         formData.append("PAN", PAN);
//         formData.append("PANName", PANName);
//
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/uploadPAN",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//       const uploadECHS = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//         formData.append("ECHS", ECHS);
//         formData.append("ECHSName", ECHSName);
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/uploadECHS",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//       const uploadVoter = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//
//
//         formData.append("Voter", Voter);
//         formData.append("VoterName", VoterName);
//
//
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/UploadVoter",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//       const uploadDischarge_Book = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//
//         formData.append("Discharge_Book", Discharge_Book,Service_No);
//         formData.append("Discharge_BookName", Discharge_BookName);
//
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/uploadDischarge_Book",
//             formData
//           );
//
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//       const uploadPPO = async (e) => {
//         const formData = new FormData();
//         formData.append("Service_No", Service_No);
//
//         formData.append("PPO", PPO);
//         formData.append("PPOName", PPOName);
//
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/uploadPPO",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//
//       const [style, setStyle] = useState("btn btn-primary");
//       const [disable, setDisable] = useState(false);
//
//       const [buttonText, setButtonText] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
//
//         const changeStyle = () => {
//           console.log("you just clicked");
//            setButtonText("uploaded");
//  setDisable(true)
//
//           setStyle("btn btn-secondary");
//         };
        // const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
        //
        // const changeText = (text) => setButtonText(text);

        //
        // const CuploadAdhar = async (e) => {
        //       uploadAdhar();
        //       changeStyle()
        //     };

    //  return (
{/*}        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">

{/*      //************************** HEADERS ********************************
        <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
          <label className="header"> ESM Document Upload Page</label>
             <div className = "right-align dis">
              <label className="sn-mar">{"Service No :"}</label> <h1>{Service_No}</h1>
             </div>
       </div> */}
  {/*    //************************** HEADERS ********************************
<div className="upperForm1Content">
<div className="row">
<div>

        <FormLabel text={"Adhaar Card "} />
          <div className="col-md-4 space box line"disabled={disable}>
          <input type="file" name='Adhar' onChange={saveAdhar} /><br/>
          <button className={style} onClick={CuploadAdhar}>{buttonText}</button> */}
{/*<ButtonUpload call={CuploadAdhar}></ButtonUpload>
          </div>

        <FormLabel text={"PAN Card "} />
          <div className="col-md-4 box space">
          <input type="file" name='PAN' onChange={savePAN} /><br/>
          <button className='btn btn-primary' onClick={uploadPAN}>Upload PAN</button>

          </div>

        <FormLabel text={"Voter Id "} />
          <div className="col-md-4 box space">
          <input type="file" name='Voter' onChange={saveVoter} /><br/>
          <button className='btn btn-primary' onClick={uploadVoter}>Upload Voter</button>
          </div>

        <FormLabel text={"ECHS Card "} />
          <div className="col-md-4  box space">
          <input type="file" name='ECHS' onChange={saveECHS} /><br/>
          <button className='btn btn-primary' onClick={uploadECHS}>Upload ECHS</button>

          </div>


          <FormLabel text={"Discharge Book"} />
            <div className="col-md-4 box space">
            <input type="file" name='Discharge_Book' onChange={saveDischarge_Book} /><br/>
            <button className='btn btn-primary' onClick={uploadDischarge_Book}>Upload Discharge_Book</button>

            </div>

            <FormLabel text={"PPO "} />
              <div className="col-md-4 box space">
              <input type="file" name='PPO' onChange={savePPO} /><br/>
              <button className='btn btn-primary' onClick={uploadPPO}>Upload PPO</button>
              </div>







</div>
</div></div>*/}
{/*      //************   FOOTERS *************************

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <button className=" btn" ><Link to="/Form5">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " ><Link to="/Form6">Next</Link> </button>
              </div>*/}
{/*      //************   FOOTERS *************************


      </div>
      </div>
      </div>

      )
      }

      export default DocForm;
*/}
