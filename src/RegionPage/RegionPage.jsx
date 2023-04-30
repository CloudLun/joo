import React, { useState } from "react";

import Header from "../Shared/Header";
import KoreanMap from "./KoreanMap";
import Bibimbap from "../img/Group 23.png";

const header = {
  title: "Korea Regional Cuisines",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
};

const data = [
  {
    title: "Gangwon",
    content:
      "The Taebaek Mountain Range and the East Sea are adjacent. Because you can come into contact with the products of the mountainous and coastal regions, a very diverse diet has been developed, and it is also called an area blessed with heavenly blessings. In addition to agricultural products such as acorns, corn, and potatoes, it is also famous for seafood such as squid and seaweed. Squid sundae and squid bulgogi are also starting to become famous in Gangwon-do.",
  },
  {
    title: "Seoul / Gyeonggi",
    content:
      "The Taebaek Mountain Range and the East Sea are adjacent. Because you can come into contact with the products of the mountainous and coastal regions, a very diverse diet has been developed, and it is also called an area blessed with heavenly blessings. In addition to agricultural products such as acorns, corn, and potatoes, it is also famous for seafood such as squid and seaweed. Squid sundae and squid bulgogi are also starting to become famous in Gangwon-do.",
  },
  {
    title: "Chungcheong",
    content:
      "The Taebaek Mountain Range and the East Sea are adjacent. Because you can come into contact with the products of the mountainous and coastal regions, a very diverse diet has been developed, and it is also called an area blessed with heavenly blessings. In addition to agricultural products such as acorns, corn, and potatoes, it is also famous for seafood such as squid and seaweed. Squid sundae and squid bulgogi are also starting to become famous in Gangwon-do.",
  },
  {
    title: "Gyeongsang",
    content:
      "The Taebaek Mountain Range and the East Sea are adjacent. Because you can come into contact with the products of the mountainous and coastal regions, a very diverse diet has been developed, and it is also called an area blessed with heavenly blessings. In addition to agricultural products such as acorns, corn, and potatoes, it is also famous for seafood such as squid and seaweed. Squid sundae and squid bulgogi are also starting to become famous in Gangwon-do.",
  },
  {
    title: "Jeolla / Gwangju",
    content:
      "The Taebaek Mountain Range and the East Sea are adjacent. Because you can come into contact with the products of the mountainous and coastal regions, a very diverse diet has been developed, and it is also called an area blessed with heavenly blessings. In addition to agricultural products such as acorns, corn, and potatoes, it is also famous for seafood such as squid and seaweed. Squid sundae and squid bulgogi are also starting to become famous in Gangwon-do.",
  },
];

const RegionPage = () => {
  const [province, setProvince] = useState(0);
  return (
    <div className="flex flex-col px-[105px] py-[110px] w-[100vw] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="grid grid-cols-[1fr_384px_238px_402px_1fr] grid-rows-[28px_40px_1fr] flex-1">
        <h2 className="col-start-2 col-end-5 row-start-1 w-full font-SemiBold text-[18px] text-center tracking-[5px] leading-[28px]">
          MOUSE OVER THE MAP TO EXPLORE
        </h2>
        <div className="col-start-2 col-end-3 row-start-3 h-full">
          <KoreanMap setProvince={setProvince} />
        </div>
        <div className="col-start-4 col-end-5 row-start-3 w-full h-full">
          <div>
            <h1 className="font-bold text-[32px] text-white tracking-[5px]">
              {data[province].title}
            </h1>
            <p className="mt-[13px] mb-[34px] font-regular text-[18px] tracking-[4px] leading-[28px]">
              {data[province].content}
            </p>
          </div>
          <div>
            <h1 className="mb-[19px] font-bold text-[18px] tracking-[4px]">
              {`Foods in ${data[province].title}`}
            </h1>
            <img src={Bibimbap} alt="" className="w-[118px] h-[118px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionPage;
