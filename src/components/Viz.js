import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Viz = (props) => {
  useEffect(() => {
   d3.select('.viz > *').remove();
   draw(props)
 }, [props.shapes.length])
  return <div className="viz" />
}

const draw = (props) => {
    var svgContainer = d3.select('.viz').append('svg')
    .attr("width", 200)
    .attr("height", 200);
    var circle = svgContainer.append("circle")
    .attr("cx", 30)
    .attr("cy", 30)
    .attr("r", 20);
  }
export default Viz