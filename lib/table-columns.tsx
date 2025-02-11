"use client";

import CustomDropDown from "@/app/components/dropdown";
import CustomDropdownMenuItem from "@/app/components/dropdown/dropdown-menu-item";
import { useDialogStore, useRevenueStore, useSheet } from "@/app/stores";
import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
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
      const switchSheetState = useSheet((state) => state.switchSheetState);
      const { openDialog } = useDialogStore();
      const { updateSelectedRevenue } = useRevenueStore();
      const revenue = row.original as Revenue;
      const handleEdit = () => {
        switchSheetState(revenue._id);
        updateSelectedRevenue(revenue);
      };

      const handleDelete = () => {
        openDialog();
        updateSelectedRevenue(revenue);
      };
      return (
        <>
          <CustomDropDown>
            <CustomDropdownMenuItem
              color="blue"
              text="Edit Revenue"
              handleClick={() => handleEdit()}
            >
              <Edit size={16} />
            </CustomDropdownMenuItem>
            <CustomDropdownMenuItem
              color="red"
              text="Delete Revenue"
              handleClick={handleDelete}
            >
              <Trash size={16} />
            </CustomDropdownMenuItem>
          </CustomDropDown>
        </>
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
  {
    accessorKey: "",
    header: "Actions",
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
