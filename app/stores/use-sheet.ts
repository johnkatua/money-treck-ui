import { create } from "zustand";

type SheetStore = {
  openSheetId: string | null;
  switchSheetState: (id: string | null) => void;
};

export const useSheet = create<SheetStore>((set) => ({
  openSheetId: null,
  switchSheetState: (id) =>
    set((state) => (state.openSheetId !== id ? { openSheetId: id } : state)),
}));
