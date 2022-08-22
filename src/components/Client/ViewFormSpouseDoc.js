import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import FormLabel, {StarLabel, FormLabelS, FormLabel4, FormLabels} from "../../view/FormLabel";
import FormInput from "../../view/FormInput";
import File from "../../view/file";


const ViewFormSpouseDoc = () => {
    const [Clerk_Q, setClerk_Q] = useState('');
    const [Superintendent_Q, setSuperintendent_Q] = useState('');
    const [Director_Q, setDirector_Q] = useState('');
    const [img, setImg] = useState();
    const [Name, setName] = useState('');
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));

    const [pdf, setPdf] = useState();
    const [users, setUsers] = useState([]);
    const [S, setS] = useState([]);

    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      fetchImage();
      getUsers();
        getName();
  }, []);

  const axiosJWT = axios.create();

  const getUsers = async () => {
      const sn = localStorage.getItem('Service_No')
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/UserSpoViewFormDoc`,{
        params:{
          V_Service_No: sn
        }
      });
      setUsers(response.data);
  }

  const imageUrl =users[1]
  console.log(imageUrl);

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  localStorage.setItem('image`,img);
  console.log(users[0]);

  const fetchpdf = async () => {
  const apiURL = users[1];

    axios(`${apiURL}`, {
        method: 'GET',
        responseType: 'blob' //Force to receive data in a Blob Format
    })
    .then(response => {
    //Create a Blob from the PDF Stream
        const file = new Blob(
          [response.data],
          {type: 'application/pdf'});
    //Build a URL from the file
        const pdf = URL.createObjectURL(file);
    //Open the URL on new Window
        window.open(pdf);
    })
    .catch(error => {
        console.log(error);
    });

  };
  const getName  = async () => {
         const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/getName`,{

           params:{
             Service_No: Service_No
           }
         });
         setName(response.data);
       }


  return (
<>{/**/}
    <div className="footer-body">
    <div className="center">
    <div class="wrapper fadeInDown">
    <div id="form1Content" >


      {/* //************************** HEADERS *********************************/}
          <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
            <label className="header"> Spouse Documents </label>
               <div className = "left-align dis">&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="sn-mar">{"Service No :"}</label> <p>{users[0]}</p>

               </div>
         </div>
    {/*    //************************** HEADERS ********************************  */}

<div>

<div  className = "right-align ">
 <img src={users[6]} className='docPhoto' width='150'onClick={()=> window.open(users[6], "_blank")} />
 </div>
 <div>
        <FormLabels text={"Adhaar Card :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[1]}/>
        <File v={users[1]} name={'Adhar'}></File>

        </div>


        <FormLabels text={"Voter ID:"} />
        <div className="col-md-4 space box line">
        {/*<img src={users[3]} alt={users[3]} width='350' />*/}
        <input type="text"  value={users[2]}/>
        <File v={users[2]}name={'voter'}></File>

        </div>

        <FormLabels text={"PAN :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[3]}/>
        <File v={users[3]}name={'PAN'}></File>

        </div>

        <FormLabels text={"PPO "} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[4]}/>
        <File v={users[4]}name={'PPO'}></File>

        </div>

        <FormLabels text={"ECHS :"} />
        <div className="col-md-4 space box line">
        <input type="text"  value={users[5]}/>
        <File v={users[5]}name={'ECHS'}></File>

        </div><br />

</div>
      <button onClick={()=> window.open(users[6], "_blank")}>Open image</button>
      <div className="text-center text-dark p-3 foot" style={{backgroundColor: "#DBE6FD"}}>
      <button className=" btn" ><Link to="/ViewForm6a">Back</Link> </button>
      <button className="btn my-2 my-sm-0 " ><Link to="/ViewFormSpouseDocb">Edit</Link> </button>
      <button className=" btn" ><Link to="/viewform7a">Skip</Link> </button>

      </div>

  </div>
</div>
</div>


      </div>
      </div>
</>
  )
}

export default ViewFormSpouseDoc
