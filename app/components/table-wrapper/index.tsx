import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
const TableWrapper = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualGrouping: true,
    debugTable: true,
  });
  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <tr key={id}>
              {headers.map(
                ({ id, colSpan, isPlaceholder, column, getContext }) => (
                  <th key={id} colSpan={colSpan}>
                    {isPlaceholder ? null : (
                      <div>
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
          {table.getRowModel().rows.map(({ id, getVisibleCells }) => (
            <tr key={id}>
              {getVisibleCells().map(({ id, column, getContext }) => (
                <td key={id}>
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
