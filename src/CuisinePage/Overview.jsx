import React, {useState} from "react";
import Header from "../Shared/Header";
import Unit from "../Shared/Unit";
import CuisinePlates from "./CuisinePlates";

const header = {
  title: "Traditional Korean Food Trend",
  subtitle: "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const Overview = () => {

  const [modal, setModal] = useState(false)

  const backPageHandler = () => {
    setModal(false)
  }
  return (
    <div className="relative px-[105px] pt-[110px] text-white">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="w-full h-[735px] mt-[27px]">
        <CuisinePlates setModal={setModal}/>
      </div>
      <div className={`${modal ? "visible" : "hidden"} absolute top-0 left-0 w-full z-20 bg-main`}>
        <Unit backPageHandler={backPageHandler}/>
      </div>
      {/* <div className="border-2 flex justify-center items-center h-[281px]">
        <p className="font-regular w-[626px] text-[18px] text-center text-white tracking-[5px] leading-[28px]">
          {intro}
        </p>
      </div> */}
    </div>
  );
};

export default Overview;
