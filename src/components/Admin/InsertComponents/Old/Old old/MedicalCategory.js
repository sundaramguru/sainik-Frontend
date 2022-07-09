import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MedicalCategory = () => {
    const [Service, setService] = useState('');
    const [Medical_Category, setMedical_Category] = useState('');
    const [gService, setgService] = useState([]);
    const [fRsb, setfRsb] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    getService();
    getfRsb();
    }, []);
    const axiosJWT = axios.create();

        const getService = async () => {
        const response = await axiosJWT.get('http://localhost:5000/Service_D');
        setgService(response.data);
        }
        const getfRsb = async () => {
            const response = await axiosJWT.get('http://localhost:5000/F_MedicalCat');
            setfRsb(response.data);
        }


    const MedicalCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_medicalCategory', {
                Service: Service,
                Medical_Category:Medical_Category
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

        <form onSubmit={MedicalCategory}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Medical Category</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={Service} onChange={(e)=> setService(e.target.value)} >
        <option >Select Service Name</option>

             {gService.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Medical Category"value={Medical_Category} onChange={(e) => setMedical_Category(e.target.value)} />

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
              <th>Discharge_Med_Cat</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Service_Id}</td>
                  <td>{user.Discharge_Med_Cat}</td>

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

export default MedicalCategory
