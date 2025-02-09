"use client";

import CustomDialog from "@/app/components/custom-dialog";
import CustomDropDown from "@/app/components/dropdown";
import CustomDropdownMenuItem from "@/app/components/dropdown/dropdown-menu-item";
import { useRevenueStore, useSheet } from "@/app/stores";
import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";

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
      const [open, setOpen] = useState(false);
      const updateSelectedRevenueId = useRevenueStore(
        (state) => state.updateSelectedRevenueId
      );
      const revenue = row.original as Revenue;
      const handleEdit = () => {
        console.log("Edit Revenue", revenue);
        // switchSheetState(revenue._id);
        updateSelectedRevenueId(revenue._id);
        console.log("Switched sheet state for ID:", revenue._id);
      };

      const handleDelete = () => {
        setOpen(true);
        console.log("Delete Revenue", row.original);
      };
      return (
        <>
          <CustomDropDown id={revenue._id}>
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
          {open && (
            <CustomDialog open={open} handleClose={() => setOpen(false)} />
          )}
        </>
      );
    },
  },
];

// const

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
