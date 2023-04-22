import React, { useEffect, useRef } from "react";

import * as d3 from "d3";

import Korea from "../Data/Korea.geojson";

const KoreanMap = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;

    let projection = d3
      .geoMercator()
      .center([127.788, 35.9])
      .scale(4550)
      .translate([width / 2, height / 2]);

    d3.json(Korea).then((data) => {
      svg
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("fill", "#997B56")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "white")
        .style("opacity", 0.3)
        .on("mouseover", event => {
          d3.select(event.currentTarget).style("fill", "#1E2024");
        })
        .on("mouseout", event => {
            d3.select(event.currentTarget).style("fill", "#997B56");
          });
    });
  });

  return <svg ref={ref} className="w-full h-full"></svg>;
};

export default KoreanMap;
