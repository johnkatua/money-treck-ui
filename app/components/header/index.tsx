import React, { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <h2 className="text-[--theme-color-one] text-2xl">{title}</h2>;
};

export default Header;
