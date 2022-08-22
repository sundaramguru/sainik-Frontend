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

const Bank = () => {
  const [Bank_Name, setBank_Name] = useState("");
  const [Branch, setBranch] = useState("");
  const [IFSC, setIFSC] = useState("");
  const [fBank, setfBank] = useState([]);
  const [BankFilter, setBankFilter] = useState("");

  useEffect(() => {
    getfBank();
  }, []);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

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

  const axiosJWT = axios.create();

  const getfBank = async () => {
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/F_bank`
    );
    setfBank(response.data);
  };

  // const BankFilter = (e) =>  {
  //    if(Bank_Name==true)
  //    {
  //    sethideRelation(false)
  //    }
  //    else
  //    {
  //      sethideRelation(true)
  //    }
  //   }

  const columns = [
    { dataField: "id", text: "id", sort: true, filter: textFilter() },
    {
      dataField: "Bank_Name",
      text: "Bank Name",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "Branch", text: "Branch", filter: textFilter() },
    { dataField: "IFSC", text: "IFSC", sort: true, filter: textFilter() },
  ];

  const Bank = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/I_bank`, {
        Bank_Name: Bank_Name,
        Branch: Branch,
        IFSC: IFSC,
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
          <form onSubmit={Bank}>
            <h1 className="insert-pad">
              <strong>Bank</strong>
            </h1>
            <br />
            <p className="has-text-centered">{msg}</p>
            <br />
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Bank Name"
              value={Bank_Name}
              onChange={(e) => setBank_Name(e.target.value)}
              required
            />
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="Branch"
              value={Branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />
            <input
              type="text"
              id="login"
              class="fadeIn second textInput"
              placeholder="IFSC"
              value={IFSC}
              onChange={(e) => setIFSC(e.target.value)}
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
        <div class="col-md-9 mb-4">
          <div class="card example-1 scrollbar-ripe-malinka">
            <div class="card-body">
              <div className="row">
                <BootstrapTable
                  bootstrap4
                  responsive
                  keyField="id"
                  columns={columns}
                  data={fBank}
                  pagination={pagination}
                  filter={filterFactory()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;

//

{
  /*
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
        </table>*/
}
