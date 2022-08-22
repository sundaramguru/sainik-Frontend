import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

const RecordOfficeArmy = () => {
  const [Corps_Name, setCorps_Name] = useState("");
  const [Record_Office_Name, setRecord_Office_Name] = useState("");
  const [Location, setLocation] = useState("");
  const [Dist, setDist] = useState("");
  const [Mail, setMail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [corp, setCorp] = useState([]);
  const [district, setDistrict] = useState([]);
  const [fRsb, setfRsb] = useState([]);

  useEffect(() => {
    getCorp();
    getDistrict();
    getfRsb();
  }, []);

  const axiosJWT = axios.create();

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const getCorp = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/corp_D`
    );
    setCorp(response.data);
  };
  const getDistrict = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/dist_D`
    );
    setDistrict(response.data);
  };
  const getfRsb = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/F_RecordOfficeArmy`
    );
    setfRsb(response.data);
  };

  const columns = [
    {
      dataField: "id",
      text: "Record Office Id",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Corps_Name",
      text: "Corps Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Record_Office_Name",
      text: "Record Office Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Record_Office_Location",
      text: "Record Office Location",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Dist_Surname",
      text: "District Surname",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Record_Office_Mail",
      text: "Record Office Mail",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Record_Office_Mobile",
      text: "Record Office Mobile",
      sort: true,
      filter: textFilter(),
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  const RecordOfficeArmy = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/I_recordoffice`, {
        Corps_Name: Corps_Name,
        Record_Office_Name: Record_Office_Name,
        Location: Location,
        Dist: Dist,
        Mail: Mail,
        Mobile: Mobile,
      });
      // setItem(() => "");
      //setValue(() => "");

      //     navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="center">
      <div class="wrapper fadeInDown col-lg-5">
        <div id="formContent">
          <form onSubmit={RecordOfficeArmy}>
            <p className="has-text-centered">{msg}</p>
            <h1 className="insert-pad">
              <strong>Army Record Office</strong>
            </h1>

            <div>
              <select
                id="login"
                className="fadeIn second textInput"
                value={Corps_Name}
                onChange={(e) => setCorps_Name(e.target.value)}
                required
              >
                <option>Select Corps Name</option>
                {corp.map((user, index) => (
                  <option key={user.id} value={user.Value}>
                    {user.Value}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Record_Office_Name"
              value={Record_Office_Name}
              onChange={(e) => setRecord_Office_Name(e.target.value)}
              required
            />
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Location"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <div>
              <select
                id="login"
                className="fadeIn second textInput"
                value={Dist}
                onChange={(e) => setDist(e.target.value)}
                required
              >
                <option>Select District Name</option>
                {district.map((user, index) => (
                  <option key={user.id} value={user.District}>
                    {user.District}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Mail"
              value={Mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Mobile"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <input
              type="submit"
              class="fadeIn fourth submitInput"
              value="Enter"
            />
          </form>
        </div>
      </div>
      <div className="col-lg-7">
        <BootstrapTable
          bootstrap4
          responsive
          keyField="id"
          columns={columns}
          data={fRsb}
          pagination={pagination}
          filter={filterFactory()}
        />
      </div>
    </div>
  );
};

export default RecordOfficeArmy;

//

{
  /* <div class="col-md-9 mb-4">

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
  </div>*/
}
