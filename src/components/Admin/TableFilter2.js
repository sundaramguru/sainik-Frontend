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


const TableFilter2 = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [sheetData, setSheetData] = useState(null);

const [emmp,setemmp]=useState(false);

  const [visible,setvisible]=useState(true);
  const [visible1,setvisible1]=useState(false);
  const [visible2,setvisible2]=useState(false);

const [esm,setesm]=useState(true);
const [widow,setwidow]=useState(false);
const [emp,setemp]=useState(false);

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

//Form3

const [hideFN, sethideFN] = useState(true);
const [hideMN, sethideMN] = useState(true);
const [hideBS, sethideBS] = useState(true);
const [hideBD, sethideBD] = useState(true);
const [hideBPL, sethideBPL] = useState(true);
const [hideReligion, sethideReligion] = useState(true);
const [hideCC, sethideCC] = useState(true);
const [hideAD, sethideAD] = useState(true);
const [hideVI, sethideVI] = useState(true);
const [hidePCN, sethidePCN] = useState(true);
const [hideCSD, sethideCSD] = useState(true);
const [hideECHS, sethideECHS] = useState(true);
const [hideId_Mark1, sethideId_Mark1] = useState(true);
const [hideId_Mark2, sethideId_Mark2] = useState(true);


//Form4

const [hidePP, sethidePP] = useState(true);
const [hidePRS, sethidePRS] = useState(true);
const [hidePD, sethidePD] = useState(true);
const [hidePT, sethidePT] = useState(true);
const [hideLocality, sethideLocality] = useState(true);
const [hidePCV, sethidePCV] = useState(true);
const [hidePST, sethidePST] = useState(true);
const [hidePNM, sethidePNM] = useState(true);
const [hidePHN, sethidePHN] = useState(true);
const [hidePPS, sethidePPS] = useState(true);
const [hidePTN, sethidePTN] = useState(true);
const [hidePPP, sethidePPP] = useState(true);
const [hidePPPS, sethidePPPS] = useState(true);
const [hidePPD, sethidePPD] = useState(true);

const [hidePPT, sethidePPT] = useState(true);
const [hidePPL, sethidePPL] = useState(true);
const [hidePPCV, sethidePPCV] = useState(true);
const [hidePPPPS, sethidePPPPS] = useState(true);
const [hidePPH, sethidePPH] = useState(true);
const [hidePPHN, sethidePPHN] = useState(true);
const [hidePPPSS, sethidePPPSS] = useState(true);


//Form5

const [hideCivil_Qualification, sethideCivil_Qualification] = useState(true);
const [hideAddi_Course, sethideAddi_Course] = useState(true);
const [hideEqui_Test, sethideEqui_Test] = useState(true);
const [hideCivil_Emp_Status, sethideCivil_Emp_Status] = useState(true);
const [hideDept, sethideDept] = useState(true);
const [hideSector, sethideSector] = useState(true);
const [hidePres_Desg, sethidePres_Desg] = useState(true);


const [hideEmployer, sethideEmployer] = useState(true);
const [hideMonth_Income, sethideMonth_Income] = useState(true);
const [hideOfficial_No, sethideOfficial_No] = useState(true);
const [hideDesg_Retire, sethideDesg_Retire] = useState(true);
const [hideRetire_Date, sethideRetire_Date] = useState(true);
const [hideCivil_PPO_No, sethideCivil_PPO_No] = useState(true);




//Form6

const [hideMS, sethideMS] = useState(true);
const [hideMD, sethideMD] = useState(true);
const [hideMSN, sethideMSN] = useState(true);
const [hideMR, sethideMR] = useState(true);
const [hideMDOB, sethideMDOB] = useState(true);
const [hideMSS, sethideMSS] = useState(true);
const [hideSSSSD, sethideSSSSD] = useState(true);
const [hideMPD, sethideMPD] = useState(true);
const [hideSE, sethideSE] = useState(true);
const [hideMO, sethideMO] = useState(true);
const [hideMMI, sethideMMI] = useState(true);
const [hideMSP, sethideMSP] = useState(true);
const [hideMCP, sethideMCP] = useState(true);
const [hideMIM, sethideMIM] = useState(true);

const [hideMQ, sethideMQ] = useState(true);
const [hideMES, sethideMES] = useState(true);
const [hideMRD, sethideMRD] = useState(true);
const [hideMSA, sethideMSA] = useState(true);
const [hideMVI, sethideMVI] = useState(true);
const [hideMPAN, sethideMPAN] = useState(true);
const [hideMCSD, sethideMCSD] = useState(true);
const [hideMECHS, sethideMECHS] = useState(true);



