"use client";
import DashboardCommonHeader from "@/components/common/dashboard-common-header";
import React from "react";

type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <div>
      <DashboardCommonHeader
        title="Admin Settings"
        rightIcon={
          <div
            onClick={() => console.log("click")}
            className=" p-3 border space-x-2 cursor-pointer border-[#979797] text-[#979797] border-gray-3  bg-white flex rounded-md items-center justify-center"
          >
            <p className="text-black">Export </p>
          </div>
        }
        rightIconAction={() => console.log("bell clicked")}
      />
    </div>
  );
};

export default SettingsPage;
