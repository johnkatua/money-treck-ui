import { create } from "zustand";
import { IData } from "../types";

type State = {
  selectedRevenue: IData | null;
};

type Action = {
  updateSelectedRevenue: (selectedRevenueId: State["selectedRevenue"]) => void;
};

export const useRevenueStore = create<State & Action>((set) => ({
  selectedRevenue: null,
  updateSelectedRevenue: (selectedRevenue) =>
    set(() => ({
      selectedRevenue,
    })),
}));
