"use client";

import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetsliderQuery } from "@/redux/api/baseapi";

type Comic = {
  id: number;
  title: string;
  image: string;
  isNew?: boolean;
  isHot?: boolean;
  tags: string[];
};

const ComicSlider = () => {
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
    <div className="p-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex  p-4 overflow-x-hidden"
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
      >
        {SliderData?.map((comic: Comic) => (
          <SwiperSlide key={comic.id} className="">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ComicSlider;
