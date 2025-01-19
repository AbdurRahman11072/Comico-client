"use client";

import * as React from "react";

interface Comic {
  id: number;
  title: string;
  image: string;
  isNew?: boolean;
  isHot?: boolean;
  tags: string[];
}

const comics: Comic[] = [
  {
    id: 1,
    title: "Return Of The Genius Player",
    image: "https://i.ibb.co.com/QvJCTMx/sliderimg1.webp",
    isHot: true,
    tags: ["Action", "Shounen", "Manhwa"],
  },
  {
    id: 2,
    title: "Apocalyptic Chef Awakening",
    image:
      "https://i.ibb.co.com/9hBwxK1/8e4f7dd1-aa7d-4791-9380-ca8f93b3b6dc.webp",
    isNew: true,
    tags: ["Action", "Adventure"],
  },
  {
    id: 3,
    title: "Necromancer Academy And The Genius",
    image: "https://i.ibb.co.com/QvJCTMx/sliderimg1.webp",
    isNew: true,
    tags: ["Action", "Drama", "Shounen"],
  },
  {
    id: 4,
    title: "Apocalyptic Chef Awakening",
    image:
      "https://i.ibb.co.com/9hBwxK1/8e4f7dd1-aa7d-4791-9380-ca8f93b3b6dc.webp",
    isNew: true,
    tags: ["Action", "Adventure"],
  },
];

export default function ComicSlider() {
  return (
    <div className="container mx-auto overflow-hidden bg-black p-4 mt-14">
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {comics.map((comic) => (
          <div
            key={comic.id}
            className="relative w-full snap-start md:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)] flex-shrink-0"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[4/4]">
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-black/50 text-white text-sm">
                    COMIC
                  </span>
                  {comic.isHot && (
                    <span className="px-2 py-1 rounded-md bg-red-500 text-white text-sm">
                      Hot
                    </span>
                  )}
                  {comic.isNew && (
                    <span className="px-2 py-1 rounded-md bg-blue-500 text-white text-sm">
                      New
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-2xl shadow-2xl">
                    {comic.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {comic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md border border-white/20 bg-red-800/50 text-white text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
