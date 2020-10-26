const getRatio = function (_num1, _num2) {
	let ratio = 1;
	if (_num1 > _num2) {
		ratio = _num2 / _num1;
	} else {
		ratio = _num1 / _num2;
	}
	return ratio;
};

const getRandomBetween = function (min, max, _ops = { _round: true }) {
	if (!_ops._round) {
		return Math.random() * (max - min) + min;
	} else {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

// Flips a negative to a positive and vice versa
// console.log(flipPolls(-1)) returns 1
const flipPolls = function (_num) {
	var theNum = _num * -1;
	return theNum;
};
// is a number even or odd
//console.log(isEven(55)) // returns false;
const isEven = function (_num) {
	if (_num % 2 == 0) {
		// even
		return true;
	} else {
		// odd
		return false;
	}
};
// Remap a number in a current range of numbers to a different range of numbers;
// Example: 20 in a range of 1 - 20 is 20, but 20 remapped to a different range of 50 - 100 is 100
// helpful when translating objects to a different scope
// console.log(remap(20, 1, 20, 50, 100)); // -- returns 100
/*
const remap = function (number, oMin, oMax, nMin, nMax, round) {
	if (round == undefined) {
		round = false;
	}
	//range check
	if (oMin == oMax) {
		console.warn("Warning: Zero input range");
		return None;
	}

	if (nMin == nMax) {
		console.warn("Warning: Zero output range");
		return None;
	}

	//check reversed input range
	let reverseInput = false;
	oldMin = Math.min(oMin, oMax);
	oldMax = Math.max(oMin, oMax);
	if (oldMin != oMin) {
		reverseInput = true;
	}

	//check reversed output range
	let reverseOutput = false;
	newMin = Math.min(nMin, nMax);
	newMax = Math.max(nMin, nMax);
	if (newMin != nMin) {
		reverseOutput = true;
	}

	let portion = ((number - oldMin) * (newMax - newMin)) / (oldMax - oldMin);
	if (reverseInput) {
		portion = ((oldMax - number) * (newMax - newMin)) / (oldMax - oldMin);
	}

	let result = portion + newMin;
	if (reverseOutput) {
		result = newMax - portion;
	}

	if (round) {
		result = Math.floor(result);
	}
	return result;
};
**/
const remap = function (number, range1Start, range1End, range2Start, range2End, round) {
	if (round == undefined) {
		round = false;
	}
	//range check
	if (range1Start == range1End) {
		console.warn("Warning: Zero input range");
		return None;
	}

	if (range2Start == range2End) {
		console.warn("Warning: Zero output range");
		return None;
	}

	//check reversed input range
	let reverseInput = false;
	r1Start = Math.min(range1Start, range1End);
	r2End = Math.max(range1Start, range1End);
	if (r1Start != range1Start) {
		reverseInput = true;
	}

	//check reversed output range
	let reverseOutput = false;
	r2Start = Math.min(range2Start, range2End);
	r2End = Math.max(range2Start, range2End);
	if (r2Start != range2Start) {
		reverseOutput = true;
	}

	let portion = ((number - r1Start) * (r2End - r2Start)) / (r2End - r1Start);
	if (reverseInput) {
		portion = ((r2End - number) * (r2End - r2Start)) / (r2End - r1Start);
	}

	let result = portion + r2Start;
	if (reverseOutput) {
		result = r2End - portion;
	}

	if (round) {
		result = Math.floor(result);
	}

	return result;
};
