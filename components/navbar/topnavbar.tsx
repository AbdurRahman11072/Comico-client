"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";
import SearchModal from "../modal/searchModal";

const TopNavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="fixed top-0  z-50 bg-blue-950/50 flex w-full h-14  ">
      <div className="w-full container mx-auto flex gap-4 items-center  justify-between px-3 border-b-1 border-gray-500">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Comico</h1>
          <ul className="hidden md:flex gap-5 text-lg font-medium">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/catagory">
              <li>Category</li>
            </Link>
            <Link href="/series">
              <li>Series</li>
            </Link>
            <Link href="/bookmark">
              <li>Bookmark</li>
            </Link>
          </ul>
        </div>

        <ul className="flex gap-5 text-2xl xl:text-3xl">
          <li>
            <MdOutlineNotificationsActive />
          </li>
          <li onClick={() => setIsModalOpen(!isModalOpen)}>
            <IoSearchOutline />
          </li>

          <li className="hidden md:block">
            <TbUserHexagon />
          </li>
        </ul>
      </div>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TopNavBar;
