(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
    {
        "name": "app.jsx", 
        "parent": "phase1", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            4
        ], 
        "type": "other", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx"
        ], 
        "id": 0
    }, 
    {
        "name": "ProductActions.js", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/", 
        "nodemodules": [], 
        "links": [
            11, 
            10
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/Product.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewBox.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewForm.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewFormTab.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/SideBar.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/StarsRating.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js"
        ], 
        "type": "action", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/dispatcher/AppDispatcher.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/constants/ProductConstants.js"
        ], 
        "id": 1
    }, 
    {
        "name": "Product.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            1, 
            3, 
            12
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js"
        ], 
        "id": 2
    }, 
    {
        "name": "ProductsContainer.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            2, 
            12, 
            1, 
            5
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/Product.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/Product.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewBox.react.jsx"
        ], 
        "id": 3
    }, 
    {
        "name": "ReviewApp.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            12, 
            13, 
            1, 
            8, 
            5, 
            3
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/app.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/SideBar.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewBox.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx"
        ], 
        "id": 4
    }, 
    {
        "name": "ReviewBox.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            6, 
            13, 
            1
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewForm.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js"
        ], 
        "id": 5
    }, 
    {
        "name": "ReviewForm.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            7, 
            1, 
            13, 
            9
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewBox.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewFormTab.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/StarsRating.react.jsx"
        ], 
        "id": 6
    }, 
    {
        "name": "ReviewFormTab.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [], 
        "links": [
            1
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewForm.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js"
        ], 
        "id": 7
    }, 
    {
        "name": "SideBar.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            12, 
            1
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js"
        ], 
        "id": 8
    }, 
    {
        "name": "StarsRating.react.jsx", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/", 
        "nodemodules": [
            "react"
        ], 
        "links": [
            1
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewForm.react.jsx"
        ], 
        "type": "component", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js"
        ], 
        "id": 9
    }, 
    {
        "name": "ProductConstants.js", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/constants/", 
        "nodemodules": [
            "keymirror"
        ], 
        "links": [], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js"
        ], 
        "type": "constant", 
        "requires": [], 
        "id": 10
    }, 
    {
        "name": "AppDispatcher.js", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/dispatcher/", 
        "nodemodules": [
            "flux"
        ], 
        "links": [], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js"
        ], 
        "type": "other", 
        "requires": [], 
        "id": 11
    }, 
    {
        "name": "ProductStore.js", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/", 
        "nodemodules": [
            "events", 
            "lodash"
        ], 
        "links": [
            11, 
            10, 
            13
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/Product.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ProductsContainer.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/SideBar.react.jsx"
        ], 
        "type": "store", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/dispatcher/AppDispatcher.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/constants/ProductConstants.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ReviewBoxStore.js"
        ], 
        "id": 12
    }, 
    {
        "name": "ReviewBoxStore.js", 
        "parent": "review_app", 
        "root": "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/", 
        "nodemodules": [
            "events", 
            "lodash"
        ], 
        "links": [
            11, 
            1, 
            10
        ], 
        "requiredby": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewApp.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewBox.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/components/ReviewForm.react.jsx", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/stores/ProductStore.js"
        ], 
        "type": "store", 
        "requires": [
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/dispatcher/AppDispatcher.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/actions/ProductActions.js", 
            "/Users/Felix/Documents/hec/src/js/phase1/review_app/constants/ProductConstants.js"
        ], 
        "id": 13
    }
]
},{}],2:[function(require,module,exports){
var data = require("./app.json");

var graph = {
  nodes: [],
  links: []
};

for(var i=0, l=data.length; i<l; i++){
  graph.nodes.push({name: data[i].name, group: data[i].parent});
  data[i].links.forEach(function(t){
    console.log(i, t);
    graph.links.push({source: i, target: t, value: 1})
  });
}

var width = 1200,
    height = 900;

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
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

  var labels = gnodes.append("text")
      .text(function(d) { return d.name; });

  console.log(labels);
    
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


},{"./app.json":1}]},{},[2]);
