import React from "react";
import { FaEye, FaTrash, FaChartBar, FaBook } from "react-icons/fa";
type SeriesCardsProps = {
  coverImg: string;
  title: string;
  rating: number;
  status: string;
};

const SeriesCards = ({ series }: { series: SeriesCardsProps }) => {
  return (
    <div className="relative group w-[236px] p-4 border rounded-lg shadow-lg bg-gradient-to-r from-[#01062b] to-[#0e0f0f]/65">
      <div className="relative">
        <img
          src={series.coverImg}
          alt={series.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4 text-white">
            <FaBook className="hover:text-gray-300" />
            <FaEye className="hover:text-gray-300" />
            <FaTrash className="hover:text-gray-300" />
            <FaChartBar className="hover:text-gray-300" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">{series.rating}</span>
          <span className="text-sm">{series.status}</span>
        </div>
        <h3 className="mt-2 text-lg text-center font-bold">{series.title}</h3>
      </div>
    </div>
  );
};

export default SeriesCards;
