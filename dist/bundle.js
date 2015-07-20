(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "nodes": [
        {
            "name": "ProductActions.js",
            "size": 20.0,
            "type": "ACTION",
            "id": 0
        },
        {
            "name": "Product.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 1
        },
        {
            "name": "ProductsContainer.react.jsx",
            "size": 11.023155636951108,
            "type": "COMPONENT",
            "id": 2
        },
        {
            "name": "ReviewApp.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 3
        },
        {
            "name": "ReviewBox.react.jsx",
            "size": 11.023155636951108,
            "type": "COMPONENT",
            "id": 4
        },
        {
            "name": "ReviewForm.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 5
        },
        {
            "name": "ReviewFormTab.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 6
        },
        {
            "name": "SideBar.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 7
        },
        {
            "name": "StarsRating.react.jsx",
            "size": 8.0,
            "type": "COMPONENT",
            "id": 8
        },
        {
            "name": "ProductStore.js",
            "size": 14.831881303119282,
            "type": "STORE",
            "id": 11
        },
        {
            "name": "ReviewBoxStore.js",
            "size": 14.831881303119282,
            "type": "STORE",
            "id": 12
        }
    ],
    "links": [
        {
            "source": 0,
            "target": 9
        },
        {
            "source": 0,
            "target": 10
        },
        {
            "source": 1,
            "target": 0
        },
        {
            "source": 2,
            "target": 0
        },
        {
            "source": 4,
            "target": 0
        },
        {
            "source": 5,
            "target": 0
        },
        {
            "source": 7,
            "target": 0
        },
        {
            "source": 8,
            "target": 0
        },
        {
            "source": 9,
            "target": 2
        },
        {
            "source": 9,
            "target": 7
        },
        {
            "source": 10,
            "target": 4
        }
    ]
}
},{}],2:[function(require,module,exports){
;(function(root, factory) {

  // Support AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);

  // Support CommonJS
  } else if (typeof exports === 'object') {
    var randomColor = factory();
    
    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }
    
    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;
  
  // Support vanilla script loading
  } else {
    root.randomColor = factory();
  };

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  var randomColor = function(options) {
    if (options.seed && !seed) seed = options.seed;
    options = options || {};

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count != null) {

      var totalColors = options.count,
          colors = [];

      options.count = null;

      while (totalColors > colors.length) {
        colors.push(randomColor(options));
      }

      options.count = totalColors;

      //Keep the seed constant between runs. 
      if (options.seed) seed = options.seed;
      
      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue (options) {

    var hueRange = getHueRange(options.hue),
        hue = randomWithin(hueRange);

    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (hue < 0) {hue = 360 + hue}

    return hue;

  }

  function pickSaturation (hue, options) {

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    if (options.hue === 'monochrome') {
      return 0;
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var brightness,
        bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);

  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange}
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed == null) {
      return Math.floor(range[0] + Math.random()*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var hex = "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1}
    if (h === 360) {h = 359}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v, g = t, b = p;  break;
      case 1: r = q, g = v, b = p;  break;
      case 2: r = p, g = v, b = t;  break;
      case 3: r = p, g = q, b = v;  break;
      case 4: r = t, g = p, b = v;  break;
      case 5: r = v, g = p, b = q;  break;
    }
    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  return randomColor;
}));

},{}],3:[function(require,module,exports){
var data = require("./app.json");
var randomcolor = require("randomcolor");

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}


var width = 960,
    height = 500,
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
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
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

},{"./app.json":1,"randomcolor":2}]},{},[3])


//# sourceMappingURL=bundle.js.map