import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import MainContent from "@/components/series/seriesDetails/main-content";
import { Sidebar } from "@/components/series/seriesDetails/sidebar";
import { SeriesType } from "@/types";
import { Config } from "@/utils/config";
import Image from "next/image";

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
    <div className="relative mb-10">
      <div
        className="absolute inset-0 h-screen  bg-cover  bg-no-repeat"
        style={{ backgroundImage: `url(${coverImg})` }}
      ></div>
      <div className="absolute  inset-0 h-screen bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      <div className="relative grid md:grid-cols-[300px_1fr] gap-8 p-8 pt-20">
        <Sidebar Details={Details} />
        <MainContent mainDetails={mainDetails} />
      </div>
    </div>
  );
};

export default ComicDetailPage;
