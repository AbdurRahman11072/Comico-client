import Series from "@/components/comic/series/series";
``;
import ComicSlider from "@/components/slider/slider2";
import TrendingSection from "@/components/trending/trending";

export default function Home() {
  return (
    <div className="">
      {/* <Slider /> */}
      <ComicSlider />
      <main className="container mx-auto grid lg:grid-cols-[1fr_300] gap-4 p-1">
        <Series />
        <TrendingSection />
      </main>
    </div>
  );
}
