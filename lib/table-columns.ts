"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Revenue = {
  id: string;
  name: string;
  amount: number;
};

export const revenueColumns: ColumnDef<Revenue>[] = [
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
];
