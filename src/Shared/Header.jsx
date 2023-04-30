import React from "react";

const Header = ({title, subtitle}) => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="font-medium text-[30px] tracking-[11px]">
          {title}
        </div>
        <div className="mt-[25px] w-[780px] font-regular text-[18px] tracking-[4px] leading-[28px]">
        {subtitle}
        </div>
      </div>
      <div className="border-[1px] block mt-[80px] mb-[60px] w-full h-[1px] bg-white"></div>
    </>
  );
};

export default Header;
