
var shapes_n = 50;
var index = 45000;

var GuiConfig = function() {
	this.update = function() {
		update();
	};
};

var width = 100, height = 100;

for (var i = 0; i < shapes_n; i++) {
	d3.select("div#d3-shapes").append('svg')
		.attr('index', i)
		.attr('width', 100)
		.attr('height',100)
		.style('margin',0)
		.style('border',1)
		.attr('class','svg svg_' + i);
}

var gui = new dat.GUI({ autoPlace: false, width: 120 });
var customContainer = document.getElementById('d3-controls');
customContainer.appendChild(gui.domElement);
var config = new GuiConfig();
gui.add(config, 'update');

var start_pad = 1;

d3.selectAll('svg').append('rect')
	.attr({
		x: start_pad,
		y: start_pad,
		width: 98,
		height: 98,
	})
	.attr("fill", 'white')
	.attr("stroke", 'black')
	.attr("stroke-width", 0)
	.attr("shape-rendering", 'crispEdges')
	.attr("class", "image");

d3.selectAll('svg').each(function() {
	var i = d3.select(this).attr('index') % 13;
	if (i == 0) {
// +
		d3.select(this).append('circle')
			.attr("class", "shape circle")
			.attr("id", 'circle');
	} else if (i == 1) {
// +
		d3.select(this).append('ellipse')
			.attr("class", "shape ellipse")
			.attr("id", 'ellipse')
	} else if (i == 2) {
// +
		d3.select(this).append('rect')
			.attr("class", "shape square")
			.attr("id", 'square');
	} else if (i == 3) {
// +
		d3.select(this).append('rect')
			.attr("class", "shape rectangle")
			.attr("id", 'rectangle');
	} else if (i == 4) {
// +
		d3.select(this).append('line')
			.attr("class", "shape line")
			.attr("id", 'line');
	} else if (i == 5) {
// +
		d3.select(this).append('polyline')
			.attr("class", "shape polyline")
			.attr("id", 'polyline');
	} else if (i == 6) {
// +
		d3.select(this).append('polygon')
			.attr("class", "shape triangle")
			.attr("id", 'triangle');
	} else if (i == 7) {
// +
		d3.select(this).append('polygon')
			.attr("class", "shape equal_triangle")
			.attr("id", 'equal_triangle');
	} else if (i == 8) {
		d3.select(this).append('polygon')
			.attr("class", "shape quad")
			.attr("id", 'quad');
	} else if (i == 9) {
		d3.select(this).append('polygon')
			.attr("class", "shape pentagon")
			.attr("id", 'pentagon');
	} else if (i == 10) {
		d3.select(this).append('polygon')
			.attr("class", "shape hexagon")
			.attr("id", 'hexagon');
	} else if (i == 11) {
		d3.select(this).append('polygon')
			.attr("class", "shape equal_pentagon")
			.attr("id", 'regular_pentagon');
	} else if (i == 12) {
		d3.select(this).append('polygon')
			.attr("class", "shape equal_hexagon")
			.attr("id", 'regular_hexagon');
	} else if (i == 13) {
		d3.select(this).append('polygon')
			.attr("class", "shape crossing_pentagon")
			.attr("id", 'crossing_pentagon');
	} else if (i == 14) {
		// d3.select(this).append('polygon')
		// 	.attr("class", "shape crossing_hexagon")
		// 	.attr("id", 'crossing_hexagon');
	}
});

d3.selectAll('.shape')
	.attr("fill", 'white')
	.attr("stroke", 'black')
	.attr("stroke-width", 2)
	.attr("shape-rendering", 'crispEdges');

	d3.selectAll('.svg').each(function() {
		var children = d3.selectAll(this.childNodes);

		var t = children[0][1].id;
		d3.select(this).append("text")
    .attr("x", 5)
    .attr("y", 15)
		.attr("font-family", "sans-serif")
    .attr("font-size", 10)
		.attr('fill', '#800000')
    .text(t);

		d3.select(this)
			.attr("id", t);
	});

