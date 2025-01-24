import DashboardSidebar from "@/components/DasComponent/sidebar/dashSidebar";
import TopBar from "@/components/DasComponent/sidebar/topbar";
import React from "react";
import Background from "@/assets/Background.png";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-cover bg-center h-screen bg-[url(../assets/Background.png)]">
      <div className=" flex h-screen ">
        <DashboardSidebar />
        <div className="  flex flex-col flex-1 overflow-hidden">
          <TopBar />
          <main className="container mx-auto flex-1 overflow-y-auto p-4 transition-all duration-300 ease-in-out ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
