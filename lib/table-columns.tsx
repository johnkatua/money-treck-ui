"use client";

import CustomDropDown from "@/app/components/dropdown";
import CustomDropdownMenuItem from "@/app/components/dropdown/dropdown-menu-item";
import { useDialogStore, useRevenueStore, useSheet } from "@/app/stores";
import { Revenue } from "@/app/types";
import { IBudget } from "@/app/types/Budget";
import { IExpenditure } from "@/app/types/Expenditure";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

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
    accessorKey: "view",
    header: () => "View",
    cell: ({ row }) => {
      const router = useRouter();
      const { updateSelectedRevenue } = useRevenueStore();
      const revenue = row.original;
      const handleNavigate = () => {
        updateSelectedRevenue(row.original);
        router.push(`/revenue/${revenue._id}`);
      };
      return <Eye className="cursor-pointer" onClick={handleNavigate} />;
    },
  },
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
  // {
  //   accessorKey: "",
  //   header: "Actions",
  //   cell: ({ row }) => {
  //     const switchSheetState = useSheet((state) => state.switchSheetState);
  //     const { openDialog } = useDialogStore();
  //     const revenue = row.original as Revenue;
  //     const handleEdit = () => {
  //       console.log("Edit Revenue", revenue);
  //       console.log("Switched sheet state for ID:", revenue._id);
  //     };

  //     const handleDelete = () => {
  //       openDialog();
  //       console.log("Delete Revenue", row.original);
  //     };
  //     return (
  //       <>
  //         <CustomDropDown id={revenue._id}>
  //           <CustomDropdownMenuItem
  //             color="blue"
  //             text="Edit Revenue"
  //             handleClick={() => handleEdit()}
  //           >
  //             <Edit size={16} />
  //           </CustomDropdownMenuItem>
  //           <CustomDropdownMenuItem
  //             color="red"
  //             text="Delete Revenue"
  //             handleClick={handleDelete}
  //           >
  //             <Trash size={16} />
  //           </CustomDropdownMenuItem>
  //         </CustomDropDown>
  //       </>
  //     );
  //   },
  // },
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
