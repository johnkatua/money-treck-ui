"use client";

import { FC, ReactNode } from "react";
import Header from "../header";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="relative h-full w-full">
      <div className="sticky top-0 left-0 p-2 bg-white shadow-md z-10">
        <Header title={title} />
      </div>
      <div className="p-4">{children}</div>
      {/* <CustomDialog /> */}
    </div>
  );
};

export default PageWrapper;
