import DashboardHeader from "@/components/common/dashboard-header";
import LeftSidebar from "@/components/sidebar/leftsidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className=" w-screen  flex flex-col justify-between">
        <DashboardHeader />
        <div className="hidden  h-full md:flex flex-col w-60 fixed inset-y-0 z-50 mt-20">
          <LeftSidebar />
        </div>
        <div className="w-full h-screen md:ml-60 pl-12 pt-[120px] bg-gray-100 ">
          {children}
        </div>
      </div>
    </div>
  );
}