function update() {

	d3.selectAll('.rectangle').each(function() {
		var w = (0.1 + Math.random() * 0.5) * width;
		var h = (0.1 + Math.random() * 0.5) * height;
		var x = width/2 - w/2;
		var y = height/2 - h/2;
		d3.select(this)
			.attr({
				x: x,
		    y: y,
				width: w,
		    height: h,
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.square').each(function() {
		var w = (0.1 + Math.random() * 0.5) * width;
		var x = width/2 - w/2;
		var y = height/2 - w/2;
		d3.select(this)
			.attr({
				x: x,
		    y: y,
				width: w,
		    height: w,
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.line').each(function() {
		var l1 = (0.05 + Math.random() * 0.5) * width;
		var l2 = (0.05 + Math.random() * 0.5) * width;
		var x1 = width/2 - l1/2;;
		var y1 = height/2 - l2/2;
		var x2 = width/2 + l1/2;
		var y2 = height/2 + l2/2;
		d3.select(this)
			.attr({
				x1: x1,
		    y1: y1,
				x2: x2,
		    y2: y2,
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.polyline').each(function() {

		var points = "";
		var n = 3 + Math.floor(Math.random()*3);

		for (var i = 0; i < n; i++) {
			var x = (0.1 + Math.random() * 0.8) * width;
			var y = (0.1 + Math.random() * 0.8) * width;
			points += x+","+y+" ";
		}
		d3.select(this)
			.attr({
				points: points,
				fill: 'white'
			});
	});

	d3.selectAll('.circle').each(function() {
		var d = (0.05 + Math.random() * 0.5) * width;
		var x1 = width/2;
		var y1 = height/2;
		d3.select(this)
			.attr({
				cx: x1,
		    cy: y1,
		    r: d/2,
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.ellipse').each(function() {
		var rx = (0.05 + Math.random() * 0.5) * width;
		var ry = rx * (0.1 + Math.random() * 0.7);
		var x1 = width/2;
		var y1 = height/2;
		d3.select(this)
			.attr({
				cx: x1,
		    cy: y1,
		    rx: rx,
				ry: ry,
	 			fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	function rotate(cx, cy, x, y, angle) {
	    var radians = (Math.PI / 180) * angle,
	        cos = Math.cos(radians),
	        sin = Math.sin(radians),
	        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
	        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
	    return [nx, ny];
	}

	d3.selectAll('.triangle').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(3, 0.1, 0.4),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.equal_triangle').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(3, 0.1, 0.1, true, true),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.quad').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(4, 0.1, 0.4),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.pentagon').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(5, 0.1, 0.4),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.hexagon').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(6, 0.1, 0.4),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.equal_pentagon').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(5, 0.1, 0.3, true, true),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.equal_hexagon').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(6, 0.1, 0.3, true, true),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	d3.selectAll('.crossing_pentagon').each(function() {
		d3.select(this)
			.attr({
				points: getPolygon(5, 0.1, 0.4, false, false),
				fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
			});
	});

	// d3.selectAll('.crossing_hexagon').each(function() {
	// 	d3.select(this)
	// 		.attr({
	// 			points: getPolygon(6, 0.1, 0.4, false, false),
	// 			fill: function() {return Math.random() > 0.5 ? 'white' : 'black'}
	// 		});
	// });


	function getPolygon(n, min, max, equal, sorted) {
		var area = 0;
		var points;

		equal = typeof equal === 'undefined' ? false : equal;
	  sorted = typeof sorted === 'undefined' ? true : sorted;

		while (area < 150) {
			var r = 0;
			points = "";
			var points_array = [];

			var angles = [];
			if (equal) {
				for (var i = 0; i < n; i++) {
					angles.push(i * (360/n));
				}
			} else {
				for (var i = 0; i < n; i++) {
					angles.push(Math.random() * 360);
				}
			}
			if (sorted) {
				angles = angles.sort(function(a,b){return a-b});
			}

			var min_diff = 360;
			for (var i = 0; i < n-1; i++) {
				var diff = Math.abs(angles[i] - angles[i+1]);
				if (diff < min_diff) {
					min_diff = diff;
				}
			}
			if (min_diff < 20) continue;

			var l = (min + Math.random() * max) * width;
			for (var i = 0; i < n; i++) {
				if (!equal) {
					l = (min + Math.random() * max) * width;
				}
				r = angles[i];
				var p = rotate(0, 0, l, 0, r);
				points_array.push(p);
				points += (p[0]+width/2)+","+(p[1]+height/2)+" ";
			}
			var x1 = points_array[0][0];
			var y1 = points_array[0][1];
			var x2 = points_array[1][0];
			var y2 = points_array[1][1];
			var x3 = points_array[2][0];
			var y3 = points_array[2][1];
			area = Math.abs((x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2);
		}
		return points;
	}

	d3.selectAll('.shape').each(function() {

		var t = d3.select(this);
		var bbox = t.node().getBBox();
		var min_x = bbox.x;
		var min_y = bbox.y;
		var max_x = bbox.x+bbox.width;
		var max_y = bbox.y+bbox.height;

		var tx;
		if (Math.random() < 0.5) {
			tx = -Math.random()*(min_x-5);
		} else {
			tx = Math.random()*(width-max_x-5);
		}

		var ty;
		if (Math.random() < 0.5) {
			ty = -Math.random()*(min_y-5);
		} else {
			ty = Math.random()*(height-max_y-5);
		}

		var rx = width/2;
		var ry = height/2;
		var tr = "translate(" + tx + "," + ty + ")";
		tr += " rotate("+Math.random()*180+","+rx+","+ry+")";

		d3.select(this)
			.attr({
				transform: tr
			});
	});

}

update();
