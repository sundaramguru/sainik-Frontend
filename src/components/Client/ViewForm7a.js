import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
// import FormDisplay from "./Form0"


const ViewForm7a = () => {
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));
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
         getUsers();

    }, []);


    const axiosJWT = axios.create();

    const getUsers = async () => {
       const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/Form7',
          {
              params:{D_Service_No:sn}
          });
        setUsers(response.data);
    }

const Edit = async (e) => {
        e.preventDefault();
        try {
            console.log(Service_No);
            localStorage.setItem('V_Dep_Name',Dep_Name);
            localStorage.setItem('V_Relation',Relation);
            localStorage.setItem('V_Dep_DOB',Dep_DOB);
            localStorage.setItem('V_Dep_Adhaar',Dep_Adhaar);
            localStorage.setItem('V_Dep_Qualification',Dep_Qualification);
            localStorage.setItem('V_Dep_Academic_Yr',Dep_Academic_Yr);
            localStorage.setItem('V_Dep_Employment_Status',Dep_Employment_Status);
            localStorage.setItem('V_Dep_Marital_Status',Dep_Marital_Status);

            navigate("/viewForm7b");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }



    // const resubmit = async (e) => {
    //   e.preventDefault();
    //
    //         try {
    //           await axios.post('http://localhost:5000/resubmit',
    //           {
    //             Service_No:Service_No
    //           });
    //           alert('update Successfully Completed !!!');
    //
    //           navigate("/");
    //         } catch (error) {
    //             if (error.response) {
    //                 setMsg(error.response.data.msg);
    //             }
    //         }
    //     }
        const Resubmit = async (e) => {
            e.preventDefault();
            try {
                await axios.post('http://localhost:5000/resubmit', {
                    Service_No:Service_No

                });

     navigate("/");
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }





    return (
    <div className="center">
    <div class="wrapper fadeInDown">

   <form onSubmit={Resubmit} >
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}

<div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
<label className="header"> Details of Family Members</label>
</div>

<div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
 <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
 <label className="sn-mar ">{"Name :"}</label> {Name} &nbsp;<br/>
</div>
  {/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

    <div className="upperForm1Content">
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
                      }}>Edit </button></td>
                        </tr>
                     </tbody>


                ))}


           </span>


</div>
</div>
 </table>


</div>

    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>

     <button className=" btn" ><Link to="/ViewFormSpouseDoc">Back</Link> </button>

     <button className="btn my-2 my-sm-0 " type="submit">Finish </button>


    </div>
    </form>

</div>
</div>
)
}


export default ViewForm7a
