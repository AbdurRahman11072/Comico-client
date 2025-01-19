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
import { usePathname } from "next/navigation";

const menuItems = [
  {
    icon: BiHome,
    text: "Dashboard",
    href: "/admin",
  },
  {
    icon: FiBook,
    text: "Comics",
    submenu: [
      { text: "All Comics", href: "/admin/allcomic" },
      { text: "Add New", href: "/admin/addseries" },
    ],
  },
  { icon: FiUsers, text: "Users", href: "/admin/users" },
  { icon: FiPieChart, text: "Analytics", href: "/admin/analytics" },
  {
    icon: FiBell,
    text: "Notifications",
    submenu: [
      { text: "All Notifications", href: "/admin/notifications" },
      { text: "Settings", href: "/dashboard/notifications/settings" },
    ],
  },
  { icon: FiDollarSign, text: "Monetization", href: "/admin/monetization" },
  { icon: FiSettings, text: "Settings", href: "/admin/settings" },
];

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (index: number) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  const isActive = (href: string) => pathname === href;

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
        className={`fixed inset-y-0 left-0 z-10 w-64 h-screen bg-black lg:bg-black/55 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
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
              <li key={index} className="w-56 mx-auto rounded-lg">
                {item.submenu ? (
                  <div>
                    <button
                      className={`flex items-center justify-between p-4 cursor-pointer w-full md:hover:bg-gradient-to-r from-[#2D3999] to-[#00A9FF] transition-colors rounded-lg ease-linear`}
                      onClick={() => toggleSubmenu(index)}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-6 h-6" />
                        <span className="ml-4">{item.text}</span>
                      </div>
                      {expandedMenu === index ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <ul
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        expandedMenu === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-1">
                          <Link
                            href={subItem.href}
                            className={`block p-2 pl-16 md:hover:bg-gradient-to-r from-[#2D3999] to-[#00A9FF] rounded-md transition-colors ${
                              isActive(subItem.href)
                                ? "bg-gradient-to-r from-[#2D3999] to-[#00A9FF]"
                                : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between p-4 cursor-pointer md:hover:bg-gradient-to-r from-[#2D3999] to-[#00A9FF] transition-colors rounded-lg ease-linear ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-[#2D3999] to-[#00A9FF]"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      <item.icon className="w-6 h-6" />
                      <span className="ml-4">{item.text}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
