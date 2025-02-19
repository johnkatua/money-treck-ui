import { create } from "zustand";

type State = {
  pageIndex: number;
  pageSize: number;
};

type Action = {
  updatePaginationState: (data: State) => void;
};

export const usePaginationStore = create<State & Action>((set) => ({
  pageIndex: 1,
  pageSize: 5,
  updatePaginationState: ({ pageIndex, pageSize }) =>
    set({
      pageIndex: pageIndex + 1,
      pageSize,
    }),
}));
