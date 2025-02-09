import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  openDialog: () => void;
  closeDialog: () => void;
};

export const useDialogStore = create<State & Action>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));
