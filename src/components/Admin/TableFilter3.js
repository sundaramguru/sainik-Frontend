import React, { useState, useEffect } from 'react'
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter , selectFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import FormLabel from "../../view/FormLabel";


const TableFilter2 = () => {
    const [users, setUsers] = useState([]);
    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Column_Attribute, setColumn_Attribute] = useState('');

    const [hideService, sethideService] = useState(true);
    const [hideCorps, sethideCorps] = useState(true);
    const [hideRecord, sethideRecord] = useState(true);
    const [hideGroup, sethideGroup] = useState(true);
    const [hideTrade, sethideTrade] = useState(true);

    const [hideRank, sethideRank] = useState(true);
    const [hideRankCategory, sethideRankCategory] = useState(true);
    const [hideName, sethideName] = useState(true);
    const [hideGender, sethideGender] = useState(true);
    const [hideDOB, sethideDOB] = useState(true);
    const [hideEnroll, sethideEnroll] = useState(true);
    const [hideWorldWar2, sethideWorldWar2] = useState(true);
    const [hideOA, sethideOA] = useState(true);
    const [hideDecorations, sethideDecorations] = useState(true);

//Form2
    const [hideUL, sethideUL] = useState(true);
    const [hideDD, sethideDD] = useState(true);
    const [hideDR, sethideDR] = useState(true);
    const [hideDM, sethideDM] = useState(true);
    const [hideDC, sethideDC] = useState(true);
    const [hideDB, sethideDB] = useState(true);
    const [hideIP, sethideIP] = useState(true);
    const [hidePPO, sethidePPO] = useState(true);
    const [hidePS, sethidePS] = useState(true);
    const [hideISDP, sethideISDP] = useState(true);
    const [hideDP, sethideDP] = useState(true);
    const [hideDPT, sethideDPT] = useState(true);
    const [hidePAC, sethidePAC] = useState(true);
    const [hideBA, sethideBA] = useState(true);
    const [hideB, sethideB] = useState(true);
    const [hideIFSC, sethideIFSC] = useState(true);



const [userList, setUserList] = useState([]);

   useEffect(() => {
         getUsers();

    }, []);


    const columns = [
      {dataField: 'id', text: 'Sl.No', sort: true, filter: textFilter()},
      {dataField: 'Service_No', text: 'Service No' , filter: textFilter() },
      {dataField: 'Service_Name', text: 'Service Name' , sort: true , hidden : hideService,filter: textFilter()},
      {dataField: 'Corps_Name', text: 'Corps',hidden : hideCorps, sort: true , filter: textFilter()},
      {dataField: 'Record_Office_Name', text: 'Record Office',hidden : hideRecord, sort: true , filter: textFilter()},
      {dataField: 'Group_Name', text: 'Group Name',hidden : hideGroup, sort: true , filter: textFilter()},
      {dataField: 'Trade_Name', text: 'Trade Name',hidden : hideTrade, sort: true , filter: textFilter()},
      {dataField: 'Rank_Name', text: 'Rank Name',hidden : hideRank, sort: true , filter: textFilter()},
      {dataField: 'Rank_Category', text: 'Rank Category',hidden : hideRankCategory, sort: true , filter: textFilter()},
      {dataField: 'Name', text: 'Name',hidden : hideName, sort: true , filter: textFilter()},
      {dataField: 'Gender', text: 'Gender',hidden : hideGender, sort: true , filter: textFilter()},
      {dataField: 'DOB', text: 'DOB',hidden : hideDOB, sort: true , filter: textFilter()},
      {dataField: 'Enroll_Date', text: 'Enrollment Date',hidden : hideEnroll, sort: true , filter: textFilter()},
      {dataField: 'World_War2', text: 'World War2',hidden : hideWorldWar2, sort: true , filter: textFilter()},
      {dataField: 'Opt_Attend', text: 'Operation Attended',hidden : hideOA, sort: true , filter: textFilter()},
      {dataField: 'Deco', text: 'Decorations',hidden : hideDecorations, sort: true , filter: textFilter()},

// Form2
      {dataField: 'Unit_Last_Served', text: 'Unit Last Served',hidden : hideUL, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Date', text: 'Discharge Date',hidden : hideDD, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Reason', text: 'Discharge Reason',hidden : hideDR, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Med_Cat', text: 'Discharge Medical Category',hidden : hideDM, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Character', text: 'Discharge Character',hidden : hideDC, sort: true , filter: textFilter()},
      {dataField: 'Dep_Qualification', text: 'Discharge Book No',hidden : hideDB, sort: true , filter: textFilter()},
      {dataField: 'If_Pensioner', text: 'If Pensioner',hidden : hideIP, sort: true , filter: textFilter()},
      {dataField: 'PPO_No', text: 'PPO No.',hidden : hidePPO, sort: true , filter: textFilter()},
      {dataField: 'Pension_Sanctioned', text: 'Pension Sanctioned',hidden : hidePS, sort: true , filter: textFilter()},
      {dataField: 'If_Sanctioned_Dis_Pension', text: 'If Sanctioned Dis Pension',hidden : hideISDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Pension', text: 'Disability Pension',hidden : hideDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Percentage', text: 'Disability Percentage',hidden : hideDPT, sort: true , filter: textFilter()},
      {dataField: 'Pension_AC_No', text: 'Pension AC No.',hidden : hidePAC, sort: true , filter: textFilter()},
      {dataField: 'Bank_Name', text: 'Bank Name',hidden : hideBA, sort: true , filter: textFilter()},
      {dataField: 'Branch', text: 'Branch',hidden : hideB, sort: true , filter: textFilter()},
      {dataField: 'IFSC', text: 'IFSC',hidden : hideIFSC, sort: true , filter: textFilter()},
    ]

















