import {
  Settings,
  LayoutDashboard,
  WalletCards,
  Wallet,
  CreditCard,
  Banknote,
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
      url: "/",
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
      url: "/expenditure",
      icon: CreditCard,
    },
    {
      title: "Savings",
      url: "/savings",
      icon: Banknote,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const budgetData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

// <a href="https://www.freepik.com/free-vector/young-man-glasses-hoodie_356306296.htm">Image by brgfx on Freepik</a>
