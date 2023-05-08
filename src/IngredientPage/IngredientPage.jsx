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
for (let i = 0; i < 20; i++) {
  cuisineImg.push(chiliPowder);
}

const ingredientsFor = [
  "Soft Tofu Stew",
  "spicy chicken stew",
  "Korean Cucumber Salad",
  "Stir-fried rice cakes",
];

const ingredients = [
  "tteok",
  "fish cake",
  "green cabbage",
  "scallion",
  "gochujang",
  "gochugaru",
  "soy sauce",
  "sugar",
  "garlic",
  "napa cabbage",
  "daikon radish",
  "salt",
  "rice flour",
  "gochugaru",
  "fish sauce",
  "salted shrimp sauce",
  "scallion",
  "garlic",
  "sugar",
  "rice",
  "vinegar",
  "soy sauce",
  "sesame oil",
  "seaweed",
  "carrot",
  "egg",
  "spinach",
  "pickled yellow radish",
  "sesame seed",
  "beef short rib",
  "soy sauce",
  "sugar",
  "honey",
  "sesame oil",
  "asian pear",
  "onion",
  "scallion",
  "garlic",
  "ginger",
  "black pepper",
  "sesame seed",
  "short grain rice",
  "beef",
  "soybean sprout",
  "spinach",
  "cucmber",
  "zucchini",
  "carrot",
  "garlic",
  "scallion",
  "soy sauce",
  "sesame oil",
  "sesame seed",
  "salt",
  "pepper",
  "egg",
  "gochujang",
  "vegetable oil",
  "pork intestine",
  "sweet rice",
  "potato starch",
  "garlic",
  "ginger",
  "salt",
  "pepper",
  "sesame oil",
  "sesame seed",
  "scallion",
  "pork blood",
  "beef",
  "scallion",
  "onion",
  "carrot",
  "soy sauce",
  "sugar",
  "honey",
  "garlic",
  "sesame oil",
  "sesame seed",
  "pepper",
  "dumpling wrapper",
  "kimchi",
  "tofu",
  "soybean sprout",
  "onion",
  "pork",
  "scallion",
  "garlic",
  "ginger",
  "sesame oil",
  "soy sauce",
  "egg",
  "salt",
  "pepper",
  "vinegar",
  "sugar",
  "gochugaru",
  "active dry yeast",
  "sugar",
  "flour",
  "salt",
  "vegetable oil",
  "cinnamon powder",
  "seed",
  "soy sauce",
  "vinegar",
  "sesame oil",
  "garlic",
  "sesame seed",
  "prawn",
  "black pepper",
  "flour",
  "corn starch",
  "egg",
  "vegetable oil",
  "onion",
  "chili pepper",
  "rice flour",
  "honey",
  "bean",
  "nut",
  "seed",
  "pollen",
  "vegetable oil",
  "egg",
  "garlic",
  "onion",
  "kimchi",
  "rice",
  "soy sauce",
  "sesame oil",
  "black pepper",
  "scallion",
  "kimchi",
  "pork belly",
  "gochugaru",
  "garlic",
  "ginger",
  "kimchi juice",
  "tofu",
  "scallion",
  "salt",
  "black pepper",
  "noodle",
  "sesame seed",
  "seaweed",
  "egg",
  "daikon radish",
  "onion",
  "scallion",
  "salt",
  "kelp",
  "chicken breast",
  "garlic",
  "onion",
  "flour",
  "potato starch",
  "zucchini",
  "vegetable oil",
  "sesame oil",
  "salt",
  "fish sauce",
  "soy sauce",
  "black pepper",
  "kelp",
  "glass noodle",
  "carrot",
  "onion",
  "scallion",
  "beef",
  "shiitake mushroom",
  "spinach",
  "vegetable oil",
  "salt",
  "black pepper",
  "soy sauce",
  "garlic",
  "sesame seed",
  "egg",
  "kimchi",
  "pork",
  "spam",
  "tofu",
  "ham",
  "onion",
  "red bell pepper",
  "scallion",
  "gochugaru",
  "gochujang",
  "soy sauce",
  "garlic",
  "black pepper",
  "noodle",
];

const uniqueIngredients = ingredients.filter(
  (value, index, array) => array.indexOf(value) === index
);
let ingredientCounts = [];
let ingredientList = [];
let ingredientTop = []

for (let i = 0; i < uniqueIngredients.length; i++) {
  // console.log(uniqueIngredients[i])
  ingredientCounts = [];
  for (let j = 0; j < ingredients.length; j++) {
    if (uniqueIngredients[i] === ingredients[j])
      ingredientCounts.push(ingredients[j]);
  }
  ingredientList.push({
    ingredient: uniqueIngredients[i],
    counts: ingredientCounts.length,
  });
}

let commonList = ['vinegar','sugar','salt',"honey"]

ingredientTop = ingredientList.sort(function (a, b) {
  return a.counts - b.counts;
}).slice(41,66).filter(ingredient => !commonList.includes(ingredient.ingredient))

console.log(ingredientTop)

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
            ingredients={ingredientsFor}
          />
        }
      </div>
    </div>
  );
};
export default IngredientPage;
