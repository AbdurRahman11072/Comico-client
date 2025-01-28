import Series from "@/components/comic/series/series";
``;
import ComicSlider1 from "@/components/slider/slider";
import ComicSlider from "@/components/slider/slider2";
import TrendingSection from "@/components/trending/trending";

export default function Home() {
  return (
    <div className="space-y-16">
      <ComicSlider />
      {/* <ComicSlider1 /> */}
      <main className="container mx-auto grid lg:grid-cols-[1fr_300] gap-4 p-1  border-b border-gary-800">
        <Series />
        <TrendingSection />
      </main>
    </div>
  );
}
