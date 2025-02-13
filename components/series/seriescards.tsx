"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { SeriesType } from "@/types";
import { useGetSeriesQuery } from "@/redux/api/baseapi";

const SeriesCards = ({ seriesStyle }: { seriesStyle: string }) => {
  const { data, isLoading, isError } = useGetSeriesQuery({});
  const seriesData = data;

  if (isLoading) {
    return <div className="text-5xl text-white">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-5xl text-white">Error loading series data.</div>
    );
  }
  return (
    <div className={`${seriesStyle}`}>
      {seriesData.map((series: SeriesType) => (
        <Link href={`/series/${series.id}`} key={series.id}>
          <div className=" gap-2 my-3 group">
            <Image
              src={series.coverImg}
              alt="comic-series-image"
              width={300}
              height={400}
              className="rounded-md h-[220px]  md:h-[250px] lg:h-[240px] xl:h-[300px] group-hover:scale-105 transition-all duration-300"
            />
            <div className="space-y-2">
              <div className="flex justify-between px-2 my-2 text-sm">
                <h5 className="flex gap-1 justify-center items-center">
                  {series.rating}
                  <FaStar className="text-yellow-500" />
                </h5>
                <h5>{series.status}</h5>
              </div>
              <p className=" h-12 flex justify-center items-center font-semibold text-sm md:text-sm lg:text-lg text-center px-0.5 my-2  ">
                {series.title.length > 20
                  ? series.title.slice(0, 34) + "..."
                  : series.title}
              </p>
              <div className="flex justify-between items-center px-2 py-[5px] h-9 hover:md:bg-slate-400/10 border border-slate-600/40 rounded-md">
                <p className="text-sm font-medium md:font-semibold xl:text-md  ">
                  Chapter 1000
                </p>
                <p className="font-medium text-xs md:text-sm lg:text-xs xl:text-sm ">
                  1 Days
                </p>
              </div>
              <div className="flex justify-between items-center px-2 py-[5px] h-9 hover:md:bg-slate-400/10 border border-slate-600/40 rounded-md">
                <p className="text-sm font-medium md:font-semibold xl:text-md  ">
                  Chapter 1000
                </p>
                <p className="font-medium text-xs md:text-sm lg:text-xs xl:text-sm ">
                  1 Days
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SeriesCards;
