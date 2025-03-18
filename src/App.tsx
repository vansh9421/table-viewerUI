import "./styles.css";
import { data } from "./extracted-tables";
import TableStructureViewer from "./table-structure-viewer";

export default function App() {
  const tableData = Object.keys(data).map((key) => data[key]);

  return (
    <div className="App">
      {tableData.map((table, idx) => (
        <TableStructureViewer key={idx} table={table} />
      ))}
    </div>
  );
}

/**
 *  UI needs a json structure as below to map data
 * {
 * "table1":[[cell1,cell2,cell3],[cell1,cell2,cell3]],
 *  "table2":[[cell1,cell2,cell3],[cell1,cell2,cell3]],
 * }
 *
 *
 */
