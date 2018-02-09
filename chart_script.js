document.addEventListener('DOMContentLoaded', () => {
  d3.select(".chart").selectAll('div')
    .data([1, 2, 3, 4])
  .enter().append("div")
    .style("width", function(d){ return d*10 + "px"})
    .style("background", function(d){return "black"})
  .text(function(d){return d;})
});