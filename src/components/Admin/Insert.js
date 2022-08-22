import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FormLabel from "../../view/FormLabel";
import Prefix from "./InsertComponents/Prefix";

import Rsb from "./InsertComponents/Rsb";
import Zsb from "./InsertComponents/Zsb";
import Bank from "./InsertComponents/Bank";
import MedicalCategory from "./InsertComponents/MedicalCategory";
import RecordOfficeArmy from "./InsertComponents/RecordOfficeArmy";
import State from "./InsertComponents/State";
import District from "./InsertComponents/District";
import Trade from "./InsertComponents/Trade";
import Taluk from "./InsertComponents/Taluk";
import Rank from "./InsertComponents/Rank";

import Single from "./single";

const Insert = () => {
  const [DValue, setDValue] = useState("");
  const [visible, setVisible] = useState(false);

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // const DEPARTMENT = ['Service`,'Corps`,'Discharce Reason`,'Discharge Character`,'Religion`,'Caste`,'Civil Qualification`,'Reg Type`,'Rank Category`,'Rsb`,
  // 'Zsb`,
  // 'Bank`,
  // 'MedicalCategory`,
  // 'RecordOfficeArmy`,
  // 'State`,
  // 'District`,
  // 'Trade`,
  // 'Taluk`, 'Prefix`,'Rank'];

  const DEPARTMENT = [
    "Bank",
    "Caste",
    "Civil Qualification",
    "Corps",
    "Discharge Character",
    "Discharge Reason",
    "District",
    "MedicalCategory",
    "Prefix",
    "Rank",
    "Rank Category",
    "RecordOfficeArmy",
    "Reg Type",
    "Religion",
    "Rsb",
    "Service",
    "State",
    "Taluk",
    "Trade",
    "Zsb",
  ];

  return (
    <div className=" row">
      <div className="col-lg-12 insert-pad">
        <div>
          {" "}
          <FormLabel text={"Insert Into"} />
          <div className="col-md-4 space">
            <select value={DValue} onChange={(e) => setDValue(e.target.value)}>
              {DEPARTMENT.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <button className=" btn btn-info">
          <Link to="/tablefilter2">Filter Records</Link>{" "}
        </button>
      </div>

      <div className="col-lg-12">
        {(() => {
          if (DValue == "Rsb") {
            return <Rsb />;
          } else if (DValue == "Zsb") {
            return <Zsb />;
          } else if (DValue == "Bank") {
            return <Bank />;
          } else if (DValue == "MedicalCategory") {
            return <MedicalCategory />;
          } else if (DValue == "RecordOfficeArmy") {
            return <RecordOfficeArmy />;
          } else if (DValue == "State") {
            return <State />;
          } else if (DValue == "District") {
            return <District />;
          } else if (DValue == "Trade") {
            return <Trade />;
          } else if (DValue == "Taluk") {
            return <Taluk />;
          } else if (DValue == "Rank") {
            return <Rank />;
          } else if (DValue == "Prefix") {
            return <Prefix />;
          } else {
            return <Single text={DValue} />;
          }
        })()}
      </div>
    </div>
  );
};

export default Insert;
