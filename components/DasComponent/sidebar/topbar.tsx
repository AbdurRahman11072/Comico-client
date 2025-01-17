"use client";

import { FiBell, FiSearch, FiUser } from "react-icons/fi";

export default function TopBar() {
  return (
    <header className="bg-black/55 text-white p-4 flex items-center justify-between">
      <div className="flex items-center pl-7 sm:pl-0">
        <FiSearch className="w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 w-28 md:w-44 lg:w-60 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FiBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <button className="flex items-center space-x-2">
          <FiUser className="w-6 h-6" />
          <span className="hidden md:inline">Admin</span>
        </button>
      </div>
    </header>
  );
}
