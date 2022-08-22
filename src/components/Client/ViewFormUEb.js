import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";

import ms from 'ms';
import moment from 'moment';

const ViewFormUEbEdit = () => {

  const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [ESM_No, setESM_No] = useState(localStorage.getItem('V_ESM_No'));
    const [Addi_Course1, setAddi_Course1] = useState(localStorage.getItem('V_Addi_Course1'));
    const [Addi_Course2, setAddi_Course2] = useState(localStorage.getItem('V_Addi_Course2'));
    const [Addi_Course3, setAddi_Course3] = useState(localStorage.getItem('V_Addi_Course3'));
    const [Addi_Course4, setAddi_Course4] = useState(localStorage.getItem('V_Addi_Course4'));


    const [Civil_Qualification, setCivil_Qualification] = useState(localStorage.getItem('V_Civil_Qualification'));
    const [Age, setAge] = useState(localStorage.getItem('V_Age'));
    const [Trade_Name, setTrade_Name] = useState(localStorage.getItem('V_Trade_Name'));
    const [Trade_Code, setTrade_Code] = useState(localStorage.getItem('V_Trade_Code'));
    const [Equi_Test, setEqui_Test] = useState(localStorage.getItem('V_Equi_Test'));




    const [DOB, setDOB] = useState(localStorage.getItem('DOB'));
    const [EDOB, setEDOB] = useState('');
    const [cal, setcal] = useState('');
    const [Age0, setAge0] = useState('');
    const [civil, setCivil] = useState([]);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');

    const [visible, setvisible]=useState(false);



    useEffect(() => {
     getName();
        getCivil();
       getEDOB();
       // getTrades();
      // getCivilQualification();
       //calculateAgeFromDOB(EDOB)

      // Emp();
    }, []);


    const getEDOB  = async () => {
           const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getEDOB`,{

             params:{
               Service_No: Service_No
             }
           });
           setEDOB(response.data);

         }
         const getName  = async () => {
                const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getName`,{

                  params:{
                    Service_No: Service_No
                  }
                });
                setName(response.data);
              }

         const getTrades  = async () => {
                 const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getTrades`,{

                   params:{
                     Service_No: Service_No
                   }
                 });
                 setTrade_Name(response.data);

               }


               const getCivilQualification  = async () => {
                       const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getCivilQualification`,{

                         params:{
                           Service_No: Service_No
                         }
                       });
                       setCivil_Qualification(response.data);

                     }


    const calculateAgeFromDOB = (dobAsString) => {
       const dob = new Date(dobAsString);
       const now = new Date();
       return now.getYear() - dob.getYear();

     }

    const calAge = (e) =>  {
        e.preventDefault();
     //   console.log(calculateAgeFromDOB(EDOB))
        setAge(calculateAgeFromDOB(EDOB))

    }
    //console.log(calAge)

    const axiosJWT = axios.create();
       const getCivil = async () => {
       // const response = await axiosJWT.get(`${process.env.REACT_APP_DOMAIN}/civil_D`);
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/civil_D');
       setCivil(response.data);
       }

// //-------------------------- POST REQUEST -----------------------------


const ViewFormUEbEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/ViewFormUEbEdit`, {
              Service_No:Service_No,
              ESM_No:ESM_No,
              Addi_Course1:Addi_Course1,
              Addi_Course2:Addi_Course2,
              Addi_Course3:Addi_Course3,
              Addi_Course4:Addi_Course4,
              Civil_Qualification:Civil_Qualification,
              Age:Age,
              Trade_Name:Trade_Name,
              Trade_Code:Trade_Code,
              Equi_Test:Equi_Test


            });

 // uploadImg();

 navigate("/formstart");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

// //--------------------------POST REQUEST -----------------------------





    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form>

{/*---------------------------------------------HEADER ----------------------------------------*/}
<div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
<label className="header">Employment Details</label>
</div>

<div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
 <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
 <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
</div>
{/*---------------------------------------------HEADER ----------------------------------------*/}

      <div className="upperForm1Content">
{/*---------------------------------------------GET KEY ----------------------------------------*/}

      <div className="row">
{/*---------------------------------------------GET KEY ----------------------------------------*/}
              <div className="col-lg-12 space  ">
                <div className = "row">


                <input type="hidden"  class="  formInput" autocomplete = "off" maxlength = "20"  name="EDOB" value={EDOB} onChange={(e) => setEDOB(e.target.value)} />

                <input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />

                <FormLabel text={"Age"} />
                <div className="col-lg-4 space">
                <input type = "text"  class="  formInput" name= "Age0"  value={calculateAgeFromDOB(EDOB)}  /><br/><br/><br/>
                </div>
                {/*     <button onClick = {handleClickss} >Check</button>*/}
                <input type = "hidden"  class="  formInput" name= "Age"  value={Age} onChange={(e) => setAge(e.target.value)} /><br/><br/><br/>




               <FormLabel text={"ESM No"} />
               <div className="col-md-4 space">
               <input type="text" disabled class="  formInput" autocomplete = "off" maxlength = "20"  onClick = {calAge} name="ESM_No" value={ESM_No} onChange={(e) => setESM_No(e.target.value)}required />
               </div>

                 <FormLabel text={"Civil Qualification"} />
                 <div className="col-md-4 space">
                 <input type="text" disabled class="  formInput" autocomplete = "off" maxlength = "20"  name="Civil_Qualification" value={Civil_Qualification} onChange={(e) => setCivil_Qualification(e.target.value)}required />
                  </div>

                <FormLabel text={"Additional Course 1"} />
                <div className="col-md-4 space">
                <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course1" value={Addi_Course1} onChange={(e) => setAddi_Course1(e.target.value.toUpperCase())} />

                </div>


                             <FormLabel text={"Additional Course 2"} />
                             <div className="col-lg-4 space">
                             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course2" value={Addi_Course2} onChange={(e) => setAddi_Course2(e.target.value.toUpperCase())} /> &nbsp;
                             </div>



                             <FormLabel text={"Additional Course 3"} />
                             <div className="col-lg-4 space">
                             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course3" value={Addi_Course3} onChange={(e) => setAddi_Course3(e.target.value.toUpperCase())} /> &nbsp;
                             </div>


                             <FormLabel text={"Additional Course 4"} />
                             <div className="col-md-4 space">
                             <input type="text"  class=" formInput" autocomplete = "off" maxlength = "20"  name="Addi_Course4" value={Addi_Course4} onChange={(e) => setAddi_Course4(e.target.value.toUpperCase())} /> &nbsp;

                             </div>



                      <FormLabel text={"Trade /Branch"} />
                      <div className="col-md-4 space">
                      <input type="text"  disabled class="  formInput" autocomplete = "off" maxlength = "20"  name="Trade_Name" value={Trade_Name} onChange={(e) => setTrade_Name(e.target.value)} required/>
                      </div>

                      <FormLabel text={"Equivalent Profession in Civil"} />
                      <div className="col-md-4 space">
                      <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20"  name="Equi_Test" value={Equi_Test} onChange={(e) => setEqui_Test(e.target.value)}required />
                      </div>

                      <FormLabel text={"Trade Code"} />
                      <div className="col-md-4 space">
                      <input type="text"  class="  formInput" autocomplete = "off" maxlength = "20"  name="Trade_Code"  value={Trade_Code} onChange={(e) => setTrade_Code(e.target.value.toUpperCase())} required/>
                      </div>



           </div>
     </div>
     </div>

     </div>


                       <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>

                       <div>
                       <button className=" btn" ><Link to="/viewformuea">Back</Link> </button>
                       <button className="btn my-2 my-sm-0 "  onClick={ViewFormUEbEdit}> Update </button>
                       </div> </div>

{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}

</form>

</div>
</div>
</div>
</div>
    )
}

export default ViewFormUEbEdit
