"use client";

import { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";

type TimeFilter = "Today" | "Weekly" | "Monthly";

interface MangaItem {
  id: number;
  title: string;
  image: string;
}

const mangaData: MangaItem[] = [
  {
    id: 1,
    title: "Reality Quest",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20052203-r799qaQgm9nKCoS395FN0N8sLpIppJ.png",
  },
  {
    id: 2,
    title: "Necromancer Academy And The...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20052203-r799qaQgm9nKCoS395FN0N8sLpIppJ.png",
  },
  {
    id: 3,
    title: "Regressing As The Reincarnated...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20052203-r799qaQgm9nKCoS395FN0N8sLpIppJ.png",
  },
  {
    id: 4,
    title: "Hardcore Leveling Warrior: The Last Fight",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20052203-r799qaQgm9nKCoS395FN0N8sLpIppJ.png",
  },
  {
    id: 5,
    title: "The Legendary Hero Is An Academy...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20052203-r799qaQgm9nKCoS395FN0N8sLpIppJ.png",
  },
];

const TrendingSection2 = () => {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("Today");
  const filters: TimeFilter[] = ["Today", "Weekly", "Monthly"];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <FiTrendingUp className="h-5 w-5 text-blue-500" />
        <h2 className="text-xl font-semibold">Trending</h2>
      </div>
      <div className="flex gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="space-y-4 h-[400px] overflow-y-auto pr-2">
        {mangaData.map((manga) => (
          <div
            key={manga.id}
            className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <img
              src={manga.image || "/placeholder.svg"}
              alt={manga.title}
              className="w-16 h-16 object-cover rounded"
            />
            <h3 className="text-sm font-medium line-clamp-2">{manga.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection2;
