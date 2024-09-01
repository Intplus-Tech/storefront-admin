import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface ActivityCardProps {
  activityCount: string;
  activityName: string;
  activityPercentage: string;
  icon: any;
}

function ActivityCard({
  activityCount,
  activityName,
  activityPercentage,
  icon,
}: ActivityCardProps) {
  return (
    <div className="w-[240px] h-20 bg-white rounded-md px-4  shadow-md">
      <div className="flex justify-between items-center py-3">
        <div>
          <p className="text-[#5A607F] text-xs font-extralight">
            {activityName}
          </p>
          <p className="text-[#343434] text-sm my-[3px] font-black">
            {activityCount}
          </p>
          <div className="flex items-center">
            <p className="text-green-500 text-xs">{activityPercentage}</p>
            <ChevronUp size={12} color="green" className="ml-2" />
          </div>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default ActivityCard;
