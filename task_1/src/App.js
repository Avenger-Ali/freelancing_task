import './App.css';
import DataComponent from './DataComponent';
import tableData from "./table_data.json";

function App() {
  console.log("tableData",tableData);
  
  return (
    <DataComponent tableData={tableData} />
  );
}

export default App;
