import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bank = () => {
    const [Bank_Name, setBank_Name] = useState('');
    const [Branch, setBranch] = useState('');
    const [IFSC, setIFSC] = useState('');
    const [fBank, setfBank] = useState([]);

    useEffect(() => {

        getfBank();
    }, []);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const axiosJWT = axios.create();

    const getfBank = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_bank');
        setfBank(response.data);
    }

    const Bank = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_bank', {
                Bank_Name: Bank_Name,
                Branch:Branch,
                IFSC:IFSC
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

        <form onSubmit={Bank}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Bank</strong></h1>

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Bank Name"value={Bank_Name} onChange={(e) => setBank_Name(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Branch"value={Branch} onChange={(e) => setBranch(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="IFSC"value={IFSC} onChange={(e) => setIFSC(e.target.value)} />

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
                <th>Bank_Name </th>
                <th>Branch</th>
                <th>IFSC</th>

            </tr>
        </thead>
        <tbody>
            {fBank.map((user, index) => (
               <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.Bank_Name}</td>
                    <td>{user.Branch}</td>
                    <td>{user.IFSC}</td>

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

export default Bank
