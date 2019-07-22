import React from "react";

interface Column {
  name: string;
  label: string;
}

type TableProps = {
  columns: Column[];
  data: any[];
  delete: (id: number) => void;
} & React.HTMLAttributes<HTMLDivElement>

const Table: React.SFC<TableProps> = (props: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((column, cKey: number) =>
            <th key={cKey}>{column.label}</th>
          )}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, dKey: number) => {
          const keys = Object.keys(item);
          return (
            <tr key={dKey}>{
              keys.map((key, rKey) => {
                if (key !== "id") {
                  return (
                    <td key={rKey}>{item[key]}</td>
                  )
                }
                return null;
              })
            }
              <td><button>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;