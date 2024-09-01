import ActivityCard from "@/components/common/activity-card";
import { ArrowUp, StoreIcon } from "lucide-react";
import React from "react";

function SellerActivity() {
  const activities = [
    {
      activityName: "Sign Ups",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: <ArrowUp size={12} color="#FD7E14" />,
    },
    {
      activityName: "Active Store",
      activityCount: "12,543",
      activityPercentage: "22.45%",
      icon: <StoreIcon size={12} color="#FD7E14" />,
    },
    {
      activityName: "Total Orders",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: <ArrowUp size={12} color="#FD7E14" />,
    },
    {
      activityName: "Total Sales",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: <ArrowUp size={12} color="#FD7E14" />,
    },
    {
      activityName: "Total Revenue",
      activityCount: "10,543",
      activityPercentage: "22.45%",
      icon: <ArrowUp size={12} color="#FD7E14" />,
    },
  ];
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
    <div className="flex flex-col">
      {/* Seller Activities */}
      <div className="">
        <h1 className="text-[#343434] text-sm mb-3">Seller Activity</h1>
        <div className="flex space-x-3   items-center justify-between ">
          {activities.map((activity) => (
            <ActivityCard {...activity} />
          ))}
        </div>
      </div>

      {/* Buyer insights */}
      <div className="mt-4">
        <h1 className="text-[#343434] text-sm mb-3">PWA & Buyer Insights</h1>
        <div className="flex space-x-3  items-center justify-between ">
          {buyerInsights.map((insight) => (
            <ActivityCard {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerActivity;
