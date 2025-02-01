import { Config } from "@/utils/config";
import ComicTab from "./comictab";
import { mainDetails } from "@/types";

const MainContent = async ({ mainDetails }: { mainDetails: mainDetails }) => {
  if (!mainDetails) {
    return <div>Loading...</div>;
  }

  const { id, description, title, chineseTitle } = mainDetails;
  const res = await fetch(`${Config.baseUrl}/chapters/${id}`);
  const data = await res.json();
  const chapterdata = data.chapters;
  console.log(chapterdata);

  const details = { description, chapterdata };
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-400">
        <div className="py-4">
          <h1 className="text-xl font-bold mb-1 md:text-2xl ">{title}</h1>
          <div className="text-sm text-gray-400">{chineseTitle}</div>
          <ComicTab details={details} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
