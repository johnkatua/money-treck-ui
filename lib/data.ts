import {
  Settings,
  LayoutDashboard,
  WalletCards,
  Wallet,
  CreditCard,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "John Katua",
    email: "user.me@gmail.com",
    avatar: "/images/avatar.jpg",
  },
  items: [
    {
      title: "Dashboard",
      url: "/home",
      icon: LayoutDashboard,
    },
    {
      title: "Revenue",
      url: "/revenue",
      icon: WalletCards,
    },
    {
      title: "Budget",
      url: "/budget",
      icon: Wallet,
    },
    {
      title: "Expenditure",
      url: "/expenses",
      icon: CreditCard,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

// <a href="https://www.freepik.com/free-vector/young-man-glasses-hoodie_356306296.htm">Image by brgfx on Freepik</a>
