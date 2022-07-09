import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rsb = () => {
    // const [RSB_Id, setRSB_Id] = useState('');
    const [RSB_Name, setRSB_Name] = useState('');
    const [RSB_Surname, setRSB_Surname] = useState('');
    const [fRsb, setfRsb] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [message, setmessage] = useState('');


    useEffect(() => {

        getfRsb();
    //    alertmessage();
    }, []);

    const Rsb = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_rsb', {
                // RSB_Id: RSB_Id,
                RSB_Name:RSB_Name,
                RSB_Surname:RSB_Surname
            });
            setRSB_Name(() => "");
            setRSB_Surname(() => "");

       //     navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const axiosJWT = axios.create();

    const getfRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_rsb');
        setfRsb(response.data);
    }

// const alertmessage = async () => {
//   if(RSB_Name === '' && RSB_Surname ==='' ){
//     setmessage('Please Enter the Fields')
//   }
//   else if(RSB_Name === ''){
//     setmessage('Please Enter the RSB Field')
//
//   }
//   else if(RSB_Surname === ''){
//     setmessage('Please Enter the RSB Surname Field')
//
//   }
//   }
//
//
//     const successmsg = async () => {
//       if(RSB_Name !== '' && RSB_Surname !=='' ){
//         setmessage('RSB Inserted')
//       }
//   }



    return (
      <div className="center">
      <div className="row">

      <div class="wrapper fadeInDown col-lg-5">
      <div id="formContent">

        <form onSubmit={Rsb}><br/><br/>
        <h1 className='insert-pad'><strong>RSB</strong></h1><br/>
        <span style={{  color: 'red',}}>{message}</span><br/>
        <span style={{  color: 'red',}}>{msg}</span><br/>

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="RSB_Name"value={RSB_Name} onChange={(e) => setRSB_Name(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="RSB_Surname"value={RSB_Surname} onChange={(e) => setRSB_Surname(e.target.value)} />


          <input type="submit" class="fadeIn fourth submitInput" value="Enter"  />
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
              <th>RSB_Name</th>
              <th>RSB_Surname</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.RSB_Id}</td>
                  <td>{user.RSB_Name}</td>
                  <td>{user.RSB_Surname}</td>

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

export default Rsb
