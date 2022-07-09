import React,{useState,useEffect} from 'react'
import axios from 'axios';

const FileUpload = () => {
      const [file, setFile] = useState();
      const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));

      const [fileName, setFileName] = useState("");
      const [picture, setPicture] = useState('');

      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setPicture(URL.createObjectURL(e.target.files[0]));

      };
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("Service_No", Service_No);

        try {
          const res = await axios.post(
            "http://localhost:5000/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
      //get img
      const [users, setUsers] = useState([]);
      const [msg, setMsg] = useState('');
      useEffect(() => {
        getUsers();
      }, []);
    const axiosJWT = axios.create();
      const getUsers = async () => {
          const sn = localStorage.getItem('A_Service_No')
           const response = await axiosJWT.get('http://localhost:5000/getimg',{
            params:{
              A_Service_No: sn
            }
          }
        );
        setUsers(response.data);

      //get img
  //     const getUsers = () => {
  //     const imageName = 'file-1652773431477.png'
  //     const url = `http://localhost:5000/fetchImage/${imageName}`
  //     axios.get(url, {responseType: 'blob'})
  //     .then(res => {
  //         return(
  //             <img src={res.data} alt="trial" />
  //         )
  //     })
  }
      //end of get img

        //try
        // const imageBlob= await response.blob();
        // console.log(imageBlob);
        // const reader= new FileReader();
        // reader.readAsDataURL(imageBlob);
        // reader.onloader = () => {
        //   const base64data = reader.result;
        //   setUsers(base64data);
        // };
        //end try
          //setUsers(response.data);
          // URL.createObjectURL(blob)

          //setUsers(URL.createObjectURL(response.data));

      // }
//end of get img

      return (
        <div className="App">

        {/**/}<div className="upperForm1Content">

        {/*{users.map((user, index) => (*/}

        {/*<div className="row"key={user.id}>*/}

        <label>uploaded img</label>
        {/*<input type="file" value={user.Image} />*/}
        <label>{users}</label>

        <img className="playerProfilePic_home_tile" name="myImage" src={users} style= {{width : "200px"}}></img>
        <img className="playerProfilePic_home_tile" url='../../server/public/images/file-1652717600728.png' style= {{width : "200px"}}></img>

        {/*</div>*/}
        {/*))}*/}
        </div>

          <input type="file" name='image' onChange={saveFile} />
          <div className="previewProfilePic" >
            <img className="playerProfilePic_home_tile"  src={picture} style= {{width : "200px"}}></img>
          </div>
          <button onClick={uploadFile}>Upload</button>
        </div>
      );

}

export default FileUpload;
