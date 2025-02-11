import { create } from "zustand";
import { IBudgetResponse } from "../types";

type State = {
  selectedBudget: IBudgetResponse | null;
};

type Action = {
  updateSelectedBudget: (selectedBudgetId: State["selectedBudget"]) => void;
};

export const useBudgetStore = create<State & Action>((set) => ({
  selectedBudget: null,
  updateSelectedBudget: (selectedBudget) =>
    set(() => ({
      selectedBudget,
    })),
}));
