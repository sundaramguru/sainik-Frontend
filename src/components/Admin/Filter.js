import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Filter = () => {
    // const [RSB_Id, setRSB_Id] = useState('');
    const [Name, setName] = useState('');
    const [Attribute, setAttribute] = useState('');
    const [Sum, setSum] = useState(0);

    const [fName, setfName] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {

        getfName();
    }, []);

    const Rsb = async (e) => {
      localStorage.setItem('Name',Name)
      localStorage.setItem('Attribute',Attribute)

    }
    const axiosJWT = axios.create();

    const getfName = async () => {
      //const name=Name
      //const attribute=Attribute

      const name = localStorage.getItem('Name')
      const attribute = localStorage.getItem('Attribute')
      // const query =  `where:{` {Attribute} `:`{Name}`}`
        const response = await axiosJWT.get('http://localhost:5000/filter',{

          params:{
            Name: name,
            Attribute:attribute,
            // Query: query
          }
        });
        setfName(response.data);
    }


    return (
      <div className="center">
      <div className="row">

      <div class="wrapper col-lg-5">
      <div id="formContent">

        <form onSubmit={Rsb}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Filter</strong></h1>

        <input type="text" id="login" class=" textInput"  placeholder="attribute"value={Attribute} onChange={(e) => setAttribute(e.target.value)} />
        <input type="text" id="login" class=" textInput"  placeholder="Name"value={Name} onChange={(e) => setName(e.target.value)} />


          <input type="submit" class=" submitInput" value="Enter" />
        </form>

      </div>
      </div>
      <div className="col-lg-12 ">

      <div class="col-md-15 mb-6 ">

    <div class="card example-2 scrollbar-ripe-malinka">
      <div class="card-body ">
      <div className="row  ">


           <table className="table is-striped is-fullwidth ">
      <thead>
      <h1>{Sum}</h1>
          <tr>
              <th>Sl.No</th>
              <th>Service_No </th>
              <th>Service_Name</th>
              <th>Corps_Name</th>
              <th>Record_Office_Name</th>
              <th>Group_Name</th>
              <th>Trade_Name</th>
              <th>Rank_Name</th>
              <th>Rank_Category</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Enroll_Date</th>
              <th>World_War2</th>
              <th>Opt_Attend</th>
              <th>Deco</th>

              <th>Unit_Last_Served</th>
              <th>Discharge_Date</th>
              <th>Discharge_Reason</th>
              <th>Discharge_Med_Cat</th>
              <th>Discharge_Character</th>
              <th>Discharge_Book_No</th>
              <th>If_Pensioner</th>
              <th>PPO_No</th>
              <th>Pension_Sanctioned</th>
              <th>If_Sanctioned_Dis_Pension</th>
              <th>Disability_Pension</th>
              <th>Disability_Percentage</th>
              <th>Pension_AC_No</th>
              <th>Bank_Name</th>
              <th>Branch</th>
              <th>IFSC</th>

              <th>Religion</th>
              <th>Caste_Category</th>
              <th>Pincode</th>
              <th>State</th>
              <th>District</th>
              <th>Taluk_Name</th>
              <th>City/Village</th>
              <th>Locality/Area</th>
              <th>Street</th>
              <th>House_No</th>
              <th>House_Name</th>
              <th>Police_Station</th>
              <th>Tele_No</th>
              <th>Permanent_Pincode</th>
              <th>Permanent_State</th>
              <th>Permanent_District</th>
              <th>Permanent_Taluk_Name</th>
              <th>Permanent_City/Village</th>
              <th>Permanent_Locality/Area</th>
              <th>Permanent_Street</th>
              <th>Permanent_House_No</th>
              <th>Permanent_House_Name</th>
              <th>Permanent_Police_Station</th>

              <th>Civil_Qualification</th>
              <th>Additional_Course</th>
              <th>Equivalent_Test_Passed</th>
              <th>Civil_Employment_Status</th>
              <th>Department</th>
              <th>Sector</th>
              <th>Present_Designation</th>
              <th>Employer</th>
              <th>Monthly_Income</th>
              <th>Official_No</th>
              <th>Designation_while_Retirement</th>
              <th>Retirement_Date</th>
              <th>Civil_PPO_No</th>

              <th>Marital_Status</th>
              <th>Marriage_Date</th>
              <th>Spouse_Name</th>
              <th>Spouse_Relation</th>
              <th>Spouse_DOB</th>
              <th>Spouse_Qualification</th>
              <th>Spouse_Employment_Status</th>
              <th>Spouse_Employment_Profession</th>
              <th>Spouse_Retirement_Date</th>
              <th>Spouse_Department</th>
              <th>Spouse_Sector</th>
              <th>Spouse_Present_Designation</th>
              <th>Spouse_Employer</th>
              <th>Spouse_Monthly_Income</th>
              <th>Spouse_Official_No</th>
              <th>Spouse_Designation_Retirement</th>
              <th>Spouse_Retirement_Date</th>
              <th>Spouse_Civil_PPO_No</th>


          </tr>
      </thead>
      <tbody>
          {fName.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Service_No}</td>
                  <td>{user.Service_Name}</td>
                  <td>{user.Corps_Name}</td>
                  <td>{user.Record_Office_Name}</td>
                  <td>{user.Group_Name}</td>
                  <td>{user.Trade_Name}</td>
                  <td>{user.Rank_Name}</td>
                  <td>{user.Rank_Category}</td>
                  <td>{user.Name}</td>
                  <td>{user.Gender}</td>
                  <td>{user.DOB}</td>
                  <td>{user.Enroll_Date}</td>
                  <td>{user.World_War2}</td>
                  <td>{user.Opt_Attend}</td>
                  <td>{user.Deco}</td>

                  <td>{user.Unit_Last_Served}</td>
                  <td>{user.Discharge_Date}</td>
                  <td>{user.Discharge_Reason}</td>
                  <td>{user.Discharge_Med_Cat}</td>
                  <td>{user.Discharge_Character}</td>
                  <td>{user.Discharge_Book_No}</td>
                  <td>{user.If_Pensioner}</td>
                  <td>{user.PPO_No}</td>
                  <td>{user.Pension_Sanctioned}</td>
                  <td>{user.Present_Pension}</td>
                  <td>{user.If_Sanctioned_Dis_Pension}</td>
                  <td>{user.Disability_Pension}</td>
                  <td>{user.Disability_Percentage}</td>
                  <td>{user.Pension_AC_No}</td>
                  <td>{user.Bank_Name}</td>
                  <td>{user.Branch}</td>
                  <td>{user.IFSC}</td>

                  <td>{user.Religion}</td>
                  <td>{user.Caste_Category}</td>
                  <td>{user.Pincode}</td>
                  <td>{user.State}</td>
                  <td>{user.District}</td>
                  <td>{user.Taluk_Name}</td>
                  <td>{user.City_Village}</td>
                  <td>{user.Locality_Area}</td>
                  <td>{user.Street}</td>
                  <td>{user.House_No}</td>
                  <td>{user.House_Name}</td>
                  <td>{user.Police_Station}</td>
                  <td>{user.P_Pincode}</td>
                  <td>{user.P_State}</td>
                  <td>{user.P_District}</td>
                  <td>{user.P_Taluk_Name}</td>
                  <td>{user.P_City_Village}</td>
                  <td>{user.P_Locality_Area}</td>
                  <td>{user.P_Street}</td>
                  <td>{user.P_House_No}</td>
                  <td>{user.P_House_Name}</td>
                  <td>{user.P_Police_Station}</td>

                  <td>{user.Civil_Qualification}</td>
                  <td>{user.Addi_Course}</td>
                  <td>{user.Equi_Test}</td>
                  <td>{user.Civil_Emp_Status}</td>
                  <td>{user.Dept}</td>
                  <td>{user.Sector}</td>
                  <td>{user.Pres_Desg}</td>
                  <td>{user.Employer}</td>
                  <td>{user.Month_Income}</td>
                  <td>{user.Official_No}</td>
                  <td>{user.Desg_Retire}</td>
                  <td>{user.Retire_Date}</td>
                  <td>{user.Civil_PPO_No}</td>

                  <td>{user.Marital_Status}</td>
                  <td>{user.Marriage_Date}</td>
                  <td>{user.Spouse_Name}</td>
                  <td>{user.Spouse_Relation}</td>
                  <td>{user.Spouse_DOB}</td>
                  <td>{user.Spouse_Qualification}</td>
                  <td>{user.Spouse_Emp_Status}</td>
                  <td>{user.Spouse_Emp_Profession}</td>
                  <td>{user.Spouse_Retirement_Date}</td>
                  <td>{user.Spouse_Dept}</td>
                  <td>{user.Spouse_Sector}</td>
                  <td>{user.Spouse_Pres_Desg}</td>
                  <td>{user.Spouse_Employer}</td>
                  <td>{user.Spouse_Month_Income}</td>
                  <td>{user.Spouse_Official_No}</td>
                  <td>{user.Spouse_Desg_Retire}</td>
                  <td>{user.Spouse_Retire_Date}</td>
                  <td>{user.Spouse_Civil_PPO_No}</td>



{/*{() => setSum(Sum+1)}*/}

              </tr>
          ))}
      </tbody>
      </table>
      </div>
        </div>
    </div>

  </div>

      </div>
      </div>

</div>
    )
}

export default Filter
