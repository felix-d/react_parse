var data = require("./app.json");
var randomcolor = require("randomcolor");

var graph = {
  nodes: [],
  links: []
};

var seengroups = {};

function pushLinks(t){
  graph.links.push({source: i, target: t, value: 1});
  
}
for(var i=0, l=data.length; i<l; i++){
  data[i].weight = 1;
  if(data[i].requiredby !== undefined){
    data[i].weight = data[i].requiredby.length + 1;
  }
  var color = null;
  if(!seengroups.hasOwnProperty(data[i].parent)){
    color = randomcolor({
      luminosity: 'dark',
      color: 'random'
    });
    seengroups[data[i].parent] = color;
  }
  else {
    color = seengroups[data[i].parent];
  }
  graph.nodes.push({name: data[i].name, group: data[i].parent, weight: data[i].weight, color: color});

  data[i].links.forEach(function(t){
    graph.links.push({source: i, target: t, value: 1});
  });
}


var width = 1600,
    height = 1600;

var color = d3.scale.category20();

var force = d3.layout.force()
      .charge(-120)
      .linkDistance(500)
      .size([width, height]);

var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

var drawGraph = function(graph) {
  force
    .nodes(graph.nodes)
    .links(graph.links)
    .start();

  var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var gnodes = svg.selectAll('g.gnode')
        .data(graph.nodes)
        .enter()
        .append('g')
        .classed('gnode', true);
  
  var node = gnodes.append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return d.weight * 5; }) 
        .style("fill", function(d) {return d.color; })
        .style("width", 30)
        .call(force.drag);

  var labels = gnodes.append("text")
        .text(function(d) { return d.name; });

  
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    gnodes.attr("transform", function(d) { 
      return 'translate(' + [d.x, d.y] + ')'; 
    });
    
    
    
  });
};

drawGraph(graph);

