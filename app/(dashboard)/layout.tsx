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
      <div className="flex flex-1 pt-20">
        {/* pt-20 to make space for the header */}
        {/* Sidebar beneath the header */}
        <div className="flex-none w-60">
          <LeftSidebar />
        </div>
        {/* Content area */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
