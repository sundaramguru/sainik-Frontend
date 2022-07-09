/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import IClerk from './Clerk';
import ISuperintendent from './Superintendent';
import IDirector from './Director';

const SuperDash = () => {
    const [name, setName] = useState('');
    const [users_C, setUsers_C] = useState([]);
    const [users_S, setUsers_S] = useState([]);
    const [users_D, setUsers_D] = useState([]);

    const [design, setDesign] = useState([]);

    const [Service_No, setService_No] = useState('');
    const [Service_Name, setService_Name] = useState('');
    const [A_Service_No, setA_Service_No] = useState('');
    const [disabled_C, setDisabled_C] = useState(false);
    const [disabled_S, setDisabled_S] = useState(false);
    const [disabled_D, setDisabled_D] = useState(false);

    const [Clerk, setClerk] = useState([]);
    const [Superintendent, setSuperintendent] = useState([]);
    const [Designation, setDesignation] = useState('');

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        getDesign();
    }, []);

    const axiosJWT = axios.create();

    const getDesign = async () => {
        const response = await axiosJWT.get('http://localhost:5000/designation',{
          params:{
            ALogin_S: localStorage.getItem('ALogin_S')
          }
        });
        setDesign(response.data);
      //  localStorage.setItem('A_Designation',design[1])
    }
    // localStorage.setItem('A_Designation',design[1])
    // localStorage.setItem('Designation',Designation )

  {/*  const SuperDash = async (e) => {
        e.preventDefault();
        try {
            console.log(Service_No);
            localStorage.setItem('A_Service_No',Service_No);
            navigate("/adminform1");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    const SuperName = async (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('A_Service_Name',Service_Name);
            navigate("/adminform1");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }*/}

    return (
        <div className="container mt-5">
                <div>
                <strong>
            <h1>Welcome Back: {design[0]}</h1>
            <p>{design[1]}</p>
</strong>
</div>
{/*
<div className='right-align for-btn'>
<form onSubmit={SuperDash}>
<h1><strong>Search By Service No</strong></h1>
<input type="text"  class="fadeIn formInput" value={Service_No} onChange={(e) =>setService_No(e.target.value)} /> <br />
<button className="btn my-2 my-sm-0 view-align nextButton " type="submit">Search </button>
 </form>
 <form onSubmit={SuperName}>
 <h1><strong>Search By Service Name</strong></h1>
 <input type="text"  class="fadeIn formInput" value={Service_Name} onChange={(e) =>setService_Name(e.target.value)} /> <br />
 <button className="btn my-2 my-sm-0 view-align nextButton " type="submit">Search </button>
  </form>
</div>*/}

            <div>
                       {
                           (() => {
                               if(design[1] == "Clerk") {
                                       return (
                                         <div>
                                       <IClerk />
                                         </div>
                                       )
                                   } else if (design[1] == "Superintendent") {
                                       return (
                                         <div>
                                       <ISuperintendent />
                                         </div>
                                       )
                                   } else if (design[1] == "Director") {
                                       return (
                                         <div>
                                       <IDirector />
                                         </div>
                                       )
                                   }
                           })()
                       }
                   </div>
        </div>
    )
}

export default SuperDash
// <span class="card-title">{user.Mail_Id}</span>
// <span class="card-text">{user.Service_No}</span>
// <table className="table ">
// <tbody>
// <td>{user.Service_No}</td>
// <td>{user.Mail_Id}</td>
// <a class="btn btn-primary"value={user.Service_No} onChange={(e) => setService_No(e.target.value)}>View</a>
//
// </tbody>
// </table>

//Table format for fetch

// <table className="table is-striped is-fullwidth">
//     <thead>
//         <tr>
//             <th>No</th>
//             <th>Name</th>
//             <th>Service Number</th>
//             <th>Email</th>
//             <th>view</th>
//         </tr>
//     </thead>
//     <tbody>
//         {users.map((user, index) => (
//             <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.Name}</td>
//                 <td>{user.Service_No}</td>
//                 <td>{user.Mail_Id}</td>
//                 <td><Link to="">view</Link></td>
//             </tr>
//         ))}
//
//     </tbody>
// </table>

