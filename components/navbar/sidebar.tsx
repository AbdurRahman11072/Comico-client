"use client";
import type React from "react";
import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiHelpCircle } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: FiHome },
    { name: "Profile", icon: FiUser },
    { name: "Settings", icon: FiSettings },
    { name: "Help", icon: FiHelpCircle },
  ];

  return (
    <div className="hidden lg:flex flex-col  fixed left-0 top-0 h-screen w-52 bg-gray-800 text-white p-4 ">
      {/* Logo and Name */}
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
          L
        </div>
        <span className="text-xl font-semibold">LogoName</span>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center space-x-2 p-2 rounded transition-colors duration-200 ${
              activeItem === item.name
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon className="text-xl" />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
