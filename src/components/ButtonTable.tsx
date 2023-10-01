import { tableList } from "@/lib/data";
import React from "react";
import { ButtonTableProps } from "@/lib/Type";

function ButtonTable({ onTableSelect, selectedTable }: ButtonTableProps) {
  return (
    <div className="btn-group">
      {tableList.map((table) => (
        <button
          key={table.id}
          className={` btn w-[7rem] lg:btn-lg lg:w-[10rem] lg:h-[5rem] lg:text-xl ${
            selectedTable === table.name ? "bg-blue-500" : ""
          } hover:bg-blue-500/50`}
          onClick={() => onTableSelect(table.name)}
        >
          {table.name}
        </button>
      ))}
    </div>
  );
}

export default ButtonTable;
