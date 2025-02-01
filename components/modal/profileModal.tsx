import type React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { BsCurrencyExchange } from "react-icons/bs";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: "top-right" | "bottom-right";
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  position = "top-right",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 right-2 bg-black bg-opacity-50 z-50 flex items-start justify-end">
      <div
        onClick={onClose}
        className={`bg-white text-black w-full h-full md:w-64 md:h-auto md:rounded-lg overflow-hidden flex flex-col ${
          position === "top-right" ? "mt-16" : "mb-16"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-2xl">
            <IoCloseOutline />
          </button>
        </div>
        <div className="flex-grow">
          <ul className="divide-y">
            <Link href="/profile">
              <li className="p-4 flex items-center cursor-pointer ">
                <FaUser className="mr-4 " />
                <span>Profile</span>
              </li>
            </Link>
            <li className="p-4 flex items-center cursor-pointer">
              <BsCurrencyExchange className="mr-4 text-black " />
              <span>Earn Rewards</span>
            </li>
            <li className="p-4 flex items-center cursor-pointer">
              <FaCog className="mr-4 " />
              <span>Settings</span>
            </li>
            <li className="p-4 flex items-center cursor-pointer text-red-600">
              <FaSignOutAlt className="mr-4 " />
              <span>Sign Out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
