"use client";

import CustomDropDown from "@/app/components/dropdown";
import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";

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
  {
    accessorKey: "",
    header: "Status",
    cell: ({ row }) => {
      return (
        <CustomDropDown>
          <DropdownMenuItem>
            <span>Edit Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Delete Project</span>
          </DropdownMenuItem>
        </CustomDropDown>
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
