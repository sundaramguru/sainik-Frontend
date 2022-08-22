import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
import FormDisplay from "./Form0"


const Form7 = () => {
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState('');
    const [Dep_Name, setDep_Name] = useState('');
    const [Relation, setRelation] = useState('');
    const [Dep_DOB, setDep_DOB] = useState('');
    const [Dep_Adhaar, setDep_Adhaar] = useState('');
    const [Dep_Qualification, setDep_Qualification] = useState('');
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState('');
    const [Dep_Employment_Status, setDep_Employment_Status] = useState('');
    const [Dep_Marital_Status, setDep_Marital_Status] = useState('');
    const [dep, setdep] = useState([]);
    const [ADep_Name, setADep_Name] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [sheetData, setSheetData] = useState(null);

    const [minDate, setminDate]= useState('');
    const [maxDate, setmaxDate]= useState('');

   useEffect(() => {
     getName();
         getUsers();
         setSheetData(getUsers());

    }, []);


    const axiosJWT = axios.create();

    const getUsers = async () => {
     const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/Form7`,
          {
              params:{D_Service_No:sn}
          });
        setUsers(response.data);
    }

const Edit = async (e) => {
        e.preventDefault();
        try {
            console.log(Service_No);
            localStorage.setItem('V_Dep_Name`,Dep_Name);
            localStorage.setItem('V_Relation`,Relation);
            localStorage.setItem('V_Dep_DOB`,Dep_DOB);
            localStorage.setItem('V_Dep_Adhaar`,Dep_Adhaar);
            localStorage.setItem('V_Dep_Qualification`,Dep_Qualification);
            localStorage.setItem('V_Dep_Academic_Yr`,Dep_Academic_Yr);
            localStorage.setItem('V_Dep_Employment_Status`,Dep_Employment_Status);
            localStorage.setItem('V_Dep_Marital_Status`,Dep_Marital_Status);

            navigate("/form7Edit");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

const Delete = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Form7Delete`, {
              Service_No:Service_No,
              checkDep_Name: Dep_Name

          });
            navigate("/Form7");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const getName  = async () => {
           const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getName`,{

             params:{
               Service_No: Service_No
             }
           });
           setName(response.data);
         }


const Form7 = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/forms`, {
//form1
                Service_No:localStorage.getItem('Service_No'),
                Service_Name:localStorage.getItem('Service_Name'),
                Corps_Name: localStorage.getItem('Corps_Name'),
                Rank_Category: localStorage.getItem('Rank_Category'),
                Record_Office_Name: localStorage.getItem('Record_Office_Name'),
                Group_Name: localStorage.getItem('Group_Name'),
                Trade_Name: localStorage.getItem('Trade_Name'),
                Rank_Name: localStorage.getItem('Rank_Name'),
                Name: localStorage.getItem('Name'),
                Gender: localStorage.getItem('Gender'),
                DOB: localStorage.getItem('DOB'),
                Enroll_Date: localStorage.getItem('Enroll_Date'),
                World_War2:localStorage.getItem('World_War2'),
                Opt_Attend: localStorage.getItem('Opt_Attend'),
                Deco: localStorage.getItem('Deco'),
//form2
                Service_No:localStorage.getItem('Service_No'),
                Unit_Last_Served: localStorage.getItem('Unit_Last_Served'),
                Discharge_Date:localStorage.getItem('Discharge_Date'),
                Discharge_Reason: localStorage.getItem('Discharge_Reason'),
                Discharge_Med_Cat: localStorage.getItem('Discharge_Med_Cat'),
                Discharge_Character: localStorage.getItem('Discharge_Character'),
                Discharge_Book_No: localStorage.getItem('Discharge_Book_No'),
                If_Pensioner: localStorage.getItem('If_Pensioner'),
                PPO_No: localStorage.getItem('PPO_No'),
                Pension_Sanctioned: localStorage.getItem('Pension_Sanctioned'),
                Present_Pension: localStorage.getItem('Present_Pension'),
                If_Sanctioned_Dis_Pension: localStorage.getItem('If_Sanctioned_Dis_Pension'),
                Disability_Pension: localStorage.getItem('Disability_Pension'),
                Disability_Percentage: localStorage.getItem('Disability_Percentage'),
                Pension_AC_No: localStorage.getItem('Pension_AC_No'),
                Bank_Name: localStorage.getItem('Bank_Name'),
                Branch: localStorage.getItem('Branch'),
                IFSC:localStorage.getItem('IFSC'),


//form3
                Service_No:localStorage.getItem('Service_No'),
                Father_Name: localStorage.getItem('Father_Name'),
                Mother_Name:localStorage.getItem('Mother_Name'),
                Religion: localStorage.getItem('Religion'),
                Caste_Category: localStorage.getItem('Caste_Category'),
                Birth_State: localStorage.getItem('Birth_State'),
                Birth_Dist_Surname: localStorage.getItem('Birth_Dist_Surname'),
                Birth_Place: localStorage.getItem('Birth_Place'),
                Adhaar: localStorage.getItem('Adhaar'),
                Voter_Id: localStorage.getItem('Voter_Id'),
                PAN: localStorage.getItem('PAN'),
                CSD: localStorage.getItem('CSD'),
                ECHS: localStorage.getItem('ECHS'),
                Id_Mark1:localStorage.getItem('Id_Mark1'),
                Id_Mark2: localStorage.getItem('Id_Mark2'),



//form4

                Service_No:localStorage.getItem('Service_No'),
                State:localStorage.getItem('State'),
                District:localStorage.getItem('District'),
                Taluk_Name:localStorage.getItem('Taluk_Name'),
                House_No: localStorage.getItem('House_No'),
                House_Name:localStorage.getItem('House_Name'),
                Street: localStorage.getItem('Street'),
                Pincode:localStorage.getItem('Pincode'),
                Police_Station: localStorage.getItem('Police_Station'),
                Tele_No: localStorage.getItem('Tele_No'),
                Same:localStorage.getItem('same'),
                City_Village: localStorage.getItem('City_Village'),
                P_House_No: localStorage.getItem('P_House_No'),
                P_City_Village: localStorage.getItem('P_City_Village'),
                P_State: localStorage.getItem('P_State'),
                P_District: localStorage.getItem('P_District'),
                P_Taluk_Name: localStorage.getItem('P_Taluk_Name'),
                P_House_Name: localStorage.getItem('P_House_Name'),
                P_Street: localStorage.getItem('P_Street'),
                P_Pincode: localStorage.getItem('P_Pincode'),
                P_Police_Station: localStorage.getItem('P_Police_Station'),
                Locality:localStorage.getItem('Locality'),
                P_Locality:localStorage.getItem('P_Locality'),


//form5

            Service_No:localStorage.getItem('Service_No') ,
            Civil_Qualification: localStorage.getItem('Civil_Qualification') ,
            Addi_Course:localStorage.getItem('Addi_Course') ,
            Equi_Test: localStorage.getItem('Equi_Test') ,
            Civil_Emp_Status:localStorage.getItem('Civil_Emp_Status') ,
            Dept: localStorage.getItem('Dept') ,
            Sector: localStorage.getItem('Sector') ,
            Pres_Desg: localStorage.getItem('Pres_Desg') ,
            Employer: localStorage.getItem('Employer') ,
            Month_Income: localStorage.getItem('Month_Income') ,
            Official_No: localStorage.getItem('Official_No') ,
            Desg_Retire: localStorage.getItem('Desg_Retire') ,
            Retire_Date: localStorage.getItem('Retire_Date') ,
            Civil_PPO_No:localStorage.getItem('Civil_PPO_No') ,



            Service_No:localStorage.getItem('Service_No') ,
            Marital_Status: localStorage.getItem('Marital_Status') ,
            Marriage_Date:localStorage.getItem('Marriage_Date') ,
            Spouse_Name: localStorage.getItem('Spouse_Name') ,
            Spouse_Relation: localStorage.getItem('Spouse_Relation') ,
            Spouse_DOB: localStorage.getItem('Spouse_DOB') ,
            Spouse_Sector: localStorage.getItem('Spouse_Sector') ,
            Spouse_Dept: localStorage.getItem('Spouse_Dept') ,
            Spouse_Pres_Desg: localStorage.getItem('Spouse_Pres_Desg') ,
            Spouse_Employer: localStorage.getItem('Spouse_Employer') ,
            Spouse_Official_No: localStorage.getItem('Spouse_Official_No') ,
            Spouse_Month_Income: localStorage.getItem('Spouse_Month_Income') ,
            Spouse_Desg_Retire: localStorage.getItem('Spouse_Desg_Retire') ,
            Spouse_Civil_PPO_No: localStorage.getItem('Spouse_Civil_PPO_No') ,
            Spouse_Id_Mark: localStorage.getItem('Spouse_Id_Mark') ,
            Spouse_Qualification: localStorage.getItem('Spouse_Qualification') ,
            Spouse_Emp_Status: localStorage.getItem('Spouse_Emp_Status') ,
            Spouse_Emp_Profession: localStorage.getItem('Spouse_Emp_Profession') ,
            Spouse_Retire_Date: localStorage.getItem('Spouse_Retire_Date') ,
            Spouse_Adhaar: localStorage.getItem('Spouse_Adhaar') ,
            Spouse_Voter_Id: localStorage.getItem('Spouse_Voter_Id') ,
            Spouse_PAN: localStorage.getItem('Spouse_PAN') ,
            Spouse_CSD: localStorage.getItem('Spouse_CSD') ,
            Spouse_ECHS: localStorage.getItem('Spouse_ECHS'),
            Divorce_Date: localStorage.getItem('Divorce_Date') ,
            Court_Order: localStorage.getItem('Court_Order') ,
            Death_Date: localStorage.getItem('Death_Date'),





//reg TYPE
Reg_Type:localStorage.getItem('Reg_Type')
});

  //form6

          alert('Registration Successfully Completed !!!');
          navigate("/");
          //  localStorage.clear();

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
            }
    }

const Form7Delete = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/form7delete`, {

                 Service_No:localStorage.getItem('Service_No'),
                 Dep_Name: localStorage.getItem('Dep_Name'),
                 Relation:localStorage.getItem('Relation'),
                 Dep_DOB: localStorage.getItem('Dep_DOB'),
                 Dep_Adhaar: localStorage.getItem('Dep_Adhaar'),
                 Dep_Qualification: localStorage.getItem('Dep_Qualification'),
                 Dep_Academic_Yr: localStorage.getItem('Dep_Academic_Yr'),
                 Dep_Employment_Status: localStorage.getItem('Dep_Employment_Status'),
                 Dep_Marital_Status: localStorage.getItem('Dep_Marital_Status'),

});
          navigate("/Form7");
    } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

// const downloadPdfData = (e) =>{
// const pdf = new jsPDF();
// pdf.autoTable({html:"#table-to-xls"});
// pdf.save("PDF_1.pdf")
//
// }

    const Form8 = async (e) => {
        e.preventDefault();
        try {

                localStorage.setItem('Service_No`,Service_No);
                localStorage.setItem('Dep_Name`,Dep_Name);
                localStorage.setItem('Relation`,Relation);
                localStorage.setItem('Dep_DOB`,Dep_DOB);
                localStorage.setItem('Dep_Adhaar`,Dep_Adhaar);
                localStorage.setItem('Dep_Qualification`,Dep_Qualification);
                localStorage.setItem('Dep_Academic_Yr`,Dep_Academic_Yr);
                localStorage.setItem('Dep_Employment_Status`,Dep_Employment_Status);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        } }


    return (
    <div className="center">
    <div class="wrapper fadeInDown">

   <form onSubmit={Form7}>
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}

    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>

     <div className = "left-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
    </div>

    </div>
  {/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}
<input type="hidden"  class="  textInput" name="Name"  value={Name} onChange={(e) => setName(e.target.value)} />
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
      <table className="table is-fullwidth" id = "table-to-xls">
        <div class="card space ">
           <div className="card-header colors">
              <span className=" col-lg-12">
                      <thead>
                          <tr>
                          <th>Sl.No</th>
                          <th>Dep_Name</th>
                          <th>Relation</th>
                          <th>Dependent DOB</th>
                          <th>Dependent Adhaar</th>
                          <th>Dependent Qualification</th>
                          <th>Dependent Academic Year</th>
                          <th>Dependent Employment Status</th>
                          <th>Dependent Marital Status</th>
                          <th>Action</th>
                          </tr>
                      </thead>
                      {users.map((user, index) => (


                     <tbody>
                          <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.Dep_Name}</td>
                          <td>{user.Relation}</td>
                          <td>{user.Dep_DOB}</td>
                          <td>{user.Dep_Adhaar}</td>
                          <td>{user.Dep_Qualification}</td>
                          <td>{user.Dep_Academic_Yr}</td>
                          <td>{user.Dep_Employment_Status}</td>
                          <td>{user.Dep_Marital_Status}</td>
                          <td>
          <button className="btn my-2 my-sm-0 btn-primary" onClick={Edit} onMouseEnter={function EditMouseHover(){
                        setDep_Name(user.Dep_Name);
                        setRelation(user.Relation);
                        setDep_DOB(user.Dep_DOB);
                        setDep_Adhaar(user.Dep_Adhaar);
                        setDep_Qualification(user.Dep_Qualification);
                        setDep_Academic_Yr(user.Dep_Academic_Yr);
                        setDep_Employment_Status(user.Dep_Employment_Status);
                        setDep_Marital_Status(user.Dep_Marital_Status);
                        }}>Edit/Delete </button></td>
                        </tr>
                     </tbody>


                ))}


           </span>


</div>
</div>
 </table>


</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>

     <button className=" btn" ><Link to="/Form6">Back</Link> </button>
     <button className="btn my-2 my-sm-0 " ><Link to="/Form8" >ADD </Link> </button>

     <button className="btn my-2 my-sm-0 " type="submit">Submit</button>

{/*<ReactToExcel
className= "btn"
table = "table-to-xls"
filename = "excelFile"
sheet = "sheet 1 "
buttonText = "EXPORT"
/>

<button className = "btn btn-primary btn-md"  onClick = {downloadPdfData} >Download As PDF  </button>
*/}
    </div>
    </form>

</div>
</div>
)
}

const Form7Display = () => <FormDisplay step={7} Form={Form7} />

export default Form7Display
































































{/*import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel from "../view/FormLabel";


const Form7 = () => {

    const [Service_No, setService_No] = useState('');
    const [Dep_Name, setDep_Name] = useState('');
    const [Relation, setRelation] = useState('');
    const [Dep_DOB, setDep_DOB] = useState('');
    const [Dep_Adhaar, setDep_Adhaar] = useState('');
    const [Dep_Qualification, setDep_Qualification] = useState('');
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState('');
    const [Dep_Employment_Status, setDep_Employment_Status] = useState('');
    const [Dep_Marital_Status, setDep_Marital_Status] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Form7 = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/u_dependent_details`, {
                Service_No:Service_No,
                Dep_Name: Dep_Name,
                Relation:Relation,
                Dep_DOB: Dep_DOB,
                Dep_Adhaar: Dep_Adhaar,
                Dep_Qualification: Dep_Qualification,
                Dep_Academic_Yr: Dep_Academic_Yr,
                Dep_Employment_Status: Dep_Employment_Status,
                Dep_Marital_Status: Dep_Marital_Status
            });
            navigate("/Form7a");
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
    <form onSubmit={Form7}>
    <div className="text-center text-dark p-3" style={{backgroundColor: "#f6f6f6"}}>
    <label className="header">Details of Family Members</label>
    </div>
    <div className="upperForm1Content">
    <p className="has-text-centered">{msg}</p>
    <div className="row">
<div className = "right-align">
      <div >
      <label class="sn-mar">{"Service No"}</label>
      <input type="text"   name="Service_No" value={Service_No}onChange={(e) => setService_No(e.target.value)} disabled required/>
      </div>
      </div>

         <FormLabel text={"Dependent Name"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Dep_Name" value={Dep_Name} onChange={(e) => setDep_Name(e.target.value.toUpperCase())} required/>
         </div>
         <FormLabel text={"Relation"} />

         <div className="col-lg-4 space">
         <input type="text"  class="fadeIn second formInput" name="Relation" value={Relation} onChange={(e) => setRelation(e.target.value.toUpperCase())} required/>
         </div>
         <FormLabel text={"Dependent DOB"} />

         <div className="col-lg-4 space">
         <input type="Date"  class="fadeIn second formInput" name="Dep_DOB" value={Dep_DOB} onChange={(e) => setDep_DOB(e.target.value)} required/>
         </div>
         <FormLabel text={"Dependent Adhaar Card No."} />

         <div className="col-lg-4 space">
         <input type="number"  class="fadeIn second formInput" name="Dep_Adhaar" value={Dep_Adhaar} onChange={(e) => setDep_Adhaar(e.target.value)} required/>
         </div>
         <FormLabel text={"Dependent Qualification"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn second formInput" name="Dep_Qualification " value={Dep_Qualification} onChange={(e) => setDep_Qualification(e.target.value)} required/>
          </div>
          <FormLabel text={"Dependent Academic Year"} />

          <div className="col-lg-4 space">
          <input type="number"  class="fadeIn third formInput" name="Dep_Academic_Yr" value={Dep_Academic_Yr} onChange={(e) => setDep_Academic_Yr(e.target.value)} required/>
          </div>

          <FormLabel text={"Dependent Employment Status"} />
          <div className="col-lg-4 space">
          <input type="combobox"  class="fadeIn third formInput" name="Dep_Employment_Status" value={Dep_Employment_Status} onChange={(e) => setDep_Employment_Status(e.target.value)} required/>
          </div>

         <FormLabel text={"Dependent Marital Status"} />

          <div className="col-lg-4 space">
          <input type="text"  class="fadeIn third formInput" name="Dep_Marital_Status" value={Dep_Marital_Status} onChange={(e) => setDep_Marital_Status(e.target.value)} required/>
          </div>

</div>
</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/form6">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " type="submit">Next </button>
    </div>
    </form>
</div>
</div>
</div>


    )
}

export default Form7
*/}
