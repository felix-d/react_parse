var data = require("./app.json");
var randomcolor = require("randomcolor");

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}


var width = 1200,
    height = 900,
    linkedByIndex = {},
    colors = randomcolor({
      count: 3,
      luminosity: "light"
    }),
    beacons = [
      {x: width/2 , y: 0},
      {x: 0, y: height},
      {x: width , y: height},
    ];

data.nodes.forEach(function(e){
  switch(e.type){
  case "COMPONENT":
    e.color = colors[0];
    e.beacon = beacons[0];
    break;
  case "ACTION":
    e.color = colors[1];
    e.beacon = beacons[1];
    break;
  case "STORE":
    e.color = colors[2];
    e.beacon = beacons[2];
    break;
  default:
    break;
  }
  
});


var force = d3.layout.force()
      .size([width, height])
      .charge(-400)
      .linkDistance(100)
      .on("tick", tick);

var drag = force.drag()
      .on("dragstart", dragstart);


var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

var link = svg.selectAll(".link")
      .data(data.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke", function(d){ return d.stroke; });

var nodes = svg.selectAll(".node")
      .data(data.nodes)
      .enter()
      .append("g");

force
  .nodes(data.nodes)
  .links(data.links)
  .start();

// define the nodes
var circles = nodes
      .append("circle")
      .attr("class", "circle")
      .attr("r", function(d) { return d.size; })
      .style("fill", function(d){ return d.color; })
      .on("dblclick", dblclick)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .call(drag);

// add the text 
var textNodes = nodes.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; })
      .call(drag);


// add the curvy lines
function tick(e) {
  var k = 6 * e.alpha;
  data.nodes.forEach(function(o, i) {
    o.y += i & 1 ? k : -k;
    o.x += i & 2 ? k : -k;
  });
  circles
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    });

  textNodes.attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  data.links.forEach(function(d) {
    linkedByIndex[d.source.id + "," + d.target.id] = 1;
    linkedByIndex[d.target.id + "," + d.source.id] = 1;
  });
}



function neighboring(a, b) {
  return a.id == b.id || linkedByIndex[a.id + "," + b.id];
}

function mouseover(d) {
  // d3.selectAll(".circle").style("stroke","black");
  // d3.selectAll(".link").style("stroke","black").style("stroke-width",4);
  d3.selectAll(".link").transition().duration(500)
    .style("opacity", function(o) {
      return o.source === d || o.target === d ? 1 : .1;
    });
  d3.selectAll("text").transition().duration(500)
    .style("opacity", function(o) {
      return neighboring(d, o) ? 1 : .1;
    });
  
  d3.selectAll(".circle").transition().duration(500)
    .style("opacity", function(o) {
      return neighboring(d, o) ? 1 : .1;
    });
}

function mouseout() {
  d3.selectAll(".circle").transition().duration(1000)
    .style("opacity", 1);
  d3.selectAll(".link").transition().duration(1000)
    .style("opacity", 1);
  d3.selectAll("text").transition().duration(1000)
    .style("opacity", 1);
}
