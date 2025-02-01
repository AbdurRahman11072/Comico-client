"use client";
import React from "react";
import TopNavBar from "./topnavbar";
import BottomNavBar from "./bottomnavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = !pathname.match(/^\/[^/]\/[^/]+/);
  console.log(showNavbar);

  return (
    <div className="w-full bg-blue-950/50 mx-auto">
      {showNavbar && <TopNavBar />}
      {showNavbar && <BottomNavBar />}
    </div>
  );
};

export default Navbar;
