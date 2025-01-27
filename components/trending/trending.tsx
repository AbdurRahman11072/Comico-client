"use client";

import { BsTrophy } from "react-icons/bs";
import { useState } from "react";

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

const TrendingSection = () => {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("Today");
  const filters: TimeFilter[] = ["Today", "Weekly", "Monthly"];

  return (
    <div className=" text-white p-2 w-full lg:max-w-xl">
      <div className="flex items-center gap-2 mb-6">
        <BsTrophy className="text-white text-xl" />
        <h2 className="text-3xl font-semibold">Trending</h2>
      </div>

      <div className="flex gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-[#1a1b1f] text-gray-400 hover:bg-[#2a2b2f]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {mangaData.map((manga) => (
          <div
            key={manga.id}
            className="relative group bg-[#1a1b1f] rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 p-3">
              <div className="relative w-20 h-20 flex-shrink-0">
                <img
                  src={manga.image}
                  alt={manga.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="text-sm font-medium line-clamp-1">
                {manga.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
