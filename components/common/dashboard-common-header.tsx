import React from "react";

function DashboardCommonHeader({
  title,
  rightIcon,
  rightIconAction,
}: {
  title: string;
  rightIcon: any;
  rightIconAction: any;
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-2xl">{title}</h1>

      <div onClick={rightIconAction} className="ml-auto">
        {rightIcon && rightIcon}
      </div>
    </div>
  );
}

export default DashboardCommonHeader;
