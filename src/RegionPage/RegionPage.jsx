import React from "react";

import KoreanMap from "./KoreanMap";

const RegionPage = () => {
  return (
    <div className="flex flex-col gap-[40px] px-[105px] py-[123px] w-[100vw] h-[100vh] text-black bg-region">
      <div className="">
        <div className="font-medium text-[30px] tracking-[11px] leading-[50px]">
          Korea Regional <br /> Cuisines
        </div>
        <div className="mt-[16px] w-[507px] font-regular text-[18px] leading-[28px]">
          Korean cuisines are influenced by climate, geography, and natural
          environment and characterized by local specialties..
        </div>
      </div>

      <div className="border-2 flex gap-[121px] flex-1">
        <div className="border-2 flex flex-col items-end flex-1 h-full">
            <h2 className="mb-[20px] w-full font-[600] text-[18px] tracking-[5px] leading-[28px]">CLICK THE MAP TO EXPLORE</h2>
            <div className="border-2 flex-1 w-[401.87px]">
                <KoreanMap />
            </div>
        </div>
        <div className="border-2 w-[612px]"></div>
      </div>
    </div>
  );
};

export default RegionPage;
