import Series from "@/components/series/series";
import ComicSlider from "@/components/slider/comicSlider";
import FeatureSlider from "@/components/slider/featureSlider";

import TrendingSection from "@/components/trending/trending";

export default function Home() {
  return (
    <div className="space-y-14 ">
      <div className="w-full  overflow-hidden p-4 relative">
        <ComicSlider />
      </div>
      <FeatureSlider />
      <main className="container mx-auto grid lg:grid-cols-[1fr_300] gap-4 p-1  border-b border-gary-800">
        <Series />
        <TrendingSection />
      </main>
    </div>
  );
}
