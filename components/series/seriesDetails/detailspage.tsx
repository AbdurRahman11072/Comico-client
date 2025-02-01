"use client";
import React from "react";
import { Sidebar } from "./sidebar";
import MainContent from "./main-content";
import { useGetSingleSeriesQuery } from "@/redux/api/baseapi";

const DetailsPage = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetSingleSeriesQuery(id);
  const SeriesDetails = data;
  console.log(SeriesDetails);

  const {
    title,
    chineseTitle,
    coverImg,
    description,
    status,
    rating,
    releaseDate,
  } = SeriesDetails;

  const Details = { coverImg, rating, status };
  const mainDetails = { id, title, chineseTitle, description };

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <main className="min-h-screen relative ">
      <div className=" w-full h-screen overflow-hidden">
        <img src={coverImg} alt={title} className="w-full " />
        <div className="absolute inset-0 w-full h-screen bg-gradient-to-t from-black via-black/80 to-black/60 "></div>
      </div>
      <div className="absolute inset-0 top-20 mx-auto px-4 py-6 ">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            <Sidebar Details={Details} />
            <MainContent mainDetails={mainDetails} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
