import { Chapter } from "@/types";
import Link from "next/link";

const ChapterList = ({ chapterData }: { chapterData: Chapter[] }) => {
  if (!chapterData) {
    return <div>Lodding....</div>;
  }

  return (
    <div className="space-y-2 h-[550px] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[500px] ">
        {chapterData.map((chapter) => (
          <div
            key={chapter.chapterId}
            className="chapter-row flex items-center gap-4 p-4 rounded-lg w-[]  h-24 cursor-pointer bg-gray-900/50"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-md flex-shrink-0" />
            <div className="flex-grow">
              <div className="font-medium">{chapter.chapter}</div>
              <div className="text-sm text-gray-400">{chapter.releaseDate}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-pink-500">
                <span>❤️</span>
                <span>{chapter.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
