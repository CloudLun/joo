import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import tteokBokki from "../img/cuisines/Tteok-bokki.svg";
import gimbap from "../img/cuisines/Gimbap.svg";
import galbi from "../img/cuisines/Galbi.svg";
import bibimbap from "../img/cuisines/Bibimbap.svg";
import japchae from "../img/cuisines/Japchae.svg";
import jeon from "../img/cuisines/Jeon.svg";
import kimchiJjigae from "../img/cuisines/Kimchi-jjigae.svg";
import chiliPowder from "../img/chili powder 1.png";

const cuisineImg = [
  tteokBokki,
  gimbap,
  galbi,
  bibimbap,
  japchae,
  jeon,
  kimchiJjigae,
];

const cuisineList = [
  "TteokBokki",
  "Gimbap",
  "Galbi",
  "Bibimbap",
  "Japchae",
  "Jeon",
  "Kimchi Jjigae",
];

const ingredientList = [
  "Gochujang",
  "Gochugaru",
  "Garlic",
  "Soy sauce",
  "Green onion",
  "Seasame oil",
  "Sesame seeds",
];

const ParallelChart = () => {
  const ref = useRef();
  useEffect(() => {
    const svg = d3.select(ref.current);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth - 105;

    let cuisineCirclesPosition = [];
    let ingredientCirclesPosition = [];

    let cuisines = svg
      .append("g")
      .selectAll("cuisines")
      .data(cuisineImg)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => d)
      .attr("width", 75)
      .attr("height", 75)
      .attr("x", 0)
      .attr("y", (d, i) => 120 * i);

    let cuisineCircles = svg
      .append("g")
      .selectAll("cuisineCircles")
      .data(cuisineImg)
      .enter()
      .append("circle")
      .attr("class", "cuisineCircle")
      .attr("r", 8)
      .attr("cx", 125)
      .attr("cy", (d, i) => 120 * i + 37.5)
      .attr("fill", "#F9F7EE")
      .attr("opacity", 0.5);

    let cuisinesText = svg
      .append("g")
      .selectAll("cuisineTexts")
      .data(cuisineList)
      .enter()
      .append("text")
      .attr("class", "cuisineText")
      .attr("x", 150)
      .attr("y", (d, i) => 120 * i + 43.5)
      .attr("fill", "#F9F7EE")
      .attr("font-size", "16px")
      .attr("opacity", 0.5)
      .text((d) => d);

    let ingredients = svg
      .append("g")
      .selectAll("ingredients")
      .data(ingredientList)
      .enter()
      .append("image")
      .attr("xlink:href", (d) => chiliPowder)
      .attr("width", 75)
      .attr("height", 75)
      .attr("x", width)
      .attr("y", (d, i) => 120 * i);

    let ingredientCircles = svg
      .append("g")
      .selectAll("ingredientCircles")
      .data(ingredientList)
      .enter()
      .append("circle")
      .attr("class", "ingredientCircle")
      .attr("r", 8)
      .attr("cx", width - 50)
      .attr("cy", (d, i) => 120 * i + 37.5)
      .attr("fill", "#F9F7EE")
      .attr("opacity", 0.5);

    let ingredientText = svg
      .append("g")
      .selectAll("cuisineTexts")
      .data(ingredientList)
      .enter()
      .append("text")
      .attr("class", "cuisineText")
      .attr("x", width - 75)
      .attr("y", (d, i) => 120 * i + 43.5)
      .attr("fill", "#F9F7EE")
      .attr("font-size", "16px")
      .attr("opacity", 0.5)
      .attr('text-anchor', 'end')
      .text((d) => d)


    for (let i = 0; i < 7; i++) {
      cuisineCirclesPosition.push([
        +document.querySelectorAll(`.cuisineCircle`)[i].attributes.cx.value,
        +document.querySelectorAll(`.cuisineCircle`)[i].attributes.cy.value,
      ]);
      ingredientCirclesPosition.push([
        +document.querySelectorAll(`.ingredientCircle`)[i].attributes.cx.value,
        +document.querySelectorAll(`.ingredientCircle`)[i].attributes.cy.value,
      ]);
    }
    console.log(cuisineCirclesPosition);
    console.log(ingredientCirclesPosition);

    const galbiData = [0, 1, 2, 3];

    let galbiLines = svg
      .selectAll("galbiLines")
      .data(galbiData)
      .enter()
      .append("path")
      .attr("d", (d, i) => {
        let dx = ingredientCirclesPosition[d][0] - cuisineCirclesPosition[3][0],
          dy = ingredientCirclesPosition[d][1] - cuisineCirclesPosition[3][1],
          dr = Math.sqrt(dx * dx + dy * dy);
        return (
          "M" +
          cuisineCirclesPosition[3][0] +
          "," +
          cuisineCirclesPosition[3][1] +
          "A" +
          dr +
          "," +
          dr +
          " 0 0,1 " +
          ingredientCirclesPosition[d][0] +
          "," +
          ingredientCirclesPosition[d][1]
        );
      })
      .attr("stroke", "#F9F7EE")
      .attr("stroke-width", "3px")
      .attr("fill", "none")
      .style("opacity", 0.1);
  });

  return <svg ref={ref} className="w-full h-full"></svg>;
};

export default ParallelChart;

// .append("line")
// .attr("x1", cuisineCirclesPosition[2][0])
// .attr("y1", cuisineCirclesPosition[2][1])
// .attr("x2", (d) => ingredientCirclesPosition[d][0])
// .attr("y2", (d) => ingredientCirclesPosition[d][1])
