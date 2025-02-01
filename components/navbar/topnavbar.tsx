"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";
import NotificationModal from "../modal/notificationModal";
import ProfileModal from "../modal/profileModal";
import SearchModal from "../modal/searchModal";

const TopNavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <div className="fixed top-0  z-50 bg-blue-950/50 flex w-full h-14">
      <div className="w-full container mx-auto flex gap-4 items-center justify-between px-3 border-b border-gray-500">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold text-white">Comico</h1>
          <ul className="hidden md:flex gap-5 text-lg font-medium text-white">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/series">
              <li>Series</li>
            </Link>
            <Link href="/bookmark">
              <li>Bookmark</li>
            </Link>
            <Link href="/upload-list">
              <li>Upload List</li>
            </Link>
          </ul>
        </div>

        <ul className="flex gap-5 text-2xl xl:text-3xl text-white">
          <li>
            <button onClick={() => setIsNotificationModalOpen(true)}>
              <MdOutlineNotificationsActive />
            </button>
          </li>
          <li onClick={() => setIsModalOpen(!isModalOpen)}>
            <IoSearchOutline />
          </li>
          <li className="hidden md:block">
            <button onClick={() => setIsProfileModalOpen(true)}>
              <TbUserHexagon />
            </button>
          </li>
        </ul>
      </div>

      <NotificationModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        position="top-right"
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        position="top-right"
      />
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TopNavBar;
