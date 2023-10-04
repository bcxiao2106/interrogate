import { useState } from "react";
import Grid from "./grid/grid";
import { IColumn, IRowData } from "./typings/grid.typings";

function App() {
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [rows, setRows] = useState<IRowData[]>([]);

    setTimeout(() => {
      setColumns([
        { columnName: "aaa", dataPath: "aa" },
        { columnName: "bbb", dataPath: "bb" },
        { columnName: "ccc", dataPath: "cc" },
      ]);
    }, 1500);
    setTimeout(() => {
      setRows([
        { aa: "a1", bb: "b1", cc: 'c1' },
        { aa: "a1", bb: "b1", cc: 'c2' },
        { aa: "a1", bb: "b1", cc: 'c3' },
      ]);
    }, 2500);
  return (
    <div>
      <Grid columns={columns} rows={rows}></Grid>
    </div>
  );
}

export default App;
