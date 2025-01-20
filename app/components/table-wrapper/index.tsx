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
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
const TableWrapper = ({ data, columns }) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const table = useReactTable({
    data,
    columns: useMemo(() => columns, []),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
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
      <div className="flex flex-wrap items-center justify-between p-4 bg-gray-900 text-gray-300 rounded-b-md shadow-md border-t border-gray-700">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">
            Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
            <strong>{table.getPageCount().toLocaleString()}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Go to page:</span>
          <Input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 text-center"
          />
        </div>

        <div className="flex items-center gap-2">
          <Select
            onValueChange={(value) => table.setPageSize(Number(value))}
            defaultValue={String(table.getState().pagination.pageSize)}
          >
            <SelectTrigger className="w-20">
              <SelectValue placeholder="Rows" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={String(pageSize)}>
                  {pageSize} rows
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
