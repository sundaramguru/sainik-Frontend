import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel, {
  StarLabel,
  FormLabelS,
  FormLabel4,
  FormLabels,
} from "../../../view/FormLabel";
import FormInput from "../../../view/FormInput";

const AdminForm7a = () => {
  const [Service_No, setService_No] = useState(
    localStorage.getItem("Service_No")
  );
  const [Name, setName] = useState("");
  const [Dep_Name, setDep_Name] = useState(localStorage.getItem("A_Dep_Name"));
  const [Relation, setRelation] = useState(localStorage.getItem("A_Relation"));
  const [Relate, setRelate] = useState("");
  const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem("A_Dep_DOB"));
  const [Dep_Adhaar, setDep_Adhaar] = useState(
    localStorage.getItem("A_Dep_Adhaar")
  );
  const [Dep_Qualification, setDep_Qualification] = useState(
    localStorage.getItem("A_Dep_Qualification")
  );
  const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(
    localStorage.getItem("A_Dep_Academic_Yr")
  );
  const [Dep_Employment_Status, setDep_Employment_Status] = useState(
    localStorage.getItem("A_Dep_Employment_Status")
  );
  const [Dep_Marital_Status, setDep_Marital_Status] = useState(
    localStorage.getItem("A_Dep_Marital_Status")
  );
  const [dep, setdep] = useState([]);
  const [Marriage_Date, setMarriage_Date] = useState(
    localStorage.getItem("Marriage_Date")
  );
  const [disabled, setdisabled] = useState("");

  useEffect(() => {
    getName();
    getdep();
  }, []);

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const axiosJWT = axios.create();
  const getName = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/getName`,
      {
        params: {
          Service_No: Service_No,
        },
      }
    );
    setName(response.data);
  };
  const getdep = async () => {
    const sn = localStorage.getItem("A_Dep_Name");
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/form8dep`,
      {
        params: { D_Service_No: sn },
      }
    );
    setdep(response.data);
  };

  return (
    <div className="center">
      <div class="wrapper fadeInDown">
        <div id="form1Content">
          <form>
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "#008E89" }}
            >
              <label className="header">Details of Family Members</label>
              <div className="left-align dis">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="sn-mar">{"Service No :"}</label> {Service_No}{" "}
                &nbsp;
                <label className="sn-mar ">{"Name :"}</label>
                {Name}
                <br />
              </div>
            </div>
            <div className="upperForm1Content">
              <div className="row">
                <FormLabels text={"Dependent Name"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="Dep"
                    value={Dep_Name}
                  />
                </div>

                <FormLabels text={"Relation"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="Relation "
                    value={Relation}
                  />
                </div>
                <FormLabels text={"Dependent DOB"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="DOB"
                    value={Dep_DOB}
                    onChange={(e) => setDep_DOB(e.target.value)}
                  />
                </div>

                <FormLabels text={"Dependent Adhaar Card No."} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="DOB"
                    value={Dep_Adhaar}
                  />
                </div>

                <FormLabels text={"Dependent Qualification"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="DOB"
                    value={Dep_Qualification}
                  />
                </div>

                <FormLabels text={"Dependent Academic Year"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="DOB"
                    value={Dep_Academic_Yr}
                  />
                </div>

                <FormLabels text={"Dependent Employment Status"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="DOB"
                    value={Dep_Employment_Status}
                  />
                </div>

                <FormLabels text={"Dependent Marital Status"} />
                <div className="col-lg-4 space">
                  <input
                    type="text"
                    className="fadeIn second formInput"
                    disabled
                    name="Dep_Marital_Status"
                    value={Dep_Marital_Status}
                  />
                </div>
              </div>
            </div>
            <div
              className="text-center text-dark p-3 foot"
              style={{ backgroundColor: "#DBE6FD" }}
            >
              <button className=" btn">
                <Link to="/AdminForm7">Back</Link>{" "}
              </button>
              <button className=" btn">
                <Link to="/AD_DocForm">Next</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminForm7a;

{
  /*import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabels from "../../../view/FormLabels";
import FormInput from "../../../view/FormInput";
import Corrections from "../Corrections";
import emailjs from 'emailjs-com';


const AdminForm7a = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [Service_No, setService_No] = useState('555');
    const [Name, setName] = useState(localStorage.getItem('A_Name'));
    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');
    const [Mail_Id, setMail_Id] = useState('');
    const [Dep_Name, setDep_Name] = useState(localStorage.getItem('A_Dep_Name'));
    const [Relation, setRelation] = useState(localStorage.getItem('A_Relation'));
    const [Relate, setRelate] = useState('');
    const [Dep_DOB, setDep_DOB] = useState(localStorage.getItem('A_Dep_DOB'));
    const [Dep_Adhaar, setDep_Adhaar] = useState(localStorage.getItem('A_Dep_Adhaar'));
    const [Dep_Qualification, setDep_Qualification] = useState(localStorage.getItem('A_Dep_Qualification'));
    const [Dep_Academic_Yr, setDep_Academic_Yr] = useState(localStorage.getItem('A_Dep_Academic_Yr'));
    const [Dep_Employment_Status, setDep_Employment_Status] = useState(localStorage.getItem('A_Dep_Employment_Status'));
    const [Dep_Marital_Status, setDep_Marital_Status] = useState(localStorage.getItem('A_Dep_Marital_Status'));
    const [dep, setdep] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      // getUsers();
      // getMail();
       getdep();
    }, []);


    const axiosJWT = axios.create();

    // const sn = localStorage.getItem('A_Service_No')

    // const getUsers = async () => {
    //      const sn = localStorage.getItem('A_Service_No')
    //     const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/adminform7`,{
    //       params:{
    //         A_Service_No: '555'
    //       }
    //     });
    //     setUsers(response.data);
    // }

     const getdep = async () => {
      const sn=localStorage.getItem('A_Dep_Name');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/form8dep`,
          {
              params:{D_Service_No:sn}
          });
        setdep(response.data);
    }



    return (

      <div className="footer-body">
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="form1Content" >
      <form >

      <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
      <label className="header">Dependent Details</label>
      </div>
         <div className = "right-align dis">
       <label className="sn-mar">{"Service No :"}</label> {Service_No} &nbsp;
       <label className="sn-mar ">{"Name :"}</label>{Name}&nbsp;<br/>
       </div>

      <div className="upperForm1Content">

      {users.map((user, index) => (

      <div className="row"key={user.id}>

      <FormLabels text={"Dependent Name"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Name} />
      </div>

      <FormLabels text={"Relation"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Relation} />
      </div>

      <FormLabels text={"Dependent DOB"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_DOB} />
      </div>

      <FormLabels text={"Dependent Adhaar No "} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Adhaar} />
      </div>

      <FormLabels text={"Dependent Qualification"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Qualification} />
      </div>

      <FormLabels text={"Dependent Academic Yr"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Academic_Yr} />
      </div>

      <FormLabels text={"Dependent Employment Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Employment_Status} />
      </div>

      <FormLabels text={"Dependent Marital Status"} />
      <div className="col-lg-4 space">
      <FormInput value={user.Dep_Marital_Status} />
      </div>

      </div>
    ))}
  </div>


    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/adminform7">Back</Link> </button>



 {/* <input type="email"  class="  textInput"   autocomplete ="off"  name="Mail_Id"  value={Mail_Id} onChange={(e) => setMail_Id(e.target.value)} />


    {
        (() => {
            if(ad == "Clerk") {
                    return (


                      <button id="verified"className="btn my-2 my-sm-0  " type="submit">Verify </button>

                    )
                } else if (ad == "Superintendent") {
                    return (

                      <button id="verified"onClick={Recommend}className="btn my-2 my-sm-0  "  type="submit">Recommend </button>
                    )
                } else {
                    return (

                      <button id="verified"className="btn my-2 my-sm-0 view-align "  type="submit">Approve </button>

                    )
                }
        })()
    }

*/
}

{
  /*}
    </div>
    </form>

</div>
</div>
<Corrections/>


</div>
</div>
    )
}

export default AdminForm7a*/
}
