import React from "react";
import { TableHeader } from "./tableheader";
import { TableRow } from "./tablerow";

type series = {
  id: number;
  coverImg: string;
  title: string;
  chineseTitle: string;
  status: string;
  totalLikes: number;
  totalViews: number;
  totalComments: number;
  rating: number;
};

const data: series[] = [
  {
    id: 1,
    coverImg: "https://placekitten.com/50/75",
    title: "The Great Gatsby",
    chineseTitle: "了不起的盖茨比",
    status: "Published",
    totalLikes: 1000,
    totalViews: 5000,
    totalComments: 200,
    rating: 4.5,
  },
  {
    id: 2,
    coverImg: "https://placekitten.com/51/76",
    title: "To Kill a Mockingbird",
    chineseTitle: "杀死一只知更鸟",
    status: "Draft",
    totalLikes: 1500,
    totalViews: 7000,
    totalComments: 300,
    rating: 4.7,
  },
  // Add more sample data here...
];

export const SeriesTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-xl">
      <table className="min-w-full bg-gradient-to-r from-[#01062b] to-[#0e0f0f]/65 text-white">
        <TableHeader />
        <tbody>
          {data.map((series) => (
            <TableRow key={series.id} series={series} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
