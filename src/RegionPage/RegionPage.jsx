import React, { useState } from "react";

import { region } from "../Data/korean cuisines by region.js";

import Header from "../Shared/Header";
import KoreanMap from "./KoreanMap";
import Bibimbap from "../img/Group 23.png";

const header = {
  title: "Korea Regional Cuisines",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
};

const RegionPage = () => {
  const [province, setProvince] = useState(1);
  return (
    <div className="flex flex-col px-[105px] pt-[80px] w-[100vw] h-[100vh] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="grid grid-cols-[1fr_384px_238px_402px_1fr] grid-rows-[28px_40px_1fr] flex-1">
        <h2 className="col-start-2 col-end-5 row-start-1 w-full font-SemiBold text-[18px] text-center tracking-[5px] leading-[28px]">
          MOUSE OVER THE MAP TO EXPLORE
        </h2>
        <div className="col-start-2 col-end-3 row-start-3 h-full">
          <KoreanMap province={province} setProvince={setProvince} />
        </div>
        <div className="col-start-4 col-end-5 row-start-3 w-full h-full">
          <div>
            <h1 className="font-bold text-[30px] text-white tracking-[5px]">
              {region[province].province}
            </h1>
            <p className="mt-[13px] h-[400px] font-regular text-[14px] tracking-[3px] leading-[28px]">
              {region[province].description}
            </p>
          </div>
          <div>
            <h1 className="mb-[19px] font-bold text-[18px] tracking-[4px]">
              {`Foods in ${region[province].province}`}
            </h1>
            <img src={Bibimbap} alt="" className="w-[118px] h-[118px]" />
            {/* <div className="relative flex flex-col justify-center items-center w-[118px] h-[118px]">
              <img src={plate} alt="" className="w-full h-[full]" />
              <img
                src={cuisineImg[order]}
                alt=""
                className="absolute w-[60%] h-[55%]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionPage;
