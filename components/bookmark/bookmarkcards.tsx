"use client";
import { useGetSeriesQuery } from "@/redux/api/baseapi";
import { SeriesType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const BookmarksCard = () => {
  const { data, isLoading, isError } = useGetSeriesQuery({});
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  const seriesData = data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6  gap-3 row-span-4 lg:gap-2 xl:gap-3  ">
      {seriesData.map((series: SeriesType) => (
        <Link href={`/series/${series.id}`} key={series.id}>
          <div className=" gap-2 my-3 group">
            <Image
              src={series.coverImg}
              alt="comic-series-image"
              width={300}
              height={400}
              className="rounded-md h-[220px]  md:h-[250px] lg:h-[260px] xl:h-[280px] group-hover:scale-105 transition-all duration-300"
            />
            <div className="space-y-2">
              <div className="flex justify-between px-2 my-2 text-sm">
                <h5 className="flex gap-1 justify-center items-center">
                  {series.rating}
                  <FaStar className="text-yellow-500" />
                </h5>
                <h5>{series.status}</h5>
              </div>
              <p className=" h-12 flex justify-center items-center font-semibold text-md md:text-md lg:text-lg text-center px-0.5 my-2  ">
                {series.title.length > 20
                  ? series.title.slice(0, 34) + "..."
                  : series.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookmarksCard;
