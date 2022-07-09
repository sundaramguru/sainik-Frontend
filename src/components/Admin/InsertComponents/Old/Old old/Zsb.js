import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Zsb = () => {
    // const [ZSB_Id, setZSB_Id] = useState('');
    const [ZSB_Name, setZSB_Name] = useState('');
    const [ZSB_Surname, setZSB_Surname] = useState('');
    // const [RSB_Id, setRSB_Id] = useState('');
    const [RSB_Name, setRSB_Name] = useState('');
    const [gRsb, setgRsb] = useState([]);
    const [fZsb, setfZsb] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
    getRsb();
    getfZsb();
    }, []);
    const axiosJWT = axios.create();

        const getRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/getRsb');
        setgRsb(response.data);
        }

        const getfZsb = async () => {
            const response = await axiosJWT.get('http://localhost:5000/F_zsb');
            setfZsb(response.data);
        }


    const Zsb = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_zsb', {
                // ZSB_Id: ZSB_Id,
                ZSB_Name:ZSB_Name,
                ZSB_Surname:ZSB_Surname,
                // RSB_Id: RSB_Id
                RSB_Name:RSB_Name

            });

            setZSB_Name(() => "");
            setZSB_Surname(() => "");

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

        <form onSubmit={Zsb}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>ZSB</strong></h1>
        <div >
        <select id="login"className="fadeIn second textInput" value ={RSB_Name} onChange={(e)=> setRSB_Name(e.target.value)} >
<option>select RSB Name</option>
             {gRsb.map((user, index) => (
             <option key={user.id}value={user.RSB_Name}>{user.RSB_Name}</option>
             ))}
        </select>
        </div>

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="ZSB_Name"value={ZSB_Name} onChange={(e) => setZSB_Name(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="ZSB_Surname"value={ZSB_Surname} onChange={(e) => setZSB_Surname(e.target.value)} />
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
              <th>ZSB_Id </th>
              <th>ZSB_Name</th>
              <th>ZSB_Surname</th>
              <th>RSB_Id </th>

          </tr>
      </thead>
      <tbody>
          {fZsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.ZSB_Id}</td>
                  <td>{user.ZSB_Name}</td>
                  <td>{user.ZSB_Surname}</td>
                  <td>{user.RSB_Id}</td>

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

export default Zsb
