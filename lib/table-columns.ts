"use client";

import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
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
