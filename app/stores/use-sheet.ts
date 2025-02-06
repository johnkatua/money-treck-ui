import { create } from "zustand";

type SheetState = {
  open: boolean;
  switchSheetState: (open: boolean) => void;
};

export const useSheet = create<SheetState>((set) => ({
  open: false,
  switchSheetState: (open) => set({ open }),
}));
