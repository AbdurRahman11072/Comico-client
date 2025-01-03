import React from "react";
import TopNavBar from "./topnavbar";
import BottomNavBar from "./bottomnavbar";

const Navbar = () => {
  return (
    <div className="w-screen">
      <TopNavBar />
      <BottomNavBar />
    </div>
  );
};

export default Navbar;
