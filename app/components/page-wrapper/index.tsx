"use client";

import { FC, ReactNode } from "react";
import Header from "../header";
import { Menu } from "lucide-react";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="relative h-full w-full">
      <div className="flex items-center justify-between sticky top-0 left-0 p-2 bg-white shadow-md z-10">
        <Header title={title} />
        <button className="text-white bg-[--theme-color-one] p-2 rounded-md">
          <Menu size={24} />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default PageWrapper;
