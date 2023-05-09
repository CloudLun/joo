import React from "react";

import gochugaru from "../img/chili powder 1.png";
import tteokBokki from "../img/cuisines/Tteok-bokki.svg";
import plate from "../img/plate.svg";

const PlateInfo = ({food_name, food_name_eng, ingredients }) => {
  return (
    <div className="flex justify-center items-start gap-[113px] w-full">
      <div className="relative flex flex-col justify-center items-center w-[500px] h-[500px]">
        <img src={plate} alt="" className="w-full h-[full]" />
        <img src={tteokBokki} alt="" className="absolute w-[60%] h-[55%]" />
      </div>
      <div className="">
        <div className="mt-[40px] mb-[60px]">
          <h1 className="mb-[10px] font-bold text-[32px] text-white tracking-[6px]">
            {food_name}
          </h1>
          <h3 className="font-regular text-[18px] text-white tracking-[4px]">
            {food_name_eng}
          </h3>
        </div>
        <div className="">
          <h2 className="mb-[20px] font-bold text-[18px] text-white tracking-[4px]">
            Ingredients
          </h2>
          <div className="flex flex-wrap gap-[10px] w-[439px]">
            {ingredients.map((ingredient, i) => {
              return (
                <h3
                  key={i}
                  className="inline mb-[5px] px-[20px] py-[5px] text-white text-center rounded-[36px] bg-[#fff]/[0.15] cursor-pointer"
                >
                  {ingredient}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlateInfo;
