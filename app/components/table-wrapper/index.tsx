import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
const TableWrapper = () => {
  const table = useReactTable({
    data: [],
    columns: [],
    getCoreRowModel: getCoreRowModel(),
    manualGrouping: true,
    debugTable: true,
  });
  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
