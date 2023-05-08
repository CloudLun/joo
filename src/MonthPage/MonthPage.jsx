import React, { useState } from "react";
import Header from "../Shared/Header";
import CourseInfo from "./CuisineInfo";

const header = {
  title: "Korean Holidays/Seasons Cuisines",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const MonthPage = () => {
  const [select, setSelect] = useState(
    months.map((m, i) => (m === "JAN" ? true : false))
  );
  
  const monthSelectHandler = (month) => {
    setSelect(months.map((m, i) => (m === month ? true : false)))
  }

  return (
    <div className="px-[105px] pt-[80px] w-[100vw] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div>
        <div className="flex justify-between">
          {months.map((m, i) => {
            return m === "JAN" ||
              m === "FEB" ||
              m === "MAY" ||
              m === "AUG" ||
              m === "NOV" ? (
              <div
                key={i}
                className={`border-2 pt-[28px] w-[89px] h-[89px] font-semibold text-[18px] text-center ${
                  select[i] && "text-main"
                } hover:text-main tracking-[2px] leading-[28px] ${
                  select[i] && "bg-white"
                } hover:bg-white rounded-full cursor-pointer`}
                onClick={ () => monthSelectHandler(m)}
              >
                {m}
              </div>
            ) : (
              <div
                key={i}
                className={`border-2 pt-[28px] w-[89px] h-[89px] font-semibold text-[18px] text-center rounded-full opacity-[20%]`}
              >
                {m}
              </div>
            );
          })}
        </div>
        <div className="mt-[30px] font-thin text-[14px] text-end">
          *follow th lunar calendar
        </div>
      </div>
      <CourseInfo />
    </div>
  );
};

export default MonthPage;
