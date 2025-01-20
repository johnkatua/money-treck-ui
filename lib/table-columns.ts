import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export type Revenue = {
  id: string;
  name: string;
  amount: number;
};

export const revenueColumns = useMemo<ColumnDef<Revenue[]>>(() => [], []);
