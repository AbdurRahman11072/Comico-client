import Series from "@/components/comic/series/series";
import Navbar from "@/components/navbar/navbar";
import Slider from "@/components/slider/slider";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Navbar />
      <main className=" gap-4 block my-14 lg:my-0 lg:mt-14 p-2 w-screen">
        <Slider />
        <Series />
      </main>
    </div>
  );
}
