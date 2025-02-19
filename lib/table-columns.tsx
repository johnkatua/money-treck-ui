"use client";

import CustomActions from "@/app/components/actions";
import { useDialogStore, useRevenueStore, useSheet } from "@/app/stores";
import { useBudgetStore } from "@/app/stores/use-budget";
import { useExpenditureStore } from "@/app/stores/use-expenditure";
import { Revenue } from "@/app/types";
import { IBudget, IBudgetResponse } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
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
    cell: ({ row }) => <span>{row.original.amount.toLocaleString()}</span>,
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
      const { switchSheetState } = useSheet();
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
        <CustomActions handleDelete={handleDelete} handleEdit={handleEdit} />
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
    cell: ({ row }) => <span>{row.original.amount.toLocaleString()}</span>,
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
      const { switchSheetState } = useSheet();
      const { openDialog } = useDialogStore();
      const { updateSelectedBudget } = useBudgetStore();
      const budget = row.original as IBudgetResponse;

      const handleEdit = () => {
        switchSheetState(budget._id);
        updateSelectedBudget(budget);
      };

      const handleDelete = () => {
        openDialog();
        updateSelectedBudget(budget);
      };

      return (
        <CustomActions handleDelete={handleDelete} handleEdit={handleEdit} />
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
    cell: ({ row }) => <span>{row.original.amount.toLocaleString()}</span>,
  },
  {
    accessorKey: "",
    header: "Actions",
    cell: ({ row }) => {
      const { switchSheetState } = useSheet();
      const { openDialog } = useDialogStore();
      const { updateSelectedExpenditure } = useExpenditureStore();

      const expenditure = row.original as IExpenditure;

      const handleEdit = () => {
        switchSheetState(expenditure._id);
        updateSelectedExpenditure(expenditure);
      };

      const handleDelete = () => {
        openDialog();
        updateSelectedExpenditure(expenditure);
      };
      return (
        <CustomActions handleDelete={handleDelete} handleEdit={handleEdit} />
      );
    },
  },
];
