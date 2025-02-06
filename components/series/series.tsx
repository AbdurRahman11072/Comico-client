import React from "react";

import SeriesCards from "./seriescards";

const Series = () => {
  const seriesStyle =
    "grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4  gap-3 row-span-4 lg:gap-2 xl:gap-3 ";
  return (
    <div className="container mx-auto p-3">
      <div className="flex gap-3 ">
        <span className="w-[6px] bg-purple-800 rounded-sm"></span>
        <h1 className="text-3xl font-semibold">All Series</h1>
      </div>
      <SeriesCards seriesStyle={seriesStyle} />
    </div>
  );
};

export default Series;
