import BookmarksCard from "@/components/bookmark/bookmarkcards";
import React from "react";

const BookmarkPage = () => {
  return (
    <div className="pt-14 px-2">
      <div className="flex gap-3  py-4">
        <span className="w-[6px] bg-purple-800 rounded-sm"></span>
        <h1 className="text-3xl font-semibold">All Bookmarks</h1>
      </div>
      <BookmarksCard />
    </div>
  );
};

export default BookmarkPage;
