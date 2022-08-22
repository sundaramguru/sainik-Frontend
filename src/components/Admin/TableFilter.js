import React, { useState, useEffect } from "react";
import axios from "axios";
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
import FormLabel from "../../view/FormLabel";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit-esm";

//...

const TableFilter = () => {
  const [users, setUsers] = useState([]);
  //const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
  const [Name, setName] = useState("");
  // const [Dep_Name, setDep_Name] = useState('');
  // const [Relation, setRelation] = useState('');
  // const [Dep_DOB, setDep_DOB] = useState('');
  // const [Dep_Adhaar, setDep_Adhaar] = useState('');
  // const [Dep_Qualification, setDep_Qualification] = useState('');
  const [Column_Attribute, setColumn_Attribute] = useState("");
  const [S, setS] = useState("");

  const [visibleDOB, setvisibleDOB] = useState(false);
  const [visibleQuali, setvisibleQuali] = useState(false);

  const [dep, setdep] = useState([]);
  const [ADep_Name, setADep_Name] = useState("");

  const [userList, setUserList] = useState([]);
  const [ServiceTF, setServiceTF] = useState([]);

  useEffect(() => {
    getUsers();
    // getServiceTF();
  }, []);

  const columns1 = [
    // {dataField: 'index + 1`, text: 'Id'},
    // {dataField: 'Relation`, text: 'Sl.No`, sort: true, filter: textFilter()},
    { dataField: "Service_No", text: "Service_No", filter: textFilter() },
    {
      dataField: "vService",
      text: "Service_Name",
      sort: true,
      hidden: false,
      filter: textFilter(),
    },
    {
      dataField: "Corps_Name",
      text: "Corps_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Record_Office_Name",
      text: "Record_Office_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Group_Name",
      text: "Group_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Trade_Name",
      text: "Trade_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },

    {
      dataField: "vTrade",
      text: "Trade_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "vRank",
      text: "Rank_Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    //{dataField: 'Rank_Category`, text: 'Rank_Category`,hidden : false, sort: true , filter: textFilter()},
    {
      dataField: "Name",
      text: "Name",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Gender",
      text: "Gender",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "DOB",
      text: "DOB",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Enroll_Date",
      text: "Enroll_Date",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "World_War2",
      text: "World_War2",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Opt_Attend",
      text: "Opt_Attend",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "Deco",
      text: "Deco",
      hidden: false,
      sort: true,
      filter: textFilter(),
    },

    // {dataField: 'Unit_Last_Served`, text: 'Unit_Last_Served`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Discharge_Date`, text: 'Discharge_Date`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Discharge_Reason`, text: 'Discharge_Reason`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Discharge_Med_Cat`, text: 'Discharge_Med_Cat`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Discharge_Character`, text: 'Discharge_Character`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Dep_Qualification`, text: 'Discharge_Book_No`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'If_Pensioner`, text: 'If_Pensioner`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'PPO_No`, text: 'PPO No.`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Pension_Sanctioned`, text: 'Pension Sanctioned`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'If_Sanctioned_Dis_Pension`, text: 'If Sanctioned Dis Pension`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Disability_Pension`, text: 'Disability Pension`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Disability_Percentage`, text: 'Disability Percentage`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Pension_AC_No`, text: 'Pension AC No.`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Bank_Name`, text: 'Bank Name`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'Branch`, text: 'Branch`,hidden : false, sort: true , filter: textFilter()},
    // {dataField: 'IFSC`, text: 'IFSC`,hidden : false, sort: true , filter: textFilter()},
  ];

  const COLS = ["Dependent Qualification", "Dependent Name"];

  const ColumnVisible = (e) => {
    // if(text ==Dependent Name.hidden) {
    // hidden : columns1!hidden
    // }
  };

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

  const getUsers = async () => {
    // const sn=localStorage.getItem('Service_No');
    const response = await axiosJWT.get(
      `${process.env.REACT_APP_BACKEND_URL}/TFService`
    );
    setUsers(response.data);
  };
  // const getServiceTF = async () => {
  //   const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/TFService`);
  //   setServiceTF(response.data);
  // }
  //code
  // const foundS = users.find(a => {
  //     return a.id === 2;
  //   });
  //   setName(foundS.Service_Name)
  //   console.log(Name);
  //

  // const foundSN = ServiceTF.find(obj => {
  //     return obj.Id === Name;
  //   });
  //   console.log(foundSN.Value);

  // const found = ServiceTF.find(obj => {
  //     return obj.Id === 2;
  //   });
  //   console.log(found.Value);
  //end code
  // ServiceTF.map((user, index) => (
  // <option key={user.id}value={user.Value}>{user.Value}</option>
  // ))
  // if(Service_Name===user.id){
  //    S=user.Value
  // }
  const { SearchBar } = Search;

  return (
    <div className="center">
      <div class="wrapper fadeInDown">
        {/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "#008E89" }}
        >
          <label className="header">Details of Family Members</label>
        </div>
        {/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

        <div className="upperForm1Content">
          <FormLabel text={"Attributes"} />
          <div className="col-md-4 space">
            <select
              className="col-lg-6 dropdown_align"
              value={Column_Attribute}
              onClick={ColumnVisible}
            >
              <option value="" selected disabled>
                --Select One--
              </option>
              {COLS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <form onSubmit={TableFilter}>
            <BootstrapTable
              bootstrap4
              keyField="id"
              columns={columns1}
              data={users}
              pagination={pagination}
              filter={filterFactory()}
            />

            {/*

  <ToolkitProvider
    keyField="id"
    data={ users }
    columns={ columns1 }
    search
  >
    {
      props => (
        <div>
          <h3>Input something at below input field:</h3>
          <SearchBar { ...props.searchProps } />
          <hr />
          <BootstrapTable
            { ...props.baseProps }
          />
        </div>
      )
    }
  </ToolkitProvider>


      <div class="col-md-9 mb-4">

   <div class="card example-1 scrollbar-ripe-malinka">
     <div class="card-body">
     <div className="row">

     <BootstrapTable
      bootstrap4
      keyField = 'id'
      columns = {columns1}
      data= {users}
      pagination = {pagination}
 filter = {filterFactory()}
      />


     </div>
       </div>
   </div>

 </div>
*/}
            {/*  <table className="table is-fullwidth" >
                <thead>
                    <tr>
                    <th>Sl.No</th>
                    <th>Relation</th>
                    <th>Dependent DOB</th>
                    <th>Dependent Adhaar</th>
                    <th>Dependent Qualification</th>
                    <th>Dependent Academic Year</th>
                    <th>Dependent Employment Status</th>
                    <th>Dependent Marital Status</th>
                    <th>Action</th>
                    </tr>
                </thead>


               <tbody>
               {users.map((user, index) => (
                    <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.Relation}</td>
                    <td>{user.Dep_DOB}</td>
                    <td>{user.Dep_Adhaar}</td>
                    <td>{user.Dep_Qualification}</td>
                    <td>{user.Dep_Academic_Yr}</td>
                    <td>{user.Dep_Employment_Status}</td>
                    <td>{user.Dep_Marital_Status}</td>


                  </tr>
                  ))}
               </tbody>

       </table>*/}
            {ServiceTF.map((user, index) => (
              <option key={user.id} value={user.Value}>
                {user.Value}
              </option>
            ))}
          </form>
        </div>

        <div
          className="text-center text-dark p-3 foot"
          style={{ backgroundColor: "#DBE6FD" }}
        >
          <button className="btn my-2 my-sm-0 " type="submit">
            SUBMIT{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
