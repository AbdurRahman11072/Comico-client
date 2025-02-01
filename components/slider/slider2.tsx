"use client";
import { useGetsliderQuery } from "@/redux/api/baseapi";
import * as React from "react";

interface Comic {
  id: number;
  title: string;
  image: string;
  isNew?: boolean;
  isHot?: boolean;
  tags: string[];
}

export default function ComicSlider() {
  const { data, isLoading, isError } = useGetsliderQuery({});
  const SliderData = data;

  if (isLoading) {
    return <div className="text-5xl text-white">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-5xl text-white">Error loading series data.</div>
    );
  }

  return (
    <div className="container mx-auto overflow-hidden bg-black p-4 ">
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {SliderData?.map((comic: Comic) => (
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
