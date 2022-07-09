import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter , selectFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


const Taluk = () => {
    const [Taluk_Name, setTaluk_Name] = useState('');
    const [Taluk_Surname, setTaluk_Surname] = useState('');
    const [Dist, setDist] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [district, setDistrict] = useState([]);
    const [fRsb, setfRsb] = useState([]);

    useEffect(() => {
    getDistrict();
    getfRsb(); 
    }, []);

const axiosJWT = axios.create();

    const getDistrict = async () => {
    const response = await axiosJWT.get('http://localhost:5000/dist_D');
    setDistrict(response.data);
    }
    const getfRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_Taluk');
        setfRsb(response.data);
    }


const columns = [
 {dataField: 'id', text: 'Taluk Id', sort: true, filter: textFilter()},
 {dataField: 'Taluk_Name', text: 'Taluk ', sort: true , filter: textFilter()},
 {dataField: 'Taluk_Surname', text: 'Taluk Surname', sort: true,filter: textFilter() },
 {dataField: 'Dist_Surname', text: 'District Surname', sort: true , filter: textFilter()},

 ]

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page,sizePerPage){
    console.log('page',page);
    console.log('sizePerPage',sizePerPage);

    },
    onSizePerPageChange: function(page, sizePerPage){
    console.log('page',page);
    console.log('sizePerPage',sizePerPage);
    }

});
    const Taluk = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_taluk', {
                Taluk_Name: Taluk_Name,
                Taluk_Surname:Taluk_Surname,
                Dist:Dist

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

        <form onSubmit={Taluk}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Taluk</strong></h1>

        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Taluk_Name"value={Taluk_Name} onChange={(e) => setTaluk_Name(e.target.value)} />
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Taluk_Surname"value={Taluk_Surname} onChange={(e) => setTaluk_Surname(e.target.value)} />
        <div >
        <select id="login"className="fadeIn second textInput" value ={Dist} onChange={(e)=> setDist(e.target.value)} >
        <option >Select District Name</option>
             {district.map((user, index) => (
             <option key={user.id}value={user.District}>{user.District}</option>
             ))}
        </select>
        </div>
          <input type="submit" class="fadeIn fourth submitInput" value="Enter" />
        </form>

      </div>
      </div>
      <div className="col-lg-7">

        <BootstrapTable
             bootstrap4
             responsive
             keyField = 'id'
             columns = {columns}
             data= {fRsb}
             pagination = {pagination}
             filter = {filterFactory()}

             />



      </div>

</div>
    )
}

export default Taluk

{/*       <div class="col-md-9 mb-4">

    <div class="card example-1 scrollbar-ripe-malinka">
      <div class="card-body">
      <div className="row">


           <table className="table is-striped is-fullwidth">
      <thead>
          <tr>
              <th>Sl.No</th>
              <th>Taluk_Name </th>
              <th>Taluk_Surname</th>
              <th>Dist_Surname</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Taluk_Name}</td>
                  <td>{user.Taluk_Surname}</td>
                  <td>{user.Dist_Surname}</td>

              </tr>
          ))}
      </tbody>
      </table>
      </div>
        </div>
    </div>

  </div>*/}

