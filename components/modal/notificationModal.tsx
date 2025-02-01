import type React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: "top-right" | "bottom-right";
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  position = "top-right",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 right-2 bg-black bg-opacity-50 z-50 flex items-start justify-end">
      <div
        className={`bg-white text-black w-full h-full md:w-96 md:h-auto md:max-h-[80vh] md:rounded-lg overflow-hidden flex flex-col ${
          position === "top-right" ? "mt-16" : "mb-16"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button onClick={onClose} className="text-2xl">
            <IoCloseOutline />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {/* Add your notification items here */}
          <div className="mb-4 pb-4 border-b">
            <p className="font-semibold">New chapter available</p>
            <p className="text-sm text-gray-600">
              Chapter 52 of "My Hero Academia" is now available!
            </p>
          </div>
          <div className="mb-4 pb-4 border-b">
            <p className="font-semibold">Series update</p>
            <p className="text-sm text-gray-600">
              "One Piece" has been updated with new content.
            </p>
          </div>
          {/* Add more notification items as needed */}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
