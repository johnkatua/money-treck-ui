"use client";

import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { ColumnDef } from "@tanstack/react-table";

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
  {
    accessorKey: "period",
    header: () => "Period",
    cell: ({ row }) => <span>{row.original.period}</span>,
  },
];

export const budgetColumns: ColumnDef<IBudget>[] = [
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

export const expenseColumns: ColumnDef<IExpenditure>[] = [
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
