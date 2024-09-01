"use client";
import { cn } from "@/app/utils/helper";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

interface ILeftSidebarRoutesItemProps {
  icon: any;
  name: string;
  link: string;
  nestedRoutes?: string[];
}
function LeftSidebarRoutesItem({
  name,
  nestedRoutes,
  link,
  icon: Icon,
}: ILeftSidebarRoutesItemProps) {
  const pathName = usePathname();
  const router = useRouter();
  const params = useParams();
  const isNestedRouteActive = nestedRoutes?.some((route: string) =>
    pathName.endsWith(route)
  );
  const userData = {
    user: {
      _id: "1234",
    },
  };
  const isActiveRoute =
    (pathName === "/" && link === "/") ||
    pathName === link ||
    pathName?.endsWith(`/${params.lang}${link}`) ||
    pathName?.endsWith(`/${params.lang}${link}/${userData?.user._id}`) ||
    isNestedRouteActive;

  const switchRoute = () => {
    if (link == "/profile") {
      router.push(`/profile/${userData?.user._id}`);
    } else {
      router.push(link);
    }
  };

  return (
    <button
      type="button"
      onClick={switchRoute}
      className={cn(
        "flex items-center space-x-3 rounded-md px-2 h-10 text-gray-500 transition-all group hover:text-[#FD7E14] hover:bg-[#FD7E14]/10",
        isActiveRoute && "bg-[#FD7E14] text-white"
      )}
    >
      <Icon
        className={cn(
          "w-5 h-5 text-gray-500 group-hover:text-text_purple",
          isActiveRoute && "text-text_purple"
        )}
      />
      <h3
        className={cn(
          "text-gray-500 group-hover:text-text_purple",
          isActiveRoute && "text-text_purple"
        )}
      >
        {name}
      </h3>
    </button>
  );
}

export default LeftSidebarRoutesItem;
