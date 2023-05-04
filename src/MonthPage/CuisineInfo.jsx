import React from "react";

import Unit from "../Shared/Unit";
import PlateInfo from "../Shared/PlateInfo";


const CourseInfo = () => {
  return (
    <div className="mt-[80px] pb-[90px] text-white">
      <div className="flex flex-col items-center mb-[50px] text-center">
        <h3 className="font-bold text-[16px] tracking-[2px]">Jan 1</h3>
        <h2 className="mt-[22px] mb-[30px] font-bold text-[32px] tracking-[6px]">
          Seollal
        </h2>
        <p className="w-[1118px] font-regular text-[16px] tracking-[4px] leading-[28px]">
          Seollal is a traditional festival and national holiday commemorating
          the first day of the lunisolar calendar. It is one of the most
          important traditional holidays for ethnic Koreans, being celebrated in
          both North Korea and South Korea as well as Korean diaspora all around
          the world.
        </p>
      </div>
      <PlateInfo />
    </div>
  );
};

export default CourseInfo;
