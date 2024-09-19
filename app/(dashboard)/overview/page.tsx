"use client";
import DashboardCommonHeader from "@/components/common/dashboard-common-header";
import { Settings, Settings2 } from "lucide-react";
import React from "react";
import SellerActivity from "./seller-activity";
import BuyerInsights from "./buyer-insights";
import OrdersOverTime from "./orders-overtime";
import LastSales from "./last-sales";
import RecentTransactions from "./recent-transactions";
import TopProducts from "./top-products";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className="   w-full flex flex-col ">
      <DashboardCommonHeader
        title="Dashboard"
        rightIcon={
          <div
            onClick={() => console.log("click")}
            className=" p-3 border space-x-2 cursor-pointer border-[#979797] text-[#979797] border-gray-3  bg-white flex rounded-md items-center justify-center"
          >
            <Settings size={16} color="#979797" />
            <p className="font-extralight text-base ">Manage</p>
          </div>
        }
        rightIconAction={() => console.log("bell clicked")}
      />

      <SellerActivity />
      <BuyerInsights />

      <div className="flex my-8">
        <OrdersOverTime />
        <LastSales />
      </div>
      <div className="flex my-8  ">
        <RecentTransactions />
        <TopProducts />
      </div>
    </div>
  );
};

export default OverviewPage;
