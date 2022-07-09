import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const District = () => {
    const [ZSB_Name, setZSB_Name] = useState('');
    const [State, setState] = useState('');
    const [Dist, setDist] = useState('');
    const [Dist_Code, setDist_Code] = useState('');
    const [gZsb, setgZsb] = useState([]);
    const [gState, setgState] = useState([]);
    const [fdist, setfdist] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
    getZsb();
    getState();
    getfdist();

    }, []);
    const axiosJWT = axios.create();

        const getZsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/getZsb');
        setgZsb(response.data);
        }
        const getState = async () => {
        const response = await axiosJWT.get('http://localhost:5000/state_D');
        setgState(response.data);
        }
        const getfdist = async () => {
            const response = await axiosJWT.get('http://localhost:5000/F_District');
            setfdist(response.data);
        }


    const District = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_district', {
                ZSB_Name: ZSB_Name,
                State:State,
                Dist:Dist,
                Dist_Code: Dist_Code

            });
            // setItem(() => "");
            //setValue(() => "");

       //     navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
      <div className="center">
      <div class="wrapper fadeInDown col-lg-5">
      <div id="formContent">

        <form onSubmit={District}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>District</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={ZSB_Name} onChange={(e)=> setZSB_Name(e.target.value)} >
        <option >Select ZSB Name</option>

             {gZsb.map((user, index) => (

             <option key={user.id}value={user.ZSB_Name}>{user.ZSB_Name}</option>
             ))}
        </select>
        </div>
        <div >
        <select id="login"className="fadeIn second textInput" value ={State} onChange={(e)=> setState(e.target.value)} >
        <option >Select State Name</option>

             {gState.map((user, index) => (

             <option key={user.id}value={user.State}>{user.State}</option>
             ))}
        </select>
        </div>         <input type="text" id="login" class="fadeIn second textInput"  placeholder="District"value={Dist} onChange={(e) => setDist(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="District Code"value={Dist_Code} onChange={(e) => setDist_Code(e.target.value)} />

          <input type="submit" class="fadeIn fourth submitInput" value="Enter" />
        </form>

      </div>
      </div>
      <div className="col-lg-7">

      <div class="col-md-9 mb-4">

    <div class="card example-1 scrollbar-ripe-malinka">
      <div class="card-body">
      <div className="row">


           <table className="table is-striped is-fullwidth">
      <thead>
          <tr>
              <th>Sl.No</th>
              <th>Dist_Surname </th>
              <th>District</th>
              <th>State_Surname</th>
              <th>ZSB_Id</th>

          </tr>
      </thead>
      <tbody>
          {fdist.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Dist_Surname}</td>
                  <td>{user.District}</td>
                  <td>{user.State_Surname}</td>
                  <td>{user.ZSB_Id}</td>

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
    )
}

export default District
