"use client";
import { MangaViewer } from "@/components/series/chapter/chapterImg";
import { Header } from "@/components/series/chapter/chapterHeader";

export default function ChapterByid() {
  return (
    <div className="h-[80%] bg-blue-950 overflow-hidden">
      <MangaViewer imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(15)-IAJuUifcKfWYxj0B8qBlUdhS0jWtZN.png" />
      <Header
        chapter={16}
        totalChapters={50}
        onChapterChange={(chapter) =>
          console.log("Change to chapter:", chapter)
        }
        likes={116}
        username="arven"
        updatedAt="14 hours ago"
        totalImages={23}
        mangaName="The Regressed Genius Player's Records"
      />
    </div>
  );
}
