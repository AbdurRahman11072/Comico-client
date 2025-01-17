"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiBook,
  FiUsers,
  FiPieChart,
  FiBell,
  FiDollarSign,
  FiSettings,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { BiHome } from "react-icons/bi";

const menuItems = [
  {
    icon: BiHome,
    text: "Dashboard",
    href: "/admin",
  },
  {
    icon: FiBook,
    text: "Comics",
    href: "/dashboard/comics",
    submenu: [
      { text: "All Comics", href: "/dashboard/comics/all" },
      { text: "Add New", href: "/dashboard/comics/new" },
    ],
  },
  { icon: FiUsers, text: "Users", href: "/dashboard/users" },
  { icon: FiPieChart, text: "Analytics", href: "/dashboard/analytics" },
  {
    icon: FiBell,
    text: "Notifications",
    href: "/dashboard/notifications",
    submenu: [
      { text: "All Notifications", href: "/dashboard/notifications/all" },
      { text: "Settings", href: "/dashboard/notifications/settings" },
    ],
  },
  { icon: FiDollarSign, text: "Monetization", href: "/dashboard/monetization" },
  { icon: FiSettings, text: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubmenu = (index: any) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "hidden"
            : "lg:hidden fixed top-3 left-1 z-20 p-2 rounded-md  text-white hover:bg-gray-700 transition ease-out"
        }
      >
        <FiMenu size={24} />
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-10 w-64 h-screen bg-black/55 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Comic Dashboard</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800"
          >
            <FiX size={24} />
          </button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className=" w-56 mx-auto  rounded-lg">
                <div
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gradient-to-r from-[#0349fc]/55 via-[#0349fc]/55 transition-colors  rounded-lg ease-linear ${
                    item.submenu ? "relative" : ""
                  }`}
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  <div className="flex items-center">
                    <item.icon className="w-6 h-6" />
                    <span className="ml-4">{item.text}</span>
                  </div>
                  {item.submenu &&
                    (expandedMenu === index ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    ))}
                </div>
                {item.submenu && (
                  <ul
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      expandedMenu === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block p-2 pl-16 hover:bg-gray-800 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
