import Navbar from "@/components/navbar/navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="mt-14 p-2">{children}</main>
    </div>
  );
};

export default HomeLayout;
