import React from "react";
import { BiDollar, BiUser, BiUserPlus } from "react-icons/bi";
import { LiaKeySolid } from "react-icons/lia";

const Overview = () => {
  const components = [
    {
      icon: <BiUser />,
      name: "Total User",
      value: 5000,
    },
    {
      icon: <BiUserPlus />,
      name: "Active User",
      value: 5000,
    },
    {
      icon: <LiaKeySolid />,
      name: "Total Like",
      value: 5000,
    },
    {
      icon: <BiDollar />,
      name: "Revanu",
      value: 5000,
    },
  ];
  return (
    <div className="mb-8">
      <h1 className="text-2xl text-white font-semibold mb-8">Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {components.map((details) => (
          <div
            className="bg-black/60 p-4 rounded-lg shadow-lg flex items-center gap-2"
            key={details.name}
          >
            <div className="text-2xl md:text-4xl text-blue-400  md:mr-3">
              {details.icon}
            </div>
            <div className="">
              <p className="text-sm md:text-md text-white">{details.name}</p>
              <p className="text-2xl text-white font-semibold">
                {details.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
