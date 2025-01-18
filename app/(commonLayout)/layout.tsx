import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mb-20 md:mb-0">
      <Navbar />
      <main className=" p-2  ">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