const [hideMDDD, sethideMDDD] = useState(true);
const [hideMCCC, sethideMCCC] = useState(true);
const [hideSMD, sethideSMD] = useState(true);

//Widow Form

const [hideFamily_Pension, sethideFamily_Pension] = useState(true);
const [hideDeath_Date, sethideDeath_Date] = useState(true);
const [hideDeath_Nature, sethideDeath_Nature] = useState(true);
const [hideW_No, sethideW_No] = useState(true);

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
         getUsers();
            getUsers1();
              getUsers2();
              setSheetData(getUsers());

    }, []);


    const columns = [
      {dataField: 'id', text: 'Sl.No', sort: true, filter: textFilter()},
      {dataField: 'Service_No', text: 'Service No' , filter: textFilter() },
      {dataField: 'vService', text: 'Service Name' , sort: true , hidden : hideService,filter: textFilter()},
      {dataField: 'Corps_Name', text: 'Corps',hidden : hideCorps, sort: true , filter: textFilter()},
      {dataField: 'Record_Office_Name', text: 'Record Office',hidden : hideRecord, sort: true , filter: textFilter()},
      {dataField: 'Group_Name', text: 'Group Name',hidden : hideGroup, sort: true , filter: textFilter()},
      {dataField: 'vTrade', text: 'Trade Name',hidden : hideTrade, sort: true , filter: textFilter()},
      {dataField: 'vRank', text: 'Rank Name',hidden : hideRank, sort: true , filter: textFilter()},
      {dataField: 'vRank_Category', text: 'Rank Category',hidden : hideRankCategory, sort: true , filter: textFilter()},
      {dataField: 'Name', text: 'Name',hidden : hideName, sort: true , filter: textFilter()},
      {dataField: 'Gender', text: 'Gender',hidden : hideGender, sort: true , filter: textFilter()},
      {dataField: 'DOB', text: 'DOB',hidden : hideDOB, sort: true ,  filter: dateFilter()},
      {dataField: 'Enroll_Date', text: 'Enrollment Date',hidden : hideEnroll, sort: true , filter: dateFilter()},
      {dataField: 'World_War2', text: 'World War2',hidden : hideWorldWar2, sort: true , filter: textFilter()},
      {dataField: 'Opt_Attend', text: 'Operation Attended',hidden : hideOA, sort: true , filter: textFilter()},
      {dataField: 'Deco', text: 'Decorations',hidden : hideDecorations, sort: true , filter: textFilter()},

// Form2
      {dataField: 'Unit_Last_Served', text: 'Unit Last Served',hidden : hideUL, sort: true , filter: textFilter()},
      {dataField: 'Discharge_Date', text: 'Discharge Date',hidden : hideDD, sort: true , filter: textFilter()},
      {dataField: 'vDischarge_Reason', text: 'Discharge Reason',hidden : hideDR, sort: true , filter: textFilter()},
      {dataField: 'vDischarge_Med_Cat', text: 'Discharge Medical Category',hidden : hideDM, sort: true , filter: textFilter()},
      {dataField: 'vDischarge_Character', text: 'Discharge Character',hidden : hideDC, sort: true , filter: textFilter()},
      {dataField: 'Dep_Qualification', text: 'Discharge Book No',hidden : hideDB, sort: true , filter: textFilter()},
      {dataField: 'If_Pensioner', text: 'If Pensioner',hidden : hideIP, sort: true , filter: textFilter()},
      {dataField: 'PPO_No', text: 'PPO No.',hidden : hidePPO, sort: true , filter: textFilter()},
      {dataField: 'Pension_Sanctioned', text: 'Pension Sanctioned',hidden : hidePS, sort: true , filter: textFilter()},
      {dataField: 'If_Sanctioned_Dis_Pension', text: 'If Sanctioned Dis Pension',hidden : hideISDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Pension', text: 'Disability Pension',hidden : hideDP, sort: true , filter: textFilter()},
      {dataField: 'Disability_Percentage', text: 'Disability Percentage',hidden : hideDPT, sort: true , filter: textFilter()},
      {dataField: 'Pension_AC_No', text: 'Pension AC No.',hidden : hidePAC, sort: true , filter: textFilter()},
      {dataField: 'vBank_Name', text: 'Bank Name',hidden : hideBA, sort: true , filter: textFilter()},
      {dataField: 'vBranch', text: 'Branch',hidden : hideB, sort: true , filter: textFilter()},
      {dataField: 'vIFSC', text: 'IFSC',hidden : hideIFSC, sort: true , filter: textFilter()},

// Form3
            {dataField: 'Father_Name', text: 'Father Name',hidden : hideFN, sort: true , filter: textFilter()},
            {dataField: 'Mother_Name', text: 'Mother Name',hidden : hideMN, sort: true , filter: textFilter()},
            {dataField: 'vBirth_State', text: 'Birth State',hidden : hideBS, sort: true , filter: textFilter()},
            {dataField: 'vBirth_District', text: 'Birth District',hidden : hideBD, sort: true , filter: textFilter()},
            {dataField: 'Birth_Place', text: 'Birth Place',hidden : hideBPL, sort: true , filter: textFilter()},
            {dataField: 'vReligion', text: 'Religion',hidden : hideReligion, sort: true , filter: textFilter()},
            {dataField: 'vCaste', text: 'Caste Category',hidden : hideCC, sort: true , filter: textFilter()},

            {dataField: 'Adhaar', text: 'Adhaar Card No',hidden : hideAD, sort: true , filter: textFilter()},
            {dataField: 'Voter_Id', text: 'Voter Id',hidden : hideVI, sort: true , filter: textFilter()},
            {dataField: 'PAN', text: 'PAN Card No:',hidden : hidePCN, sort: true , filter: textFilter()},
            {dataField: 'CSD', text: 'CSD No',hidden : hideCSD, sort: true , filter: textFilter()},
            {dataField: 'ECHS', text: 'ECHS No',hidden : hideECHS, sort: true , filter: textFilter()},
            {dataField: 'Id_Mark1', text: 'Id_Mark1',hidden : hideId_Mark1, sort: true , filter: textFilter()},
            {dataField: 'Id_Mark2', text: 'Id_Mark2',hidden : hideId_Mark2, sort: true , filter: textFilter()},

// Form4

            {dataField: 'Pincode', text: 'Present Pincode',hidden : hidePP, sort: true , filter: textFilter()},
            {dataField: 'State', text: 'Present State',hidden : hidePRS, sort: true , filter: textFilter()},
            {dataField: 'District', text: 'Present District',hidden : hidePD, sort: true , filter: textFilter()},
            {dataField: 'Taluk_Name', text: 'Present Taluk',hidden : hidePT, sort: true , filter: textFilter()},
            {dataField: 'Locality', text: 'Locality',hidden : hideLocality, sort: true , filter: textFilter()},
            {dataField: 'City_Village', text: 'Present City Village',hidden : hidePCV, sort: true , filter: textFilter()},
            {dataField: 'Street', text: 'Present Street',hidden : hidePST, sort: true , filter: textFilter()},
            {dataField: 'House_Name', text: 'Present House Name',hidden : hidePNM, sort: true , filter: textFilter()},
            {dataField: 'House_No', text: 'Present House No',hidden : hidePHN, sort: true , filter: textFilter()},
            {dataField: 'Police_Station', text: 'Present Police Station',hidden : hidePPS, sort: true , filter: textFilter()},
            {dataField: 'Tele_No', text: 'Present Telephone No',hidden : hidePTN, sort: true , filter: textFilter()},

            {dataField: 'P_Pincode', text: 'Permanent Pincode',hidden : hidePPP, sort: true , filter: textFilter()},
            {dataField: 'vP_State', text: 'Permanent State',hidden : hidePPS, sort: true , filter: textFilter()},
            {dataField: 'vP_District', text: 'Permanent District',hidden : hidePPD, sort: true , filter: textFilter()},
            {dataField: 'vP_Taluk_Name', text: 'Permanent Taluk',hidden : hidePPT, sort: true , filter: textFilter()},
            {dataField: 'P_Locality', text: 'Permanent Locality',hidden : hidePPL, sort: true , filter: textFilter()},
            {dataField: 'P_City_Village', text: 'Permanent City Village',hidden : hidePPCV, sort: true , filter: textFilter()},
            {dataField: 'P_Street', text: 'Permanent Street',hidden : hidePPPPS, sort: true , filter: textFilter()},
            {dataField: 'P_House_Name', text: 'Permanent House Name',hidden : hidePPH, sort: true , filter: textFilter()},
            {dataField: 'P_House_No', text: 'Permanent House No',hidden : hidePPHN, sort: true , filter: textFilter()},
            {dataField: 'P_Police_Station', text: 'Permanent Police Station',hidden : hidePPPSS, sort: true , filter: textFilter()},



  // // Form5
                        {dataField: 'vCivil_Qualification', text: 'Civil Qualification',hidden : hideCivil_Qualification, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course', text: 'Additional Course',hidden : hideAddi_Course, sort: true , filter: textFilter()},
                        {dataField: 'Equi_Test', text: 'Equivalent Test passed',hidden : hideEqui_Test, sort: true , filter: textFilter()},
                        {dataField: 'Civil_Emp_Status', text: 'Civil Employment Status',hidden : hideCivil_Emp_Status, sort: true , filter: textFilter()},
                        {dataField: 'Dept', text: 'Department ',hidden : hideDept, sort: true , filter: textFilter()},
                        {dataField: 'Sector', text: 'Sector',hidden : hideSector, sort: true , filter: textFilter()},
                        {dataField: 'Pres_Desg', text: 'Present Designation',hidden : hidePres_Desg, sort: true , filter: textFilter()},
                        {dataField: 'Employer', text: 'Employer',hidden : hideEmployer, sort: true , filter: textFilter()},
                        {dataField: 'Month_Income', text: 'Monthly Income',hidden : hideMonth_Income, sort: true , filter: textFilter()},
                        {dataField: 'Official_No', text: 'Official No',hidden : hideOfficial_No, sort: true , filter: textFilter()},
                        {dataField: 'Desg_Retire', text: 'Designation While Retirement ',hidden : hideDesg_Retire, sort: true , filter: textFilter()},
                        {dataField: 'Retire_Date', text: 'Date of Retirement',hidden : hideRetire_Date, sort: true , filter: dateFilter()},
                        {dataField: 'Civil_PPO_No', text: 'Civil PPO No',hidden : hideCivil_PPO_No, sort: true , filter: textFilter()},






  // // Form6
                        {dataField: 'Marital_Status', text: 'Marital Status',hidden : hideMS, sort: true , filter: textFilter()},
                        {dataField: 'Marriage_Date', text: 'Marriage Date',hidden : hideMD, sort: true , filter: dateFilter()},
                        {dataField: 'Spouse_Name', text: 'Spouse Name',hidden : hideMSN, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Relation', text: 'Spouse Relation',hidden : hideMR, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_DOB', text: 'Spouse DOB',hidden : hideMDOB, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Adhaar', text: 'Spouse Adhaar',hidden : hideMSA, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Voter_Id', text: 'Spouse Voter Id',hidden : hideMVI, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_PAN', text: 'Spouse PAN',hidden : hideMPAN, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_CSD', text: 'Spouse CSD',hidden : hideMCSD, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_ECHS', text: 'Spouse ECHS',hidden : hideMECHS, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Id_Mark', text: 'Spouse Identification Mark',hidden : hideMIM, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Qualification', text: 'Spouse Qualification',hidden : hideMQ, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Emp_Status', text: 'Spouse Employment Status',hidden : hideMES, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Sector', text: 'Spouse Sector',hidden : hideMSS, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Dept', text: 'Spouse Department',hidden : hideSSSSD, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Pres_Desg', text: 'Spouse Present Designation',hidden : hideMPD, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Employer', text: 'Spouse Employer',hidden : hideSE, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Official_No', text: 'Spouse Official No',hidden : hideMO, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Month_Income', text: 'Spouse Monthly Income',hidden : hideMMI, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Desg_Retire', text: 'Spouse Designation',hidden : hideMSP, sort: true , filter: textFilter()},
                        {dataField: 'Spouse_Retire_Date', text: 'Spouse Retirement Date',hidden : hideMRD, sort: true , filter: dateFilter()},
                        {dataField: 'Spouse_Civil_PPO_No', text: 'Spouse Civil PPO No',hidden : hideMCP, sort: true , filter: textFilter()},
                        {dataField: 'Divorce_Date', text: 'Divorce Date',hidden : hideMDDD, sort: true , filter: dateFilter()},
                        {dataField: 'Court_Order', text: 'Court Order',hidden : hideMCCC, sort: true , filter: textFilter()},

   // // WidowForm
                        {dataField: 'Family_Pension', text: 'Family Pension',hidden : hideFamily_Pension, sort: true , filter: textFilter()},
                        {dataField: 'Death_Date', text: 'Death Date',hidden : hideDeath_Date, sort: true , filter: dateFilter()},
                        {dataField: 'Death_Nature', text: 'Death Nature',hidden : hideDeath_Nature, sort: true , filter: textFilter()},
                        {dataField: 'Widow_Reg_No', text: 'Widow Registration No',hidden : hideW_No, sort: true , filter: textFilter()},


//employed details

                        {dataField: 'Age', text: 'Age',hidden : hideAge, sort: true , filter: textFilter()},
                        {dataField: 'Trade_Code', text: 'Trade_Code',hidden : hideTrade_Code, sort: true , filter: textFilter()},
                        {dataField: 'Civil_Qualification', text: 'Civil Qualification',hidden : hideCivil, sort: true , filter: textFilter()},
                        // {dataField: 'Trade_Name', text: 'Emp Trade Name',hidden : hideTrade_Name, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course1', text: 'Additional Course 1',hidden : hideAddi_Course1, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course2', text: 'Additional Course 2',hidden : hideAddi_Course2, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course3', text: 'Additional Course 3',hidden : hideAddi_Course3, sort: true , filter: textFilter()},
                        {dataField: 'Addi_Course4', text: 'Additional Course 4',hidden : hideAddi_Course4, sort: true , filter: textFilter()},
                        {dataField: 'ESM_No', text: 'ESM No',hidden : hideESM_No, sort: true , filter: textFilter()},
                        {dataField: 'Equi_Test', text: 'Equivalent Test',hidden : hideEqui_test, sort: true , filter: textFilter()},


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
'IFSC',
'Father Name',
'Mother Name',
'Birth State',
'Birth District',
'Birth Place',
'Religion',
'Caste Category',
'Adhaar Card No',
'Voter Id',
'PAN Card No:',
'CSD No',
'ECHS No',
'Id_Mark1',
'Id_Mark2',
'Present Pincode',
'Present State',
'Present District',
'Present Taluk',
'Locality',
'Present City Village',
'Present Street',
'Present House Name',
'Present House No',
'Present Police Station',
'Present Telephone No',
'Permanent Pincode',
'Permanent State',
'Permanent District',
'Permanent Taluk',
'Permanent Locality',
'Permanent City Village',
'Permanent Street',
'Permanent House Name',
'Permanent House No',
'Permanent Police Station',

'Civil Qualification',
'Additional Course',
'Equivalent Test passed',
'Civil Employment Status',
'Department',
'Sector',
'Present Designation',
'Employer',
'Monthly Income',
'Official No',
'Designation While Retirement',
'Date of Retirement',
'Civil PPO No',

'Marital Status',
'Marriage Date',
'Spouse Name',
'Spouse Relation',
'Spouse DOB',
'Spouse Sector',
'Spouse Department',
'Spouse Present Designation',
'Spouse Employer',
'Spouse Official No',
'Spouse Monthly Income',
'Spouse Designation',
'Spouse Civil PPO No',
'Spouse Identification Mark',
'Spouse Qualification',
'Spouse Employment Status',
'Spouse Retirement Date',
'Spouse Adhaar',
'Spouse Voter Id',
'Spouse PAN',
'Spouse CSD',
'Spouse ECHS',
'Divorce Date',
'Court Order',
'Death Date',

// 'Family Pension',
// 'Death Date',
// 'Death Nature',
// 'ESM No',
// 'Widow Registration No',
// 'Trade_Code',
// 'Age',


];


const COLSW = ['Family Pension',
'Death Date',
'Death Nature',
'ESM No',
'Widow Registration No'];

const COLSE = ['Age',
'Trade_Code',
'Civil Qualification',
'Trade Name',
'Additional Course 1',
'Additional Course 2',
'Additional Course 3',

'Additional Course 4',
'ESM No','Equivalent Test',
];


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
// Form3

if(Column_Attribute==="Father Name")
{
   if(hideFN==true)
   {
    sethideFN(false)
    }

}
if(Column_Attribute==="Mother Name")
{
   if(hideMN==true)
   {
    sethideMN(false)
    }

}
if(Column_Attribute==="Birth State")
{
   if(hideBS==true)
   {
    sethideBS(false)
    }

}

if(Column_Attribute==="Birth District")
{
   if(hideBD==true)
   {
    sethideBD(false)
    }

}
if(Column_Attribute==="Birth Place")
{
   if(hideBPL==true)
   {
    sethideBPL(false)
    }

}

if(Column_Attribute==="Religion")
{
   if(hideReligion==true)
   {
    sethideReligion(false)
    }

}

if(Column_Attribute==="Caste Category")
{
   if(hideCC==true)
   {
    sethideCC(false)
    }

}if(Column_Attribute==="Adhaar Card No")
{
   if(hideAD==true)
   {
    sethideAD(false)
    }

}
if(Column_Attribute==="Voter Id")
{
   if(hideVI==true)
   {
    sethideVI(false)
    }

}
if(Column_Attribute==="PAN Card No:")
{
   if(hidePCN==true)
   {
    sethidePCN(false)
    }

}
if(Column_Attribute==="CSD No")
{
   if(hideCSD==true)
   {
    sethideCSD(false)
    }

}

if(Column_Attribute==="ECHS No")
{
   if(hideECHS==true)
   {
    sethideECHS(false)
    }

}
if(Column_Attribute==="Id_Mark1")
{
   if(hideId_Mark1==true)
   {
    sethideId_Mark1(false)
    }

}

if(Column_Attribute==="Id_Mark2")
{
   if(hideId_Mark2==true)
   {
    sethideId_Mark2(false)
    }

}
if(Column_Attribute==="Present Pincode")
{
   if(hidePP==true)
   {
    sethidePP(false)
    }

}
if(Column_Attribute==="Present State")
{
   if(hidePRS==true)
   {
    sethidePRS(false)
    }

}
if(Column_Attribute==="Present District")
{
   if(hidePD==true)
   {
    sethidePD(false)
    }

}
if(Column_Attribute==="Present Taluk")
{
   if(hidePT==true)
   {
    sethidePT(false)
    }

}
if(Column_Attribute==="Locality")
{
   if(hideLocality==true)
   {
    sethideLocality(false)
    }

}
if(Column_Attribute==="Present City Village")
{
   if(hidePCV==true)
   {
    sethidePCV(false)
    }

}
if(Column_Attribute==="Present Street")
{
   if(hidePST==true)
   {
    sethidePST(false)
    }

}
if(Column_Attribute==="Present House Name")
{
   if(hidePNM==true)
   {
    sethidePNM(false)
    }

}
if(Column_Attribute==="Present House No")
{
   if(hidePHN==true)
   {
    sethidePHN(false)
    }

}
if(Column_Attribute==="Present Police Station")
{
   if(hidePPS==true)
   {
    sethidePPS(false)
    }

}
if(Column_Attribute==="Present Telephone No")
{
   if(hidePTN==true)
   {
    sethidePTN(false)
    }

}
if(Column_Attribute==="Permanent Pincode")
{
   if(hidePPP==true)
   {
    sethidePPP(false)
    }

}
if(Column_Attribute==="Permanent State")
{
   if(hidePPPS==true)
   {
    sethidePPPS(false)
    }

}
if(Column_Attribute==="Permanent District")
{
   if(hidePPD==true)
   {
    sethidePPD(false)
    }

}
if(Column_Attribute==="Permanent Taluk")
{
   if(hidePPT==true)
   {
    sethidePPT(false)
    }

}
if(Column_Attribute==="Permanent Locality")
{
   if(hidePPL==true)
   {
    sethidePPL(false)
    }

}
if(Column_Attribute==="Permanent City Village")
{
   if(hidePPCV==true)
   {
    sethidePPCV(false)
    }

}
if(Column_Attribute==="Permanent Street")
{
   if(hidePPPPS==true)
   {
    sethidePPPPS(false)
    }

}
if(Column_Attribute==="Permanent House Name")
{
   if(hidePPH==true)
   {
    sethidePPH(false)
    }

}
if(Column_Attribute==="Permanent House No")
{
   if(hidePPHN==true)
   {
    sethidePPHN(false)
    }

}
if(Column_Attribute==="Permanent Police Station")
{
   if(hidePPPSS==true)
   {
    sethidePPPSS(false)
    }

}


//form6

if(Column_Attribute==="Marital Status")
{
   if(hideMS==true)
   {
    sethideMS(false)
    }

}if(Column_Attribute==="Marriage Date")
{
   if(hideMD==true)
   {
    sethideMD(false)
    }

}if(Column_Attribute==="Spouse Name")
{
   if(hideMSN==true)
   {
    sethideMSN(false)
    }

}if(Column_Attribute==="Spouse Relation")
{
   if(hideMR==true)
   {
    sethideMR(false)
    }

}

if(Column_Attribute==="Spouse DOB")
{
   if(hideMDOB==true)
   {
    sethideMDOB(false)
    }

}if(Column_Attribute==="Spouse Sector")
{
   if(hideMSS==true)
   {
    sethideMSS(false)
    }

}

if(Column_Attribute==="Spouse Department")
{
   if(hideSSSSD==true)
   {
    sethideSSSSD(false)
    }

}


if(Column_Attribute==="Spouse Present Designation")
{
   if(hideMPD==true)
   {
    sethideMPD(false)
    }

}

if(Column_Attribute==="Spouse Employer")
{
   if(hideSE==true)
   {
    sethideSE(false)
    }

}

if(Column_Attribute==="Spouse Official No")
{
   if(hideMO==true)
   {
    sethideMO(false)
    }

}if(Column_Attribute==="Spouse Monthly Income")
{
   if(hideMMI==true)
   {
    sethideMMI(false)
    }

}if(Column_Attribute==="Spouse Designation")
{
   if(hideMSP==true)
   {
    sethideMSP(false)
    }

}if(Column_Attribute==="Spouse Civil PPO No")
{
   if(hideMCP==true)
   {
    sethideMCP(false)
    }

}if(Column_Attribute==="Spouse Identification Mark")
{
   if(hideMIM==true)
   {
    sethideMIM(false)
    }

}if(Column_Attribute==="Spouse Qualification")
{
   if(hideMQ==true)
   {
    sethideMQ(false)
    }

}if(Column_Attribute==="Spouse Employment Status")
{
   if(hideMES==true)
   {
    sethideMES(false)
    }

}if(Column_Attribute==="Spouse Retirement Date")
{
   if(hideMRD==true)
   {
    sethideMRD(false)
    }

}if(Column_Attribute==="Spouse Adhaar")
{
   if(hideMSA==true)
   {
    sethideMSA(false)
    }

}
if(Column_Attribute==="Spouse Voter Id")
{
   if(hideMVI==true)
   {
    sethideMVI(false)
    }

}
if(Column_Attribute==="Spouse PAN")
{
   if(hideMPAN==true)
   {
    sethideMPAN(false)
    }

}
if(Column_Attribute==="Spouse CSD")
{
   if(hideMCSD==true)
   {
    sethideMCSD(false)
    }

}
if(Column_Attribute==="Spouse ECHS")
{
   if(hideMECHS==true)
   {
    sethideMECHS(false)
    }

}
if(Column_Attribute==="Divorce Date")
{
   if(hideMDDD==true)
   {
    sethideMDDD(false)
    }

}
if(Column_Attribute==="Court Order")
{
   if(hideMCCC==true)
   {
    sethideMCCC(false)
    }

}
if(Column_Attribute==="Death Date")
{
   if(hideSMD==true)
   {
    sethideSMD(false)
    }

}


//////////////////////

if(Column_Attribute==="Civil Qualification")
{
   if(hideCivil_Qualification==true)
   {
    sethideCivil_Qualification(false)
    }

}if(Column_Attribute==="Additional Course")
{
   if(hideAddi_Course==true)
   {
    sethideAddi_Course(false)
    }

}if(Column_Attribute==="Equivalent Test passed")
{
   if(hideEqui_Test==true)
   {
    sethideEqui_Test(false)
    }

}
if(Column_Attribute==="Civil Employment Status")
{
   if(hideCivil_Emp_Status==true)
   {
    sethideCivil_Emp_Status(false)
    }

}
if(Column_Attribute==="Department")
{
   if(hideDept==true)
   {
    sethideDept(false)
    }

}
if(Column_Attribute==="Sector")
{
   if(hideSector==true)
   {
    sethideSector(false)
    }

}
if(Column_Attribute==="Present Designation")
{
   if(hidePres_Desg==true)
   {
    sethidePres_Desg(false)
    }

}
if(Column_Attribute==="Employer")
{
   if(hideEmployer==true)
   {
    sethideEmployer(false)
    }

}
if(Column_Attribute==="Monthly Income")
{
   if(hideMonth_Income==true)
   {
    sethideMonth_Income(false)
    }

}
if(Column_Attribute==="Official No")
{
   if(hideOfficial_No==true)
   {
    sethideOfficial_No(false)
    }

}

if(Column_Attribute==="Designation While Retirement ")
{
   if(hideDesg_Retire==true)
   {
    sethideDesg_Retire(false)
    }

}if(Column_Attribute==="Date of Retirement")
{
   if(hideRetire_Date==true)
   {
    sethideRetire_Date(false)
    }

}

if(Column_Attribute==="Civil PPO No")
{
   if(hideCivil_PPO_No==true)
   {
    sethideCivil_PPO_No(false)
    }

}

///////

if(Column_Attribute==="ESM No")
{
   if(hideESM_No==true)
   {
    sethideESM_No(false)
    }

}

if(Column_Attribute==="Death Nature")
{
   if(hideDeath_Nature==true)
   {
    sethideDeath_Nature(false)
    }

}if(Column_Attribute==="Death Date")
{
   if(hideDeath_Date==true)
   {
    sethideDeath_Date(false)
    }

}

if(Column_Attribute==="Family Pension")
{
   if(hideFamily_Pension==true)
   {
    sethideFamily_Pension(false)
    }

}
if(Column_Attribute==="Widow Registration No")
{
   if(hideW_No==true)
   {
    sethideW_No(false)
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



  const downloadPdfData = (e) =>{
   const pdf = new jsPDF();
   var doc = new jsPDF('portrait','px','a3','false');
   pdf.autoTable({html:"#table-to-xls"});
   pdf.save("Record Filter.pdf")

}
    const axiosJWT = axios.create();

    const getUsers = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/TFService');
      setUsers(response.data);
    }
//Widow
    const getUsers1 = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/awidowform');
      setUsers1(response.data);
    }
//Employment
    const getUsers2 = async () => {
      const sn=localStorage.getItem('Service_No');
      const response = await axiosJWT.get('http://localhost:5000/adminformuee');
      setUsers2(response.data);
    }

    const viewwidow = (e) =>  {
        setvisible(false)
        setvisible1(true)
        setvisible2(false)
        setwidow(true)
        setesm(false)
        setemmp(false)
    }

    const viewemp = (e) =>  {
        setvisible(false)
        setvisible1(false)
        setvisible2(true)
        setemmp(true)
        setesm(false)
        setwidow(false)
    }




    return (
    <div className="center">
    <div class="wrapper fadeInDown">
{/*     -----------------------------------------  HEADER  SECTION -------------------------------------------------  */}


{/*   -----------------------------------------  HEADER  SECTION ------------------------------------------------- */}

    <div className="upperForm1Content">
    <div className="text-center text-dark p-3" style={{backgroundColor: "#008E89"}}>
    <label className="header">Record Filter </label>
    </div>



    <FormLabel text={"Attributes"} />
    { esm &&
      <div className = "row">
    <div className="col-md-7 space">
    <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
    <option value="" selected disabled>--Select One--</option>
    {COLS.map(c => <option key={c}>{c}</option>)}
    </select>
    </div><br/>  </div>
           }


    { widow &&
      <div className = "row">
    <div className="col-md-7 space">
    <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
    <option value="" selected disabled>--Select One--</option>
    {COLSW.map(c => <option key={c}>{c}</option>)}
    </select>
    </div><br/>
    </div>
         }


         { emmp &&
           <div className = "row">
         <div className="col-md-7 space">
         <select  className="col-lg-6 dropdown_align"value={Column_Attribute}  name = "Column_Attribute" value = {Column_Attribute} onClick = {ColumnVisible} onChange={(e) => setColumn_Attribute(e.target.value)} >
         <option value="" selected disabled>--Select One--</option>
         {COLSE.map(c => <option key={c}>{c}</option>)}
         </select>
         </div><br/>
         </div>
              }
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <button className = "right-align btn btn-secondary "  onClick = {viewwidow}>Widow Record </button>&nbsp;&nbsp;&nbsp;
    <button className = "btn btn-secondary right-align"  onClick = {viewemp}>Employed Record </button><br/><br/>

<div className = "react-bootstrap-table  ">
    <form onSubmit={TableFilter2}>

              { visible &&
                <div className = "row">
    <BootstrapTable
     bootstrap4
     id = "table-to-xls"
     responsive
     keyField = 'id'
     columns = {columns}
     data= {users}
     pagination = {pagination}
     filter = {filterFactory()}

     />  </div>
           }


                     { visible1 &&
                       <div className = "row">
           <BootstrapTable
            bootstrap4
            responsive
             id = "table-to-xls"
            keyField = 'id'
            columns = {columns}
            data= {users1}
            pagination = {pagination}
            filter = {filterFactory()}

            />  </div>
                  }

                  { visible2 &&
                    <div className = "row">
                 <BootstrapTable
                 bootstrap4
                 responsive
                  id = "table-to-xls"
                 keyField = 'id'
                 columns = {columns}
                 data= {users2}
                 pagination = {pagination}
                 filter = {filterFactory()}

                 />  </div>
                 }
<br/><br/>





</form>

</div>




</div>


<ReactToExcel
className= "btn btn-primary btn-md left-align"
table = "table-to-xls"
filename = "Record Filter"
sheet = "sheet 1 "
buttonText = "Download as Excel"
/><br/><br/>

<button className = "btn btn-primary btn-md"  onClick = {downloadPdfData} >Download As PDF  </button>




</div>
</div>
)
}

export default TableFilter2
