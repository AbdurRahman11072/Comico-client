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

      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-2 xl:gap-3 p-1 md:p-2 ">
        {seriesData.map((series: SeriesType) => (
          <Link href={`/${series.id}`} key={series.id}>
            <div className=" gap-2 ">
              <Image
                src={series.coverImg}
                alt="comic-series-image"
                width={300}
                height={350}
                className="rounded-md  md:h-[250px] lg:h-[330px] "
              />
              <div>
                <div className="flex justify-between px-1 my-2 text-sm">
                  <h5 className="flex gap-1 justify-center items-center">
                    <FaStar className="text-yellow-500" />
                    {series.rating}
                  </h5>
                  <h5>{series.status}</h5>
                </div>
                <p className="font-semibold text-xl text-center px-1 my-2">
                  {series.title}
                </p>
                <div className="flex justify-between px-1 py-[6px] h-9 hover:bg-slate-400/10 my-1">
                  <p className="font-semibold">chapter</p>
                  <p className="font-medium text-sm">1 Days ago</p>
                </div>
                <div className="flex justify-between px-1 py-3 h-10 hover:bg-slate-400/10 my-1">
                  <p className="font-semibold">chapter</p>
                  <p className="font-medium text-sm">12/12/2024</p>
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
