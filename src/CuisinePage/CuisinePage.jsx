import React from "react";

import Overview from "../Shared/Overview";
import Unit from "../Shared/Unit";

const data = {
  title: "Traditional Korean Food Trend",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const CuisinePage = () => {
  return (
    <div className="w-[100vw]">
      <Overview title={data.title} intro={data.intro} />
      <Unit />
    </div>
  );
};
export default CuisinePage;
