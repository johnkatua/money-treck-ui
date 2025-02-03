"use client";

import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

type PeriodType = {
  Daily: string;
  daily: string;
  weekly: string;
  monthly: string;
  yearly: string;
};

// const periodType = {
//   Daily: "destructive",
//   daily: "destructive",
//   weekly: "default",
//   monthly: "secondary",
//   yearly: "outline",
// };

const periodType: Record<
  "daily" | "weekly" | "monthly" | "yearly",
  "destructive" | "default" | "secondary" | "outline"
> = {
  daily: "destructive",
  weekly: "default",
  monthly: "secondary",
  yearly: "outline",
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
  {
    accessorKey: "period",
    header: () => "Period",
    cell: ({ row }) => {
      const period = row.original.period as keyof typeof periodType;
      return (
        <Badge variant={periodType[period] ?? "default"}>
          {row.original.period}
        </Badge>
      );
    },
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
  {
    accessorKey: "period",
    header: () => "Period",
    cell: ({ row }) => {
      const period = row.original.period as keyof typeof periodType;
      return (
        <Badge variant={periodType[period] ?? "default"}>
          {row.original.period}
        </Badge>
      );
    },
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
