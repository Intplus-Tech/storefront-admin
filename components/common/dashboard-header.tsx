import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Bell, LogOutIcon, SearchIcon } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header
      className="w-screen h-20 bg-white fixed top-0 z-100 shadow-md shadow-gray-200 inset-x-0 
    transition-all"
    >
      <div className="flex items-center  px-3 md:px-8 w-full h-full">
        <Link
          href="/overview"
          className="flex items-center justify-center space-x-2"
        >
          <div className="relative ">
            <Image
              alt="Storefront Logo"
              src="/assets/images/logo.png"
              width={150}
              height={400}
              className="mx-auto"
            />
          </div>
        </Link>
        <div className="relative">
          <div className="absolute left-16 top-1/2  transform -translate-x-1/2 -translate-y-1/2 ">
            <SearchIcon size={15} />
          </div>
          <Input
            className="w-[800px] pl-8 placeholder-gray-400 ring-0 focus:ring-0 border-none outline-none border-transparent ml-12 focus:outline-none focus:border-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex justify-evenly  min-w-[250px] items-center ml-auto">
          <Bell className="cursor-pointer" />
          <div className="w-8 cursor-pointer  h-8 flex items-center font-semibold justify-center rounded-full bg-blue-300">
            JD
          </div>
          <span className="text-[#5A607F] font-normal">John Doe</span>

          <LogOutIcon className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
