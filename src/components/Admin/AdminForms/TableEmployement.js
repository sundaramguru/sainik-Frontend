import React, { useState, useEffect } from 'react'
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter , selectFilter, dateFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import FormLabel from "../../view/FormLabel";
import ReactToExcel from "react-html-table-to-excel";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const TableEmployment = () => {

  const [users2, setUsers2] = useState([]);
  const [sheetData, setSheetData] = useState(null);
  const [emmp,setemmp]=useState(false);
  const [visible,setvisible]=useState(true);

  const [emp,setemp]=useState(false);

    const [Service_No, setService_No] = useState(localStorage.getItem('Service_No'));
    const [Column_Attribute, setColumn_Attribute] = useState('');


//employed Form


const [hideAge, sethideAge] = useState(true);
const [hideTrade_Code, sethideTrade_Code] = useState(true);
const [hideESM_No, sethideESM_No] = useState(true);

const [hideTrade_Name, sethideTrade_Name] = useState(true);
const [hideEqui_test, sethideEqui_test] = useState(true);
const [hideAddi_Course1, sethideAddi_Course1] = useState(true);
const [hideAddi_Course2, sethideAddi_Course2] = useState(true);
const [hideAddi_Course3, sethideAddi_Course3] = useState(true);
const [hideAddi_Course4, sethideAddi_Course4] = useState(true);
const [hideCivil, sethideCivil] = useState(true);






const [userList, setUserList] = useState([]);

   useEffect(() => {
              getUsers2();
              setSheetData(getUsers());

    }, []);


    const columns = [
                        {dataField: 'Service_No`, text: 'Service No' , filter: textFilter() },
//employed details
                        {dataField: 'Age`, text: 'Age`,hidden : hideAge, sort: true , filter: textFilter()},
                        {dataField: 'Trade_Code`, text: 'Trade_Code`,hidden : hideTrade_Code, sort: true , filter: textFilter()},
                        {dataField: 'Civil_Qualification`, text: 'Civil Qualification`,hidden : hideCivil, sort: true , filter: textFilter()},
                        {dataField: 'Trade_Name`, text: 'Emp Trade Name`,hidden : hideTrade_Name, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course1`, text: 'Additional Course 1`,hidden : hideAddi_Course1, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course2`, text: 'Additional Course 2`,hidden : hideAddi_Course2, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course3`, text: 'Additional Course 3`,hidden : hideAddi_Course3, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course4`, text: 'Additional Course 4`,hidden : hideAddi_Course4, sort: true , filter: textFilter()},
                        {dataField: 'ESM_No`, text: 'ESM No`,hidden : hideESM_No, sort: true , filter: textFilter()},
                        {dataField: 'Equi_Test`, text: 'Equivalent Test`,hidden : hideEqui_test, sort: true , filter: textFilter()},

    ]




const COLSE = ['Age`,
'Trade_Code`,
'Civil Qualification`,
'Trade Name`,
'Additional Course 1`,
'Additional Course 2`,
'Additional Course 3`,

'Additional Course 4`,
'ESM No`,'Equivalent Test`,
];



///////

if(Column_Attribute==="ESM No")
{
   if(hideESM_No==true)
   {
    sethideESM_No(false)
    }

}

if(Column_Attribute==="Trade_Code")
{
   if(hideTrade_Code==true)
   {
    sethideTrade_Code(false)
    }

}

if(Column_Attribute==="Age")
{
   if(hideAge==true)
   {
    sethideAge(false)
    }

}

if(Column_Attribute==="Civil Qualification")
{
   if(hideCivil==true)
   {
    sethideCivil(false)
    }

}

if(Column_Attribute==="Trade Name")
{
   if(hideTrade_Name==true)
   {
    sethideTrade_Name(false)
    }

}

if(Column_Attribute==="Additional Course 1")
{
   if(hideAddi_Course1==true)
   {
    sethideAddi_Course1(false)
    }

}

if(Column_Attribute==="Additional Course 2")
{
   if(hideAddi_Course2==true)
   {
    sethideAddi_Course2(false)
    }

}

if(Column_Attribute==="Additional Course 3")
{
   if(hideAddi_Course3==true)
   {
    sethideAddi_Course3(false)
    }

}

if(Column_Attribute==="Additional Course 4")
{
   if(hideAddi_Course4==true)
   {
    sethideAddi_Course4(false)
    }

}

if(Column_Attribute==="Equivalent Test")
{
   if(hideEqui_test==true)
   {
    sethideEqui_test(false)
    }

}

   }


const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>`,
    firstPageText: '<<`,
    nextPageText: '>`,
    prePageText: '<`,
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page,sizePerPage){
    console.log('page`,page);
    console.log('sizePerPage`,sizePerPage);

    },
    onSizePerPageChange: function(page, sizePerPage){
    console.log('page`,page);
    console.log('sizePerPage`,sizePerPage);
    }

});



  const downloadPdfData = (e) =>{
   const pdf = new jsPDF();
   var doc = new jsPDF('portrait`,'px`,'a3`,'false');
   pdf.autoTable({html:"#table-to-xls"});
   pdf.save("Record Filter.pdf")

}
    const axiosJWT = axios.create();

    const getUsers2 = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get(`${process.env.REACT_APP_BACKEND_URL}/adminformuee');
      setUsers2(response.data);
    }





    return (
    <div className="center">
    <div class="wrapper fadeInDown">
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}


{/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

    <div className="upperForm1Content">
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Employment Record Filter </label>
    </div>



    <FormLabel text={"Attributes"} />

         <div className="col-md-7 space">
         <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
         <option value="" selected disabled>--Select One--</option>
         {COLSE.map(c => <option key={c}>{c}</option>)}
         </select>
         </div><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <button className = "right-align btn btn-secondary " >Widow Record </button>&nbsp;&nbsp;&nbsp;
    <button className = "btn btn-secondary right-align"  >ESM Record </button><br/><br/>

<div className = "react-bootstrap-table  ">
    <form onSubmit={TableFilter2}>

                 <BootstrapTable
                 bootstrap4
                 responsive
                  id = "table-to-xls"
                 keyField = 'id'
                 columns = {columns}
                 data= {users2}
                 pagination = {pagination}
                 filter = {filterFactory()}

                 />
<br/><br/>




   <ReactToExcel
   className= "btn btn-primary btn-md"
   table = "table-to-xls"
   filename = "Record Filter"
   sheet = "sheet 1 "
   buttonText = "Download as Excel"
   /><br/><br/>

   <button className = "btn btn-primary btn-md"  onClick = {downloadPdfData} >Download As PDF  </button>


</form>
</div>




</div>



</div>
</div>
)
}

export default TableEmployment
