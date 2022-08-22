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

const Prefix = () => {
  const [Service_Name, setService_Name] = useState("");
  const [Prefix, setPrefix] = useState("");
  const [service_Id, setService_Id] = useState([]);

  const [fzsb, setfzsb] = useState([]);

  useEffect(() => {
    getService_Id();
    getfzsb();
  }, []);

  const axiosJWT = axios.create();

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const getService_Id = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/Service_D`
    );
    setService_Id(response.data);
  };
  const getfzsb = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/F_Prefix`
    );
    setfzsb(response.data);
  };

  const columns = [
    { dataField: "id", text: "Sl.No.", sort: true, filter: textFilter() },
    {
      dataField: "Service_Id",
      text: "Service Id",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "Prefix", text: "Prefix", sort: true, filter: textFilter() },
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

  const Prefix_I = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/I_prefix`, {
        Service_Name: Service_Name,
        Prefix: Prefix,
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
          <form onSubmit={Prefix_I}>
            <p className="has-text-centered">{msg}</p>
            <h1 className="insert-pad">
              <strong>Prefix</strong>
            </h1>

            <div>
              <select
                id="login"
                className="fadeIn second textInput"
                value={Service_Name}
                onChange={(e) => setService_Name(e.target.value)}
                required
              >
                <option>Select Service Name</option>
                {service_Id.map((user, index) => (
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
              placeholder="Prefix"
              value={Prefix}
              onChange={(e) => setPrefix(e.target.value)}
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
          data={fzsb}
          pagination={pagination}
          filter={filterFactory()}
        />
      </div>
    </div>
  );
};

export default Prefix;
