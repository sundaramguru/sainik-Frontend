import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter , selectFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


const Trade = () => {
    const [Service, setService] = useState('');
    const [gService, setgService] = useState([]);

    const [Group_Name, setGroup_Name] = useState('');

    const [Trade_Name, setTrade_Name] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [fRsb, setfRsb] = useState([]);

    useEffect(() => {

        getfRsb(); 
        getService();
    }, []);

    const axiosJWT = axios.create();
    const getService = async () => {
    const response = await axiosJWT.get('http://localhost:5000/Service_D');
    setgService(response.data);
    }
    const getfRsb = async () => {
        const response = await axiosJWT.get('http://localhost:5000/F_Trade');
        setfRsb(response.data);
    }

    const columns = [
 {dataField: 'id', text: 'Trade Id', sort: true, filter: textFilter()},
 {dataField: 'Service_Id', text: 'Service Id', sort: true , filter: textFilter()},
 {dataField: 'Group_Name', text: 'Group Name', sort: true,filter: textFilter() },
 {dataField: 'Trade_Name', text: 'Trade Name', sort: true , filter: textFilter()},

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

    const Trade = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/I_trade', {
                Service_Id: Service,
                Group_Name:Group_Name,
                Trade_Name:Trade_Name

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

        <form onSubmit={Trade}>
        <p className="has-text-centered">{msg}</p>
        <h1 className='insert-pad'><strong>Trade</strong></h1>

        <div >
        <select id="login"className="fadeIn second textInput" value ={Service} onChange={(e)=> setService(e.target.value)} required>
        <option >Select Service Name</option>

             {gService.map((user, index) => (
             <option key={user.id}value={user.Value}>{user.Value}</option>
             ))}
        </select>
        </div>        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Group_Name"value={Group_Name} onChange={(e) => setGroup_Name(e.target.value.toUpperCase())} required/>
        <input type="text" id="login" class="fadeIn second textInput"  placeholder="Trade_Name"value={Trade_Name} onChange={(e) => setTrade_Name(e.target.value)} required/>
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

export default Trade

  {/*     <div class="col-md-9 mb-4">

    <div class="card example-1 scrollbar-ripe-malinka">
      <div class="card-body">
      <div className="row">


           <table className="table is-striped is-fullwidth">
      <thead>
          <tr>
              <th>Sl.No</th>
              <th>Service_Id </th>
              <th>Group_Name</th>
              <th>Trade_Name</th>

          </tr>
      </thead>
      <tbody>
          {fRsb.map((user, index) => (
             <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.Service_Id}</td>
                  <td>{user.Group_Name}</td>
                  <td>{user.Trade_Name}</td>

              </tr>
          ))}
      </tbody>
      </table>
      </div>
        </div>
    </div>

  </div>*/}
