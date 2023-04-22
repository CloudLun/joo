import React from "react";

const Overview = ({ title, children, intro }) => {
  return (
    <div className="px-[105px] pt-[123px]">
      <div className="font-medium w-[541px] text-[30px] text-white tracking-[11px] leading-[50px]">
        {title}
      </div>
      <div className="border-2 w-full h-[655px] mt-[27px]"></div>
      <div className="border-2 flex justify-center items-center h-[281px]">
        <p className="font-regular w-[626px] text-[18px] text-center text-white tracking-[5px] leading-[28px]">
          {intro}
        </p>
      </div>
    </div>
  );
};

export default Overview;
