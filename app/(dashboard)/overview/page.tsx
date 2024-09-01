"use client";
import DashboardCommonHeader from "@/components/common/dashboard-common-header";
import { Settings, Settings2 } from "lucide-react";
import React from "react";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className=" h-screen  w-full ">
      <DashboardCommonHeader
        title="Overview"
        rightIcon={
          <div
            onClick={() => console.log("click")}
            className=" p-3 border space-x-2 cursor-pointer border-[#979797] text-[#979797] border-gray-3  bg-white flex rounded-md items-center justify-center"
          >
            <Settings size={16} color="#979797" />
            <p>Manage</p>
          </div>
        }
        rightIconAction={() => console.log("bell clicked")}
      />
    </div>
  );
};

export default OverviewPage;
