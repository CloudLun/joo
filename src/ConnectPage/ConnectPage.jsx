import React from "react";
import ParallelChart from "./ParallelChart";

const ConnectPage = () => {
  return (
    <div className="flex flex-col px-[105px] pt-[80px] w-[100vw] h-[100vh] text-white bg-main">
      <h1 className="mb-[50px] w-[547px] text-[28px] tracking-[6px]">Top 7 famous Korean cuisines on youtube and the Ingredients</h1>
        <div className="flex-1">
            <ParallelChart />
        </div>
    </div>
  );
};

export default ConnectPage;
