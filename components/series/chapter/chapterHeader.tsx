"use client";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineMore,
  AiOutlineHome,
} from "react-icons/ai";
import { BiLike } from "react-icons/bi";

interface HeaderProps {
  chapter: number;
  totalChapters: number;
  onChapterChange: (chapter: number) => void;
  likes: number;
  username: string;
  updatedAt: string;
  totalImages: number;
  mangaName: string;
}

export function Header({
  chapter,
  totalChapters,
  onChapterChange,
  likes,
  username,
  updatedAt,
  totalImages,
  mangaName,
}: HeaderProps) {
  return (
    <>
      {/* Desktop Header - Right Side */}
      <header className="fixed top-0 right-0 bottom-0 z-50 bg-gray-900/95 text-white w-72 hidden lg:flex flex-col">
        <div className="flex flex-col h-full">
          {/* Top Navigation */}
          <div className="flex flex-col p-4 border-b border-gray-800">
            <h1 className="font-medium text-lg mb-4">{mangaName}</h1>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => onChapterChange(chapter - 1)}
                disabled={chapter <= 1}
                className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
              >
                <AiOutlineLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-lg">Ch. {chapter}</span>
                <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-800 rounded-lg">
                  <AiOutlineDown size={16} />
                </button>
              </div>

              <button
                onClick={() => onChapterChange(chapter + 1)}
                disabled={chapter >= totalChapters}
                className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
              >
                <AiOutlineRight size={20} />
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 px-3 py-1.5 hover:bg-gray-800 rounded-lg w-full">
              English
              <AiOutlineDown size={16} />
            </button>
          </div>

          {/* Info Bar */}
          <div className="flex flex-col p-4 bg-gray-900/80 text-sm mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">{username}</span>
              <div className="flex items-center gap-1">
                <BiLike size={16} className="text-blue-500" />
                <span>{likes}</span>
              </div>
            </div>
            <div className="flex flex-col text-gray-400 text-xs">
              <span>Updated: {updatedAt}</span>
              <span>{totalImages} images</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Bottom */}
      <header className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 text-white lg:hidden">
        {/* Info Bar */}
        <div className="flex items-center justify-between px-4 h-10 bg-gray-900/80 text-xs border-t border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">{username}</span>
            <div className="flex items-center gap-1">
              <BiLike size={14} className="text-blue-500" />
              <span>{likes}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>{totalImages} images</span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between px-4 h-14 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <a href="/" className="p-2 hover:bg-gray-800 rounded-lg">
              <AiOutlineHome size={20} />
            </a>
            <h1 className="font-medium text-sm max-w-[120px] truncate">
              {mangaName}
            </h1>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onChapterChange(chapter - 1)}
              disabled={chapter <= 1}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <AiOutlineLeft size={20} />
            </button>

            <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-gray-800 rounded-lg">
              <span className="text-sm">Ch. {chapter}</span>
              <AiOutlineDown size={14} />
            </button>

            <button
              onClick={() => onChapterChange(chapter + 1)}
              disabled={chapter >= totalChapters}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <AiOutlineRight size={20} />
            </button>
          </div>

          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <AiOutlineMore size={20} />
          </button>
        </div>
      </header>
    </>
  );
}