const COLS = ['Service Name','Corps', 'Record Office', 'Group Name','Trade Name','Rank Name','Rank Category','Name','Gender','DOB','Enrollment Date','World War2','Operation Attended','Decorations',
'Unit Last Served',
'Discharge Date',
'Discharge Reason',
'Discharge Medical Category',
'Discharge Character',
'Discharge Book No',
'If Pensioner',
'PPO No.',
'Pension Sanctioned',
'If Sanctioned Dis Pension',
'Disability Pension',
'Disability Percentage',
'Pension AC No.',
'Bank Name',
'Branch',
'IFSC'

];








// const ColumnVisible = (e) =>  {
// if(hideCorps==true){
// sethideCorps(false)
// }else{
//   sethideCorps(true)
// }
   // }

    const ColumnVisible = (e) =>  {
     if(Column_Attribute==="Service Name")
     {
        if(hideService==true)
        {
         sethideService(false)
         }

     }

     if(Column_Attribute==="Corps")
     {
        if(hideCorps==true)
        {
         sethideCorps(false)
         }

     }

     if(Column_Attribute==="Record Office")
     {
        if(hideRecord==true)
        {
         sethideRecord(false)
         }

     }

     if(Column_Attribute==="Group Name")
     {
        if(hideGroup==true)
        {
         sethideGroup(false)
         }

     }


     if(Column_Attribute==="Trade Name")
     {
        if(hideTrade==true)
        {
         sethideTrade(false)
         }

     }


     if(Column_Attribute==="Rank Name")
     {
        if(hideRank==true)
        {
         sethideRank(false)
         }

     }


     if(Column_Attribute==="Rank Category")
     {
        if(hideRankCategory==true)
        {
         sethideRankCategory(false)
         }

     }


     if(Column_Attribute==="Name")
     {
        if(hideName==true)
        {
         sethideName(false)
         }

     }


     if(Column_Attribute==="Gender")
     {
        if(hideGender==true)
        {
         sethideGender(false)
         }

     }

     if(Column_Attribute==="DOB")
     {
        if(hideDOB==true)
        {
         sethideDOB(false)
         }

     }if(Column_Attribute==="Enrollment Date")
     {
        if(hideEnroll==true)
        {
         sethideEnroll(false)
         }

     }if(Column_Attribute==="World War2")
     {
        if(hideWorldWar2==true)
        {
         sethideWorldWar2(false)
         }

     }if(Column_Attribute==="Operation Attended")
     {
        if(hideOA==true)
        {
         sethideOA(false)
         }

     }if(Column_Attribute==="Decorations")
     {
        if(hideDecorations==true)
        {
         sethideDecorations(false)
         }

     }

// Form2
     if(Column_Attribute==="Unit Last Served")
     {
        if(hideUL==true)
        {
         sethideUL(false)
         }

     }if(Column_Attribute==="Discharge Date")
     {
        if(hideDD==true)
        {
         sethideDD(false)
         }

     }
     if(Column_Attribute==="Discharge Reason")
     {
        if(hideDR==true)
        {
         sethideDR(false)
         }

     }
     if(Column_Attribute==="Discharge Medical Category")
     {
        if(hideDM==true)
        {
         sethideDM(false)
         }

     }if(Column_Attribute==="Discharge Character")
     {
        if(hideDC==true)
        {
         sethideDC(false)
         }

     }if(Column_Attribute==="Discharge Book No")
     {
        if(hideDB==true)
        {
         sethideDB(false)
         }

     }if(Column_Attribute==="If Pensioner")
     {
        if(hideIP==true)
        {
         sethideIP(false)
         }

     }if(Column_Attribute==="PPO No.")
     {
        if(hidePPO==true)
        {
         sethidePPO(false)
         }

     }if(Column_Attribute==="Pension Sanctioned")
     {
        if(hidePS==true)
        {
         sethidePS(false)
         }

     }if(Column_Attribute==="If Sanctioned Dis Pension")
     {
        if(hideISDP==true)
        {
         sethideISDP(false)
         }

     }if(Column_Attribute==="Disability Pension")
     {
        if(hideDP==true)
        {
         sethideDP(false)
         }

     }if(Column_Attribute==="Disability Percentage")
     {
        if(hideDPT==true)
        {
         sethideDPT(false)
         }

     }

     if(Column_Attribute==="Pension AC No.")
     {
        if(hidePAC==true)
        {
         sethidePAC(false)
         }

     }if(Column_Attribute==="Bank Name")
     {
        if(hideBA==true)
        {
         sethideBA(false)
         }

     }
     if(Column_Attribute==="Branch")
     {
        if(hideB==true)
        {
         sethideB(false)
         }

     }if(Column_Attribute==="IFSC")
     {
        if(hideIFSC==true)
        {
         sethideIFSC(false)
         }

     }














   }



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

    const axiosJWT = axios.create();

    const getUsers = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/TableFilter');
      setUsers(response.data);
    }


    return (
    <div className="center">
    <div class="wrapper fadeInDown">
<button onClick={ColumnVisible}>visible</button>
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}

    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Details of Family Members</label>
    </div>
{/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

    <div className="upperForm1Content">


    <FormLabel text={"Attributes"} />
    <div className="col-md-7 space">
    <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
    <option value="" selected disabled>--Select One--</option>
    {COLS.map(c => <option key={c}>{c}</option>)}
    </select>
    </div>

<div className = "react-bootstrap-table  ">
    <form onSubmit={TableFilter2}>

    <BootstrapTable
     bootstrap4
     responsive
     keyField = 'id'
     columns = {columns}
     data= {users}
     pagination = {pagination}
     filter = {filterFactory()}

     />

</form>
</div>




</div>



</div>
</div>
)
}

export default TableFilter2
