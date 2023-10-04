export interface IGridOptions {
    columns: IColumn[];
    rows: IRowData[];
}

export interface IColumn {
    columnName: string;
    dataPath?: string | string[];
}

export type IRowData = Record<string, any>;