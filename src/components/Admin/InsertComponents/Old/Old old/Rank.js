import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rank = () => {
    const [Rank_Category, setRank_Category] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [Rank_Name, setRank_Name] = useState('');

    const [rank_Category_Id, setRank_Category_Id] = useState([]);
    const [service_Id, setService_Id] = useState([]);

    useEffect(() => {
    getRank_Category_Id();
    getService_Id();
    }, []);

const axiosJWT = axios.create();

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const getService_Id = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Service_D');
    setService_Id(response.data);
    }
    const getRank_Category_Id = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Rank_Category_D');
    setRank_Category_Id(response.data);
    }


    const Rank = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_rank', {
                Service_Name:Service_Name,
                Rank_Category:Rank_Category,
                Rank:Rank_Name
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

        <form onSubmit={Rank}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Rank</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={Service_Name} onChange={(e)=> setService_Name(e.target.value)} >
        <option >Select Service Name</option>
             {service_Id.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>
        <div >
        <select id="login"className="fadeIn second textInput" value ={Rank_Category} onChange={(e)=> setRank_Category(e.target.value)} >
        <option >Select Rank Category</option>
             {rank_Category_Id.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Rank Name"value={Rank_Name} onChange={(e) => setRank_Name(e.target.value)} />

          <input type="submit" class="fadeIn fourth submitInput" value="Enter" />
        </form>
</div>
      </div>
</div>
    )
}

export default Rank
{/*      <div className="col-lg-7">

      <div class="col-md-9 mb-4">

    <div class="card example-1 scrollbar-ripe-malinka">
      <div class="card-body">
      <div className="row">


           <table className="table is-striped is-fullwidth">
      <thead>
          <tr>
              <th>Sl.No</th>
              <th>Corps_Name </th>
              <th>Record_Office_Name</th>
              <th>Record_Office_Location</th>
              <th>Dist_Surname</th>
              <th>Record_Office_Mail</th>
              <th>Record_Office_Mobile</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Corps_Name}</td>
                  <td>{user.Record_Office_Name}</td>
                  <td>{user.Record_Office_Location}</td>
                  <td>{user.Dist_Surname}</td>
                  <td>{user.Record_Office_Mail}</td>
                  <td>{user.Record_Office_Mobile}</td>

              </tr>
          ))}
      </tbody>
      </table>
      </div>
        </div>
    </div>
  </div>
      </div>
*/}
