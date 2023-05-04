import React, { useState } from "react";
import Header from "../Shared/Header";
import IngredientPlates from "./IngredientPlates";
import plate from "../img/plate.svg";
import Unit from "./Unit";
import chiliPowder from "../img/chili powder 1.png";

const header = {
  title: "All Ingredients of the Dishes",
  subtitle:
    "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};

let cuisineImg = [];

const ingredients = [
  "Soft Tofu Stew",
  "spicy chicken stew",
  "Korean Cucumber Salad",
  "Stir-fried rice cakes",
];

for (let i = 0; i < 20; i++) {
  cuisineImg.push(chiliPowder);
}

const IngredientPage = () => {
  const [open, setOpen] = useState(false);
  const backPageHandler = () => {
    setOpen(false);
  };
  const openIntroHandler = (i) => {
    setOpen(i);
  };
  return (
    <div className="relative flex flex-col px-[90px] pt-[80px] h-[100vh] text-white bg-main">
      <Header title={header.title} subtitle={header.subtitle} />
      <div className="relative flex-1 w-full  mt-[27px]">
        <IngredientPlates
          openIntroHandler={openIntroHandler}
          plate={plate}
          cuisineImg={cuisineImg}
        />
      </div>
      <div
        className={`${
          open ? "visible" : "hidden"
        } absolute top-0 left-0 w-full z-20 bg-main`}
      >
        {
          <Unit
            backPageHandler={backPageHandler}
            openIntroHandler={openIntroHandler}
            plate={plate}
            chiliPowder={chiliPowder}
            intro={open}
            ingredients={ingredients}
          />
        }
      </div>
    </div>
  );
};
export default IngredientPage;
