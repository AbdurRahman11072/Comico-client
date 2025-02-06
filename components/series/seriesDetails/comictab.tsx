"use client";
import React, { useState } from "react";
import { Synopsis } from "./synopsis";
import ChapterList from "./chapter-list";
import { Reviews } from "./reviews";
import { Chapter, Comic } from "@/types";

type details = {
  description: string;
  chapterdata: Chapter[];
};

const ComicTab = ({ details }: { details: details }) => {
  const description = details.description;
  const chapterData = details.chapterdata;
  const [activeTab, setActiveTab] = useState("synopsis");
  return (
    <div className="">
      <nav className="flex gap-8 ">
        <button
          onClick={() => setActiveTab("synopsis")}
          className={`nav-tab py-4 ${activeTab === "synopsis" ? "active" : ""}`}
        >
          Synopsis
        </button>
        <button
          onClick={() => setActiveTab("chapters")}
          className={`nav-tab py-4 ${activeTab === "chapters" ? "active" : ""}`}
        >
          Chapters
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`nav-tab py-4 ${activeTab === "reviews" ? "active" : ""}`}
        >
          Reviews
        </button>
      </nav>
      {activeTab === "synopsis" && <Synopsis description={description} />}
      {activeTab === "chapters" && <ChapterList chapterData={chapterData} />}
      {activeTab === "reviews" && <Reviews />}
    </div>
  );
};

export default ComicTab;
