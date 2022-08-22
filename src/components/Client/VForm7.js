import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";


const VForm7 = () => {
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('V_Service_No'));
    const [Name, setName] = useState(localStorage.getItem('V_Name'));
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

   useEffect(() => {
         getUsers();
          }, []);


const axiosJWT = axios.create();


// GET DEPAENDENT DETAILS FROM DEP PAGE


    const getUsers = async () => {
       const sn = localStorage.getItem('V_Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/Form7`,
          {
              params:{D_Service_No:sn}
          });
        setUsers(response.data);
    }


// GET DEPAENDENT DETAILS FROM DEP PAGE

// GET DEPAENDENT DETAILS  FOR EDIT

    const VForm7a = async (e) => {
        e.preventDefault();
        try {

            localStorage.setItem('V_Dep_Name`,Dep_Name);
            localStorage.setItem('V_Relation`,Relation);
            localStorage.setItem('V_Dep_DOB`,Dep_DOB);
            localStorage.setItem('V_Dep_Adhaar`,Dep_Adhaar);
            localStorage.setItem('V_Dep_Qualification`,Dep_Qualification);
            localStorage.setItem('V_Dep_Academic_Yr`,Dep_Academic_Yr);
            localStorage.setItem('V_Dep_Employment_Status`,Dep_Employment_Status);
            localStorage.setItem('V_Dep_Marital_Status`,Dep_Marital_Status);

            navigate("/vform7a");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        } }

// GET DEPAENDENT DETAILS  FOR EDIT


    return (
    <div className="center">
    <div className="wrapper fadeInDown">
    <div className="footer-body">


   <form >
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}
 <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Dependent Details</label>

     <div className = "left-align dis">
      <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
      <label className="sn-mar ">{"Name :"}</label>{Name}<br/>
    </div>

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
                        <button className="btn my-2 my-sm-0 btn-primary" onClick={VForm7a}
                        onMouseEnter={function EditMouseHover(){

                        setDep_Name(user.Dep_Name);
                        setRelation(user.Relation);
                        setDep_DOB(user.Dep_DOB);
                        setDep_Adhaar(user.Dep_Adhaar);
                        setDep_Qualification(user.Dep_Qualification);
                        setDep_Academic_Yr(user.Dep_Academic_Yr);
                        setDep_Employment_Status(user.Dep_Employment_Status);
                        setDep_Marital_Status(user.Dep_Marital_Status);
                        }}>View</button></td>
                        </tr>
                     </tbody>
                 ))}
             </span>
        </div>
      </div>
  </table>

</div>

{/*     -----------------------------------------  FOOTER  SECTION -------------------------------------------------  */}


    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn my-2 my-sm-0" ><Link to="/vs_doc">Back</Link> </button>
    <button className="btn my-2 my-sm-0 " ><Link to="/formstart">Finish</Link> </button>

    </div>
{/*     -----------------------------------------  FOOTER  SECTION -------------------------------------------------  */}

    </form>

</div>
</div>
</div>

)
}


export default VForm7
