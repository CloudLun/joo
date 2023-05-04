import React from "react";

import chiliPowder from "../img/chili powder 1.png";

const IngredientPlates = ({ openIntroHandler, plate, data, cuisineImg }) => {
  return (
    <>
      <div
        className={`absolute top-[15%] left-[42%] flex flex-col justify-center items-center w-[320px] h-[320px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="pt-[8px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[0].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[0].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[5%] left-[22%] flex flex-col justify-center items-center w-[280px] h-[280px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[8px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[1].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[55%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[1].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[8%] left-[63%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[2].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[2].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[41%] left-[62%] flex flex-col justify-center items-center w-[210px] h-[210px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[3].name} */}chiliPowder
          </h1>
          {/* <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[3].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[43%] left-[32%] flex flex-col justify-center items-center w-[180px] h-[180px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[4].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[4].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[65%] left-[41%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[5].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {data[5].view}
            </h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[30%] left-[75%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[6].name} */}chiliPowder
          </h1>
          {/* <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] ">{data[6].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[60%] left-[52%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[7].name} */}chiliPowder
          </h1>
          {/* <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] ">{data[7].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[28%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[8].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {data[8].view}
            </h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[45%] left-[19%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[9].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {data[9].view}
            </h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[21%] left-[11%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[10].name} */}chiliPowder
          </h1>
          {/* <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[10].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[58%] left-[76%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[11].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {data[11].view}
            </h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[12%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[11px] text-main tracking-[1.5px]">
            {/* {data[12].name} */}chiliPowder
          </h1>
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px] leading-[1]">
              {data[12].view}
            </h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[1%] left-[6%] flex flex-col justify-center items-center w-[150px] h-[150px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          <h1 className="mt-[10px] font-medium text-[12px] text-main tracking-[1.5px]">
            {/* {data[13].name} */}chiliPowder
          </h1>
          {/* <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" /> */}
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[12px] tracking-[1.5px]">{data[13].view}</h3> */}
            <h3 className="text-[11px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[50%] left-[6%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[14].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[14].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[12%] left-[81%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[15].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[15].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[75%] left-[61%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[16].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[16].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[44%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[17].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[17].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[80%] left-[71%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[17].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[18].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[70%] left-[88%] flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer`}
        onClick={() =>openIntroHandler(true)}
      >
        <img src={plate} alt="" className="w-full h-full" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full">
          {/* <h1 className="mt-[10px] font-medium text-[10px] text-main tracking-[1.5px]">
          {data[19].name}
          </h1> */}
          <img src={chiliPowder} alt="" className="w-[60%] h-[60%]" />
          <div className="font-regular  text-main text-center">
            {/* <h3 className="text-[11px] tracking-[1.5px]">{data[19].view}</h3> */}
            <h3 className="text-[10px]">Views</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientPlates;
