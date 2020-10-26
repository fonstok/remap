//! I put global vars in their own js file called _globals.js;

let $moveBtn = document.querySelector("#moveLines");
let $rock = document.querySelector("#rock");

//=========================================== lines

//* loop to add symbols to svg use symbol to make lines and put in to the svg container
//* make an array to store lines to track them
let line_array = [];

function createLines() {
	//* create svg container put it in div.lines
	var line_contain = SVG().addTo(".lines").size("100%", "100%");
	//* create symbol of line
	var line_sym = line_contain.symbol();
	//* define the line
	line_sym.line(1, 0, 1, "100%").stroke({ width: 1, color: "#000", dasharray: "1, 6" });
	//* use a loop to draw and position the lines.
	for (i = 1; i < howManyLines + 1; i++) {
		let x_pos = calcPixPerLine() * i;
		let line = line_contain.use(line_sym).move(x_pos, 0);
		//* put lines in array;
		line_array.push(line);
	}
}
createLines();

//* loop through the lines to move them one at a time.
//* that's why we put them in an array.

const change_lines = function () {
	//! new argument passing
	pixelsPerLine = $main.clientWidth / howManyLines;
	line_array.forEach((element, index) => {
		let x_pos_moved = calcPixPerLine() * index;
		//* added animate method, there are a bunch of cool options: https://svgjs.com/docs/2.7/animating/#animate
		element.animate(120, { ease: "<" }).move(x_pos_moved, 0);
	});
};
//* change lines on click
$moveBtn.addEventListener("click", function (event) {
	$main.style.width = "1920px";
	change_lines(); //! passing var now
	positionArtifact(); //! on Zoom you re-position them.
});

//=========================================== remapping
//! remap function is the key;
//! This remaps the year of the artifact to an x value related to the the width of the main element
//! The left side of the main element is the starting year, the width of the main element is the ending year
const positionArtifact = function () {
	let artifactsYear = -4.8e5; //* e represents the amount of zeros. //* 6 is 1 million
	//dis console.log(artifactsYear);

	//* get the rectangle of the main tag
	let mainRec = gRct($main);
	//* remap function is in mathStuff.js scripts file
	let location = remap(artifactsYear, startYear, endYear, 0, mainRec.width);
	//* set the rock's left based on the remapped year to x.
	$rock.style.left = location + "px";
};
positionArtifact();
