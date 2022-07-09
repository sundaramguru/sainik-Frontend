import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Trade = () => {
    const [Service, setService] = useState('');
    const [gService, setgService] = useState([]);

    const [Group_Name, setGroup_Name] = useState('');

    const [Trade_Name, setTrade_Name] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [fRsb, setfRsb] = useState([]);

    useEffect(() => {

        getfRsb();
        getService();
    }, []);

    const axiosJWT = axios.create();
    const getService = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Service_D');
    setgService(response.data);
    }
    const getfRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_Trade');
        setfRsb(response.data);
    }

    const Trade = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_trade', {
                Service_Id: Service,
                Group_Name:Group_Name,
                Trade_Name:Trade_Name

            });
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

        <form onSubmit={Trade}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Trade</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={Service} onChange={(e)=> setService(e.target.value)} >
        <option >Select Service Name</option>

             {gService.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Group_Name"value={Group_Name} onChange={(e) => setGroup_Name(e.target.value.toUpperCase())} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Trade_Name"value={Trade_Name} onChange={(e) => setTrade_Name(e.target.value)} />
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
              <th>Service_Id </th>
              <th>Group_Name</th>
              <th>Trade_Name</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Service_Id}</td>
                  <td>{user.Group_Name}</td>
                  <td>{user.Trade_Name}</td>

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

export default Trade
