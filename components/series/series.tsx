import React from "react";

import SeriesCards from "./seriescards";

const Series = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2 p-2">All Series</h1>
      <SeriesCards />
    </div>
  );
};

export default Series;
