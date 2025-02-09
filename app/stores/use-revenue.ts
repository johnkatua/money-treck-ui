import { create } from "zustand";

type State = {
  selectedRevenueId: string | null;
};

type Action = {
  updateSelectedRevenueId: (
    selectedRevenueId: State["selectedRevenueId"]
  ) => void;
};

export const useRevenueStore = create<State & Action>((set) => ({
  selectedRevenueId: null,
  updateSelectedRevenueId: (selectedRevenueId) =>
    set(() => ({
      selectedRevenueId: selectedRevenueId,
    })),
}));
