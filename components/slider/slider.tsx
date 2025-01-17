import React from "react";
import sliderimg1 from "@/assets/sliderimg1.webp";
import sliderimg2 from "@/assets/sliderimg2.webp";
import Image from "next/image";

const Slider = async () => {
  const res = await fetch("http://localhost:5000/slider");
  const sliderData = await res.json();
  console.log(sliderData);

  return (
    <div className="container mx-auto ">
      <div className="flex gap-3 overflow-x-scroll overflow-y-hidden">
        {sliderData?.map((slider: any) => (
          <div
            className="flex-shrink-0 w-[90%] md:w-[45%] lg:w-[32.5%] h-[244px] sm:h-72 xl:h-96 bg-slate-700 rounded-lg overflow-hidden relative"
            key={slider?.id}
          >
            <img src={slider?.coverImg} alt={slider?.title} />
            <div className="absolute  inset-0 w-full h-24 mt-48 xl:mt-[300px] bg-slate-950/65 blur-lg"></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
              <h1 className="bg-slate-900/70 text-white font-bold px-2 py-1 rounded-lg self-start">
                Comic
              </h1>

              <div className="">
                <h1 className="text-white text-xl font-bold mb-2">
                  {slider?.title}
                </h1>
                <ul className="flex gap-2">
                  {slider?.tags?.map((tag: string, index: number) => (
                    <li
                      key={index}
                      className="bg-red-700/50 text-white px-2 py-1 rounded-lg text-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

{
  /*
    <div className="absolute inset-0 px-4 py-4">
            <h1 className=" bg-slate-900/70 font-bold px-2 py-0.5 rounded-3xl inline-block">
              comic
            </h1>
          </div>
  <div className="absolute inset-0 px-5 pt-56 md:pt-60 ">
 
            <h1 className="bg-red-700/50 font-bold px-2 py-0.5 rounded-3xl inline-block mb-1">
              New
            </h1>
            <h1 className=" font-bold md:font-semibold text-2xl md:text-3xl mb-1">
              {slider?.title}
            </h1>
            <ul className="flex gap-2 font-medium md:font-semibold">
              <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Action</li>
              <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Comedy</li>
              <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">
                Adventure
              </li>
            </ul>
          </div> */
}
