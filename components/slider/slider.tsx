import React from "react";
import sliderimg1 from "@/assets/sliderimg1.webp";
import sliderimg2 from "@/assets/sliderimg2.webp";
import Image from "next/image";

const Slider = () => {
  return (
    <div className=" flex w-full gap-4 h-[340px] md:h-[365px] xl:h-96 overflow-x-scroll scroll-snap-x mt-2">
      <div className="relative w-full md:w-[49%] lg:w-[32.5%] h-full flex-shrink-0 rounded-xl">
        <div className="w-full ">
          <Image
            src={sliderimg1}
            alt="sliderimg"
            fill
            className="object-cover brightness-75 rounded-xl"
          />
        </div>
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
            Reality Quest
          </h1>
          <ul className="flex gap-2 font-medium md:font-semibold">
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Action</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Comedy</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">
              Adventure
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-full md:w-[49%] lg:w-[32.5%] h-full flex-shrink-0 rounded-xl">
        <div className="w-full ">
          <Image
            src={sliderimg1}
            alt="sliderimg"
            fill
            className="object-cover brightness-75 rounded-xl"
          />
        </div>
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
            Reality Quest
          </h1>
          <ul className="flex gap-2 font-medium md:font-semibold">
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Action</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Comedy</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">
              Adventure
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-full md:w-[49%] lg:w-[32.5%] h-full flex-shrink-0 rounded-xl">
        <div className="w-full ">
          <Image
            src={sliderimg1}
            alt="sliderimg"
            fill
            className="object-cover brightness-75 rounded-xl"
          />
        </div>
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
            Reality Quest
          </h1>
          <ul className="flex gap-2 font-medium md:font-semibold">
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Action</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">Comedy</li>
            <li className="bg-red-700/50  px-2 py-0.5 rounded-3xl">
              Adventure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// <div className="mb-5 flex  gap-4 h-[400px] w-screen overflow-x-scroll ">
// <div className="relative w-[310px] h-[300px] overflow-hidden flex-shrink-0">
//   <div className="w-[310px]">
//     <Image
//       src={sliderimg1}
//       alt="image not found"
//       fill
//       className="brightness-90 "
//     />
//   </div>
//   <div className="absolute inset-0 px-4 py-4">
//     <h1 className=" bg-slate-900/70 font-bold px-2 py-0.5 rounded-3xl inline-block">
//       comic
//     </h1>
//   </div>
//   <div className="hidden inset-0 px-5 pt-64">
//     <h1 className="bg-red-700/50 font-bold px-2 py-0.5 rounded-3xl inline-block">
//       New
//     </h1>
//     <h1 className=" font-semibold text-4xl text-wrap ">Reality Quest</h1>
//     <ul className="flex gap-2">
//       <li className="bg-red-700/50 font-bold px-2 py-0.5 rounded-3xl">
//         Action
//       </li>
//       <li className="bg-red-700/50 font-bold px-2 py-0.5 rounded-3xl">
//         Comedy
//       </li>
//       <li className="bg-red-700/50 font-bold px-2 py-0.5 rounded-3xl">
//         Adventure
//       </li>
//     </ul>
//   </div>
// </div>
// </div>
