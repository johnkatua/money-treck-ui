import { create } from "zustand";
import { IExpenditureResponse } from "../types";

type State = {
  selectedExpenditure: IExpenditureResponse | null;
};

type Action = {
  updateSelectedExpenditure: (
    selectedExpenditureId: State["selectedExpenditure"],
  ) => void;
};

export const useExpenditureStore = create<State & Action>((set) => ({
  selectedExpenditure: null,
  updateSelectedExpenditure: (selectedExpenditure) =>
    set(() => ({
      selectedExpenditure,
    })),
}));
