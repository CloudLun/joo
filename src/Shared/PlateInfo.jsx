import React from "react";

import gochugaru from "../img/chili powder 1.png";
import tteokBokki from "../img/cuisines/Tteok-bokki.svg";
import plate from "../img/plate.svg";

const PlateInfo = () => {
  return (
    <div className="flex justify-center items-start gap-[113px] w-full h-[482px]">
      <div className="relative flex flex-col justify-center items-center w-[500px] h-[500px]">
        <img src={plate} alt="" className="w-full h-[full]" />
        <img src={tteokBokki} alt="" className="absolute w-[60%] h-[55%]" />
      </div>
      <div className="">
        <div className="mb-[41px]">
          <h1 className="mb-[10px] font-bold text-[32px] text-white tracking-[6px]">
            TteokBokki
          </h1>
          <h3 className="font-regular text-[18px] text-white tracking-[4px]">
            Stir-fried rice cakes
          </h3>
        </div>
        <div>
          <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
            Ingredients
          </h2>
          <div className="flex flex-wrap gap-[10px] w-[439px]">
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              Korean rice cake
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              tteok
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              gochugaru
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              scallion
            </h3>
            <h3 className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15]">
              gochujang
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
};
export default PlateInfo;
