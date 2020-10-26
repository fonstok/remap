//============================== global functions
const calcPixPerLine = function () {
	let ppl = $main.clientWidth / howManyLines;
	return ppl;
};

//============================== cached elements
let $main = document.querySelector("main");

//============================== global vars
const startYear = -5.0e6; //* e represents the amount of zeros. //* 6 is 1 million
const endYear = 2000;
const totalYears = Math.abs(startYear) + endYear;
const yearsPerLine = 50000;
let howManyLines = totalYears / yearsPerLine;

//dis console.log(startYear);
