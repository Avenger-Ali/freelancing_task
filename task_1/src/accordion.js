import React, { useState, useEffect } from 'react';
import '../Distribution/accordion.css';
import TableHeaders from '../Distribution/TableHeader'
import TableContent from "../Distribution/TableContent";

const Accordion = ({ title, tableData }) => {
    const [isActive, setIsActive] = useState(false);
    const [tableHeaders, setTableHeaders] = useState([]);

    useEffect(() => {
        const getTableHeaders = async () => {
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
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && (
                <div className="accordion-content">
                    <table>
                        <TableHeaders tableHeaders={tableHeaders} />
                        <TableContent tableData={tableData} />
                    </table>
                </div>
            )}
        </div>
    );
};

export default Accordion;