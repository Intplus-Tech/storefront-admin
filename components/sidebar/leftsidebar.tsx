"use client";
import {
  BarChart,
  Home,
  HomeIcon,
  ShoppingBagIcon,
  StoreIcon,
  User,
  User2Icon,
} from "lucide-react";
import React from "react";
import LeftSidebarRoutesItem from "./left-sidebar-item";
import DashboardLineIcon from "remixicon-react/DashboardLineIcon";

function LeftSidebar() {
  const activities = [
    { name: "Dashboard", icon: Home, link: "/overview" },
    {
      name: "Financial/Reporting",
      icon: BarChart,
      link: "/financial-reporting",
    },
    {
      name: "Store Management",
      icon: StoreIcon,
      link: "/store-management",
    },
    {
      name: "Buyer Management",
      icon: ShoppingBagIcon,
      link: "/buyer-management",
    },
    { name: "User/Store Support", icon: User2Icon, link: "/support" },
    { name: "Settings", icon: User, link: "/settings" },
  ];

  return (
    <div>
      {" "}
      <div className="flex flex-col  p-2 pt-4  space-y-2">
        {activities.map((item) => (
          <LeftSidebarRoutesItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
