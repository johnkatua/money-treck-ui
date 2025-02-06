import { useSheet } from "@/app/stores";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { FC, ReactNode } from "react";

interface CustomSheetProps {
  customBtn: ReactNode;
}

const CustomSheet: FC<CustomSheetProps> = ({ customBtn }) => {
  const open = useSheet((state) => state.open);
  return (
    <Sheet open={open}>
      <SheetTrigger asChild>{customBtn}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="bg-gradient-to-r from-gray-800 to-gray-700 p-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white">Edit Profile</SheetTitle>
            <div
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
              aria-label="Close Sheet"
              title="Close Sheet"
              onClick={() => console.log("Close Sheet")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </div>
          </div>
        </SheetHeader>
        <div className="p-6">
          <p className="text-center">Sheet Content</p>
        </div>
        <SheetFooter className="p-6">
          <Button variant={"default"}>Close Sheet</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
