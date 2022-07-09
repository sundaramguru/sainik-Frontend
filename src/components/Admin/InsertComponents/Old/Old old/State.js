import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const State = () => {
    const [RSB_Name, setRSB_Name] = useState('');
    const [State_Surname, setState_Surname] = useState('');
    const [State, setState] = useState('');
    const [gRsb, setgRsb] = useState([]);
    const [fRsb, setfRsb] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
    getRsb();
    getfRsb();

    }, []);
    const axiosJWT = axios.create();

        const getRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/getRsb');
        setgRsb(response.data);
        }
        const getfRsb = async () => {
            const response = await axiosJWT.get('http://localhost:5000/F_State');
            setfRsb(response.data);
        }

    const StateS = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_state', {
                RSB_Name: RSB_Name,
                State_Surname:State_Surname,
                State:State

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

        <form onSubmit={StateS}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>State</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={RSB_Name} onChange={(e)=> setRSB_Name(e.target.value)} >
        <option >Select RSB Name</option>

             {gRsb.map((user, index) => (
             <option key={user.id}value={user.RSB_Name}>{user.RSB_Name}</option>
             ))}
        </select>
        </div>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="State"value={State} onChange={(e) => setState(e.target.value)} />

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="State_Surname"value={State_Surname} onChange={(e) => setState_Surname(e.target.value)} />

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
              <th>RSB_Id </th>
              <th>State_Surname</th>
              <th>State</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.RSB_Id}</td>
                  <td>{user.State_Surname}</td>
                  <td>{user.State}</td>

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

export default State
