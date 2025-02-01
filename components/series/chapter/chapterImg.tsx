"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface MangaViewerProps {
  imageUrl: string;
}

export function MangaViewer({ imageUrl }: MangaViewerProps) {
  const [zoom, setZoom] = useState(70);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 30));
  };

  return (
    <div className="relative min-h-screen pb-24 lg:pb-0 lg:pr-52">
      {/* Zoom Controls */}
      <div className="fixed bottom-28 lg:bottom-4 left-4 z-40 flex items-center gap-2 bg-gray-900/90 text-white rounded-lg p-1">
        <button
          onClick={handleZoomOut}
          className="p-2 hover:bg-gray-800 rounded-lg"
          aria-label="Zoom out"
        >
          <AiOutlineMinus size={20} />
        </button>
        <span className="w-12 text-center">{zoom}%</span>
        <button
          onClick={handleZoomIn}
          className="p-2 hover:bg-gray-800 rounded-lg"
          aria-label="Zoom in"
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>

      {/* Image Display */}
      <div className="flex justify-center px-4">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Manga page"
          className="transition-transform duration-200 ease-in-out"
          style={{
            width: `${zoom}%`,
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
