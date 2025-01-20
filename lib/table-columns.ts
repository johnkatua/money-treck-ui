import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export type Revenue = {
  id: string;
  name: string;
  amount: number;
};

export const revenueColumns: ColumnDef<Revenue>[] = useMemo(
  () => [
    {
      accessorKey: "id",
      header: () => "Id",
    },
    {
      accessorKey: "name",
      header: () => "Name",
    },
    {
      accessorKey: "amount",
      header: () => "Amount",
    },
  ],
  []
);
