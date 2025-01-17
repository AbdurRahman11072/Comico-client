import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Config } from "@/utils/config";
import { SeriesType } from "@/types";
const Series = async () => {
  const res = await fetch(`${Config.baseUrl}/series`);
  const seriesData = await res.json();

  return (
    // All series cards
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-10 p-2">All Series</h1>

      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4  gap-3 lg:gap-2 xl:gap-3 p-1 md:p-2 ">
        {seriesData.map((series: SeriesType) => (
          <Link href={`/${series.id}`} key={series.id}>
            <div className=" gap-2 ">
              <Image
                src={series.coverImg}
                alt="comic-series-image"
                width={300}
                height={400}
                className="rounded-md h-[220px]  md:h-[250px] lg:h-[300px] "
              />
              <div className="space-y-2">
                <div className="flex justify-between px-2 my-2 text-sm">
                  <h5 className="flex gap-1 justify-center items-center">
                    {series.rating}
                    <FaStar className="text-yellow-500" />
                  </h5>
                  <h5>{series.status}</h5>
                </div>
                <p className="font-semibold text-sm md:text-xl text-center px-1 my-2">
                  {series.title.length > 20
                    ? series.title.slice(0, 35) + "..."
                    : series.title}
                </p>
                <div className="flex justify-between items-center px-2 py-[5px] h-9 bg-slate-400/10 hover:md:bg-slate-400/10  rounded-sm">
                  <p className="text-sm font-medium md:font-semibold ">
                    chapter 1000
                  </p>
                  <p className="font-medium text-xs md:text-sm">1 Days ago</p>
                </div>
                <div className="flex justify-between items-center px-2 py-[5px] h-9 bg-slate-400/10 hover:md:bg-slate-400/10  rounded-sm">
                  <p className="text-sm font-medium md:font-semibold ">
                    chapter 1000
                  </p>
                  <p className="font-medium text-xs md:text-sm">1 Days ago</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Series;
