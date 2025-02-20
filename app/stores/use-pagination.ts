import { create } from "zustand";

type State = {
  pageIndex: number;
  pageSize: number;
};

type Action = {
  updatePaginationState: (data: State) => void;
};

export const usePaginationStore = create<State & Action>((set) => ({
  pageIndex: 0,
  pageSize: 5,
  updatePaginationState: (pagination) =>
    set({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
    }),
}));
