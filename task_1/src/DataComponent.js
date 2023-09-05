import React, { useState, useEffect } from "react";
import "./App.css";
import TableHeaders from "./TableHeaders";
import TableContent from "./TableContent";

const DataComponent = ({ tableData }) => {
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const getTableHeaders = async() => {
        const tableHeaders = await
          tableData &&
          tableData.length &&
          tableData[0] &&
          tableData[0].categories &&
          tableData[0].categories.map((category) => category);
        setTableHeaders(tableHeaders);
        console.log("tableHeaders from effect==>", tableHeaders);
    }
    getTableHeaders();
  }, [tableData]);
  console.log("tableData from parent==>", tableData);


  return (
    <div>
      <div className="App">
        <p>Discover</p>
        <select className="business">
          <option>Business Area</option>
        </select>
        <p>
          by <b>IMT,IMT-1</b> and <b>Project Manager</b>
        </p>
        <br />
      </div>

      <div className="content">
        <button className="business_button">IMT</button>
        <button className="accordion_button">-</button>
        <div className="data_table">
          <table>
            <TableHeaders tableHeaders={tableHeaders} />
            <TableContent tableData={tableData} />
          </table>
        <div className="line"></div>
        </div>
        <div className="side_content">side content</div>
      </div>
    </div>
  );
};

export default DataComponent;
