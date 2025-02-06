import { create } from "zustand";

type SheetState = {
  open: boolean;
  switchState: (open: boolean) => void;
};

export const useSheet = create<SheetState>((set) => ({
  open: false,
  switchState: (open) => set({ open }),
}));
