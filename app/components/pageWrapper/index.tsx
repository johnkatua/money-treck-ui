import React, { FC, ReactNode } from "react";
import Header from "../header";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div>
      <div>
        <Header title={title} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
