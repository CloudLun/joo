import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import plate from "../img/Group 28.png";

const CuisinePlates = ({setModal}) => {
  const ref = useRef();

  let data = [];
  for (let i = 0; i < 10; i++) data.push(i);
  console.log(data);

  useEffect(() => {
    const svg = d3.select(ref.current);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;

    // let simulation = d3
    //   .forceSimulation(data)
    //   .force("charge", d3.forceManyBody().strength(-20))
    //   .force("center", d3.forceCenter(width / 2, height / 2))
    //   .on("tick", ticked);

    svg.selectAll('.plate').remove()

    svg
      .append("g")
      .selectAll("Plates")
      .data(data)
      .join("image")
      .attr('class', 'plate')
      .attr("xlink:href", plate)
      .attr("width", (d, i) => 108 + d*10)
      .attr("height", (d, i) => 108 + d*10)
      .attr("x", (d) => Math.floor(Math.random() * (width - 120)))
      .attr("y", (d) => Math.floor(Math.random() * (height - 220)))
      .on('click', () => {
        setModal(true)
      })
  });

  return <svg ref={ref} className="w-full h-full"></svg>;
};

export default CuisinePlates;
