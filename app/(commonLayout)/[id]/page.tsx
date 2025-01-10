import MainContent from "@/components/comicDetails/main-content";
import { Sidebar } from "@/components/comicDetails/sidebar";
import { SeriesType } from "@/types";
import { Config } from "@/utils/config";

type params = {
  id: number;
};

const ComicDetailPage = async ({ params }: { params: params }) => {
  const { id } = await params;
  const res = await fetch(`${Config.baseUrl}/series/${id}`);
  const SeriesDetails: SeriesType = await res.json();

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

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <Sidebar Details={Details} />
          <MainContent mainDetails={mainDetails} />
        </div>
      </div>
    </main>
  );
};

export default ComicDetailPage;
