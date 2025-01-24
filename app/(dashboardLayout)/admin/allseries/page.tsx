import SeriesCards from "@/components/DasComponent/allSeries/allSeries";
import { SeriesTable } from "@/components/DasComponent/SeriesTable/seriesTable";
import React from "react";
const seriesDetails = [
  {
    id: 1,
    coverImg:
      "https://i.ibb.co.com/x5pZrLn/I-am-the-strongest-awakeners-recognized-by-all-of-the-world-s-cheat-masters-COVER-VORTEXNW.webp",
    title: "Series One",
    rating: 4.5,
    status: "Ongoing",
  },
  {
    id: 2,
    coverImg: "https://i.ibb.co.com/4tZm2Sq/Juvenile-Law29.webp",
    title: "Series Two",
    rating: 4.0,
    status: "Completed",
  },
  {
    id: 3,
    coverImg:
      "https://i.ibb.co.com/x5pZrLn/I-am-the-strongest-awakeners-recognized-by-all-of-the-world-s-cheat-masters-COVER-VORTEXNW.webp",
    title: "Series Three",
    rating: 3.8,
    status: "Hiatus",
  },
  {
    id: 4,
    coverImg: "https://i.ibb.co.com/4tZm2Sq/Juvenile-Law29.webp",
    title: "Series Three",
    rating: 3.8,
    status: "Hiatus",
  },
];

const AllSeries = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {seriesDetails.map((series) => (
        <SeriesCards key={series.id} series={series} />
      ))}
    </div>
  );
};

export default AllSeries;
