import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ESM_No = () => {
    const [Service_No, setService_no] = useState(localStorage.getItem('Service_No'));
    const [ESM, setESM] = useState('');
    const [FullESM, setFullESM] = useState('');

    const [P_ESM, setP_ESM] = useState('');
    const [users, setUsers] = useState('');
    const [ids, setIds] = useState('');
    const [Reg_Type, setReg_Type] = useState('');
    const [Type, setType] = useState('');
    const [RT, setRT] = useState('');

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
      getUsers();
      getIds();
      getReg_Type();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
      const response = await axiosJWT.get('http://localhost:5000/Prev_ESM');
      setUsers(response.data);
  }
  const getIds = async () => {
      const response = await axiosJWT.get('http://localhost:5000/ZR',{
        params:{ALogin_S:localStorage.getItem("ALogin_S")}
      });
      setIds(response.data);
      setService_no(ids[0]);
      console.log(ids);
  }
    const Auth = async (e) => {
        e.preventDefault();
        try {
          const sn = localStorage.getItem('A_Service_No')

            await axios.post('http://localhost:5000/ESM_No', {

                Service_No: sn,
                ESM_No: a
            });
            await axios.post('http://localhost:5000/approve', {
                Service_No:sn
            });
            navigate("/superDash");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const getReg_Type  = async () => {
           const response = await axiosJWT.get('http://localhost:5000/getReg_Type',{

             params:{
               Service_No: Service_No
             }
           });
           setReg_Type(response.data);
           // console.log(Reg_Type);
           // if(Reg_Type == 'ESM'){
           //   setType('E')
           // }else if(Reg_Type == 'Widow'){
           //   setType('W')
           // }

         }

         const REG = ['ESM','W'];

var a ='' .concat(ids[0],'-',ids[1],'-',ESM,'/',Reg_Type)
    return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>

        <form onSubmit={Auth}>
        <p className="has-text-centered">{msg}</p>
          <input type="text" id="login" class="fadeIn second textInput" name="ESM" placeholder="Service Number"value={a}  onChange={(e) => setFullESM(e.target.value)} />

          {/*}<select  className="col-lg-9 dropdown_align"  onChange={(e) => setRT(e.target.value)} required>
          <option value="" selected disabled>--SUFFIX--</option>
          {REG.map(c => <option key={c}>{c}</option>)}
          </select>
*/}
          <input type="number" class="fadeIn third textInput" name="login" placeholder="ESM"value={ESM} onChange={(e) => setESM(e.target.value)} />
        {/*  <input type="text" class="fadeIn third textInput" name="login" value={Reg_Type} />
*/}
          <input type="submit" class="fadeIn fourth submitInput" value="Set Registration Number" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/AdminForm7">Back</a>
          <p class=" la right-align" value={P_ESM}>{users}</p>

        </div>

      </div>
      </div>
</div>
    )
}

export default ESM_No


































































// import React, { useState,useEffect , useMemo} from 'react'
// import axios from 'axios';
// import { useNavigate,Link } from "react-router-dom";
// import FormLabel from "../../../view/FormLabel";
// import FormInput from "../../../view/FormInput";
// import Corrections from "../Corrections";
//
//
// const ESM = () => {
//     const [Service_No, setService_no] = useState('');
//     const [ESM, setESM] = useState('');
//     const [P_ESM, setP_ESM] = useState('');
//     const [users, setUsers] = useState('');
//      const [ids, setIds] = useState('');
//     // const MIds = useMemo(
//     //     () => ids[0] + "" + ids[0] + "" + ESM,
//     //     [ids[0], ids[0], ESM])
//
//
//
//     const [msg, setMsg] = useState('');
//     const navigate = useNavigate();
//     useEffect(() => {
//       getUsers();
//       getIds();
//   }, []);
//
//   const axiosJWT = axios.create();
//
//   const getUsers = async () => {
//       const response = await axiosJWT.get('http://localhost:5000/Prev_ESM');
//       setUsers(response.data);
//   }
//   const getIds = async () => {
//       const response = await axiosJWT.get('http://localhost:5000/ZR',{
//         params:{ALogin_S:localStorage.getItem("ALogin_S")}
//       });
//       setIds(response.data);
//       setService_no(ids[0]);
//       console.log(ids);
//   }
//     const Auth = async (e) => {
//         e.preventDefault();
//         try {
//           const sn = localStorage.getItem('A_Service_No')
//
//             await axios.post('http://localhost:5000/ESM_No', {
//
//                 Service_No: sn,
//                 ESM_No: ESM
//             });
//             await axios.post('http://localhost:5000/approve', {
//                 Service_No:sn
//             });
//             navigate("/superDash");
//         } catch (error) {
//             if (error.response) {
//                 setMsg(error.response.data.msg);
//             }
//         }
//     }

  {/*}  return (
      <div className="center">
      <div class="wrapper fadeInDown">
      <div id="formContent">

        <div class="fadeIn first">
          <img src="https://apsainik.org.in/assets/img/sainiklogo.png" id="icon" alt="User Icon" />
        </div>

        <form onSubmit={Auth}>
        <p className="has-text-centered">{msg}</p>
          <input type="text" id="login" class="fadeIn second textInput" name="ESM" placeholder="Service Number" value={MIds}  />
          <input type="text" class="fadeIn third textInput" name="login" placeholder="ESM"value={ESM} onChange={(e) => setESM(e.target.value)} />
          <input type="submit" class="fadeIn fourth submitInput" value="Submit" />
        </form>

        <div id="formFooter">
          <a class="underlineHover la" href="/AdminForm7">Back</a>
          <a class="underlineHover la" value={P_ESM}>{users}</a>

        </div>

      </div>
      </div>
</div>
    )
}

export default ESM*/}
