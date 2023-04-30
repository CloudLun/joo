import React from "react";

import gochugaru from "../img/chili powder 1.png";

const PlateInfo = () => {
  return (
    <div className="flex justify-center items-center gap-[113px] w-full h-[482px]">
      <img src={gochugaru} alt="" className="h-[full]" />
      <div className="">
        <div className="mb-[41px]">
          <h1 className="mb-[10px] font-bold text-[32px] text-white tracking-[6px]">
            gochugaru
          </h1>
          <h3 className="font-regular text-[18px] text-white tracking-[4px]">
            Chili powder
          </h3>
        </div>
        <div className="mb-[40px]">
          <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
            Ingredient Rank
          </h2>
          <h3 className="inline px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
            1
          </h3>
        </div>
        <div>
          <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
            Foods with Gochugaru
          </h2>
          <div className="flex flex-wrap gap-[10px] w-[439px]">
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              Soft Tofu Stew
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              Spicy Chicken Stew
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              Korean Cucumber Salad
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              Stir-fried rice cakes
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlateInfo;
