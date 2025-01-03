import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";

import { IoHomeOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { TbUserHexagon } from "react-icons/tb";

const BottomNavBar = () => {
  return (
    <div className="bg-blue-950/50 w-full h-16 fixed bottom-0 z-50 md:hidden">
      <ul className=" flex justify-around text-sm font-medium py-3 px-2">
        <li className="text-center ">
          <IoHomeOutline className="text-2xl mx-auto mb-1" />
          <span>Home</span>
        </li>
        <li>
          <SlBookOpen className="text-2xl mx-auto mb-1" />
          <span>Category</span>
        </li>
        <li>
          <AiOutlineFileSearch className="text-2xl mx-auto mb-1" />
          <span>Search</span>
        </li>
        <li>
          <BsBookmarkHeart className="text-2xl mx-auto mb-1" />
          <span>Bookmark</span>
        </li>
        <li>
          <TbUserHexagon className="text-2xl mx-auto mb-1" />
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
