import React from "react";
import { FaPlus, FaTrash, FaEye, FaStar, FaChartBar } from "react-icons/fa";

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

export const TableRow = ({ series }: { series: series }) => (
  <tr className="border-b border-gray-700 hover:bg-white/5 transition-colors">
    <td className="px-4 py-3 text-sm">
      <img
        src={series.coverImg || "/placeholder.svg"}
        alt="Cover"
        className="w-10 h-15 object-cover rounded-md shadow-md"
      />
    </td>
    <td className="px-4 py-3 text-sm">
      <span className="font-medium">{series.title}</span>
      <span className="block md:hidden text-xs text-gray-400">
        {series.chineseTitle}
      </span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <span className="text-gray-300">{series.chineseTitle}</span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          series.status === "Published"
            ? "bg-green-500/20 text-green-300"
            : "bg-yellow-500/20 text-yellow-300"
        }`}
      >
        {series.status}
      </span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <span className="text-blue-300">
        {series.totalLikes.toLocaleString()}
      </span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <span className="text-purple-300">
        {series.totalViews.toLocaleString()}
      </span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <span className="text-orange-300">
        {series.totalComments.toLocaleString()}
      </span>
    </td>
    <td className="hidden md:table-cell px-4 py-3 text-sm">
      <div className="flex items-center">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="text-yellow-300">{series.rating}</span>
      </div>
    </td>
    <td className="px-4 py-3 text-sm">
      <button
        className="text-blue-400 hover:text-blue-300 transition-colors"
        title="Add Chapter"
        aria-label="Add Chapter"
      >
        <FaPlus />
      </button>
    </td>
    <td className="px-4 py-3 text-sm">
      <button
        className="text-red-400 hover:text-red-300 transition-colors"
        title="Delete"
        aria-label="Delete"
      >
        <FaTrash />
      </button>
    </td>
    <td className="px-4 py-3 text-sm">
      <button
        className="text-green-400 hover:text-green-300 transition-colors"
        title="View"
        aria-label="View"
      >
        <FaEye />
      </button>
    </td>
    <td className="px-4 py-3 text-sm">
      <button
        className="text-purple-400 hover:text-purple-300 transition-colors"
        title="Analytics"
        aria-label="Analytics"
      >
        <FaChartBar />
      </button>
    </td>
  </tr>
);
