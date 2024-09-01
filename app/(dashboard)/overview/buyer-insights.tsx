import ActivityCard from "@/components/common/activity-card";
import BlueBarChart from "@/public/assets/images/svg/blue-bar";
import GreenBarChart from "@/public/assets/images/svg/green-bar";
import YellowBarChart from "@/public/assets/images/svg/yellow-bar";
import { ArrowUp, StoreIcon } from "lucide-react";
import React from "react";

function BuyerInsights() {
  const buyerInsights = [
    {
      activityName: "PWA Downloads",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ECF2FF]">
          <div className="w-4 h-4 rounded-sm  border-2 border-[#FD7E14] flex items-center justify-center">
            <ArrowUp size={12} color="#FD7E14" />
          </div>
        </div>
      ),
    },
    {
      activityName: "Offline Sessions",
      activityCount: "12,543",
      activityPercentage: "22.45%",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ECF2FF]">
          <div className="w-4 h-4 rounded-sm  border-2 border-[#FD7E14] flex items-center justify-center">
            <StoreIcon size={12} color="#FD7E14" />
          </div>
        </div>
      ),
    },
    {
      activityName: "Average Cart Size",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: (
        <div className="">
          <YellowBarChart />
        </div>
      ),
    },
    {
      activityName: "N/A",
      activityCount: "N/A",
      activityPercentage: "15.34%",
      icon: <GreenBarChart />,
    },
    {
      activityName: "M/A",
      activityCount: "N/A",
      activityPercentage: "0%",
      icon: <BlueBarChart />,
    },
  ];
  return (
    <div className="mt-4">
      <h1 className="text-[#343434] text-sm mb-3">PWA & Buyer Insights</h1>
      <div className="flex space-x-3  items-center justify-between ">
        {buyerInsights.map((insight) => (
          <ActivityCard {...insight} />
        ))}
      </div>
    </div>
  );
}

export default BuyerInsights;
