"use client";
import DashboardCommonHeader from "@/components/common/dashboard-common-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {};

const FinancialReportingPage = (props: Props) => {
  return (
    <div>
      <DashboardCommonHeader
        title="Financial/Reporting"
        rightIcon={
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <div
                onClick={() => console.log("click")}
                className=" p-3  space-x-2 cursor-pointer  text-black border-gray-3  flex rounded-md items-center justify-center"
              >
                <p>Dashboard</p>
                <ChevronDown size={16} color="black" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Option 1</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        }
        rightIconAction={() => console.log("bell clicked")}
      />
    </div>
  );
};

export default FinancialReportingPage;
