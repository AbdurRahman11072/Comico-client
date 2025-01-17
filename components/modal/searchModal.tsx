"use client";

import { useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const mockResults = [
    {
      id: 1,
      title: "Academy's Undercover Professor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20072644-GlOi4KVNS4VngNdVcylCl0ZUvpYvHL.png",
    },
    {
      id: 2,
      title: "To Hell With Being a Saint, I'm a Doctor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20072644-GlOi4KVNS4VngNdVcylCl0ZUvpYvHL.png",
    },
    {
      id: 3,
      title: "Margrave's Bastard Son was The Emperor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20072644-GlOi4KVNS4VngNdVcylCl0ZUvpYvHL.png",
    },
    {
      id: 4,
      title: "The Heavenly Demon Wants a Quiet Life",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20072644-GlOi4KVNS4VngNdVcylCl0ZUvpYvHL.png",
    },
    {
      id: 5,
      title: "Special Civil Servant",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20072644-GlOi4KVNS4VngNdVcylCl0ZUvpYvHL.png",
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0   bg-blue-950/50 backdrop-blur-sm z-30 flex items-start justify-center p-0 md:p-4 md:pt-20"
      onClick={onClose}
    >
      <div className="w-full h-full md:h-auto md:w-[60%] bg-gray-900 md:rounded-xl p-4 overflow-y-auto md:max-h-[calc(100vh-5rem)]">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <BiArrowBack size={20} className="text-gray-400" />
          </button>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full">
              <FiX size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {mockResults.map((result) => (
            <div
              key={result.id}
              className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                <img
                  src={result.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="flex-1 text-gray-200">{result.title}</span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <FiX size={18} className="text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <BiArrowBack size={18} className="text-gray-400 rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
