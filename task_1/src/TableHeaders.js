import React from "react";

const TableHeaders = ({tableHeaders}) => {

    let newTableHeaders =
    tableHeaders &&
    tableHeaders.length &&
    tableHeaders.map((th, index) => (
      <th key={index}>
        {th.first_name}
        <br />
        {th.last_name}
      </th>
    ));
  console.log("newTableHeaders==>", newTableHeaders);

  const finalHeaders = () => {
    return (
      <thead>
        <tr>
          <th colSpan="5"> </th>
          {newTableHeaders}
        </tr>
      </thead>
    );
  };

    return(
        <>{finalHeaders()}</>
    )
}

export default TableHeaders;