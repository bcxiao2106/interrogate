import { IColumn, IGridOptions } from "../typings/grid.typings";

function Grid(props: IGridOptions) {
  return (
    <>
    {props.columns.map((col: IColumn) => <div key={col.columnName}>{col.columnName}</div>)}
    </>
  );
}

export default Grid;