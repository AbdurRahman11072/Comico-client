"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Comic {
  id: number;
  title: string;
  image: string;
  isHot?: boolean;
  isNew?: boolean;
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
  {
    id: 5,
    title: "Return Of The Genius Player",
    image: "https://i.ibb.co.com/QvJCTMx/sliderimg1.webp",
    isHot: true,
    tags: ["Action", "Shounen", "Manhwa"],
  },
  {
    id: 6,
    title: "Apocalyptic Chef Awakening",
    image:
      "https://i.ibb.co.com/9hBwxK1/8e4f7dd1-aa7d-4791-9380-ca8f93b3b6dc.webp",
    isNew: true,
    tags: ["Action", "Adventure"],
  },
  {
    id: 7,
    title: "Necromancer Academy And The Genius",
    image: "https://i.ibb.co.com/QvJCTMx/sliderimg1.webp",
    isNew: true,
    tags: ["Action", "Drama", "Shounen"],
  },
  {
    id: 8,
    title: "Apocalyptic Chef Awakening",
    image:
      "https://i.ibb.co.com/9hBwxK1/8e4f7dd1-aa7d-4791-9380-ca8f93b3b6dc.webp",
    isNew: true,
    tags: ["Action", "Adventure"],
  },
];

const ComicSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 2 : 4;

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < comics.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slidePercentage = isMobile ? 50 : 25;
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slidePercentage
      }%)`;
    }
  }, [currentIndex, isMobile]);

  return (
    <div className="relative mt-14 overflow-hidden bg-gradient-to-r from-[#01062b] to-[#0e0f0f]/70 rounded-md px-2 py-4">
      <h1 className="text-3xl font-extrabold ml-5 mb-10">Featured Manhua</h1>
      <div className="relative w-full">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ width: `${comics.length * (isMobile ? 50 : 25)}%` }}
        >
          {comics.map((comic) => (
            <div key={comic.id} className="lg:w-1/4 w-1/2 px-2">
              <div className="relative aspect-[3/4] perspective-100 overflow-hidden group">
                <img
                  src={comic.image || "/placeholder.svg"}
                  alt={comic.title}
                  className="object-cover w-full h-full rounded-lg group-hover:rotate-x-30 transition-transform duration-500"
                />

                <div className="absolute top-2 left-2 flex gap-2 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="px-2 py-1 text-xs font-semibold bg-gray-800 text-white rounded">
                    COMIC
                  </span>
                  {comic.isHot && (
                    <span className="px-2 py-1 text-xs font-semibold bg-red-600 text-white rounded">
                      HOT
                    </span>
                  )}
                  {comic.isNew && (
                    <span className="px-2 py-1 text-xs font-semibold bg-green-600 text-white rounded">
                      NEW
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/90 to-transparent justify-center items-center">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full bg-gradient-to-t from-black/100 via-black/70 to-transparent group-hover:-translate-y-0 transition-transform duration-300">
                    <img
                      src="https://i.ibb.co.com/DbDF9mh/image-7.webp"
                      alt={comic.title}
                      className="object-cover w-[88%] rounded-lg hidden group-hover:block mx-auto transition-all duration-500 mb-80 group-hover:mb-0 bg-transparent"
                    />
                    <h3 className="text-lg font-semibold text-white line-clamp-2 text-center h-16 -mt-3">
                      {comic.title}
                    </h3>
                  </div>

                  <h3 className="text-lg font-semibold text-white line-clamp-2 text-center group-hover:hidden">
                    {comic.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={slideLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10"
        aria-label="Previous slide"
        disabled={currentIndex === 0}
      >
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={slideRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10"
        aria-label="Next slide"
        disabled={currentIndex === comics.length - itemsPerPage}
      >
        <FiChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ComicSlider1;
