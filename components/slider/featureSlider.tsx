"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetSeriesQuery } from "@/redux/api/baseapi";
import { SeriesType } from "@/types";

const FeatureSlider = () => {
  const { data, isLoading } = useGetSeriesQuery({});
  const feature = data;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full p-4 space-y-5">
      <h1 className="text-4xl font-semibold">Feature</h1>
      <Swiper slidesPerView={5.4} spaceBetween={10} className="flex gap-4">
        {feature.map((item: SeriesType) => (
          <SwiperSlide className="space-y-2 relative group overflow-hidden perspective-100">
            <img
              src={item.coverImg}
              alt=""
              className="w-full h-80 rounded-md object-cover group-hover:rotate-x-25 transition-all duration-500"
            />

            <div className="absolute bottom-0 left-0 right-0 top p-4 bg-gradient-to-t from-black/90 via-black/90 to-transparent justify-center items-center">
              <div className="absolute  -bottom-2 left-0 right-0  transform translate-y-full  group-hover:-translate-y-0 transition-transform duration-300 bg-black/60">
                <img
                  src="https://i.ibb.co.com/DbDF9mh/image-7.webp"
                  alt=""
                  className="object-cover w-[80%] rounded-lg hidden group-hover:block mx-auto transition-all duration-500  group-hover:mb-0 group-hover:bg-transparent group-hover:mt-4"
                />
                <h3 className="text-lg font-semibold text-white line-clamp-2 text-center h-16 -mt-3">
                  {item.title}
                </h3>
              </div>

              <h3 className="text-lg font-semibold text-white line-clamp-2 text-center group-hover:hidden">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
