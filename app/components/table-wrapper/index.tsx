"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      <div className="h-2" />
      <div className="flex items-center gap-2 w-full bg-slate-500">
        <Button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <Input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <Select
          value={table.getState().pagination.pageSize}
          onValueChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select page size" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TableWrapper;
