import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useLocation, Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";


const SpouseDocForm = () => {
  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [Registered_date, setRegistered_date] = useState('');

  const [S_Adhar, setS_Adhar] = useState();
  const [S_AdharName, setS_AdharName] = useState("");
  const [S_Adharpicture, setS_AdharPicture] = useState('');
  const [S_Discharge_Book, setS_Discharge_Book] = useState();
  const [S_Discharge_BookName, setS_Discharge_BookName] = useState("");
  const [S_Discharge_Bookpicture, setS_Discharge_BookPicture] = useState('');
  const [S_PPO, setS_PPO] = useState();
  const [S_PPOName, setS_PPOName] = useState("");
  const [S_PPOpicture, setS_PPOPicture] = useState('');
  const [S_PAN, setS_PAN] = useState();
  const [S_PANName, setS_PANName] = useState("");
  const [S_PANpicture, setS_PANPicture] = useState('');
  const [S_ECHS, setS_ECHS] = useState();
  const [S_ECHSName, setS_ECHSName] = useState("");
  const [S_ECHSpicture, setS_ECHSPicture] = useState('');
  const [S_Voter, setS_Voter] = useState();
  const [S_VoterName, setS_VoterName] = useState("");
  const [S_Voterpicture, setS_VoterPicture] = useState('');
  const [Spouse_Name, setSpouse_Name] = useState(localStorage.getItem('Spouse_Name'));
  const [Name, setName] = useState(localStorage.getItem('Name'));
  const [Img, setImg] = useState();
  const [ImgName, setImgName] = useState();
  const [Imgpicture, setImgpicture] = useState();
  const [pp, setpp] = useState('');


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

      const saveS_Adhar = (e) => {
        setS_Adhar(e.target.files[0]);
        setS_AdharName(e.target.files[0].name);
        setS_AdharPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveS_Discharge_Book = (e) => {
        setS_Discharge_Book(e.target.files[0]);
        setS_Discharge_BookName(e.target.files[0].name);
        setS_Discharge_BookPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_PPO = (e) => {
        setS_PPO(e.target.files[0]);
        setS_PPOName(e.target.files[0].name);
        setS_PPOPicture(URL.createObjectURL(e.target.files[0]));
      };

      const saveS_PAN = (e) => {
        setS_PAN(e.target.files[0]);
        setS_PANName(e.target.files[0].name);
        setS_PANPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_ECHS = (e) => {
        setS_ECHS(e.target.files[0]);
        setS_ECHSName(e.target.files[0].name);
        setS_ECHSPicture(URL.createObjectURL(e.target.files[0]));
      };
      const saveS_Voter = (e) => {
        setS_Voter(e.target.files[0]);
        setS_VoterName(e.target.files[0].name);
        setS_VoterPicture(URL.createObjectURL(e.target.files[0]));
      };

       const saveImg = (e) => {
         setImg(e.target.files[0]);
         setImgName(e.target.files[0].name);
         setImgpicture(URL.createObjectURL(e.target.files[0]));
       };

       const upload_SImg = async (e) => {
          const formData = new FormData();
          formData.append("Service_No", Service_No);
          formData.append("Spouse_Name", Spouse_Name);
          formData.append("Img", Img);
          formData.append("ImgName", ImgName);
          formData.append("Registered_date", Registered_date);

          try {
            const res = await axios.post(
              "http://localhost:5000/upload_SImg",
              formData
            );
            alert ("Photo uploaded Successfully");

            console.log(res);
          } catch (ex) {
            console.log(ex);
          }
        };

  const uploadS_Adhar = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("Spouse_Name", Spouse_Name);

        formData.append("S_Adhar", S_Adhar);
        formData.append("S_AdharName", S_AdharName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_Adhar",
            formData
          );
          alert ("Adhar uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

      const uploadS_PAN = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("Spouse_Name", Spouse_Name);

        formData.append("S_PAN", S_PAN);
        formData.append("S_PANName", S_PANName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_PAN",
            formData
          );
          alert ("PAN  uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_ECHS = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
        formData.append("Spouse_Name", Spouse_Name);

        formData.append("S_ECHS", S_ECHS);
        formData.append("S_ECHSName", S_ECHSName);
        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_ECHS",
            formData
          );
          alert ("ECHS uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_Voter = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);

        formData.append("Spouse_Name", Spouse_Name);

        formData.append("S_Voter", S_Voter);
        formData.append("S_VoterName", S_VoterName);


        try {
          const res = await axios.post(
            "http://localhost:5000/UploadS_Voter",
            formData
          );
          alert ("Voter uploaded Successfully");

          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      const uploadS_PPO = async (e) => {
        const formData = new FormData();
        formData.append("Service_No", Service_No);
          formData.append("Spouse_Name", Spouse_Name);

        formData.append("S_PPO", S_PPO);
        formData.append("S_PPOName", S_PPOName);

        try {
          const res = await axios.post(
            "http://localhost:5000/uploadS_PPO",
            formData
          );
          alert ("PPO uploaded Successfully");

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
      const [styleppo, setStyleppo] = useState("btn btn-primary");
const [disable, setDisable] = useState(false);
      const [buttonTexta, setButtonTexta] = useState("Upload"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
      const [buttonTextp, setButtonTextp] = useState("Upload");
      const [buttonTexte, setButtonTexte] = useState("Upload");
      const [buttonTextv, setButtonTextv] = useState("Upload");
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

       const changeStyleppo = () => {
                console.log("you just clicked");
                 setButtonTextppo("uploaded");
                 setDisable(true)

                setStyleppo("btn btn-secondary");
              };


              const SuploadAdhar = async (e) => {
                    uploadS_Adhar();
                    changeStylea()
                  };


              const SuploadPAN = async (e) => {
                    uploadS_PAN();
                    changeStylep()
                  };


              const SuploadVoter = async (e) => {
                    uploadS_Voter();
                    changeStylev()
                  };

              const SuploadECHS = async (e) => {
                    uploadS_ECHS();
                    changeStylee()
                  };
                  const SuploadPPO = async (e) => {
                        uploadS_PPO();
                        changeStyleppo()
                      };
                      const CuploadPhoto = async (e) => {
                            upload_SImg();
                            changeStyleph()
                            // alert ('file uploded')
                          };


      return (
        <div className="center">
       <div class="wrapper fadeInDown">
       <div  id="form1Content">
{/*      //************************** HEADERS ******************************** */}
  <div className="text-center text-dark p-3 bottom-shade" style={{backgroundColor: "#008E89"}}>  {/*085E7D*/}
  <label className="header">Spouse Documents</label>
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



<div className="col-lg-12 space row">

<FormLabel text={"Spouse Name : "} />
<div className="col-lg-4 space">
<input type="text"  class="  formInput" value = {Spouse_Name}/>
</div>
<input type="hidden"   name="Registered_date"  value={Registered_date} onChange={(e) => setRegistered_date(e.target.value)} />


</div>


<FormLabels text={"Passport Size Photo"} />
<div className="col-lg-4 space">
<input type="file"  className="formInput"  accept="image/*" name="pp" onChange={saveImg} /><br/>
&nbsp;<button  className={styleph} onClick={CuploadPhoto}>{buttonTextph}</button>

</div>

        <FormLabels text={"Spouse Adhaar "} />
          <div className="col-md-4 space box line">
          <input type="file" name='S_Adhar'accept='application/pdf'  onChange={saveS_Adhar} /><br/>
  <button className={stylea} onClick={SuploadAdhar}>{buttonTexta}</button>
          </div>

        <FormLabels text={"Spouse PAN Card "} />
          <div className="col-md-4 box space">
          <input type="file" name='S_PAN'accept='application/pdf'  onChange={saveS_PAN} /><br/>
  <button className={stylep} onClick={SuploadPAN}>{buttonTextp}</button>
          </div>

        <FormLabels text={"Spouse Voter Id "} />
          <div className="col-md-4 box space">
          <input type="file" name='S_Voter' accept='application/pdf' onChange={saveS_Voter} /><br/>
  <button className={stylev} onClick={SuploadVoter}>{buttonTextv}</button>          </div>

        <FormLabels text={"Spouse ECHS Card "} />
          <div className="col-md-4  box space">
          <input type="file" name='S_ECHS' accept='application/pdf' onChange={saveS_ECHS} /><br/>
  <button className={stylee} onClick={SuploadECHS}>{buttonTexte}</button>
          </div>


            <FormLabels text={"Spouse PPO "} />
              <div className="col-md-4 box space">
              <input type="file" name='S_PPO'accept='application/pdf' onChange={saveS_PPO} /><br/>
  <button className={styleppo} onClick={SuploadPPO}>{buttonTextppo}</button>              </div>







</div>
</div></div>
{/*      //************   FOOTERS *************************   */}

              <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
              <div className="col-lg-12 right-align " >
              <span style={{color: 'red', fontWeight : '900', fontStyle : 'italic' , fontFamily : 'Times New Roman'}} >* Fields are Mandatory</span>
              </div>
              <button className=" btn" ><Link to="/Form6">Back</Link> </button>
              <button className="btn my-2 my-sm-0 " ><Link to="/form7">Next</Link> </button>
              </div>
{/*      //************   FOOTERS *************************   */}

      </div>
      </div>
      </div>

      )
      }

      export default SpouseDocForm;
