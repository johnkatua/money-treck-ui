"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
const TableWrapper = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns: useMemo(() => columns, []),
    getCoreRowModel: getCoreRowModel(),
    manualGrouping: true,
    debugTable: true,
  });
  return (
    <div className="p-4 bg-gradient-to-r from-red-300 to-pink-300 rounded-lg shadow-lg">
      <div className="h-2" />
      <table className="w-full border-collapse overflow-hidden shadow-lg rounded-md">
        <thead>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <tr
              key={id}
              className="bg-gradient-to-r from-gray-800 to-gray-700 text-white"
            >
              {headers.map(
                ({ id, colSpan, isPlaceholder, column, getContext }) => (
                  <th
                    key={id}
                    colSpan={colSpan}
                    className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-600"
                  >
                    {isPlaceholder ? null : (
                      <div className="uppercase tracking-wider">
                        {flexRender(column.columnDef.header, getContext())}
                      </div>
                    )}
                  </th>
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(({ id, getVisibleCells }, rowIndex) => (
            <tr
              key={id}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
              } hover:bg-gray-200`}
            >
              {getVisibleCells().map(({ id, column, getContext }) => (
                <td
                  key={id}
                  className="px-6 py-4 text-sm border-b border-gray-300"
                >
                  {flexRender(column.columnDef.cell, getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
