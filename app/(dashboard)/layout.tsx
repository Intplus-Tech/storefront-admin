import DashboardHeader from "@/components/common/dashboard-header";
import LeftSidebar from "@/components/sidebar/leftsidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <DashboardHeader />
      <div className="flex pt-20">
        {/* pt-20 to make space for the header */}
        {/* Sidebar beneath the header */}
        <div className="hidden h-full md:flex bg-white flex-col w-[15%] fixed inset-y-0 z-50 mt-20">
          <LeftSidebar />
        </div>
        {/* Content area */}
        <main className="w-[90%] h-screen pr-12 bg-gray-100 md:ml-40 md:pl-40  pt-10 px-6 flex flex-col  space-y-8 ">
          {children}
        </main>
      </div>
    </div>
  );
}
