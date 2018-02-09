document.addEventListener('DOMContentLoaded', () => {
  var data = [10,20, 30, 40];

  var width = 420;
  var barHeight = 20;

  var x = d3.scaleLinear()
          .range([0, width]);

  var chart = d3.select(".chart")
                .attr("width", width);

  d3.tsv("./letter_frequency.tsv", type, function(err, data){
    var bar = chart.selectAll("g")
      .data(data)
      .enter("g")
      .append("g")
      .attr("transform", function(d, i){return "translate(0,"+i*barHeight + ")"});

    bar.append("rect")
        .attr("width", function(d){return (x(d.value))})
        .attr("height", barHeight -1);
    
    bar.append("text")
        .attr("x", function(d) { return x(d.value) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.value; });
  });

  function type(d){
    d.value = +d.value;
    return d;
  }

});