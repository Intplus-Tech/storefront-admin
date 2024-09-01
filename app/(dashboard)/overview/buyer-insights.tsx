import ActivityCard from "@/components/common/activity-card";
import { ArrowUp, StoreIcon } from "lucide-react";
import React from "react";

function BuyerInsights() {
  const buyerInsights = [
    {
      activityName: "PWA Downloads",
      activityCount: "10,540",
      activityPercentage: "22.45%",
      icon: <ArrowUp size={12} color="#FD7E14" />,
    },
    {
      activityName: "Offline Sessions",
      activityCount: "12,543",
      activityPercentage: "22.45%",
      icon: <StoreIcon size={12} color="#FD7E14" />,
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
