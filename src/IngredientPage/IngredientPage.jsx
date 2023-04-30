import React from "react";
import PlatesPage from "../Shared/PlatesPage";


const data = {
  title: "All Ingredients of the Dishes",
  subtitle: "Korean cuisines are influenced by climate, geography, and natural environment and characterized by local specialties..",
  intro:
    "Top 20 Number of Traditional Korean Food Videos on YouTube in the first half of 2021, by dish",
};


const IngredientPage = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <PlatesPage title={data.title} intro={data.intro} />
    </div>
  );
};
export default IngredientPage;