// const SuperDash = async (e) => {
//     e.preventDefault();
//     // const Service_No=
//     try {
//         await axios.post('http://localhost:5000/superForm3');
//         navigate("/form3",{state:{name:Service_No}});
//         console.log(Service_No);
//     } catch (error) {
//         if (error.response) {
//             setMsg(error.response.data.msg);
//         }
//     }
// }
//
// return (
//     <div className="container mt-5">
//         <h1>Welcome Back: {name}</h1>
//         {users.map((user, index) => (
//           <form onSubmit={SuperDash}>
//           <div class="card space">
//       <div class="card-header"key={user.id}>
//                  {user.Name}
//        </div>
//         <div class="card-body">
//        <span class="card-title">{user.Mail_Id}</span>
//        <span class="card-text"value={user.Service_No}onChange={(e) => setService_No(e.target.value)}>{user.Service_No}</span>
//         <a class="btn btn-primary view-align"onClick={()=>{SuperDash()}}>View</a>
//         <button className="btn my-2 my-sm-0 " type="submit">Next </button>
//        </div>
//        </div>
//        </form>
//        ))}
//     </div>
// )
// register btn
// <div>
// <a href="/aregister" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">User Register</a>
// </div>

//pending table
           // <table className="table  is-fullwidth">
           //
           //     <tbody>
           //             <tr key={user.id}>
           //                 <td>{user.Clerk}</td>
           //                 <td>{user.Superindendent}</td>
           //                 <td>{user.Director}</td>
           //             </tr>
           //     </tbody>
           // </table>
           // </span>
// <span class=" col-sm-3 row">
//           <span class=" col-sm-1"> {user.Clerk} </span>
//           <span class=" col-sm-1"> {user.Superindendent} </span>
//           <span class="col-sm-1"> {user.Director} </span>
// </span>


{/*<div style={{textAlign:'center'}}>
<tr style={{textAlign:'center'}} >
    <td  style={{paddingLeft:'11rem'}} >Clerk</td>
    <td style={{padding:'0 6rem'}}>Superintendent</td>
    <td style={{paddingRight:'6rem'}}>Director</td>
</tr>
</div>*/}

{/*
<div>
            {users_C.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">

           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>

                       <tr key={user.id}>
                           <td value={Clerk} onChange={(e) =>setClerk(user.Clerk)}>{user.Clerk}</td>
                           <td value={Superintendent} onChange={(e) =>setSuperintendent(user.Superindendent)}>{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)}disabled={disabled_C}>View </button>
           </div>
           </div>
           </form>

           ))}
</div>
<div>
            {users_S.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">
           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>
                       <tr key={user.id}>
                           <td value={Clerk} onChange={(e) =>setClerk(user.Clerk)}>{user.Clerk}</td>
                           <td value={Superintendent} onChange={(e) =>setSuperintendent(user.Superindendent)}>{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)} disabled={disabled_S}>View </button>
           </div>
           </div>
           </form>

           ))}
</div>

<div style={{backgroundColor: 'black', padding:'1.5rem'}}>
            {users_D.map((user, index) => (
              <form onSubmit={SuperDash}>
              <div class="card space for-btn">
          <div className="card-header color"key={user.id}>
                  <h3 className='color'> <strong> {user.Name} </strong></h3>
           </div>
            <div class="card-body row">

           <span class="card-text col-sm-3"value={Service_No} onChange={(e) =>setService_No(user.Service_No)}>{user.Service_No}</span>
<span className="card-title col-sm-4">
           <table className="table  is-fullwidth">

               <tbody>
                       <tr key={user.id}>
                           <td value={Clerk} onChange={(e) =>setClerk(user.Clerk)}>{user.Clerk}</td>
                           <td value={Superintendent} onChange={(e) =>setSuperintendent(user.Superindendent)}>{user.Superintendent}</td>
                           <td >{user.Director}</td>
                       </tr>
               </tbody>
           </table>
           </span>
             <button className="btn my-2 my-sm-0 col-sm-1 view-align" type="submit"onMouseEnter={() =>setService_No(user.Service_No)}disabled={disabled_D}>View </button>
           </div>
           </div>
           </form>

           ))}
</div>*/}
