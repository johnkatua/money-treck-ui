import { create } from "zustand";

type State = {
  selectedRevenue: null;
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
