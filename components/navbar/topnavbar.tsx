import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";

const TopNavBar = () => {
  return (
    <div className="fixed top-0  z-50 bg-blue-950/50 flex w-full h-14  ">
      <div className="w-full container mx-auto flex gap-4 items-center  justify-between px-3">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Comico</h1>
          <ul className="hidden md:flex gap-5 text-lg font-medium">
            <li>Home</li>
            <li>Category</li>
            <li>Series</li>
            <li>Bookmark</li>
          </ul>
        </div>

        <ul className="flex gap-5 text-2xl xl:text-3xl">
          <li>
            <MdOutlineNotificationsActive />
          </li>
          <li>
            <IoSearchOutline />
          </li>

          <li className="hidden md:block">
            <TbUserHexagon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
