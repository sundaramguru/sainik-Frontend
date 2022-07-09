import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecordOfficeArmy = () => {
    const [Corps_Name, setCorps_Name] = useState('');
    const [Record_Office_Name, setRecord_Office_Name] = useState('');
    const [Location, setLocation] = useState('');
    const [Dist, setDist] = useState('');
    const [Mail, setMail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [corp, setCorp] = useState([]);
    const [district, setDistrict] = useState([]);
    const [fRsb, setfRsb] = useState([]);

    useEffect(() => {
    getCorp();
    getDistrict();
    getfRsb();
    }, []);

const axiosJWT = axios.create();

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const getCorp = async () => {
    const response = await axiosJWT.get('http://localhost:5000/corp_D');
    setCorp(response.data);
    }
    const getDistrict = async () => {
    const response = await axiosJWT.get('http://localhost:5000/dist_D');
    setDistrict(response.data);
    }
    const getfRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_RecordOfficeArmy');
        setfRsb(response.data);
    }


    const RecordOfficeArmy = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_recordoffice', {
                Corps_Name: Corps_Name,
                Record_Office_Name:Record_Office_Name,
                Location:Location,
                Dist: Dist,
                Mail:Mail,
                Mobile:Mobile
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

        <form onSubmit={RecordOfficeArmy}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Army Record Office</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={Corps_Name} onChange={(e)=> setCorps_Name(e.target.value)} >
        <option >Select Corps Name</option>
             {corp.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Record_Office_Name"value={Record_Office_Name} onChange={(e) => setRecord_Office_Name(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Location"value={Location} onChange={(e) => setLocation(e.target.value)} />
        <div >
        <select id="login"className="fadeIn second textInput" value ={Dist} onChange={(e)=> setDist(e.target.value)} >
        <option >Select District Name</option>
             {district.map((user, index) => (
             <option key={user.id}value={user.District}>{user.District}</option>
             ))}
        </select>
        </div>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Mail"value={Mail} onChange={(e) => setMail(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Mobile"value={Mobile} onChange={(e) => setMobile(e.target.value)} />

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
</div>
    )
}

export default RecordOfficeArmy
