"use client";

import { useSheet } from "@/app/stores";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { FC, ReactNode } from "react";

interface CustomSheetProps {
  customBtn?: ReactNode;
  children: ReactNode;
  id: string;
}

const CustomSheet: FC<CustomSheetProps> = ({ customBtn, id, children }) => {
  const openSheetId = useSheet((state) => state.openSheetId);
  const switchSheetState = useSheet((state) => state.switchSheetState);
  const isOpen = openSheetId === id;
  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => switchSheetState(open ? id : null)}
    >
      <SheetTrigger asChild>{customBtn}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="bg-gradient-to-r from-gray-800 to-gray-700 p-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white">Edit Profile</SheetTitle>
            <div
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
              aria-label="Close Sheet"
              title="Close Sheet"
              onClick={() => switchSheetState(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </div>
          </div>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
