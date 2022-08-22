import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";


const ViewFormUEa = () => {

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Name, setName] = useState(localStorage.getItem('Name'));

    const [ESM_No, setESM_No] = useState('');
    const [Addi_Course1, setAddi_Course1] = useState('');
    const [Addi_Course2, setAddi_Course2] = useState('');
    const [Addi_Course3, setAddi_Course3] = useState('');
    const [Addi_Course4, setAddi_Course4] = useState('');
    const [Civil_Qualification, setCivil_Qualification] = useState('');
    const [Age, setAge] = useState('');
    const [Trade_Name, setTrade_Name] = useState('');
    const [Trade_Code, setTrade_Code] = useState('');
    const [Equi_Test, setEqui_Test] = useState('');

     const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      getUsers();


    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const sn = localStorage.getItem('V_Service_No')
        const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/adminformue`,{
          params:{
          A_Service_No: sn
          }
        });
        setUsers(response.data);
    }

    // const getTrades  = async () => {
    //         const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getTrades`,{
    //
    //           params:{
    //             Service_No: Service_No
    //           }
    //         });
    //         setUsers(response.data);
    //
    //       }


          // const getCivilQualification  = async () => {
          //         const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getCivilQualification`,{
          //
          //           params:{
          //             Service_No: Service_No
          //           }
          //         });
          //         setUsers(response.data);
          //
          //       }


    const Edit1 = async (e) => {
        e.preventDefault();
        try {
            // console.log(Service_No);
                localStorage.setItem('V_ESM_No`,ESM_No);
                localStorage.setItem('V_Addi_Course1`,Addi_Course1);
                localStorage.setItem('V_Addi_Course2`,Addi_Course2);
                localStorage.setItem('V_Addi_Course3`,Addi_Course3);
                localStorage.setItem('V_Addi_Course4`,Addi_Course4);
                localStorage.setItem('V_Civil_Qualification`,Civil_Qualification);
                localStorage.setItem('V_Age`,Age);
                localStorage.setItem('V_Trade_Name`,Trade_Name);
                localStorage.setItem('V_Trade_Code`,Trade_Code);
                localStorage.setItem('V_Equi_Test`,Equi_Test);

            navigate("/viewFormueb");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


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

      {users.map((user, index) => (
              <div className="row"key={user.id}>
{/*---------------------------------------------GET KEY ----------------------------------------*/}

                  < FormLabels text={"Age"} />
                  <div className="col-lg-4 space">
                  <input type="text" className="fadeIn third formInput" value={user.Age}/>
                  </div>



                                    <FormLabels text={"Civil Qualification"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.vCivil_Qualification}/>
                                    </div>

                                    <FormLabels text={"Trade Name "} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.vTrade}/>
                                    </div>





                                    <FormLabels text={"Additional Course 1"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Addi_Course1}/>
                                    </div>

                                    <FormLabels text={"Additional Course 2"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Addi_Course2}/>
                                    </div>

                                    <FormLabels text={"Additional Course 3"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Addi_Course3}/>
                                    </div>

                                    <FormLabels text={"Additional Course 4"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Addi_Course4}/>
                                    </div>


                                    <FormLabels text={"Equivalent test Passed "} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Equi_Test}/>
                                    </div>

                                    <FormLabels text={"Trade Code"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.Trade_Code}/>
                                    </div>

                                    <FormLabels text={"ESM No"} />
                                    <div className="col-lg-4 space">
                                    <input type="text" className="fadeIn third formInput" value={user.ESM_No}/>
                                    </div>


{/*---------------------------------------------GET KEY ----------------------------------------*/}


{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}
    <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
    <button className=" btn" ><Link to="/">Back</Link> </button>
    {/* <button className="btn my-2 my-sm-0 " ><Link to="/viewform1b">Update</Link> </button>*/}
     <button className="btn my-2 my-sm-0 " onClick={Edit1} onMouseEnter={function EditMouseHover(){

     setAge(user.Age)
     setESM_No(user.ESM_No)
     setAddi_Course1(user.Addi_Course1)
     setAddi_Course2(user.Addi_Course2)
     setAddi_Course3(user.Addi_Course3)
     setAddi_Course4(user.Addi_Course4)
     setCivil_Qualification(user.vCivil_Qualification)
     setTrade_Name(user.vTrade)
     setTrade_Code(user.Trade_Code)
     setEqui_Test(user.Equi_Test)

   }}>Edit </button>


    </div>

    </div>
  ))}
{/*---------------------------------------------GET KEY ----------------------------------------*/}


</div>
{/* ------------------------------------------------- FOOTER ----------------------------------------------------------*/}

</form>

</div>
</div>


</div>
</div>
    )
}

export default ViewFormUEa
