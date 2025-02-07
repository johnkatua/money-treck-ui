"use client";

import CustomDropDown from "@/app/components/dropdown";
import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

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
    header: "Actions",
    cell: ({ row }) => {
      return (
        <CustomDropDown>
          <DropdownMenuItem
            style={{
              color: "blue",
            }}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
          >
            <Edit size={16} />
            <span onClick={() => console.log(row.original)}>Edit Revene</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            style={{
              color: "red",
            }}
            className="flex items-center gap-2 px-4 py-2 !text-red-600 hover:bg-red-100 cursor-pointer transition-all duration-300 rounded-md"
          >
            <Trash size={16} />
            <span className="font-medium">Delete Revenue</span>
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
