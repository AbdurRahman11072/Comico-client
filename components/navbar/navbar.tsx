import React from "react";
import TopNavBar from "./topnavbar";
import BottomNavBar from "./bottomnavbar";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-950/50 mx-auto">
      <TopNavBar />
      <BottomNavBar />
    </div>
  );
};

export default Navbar;
