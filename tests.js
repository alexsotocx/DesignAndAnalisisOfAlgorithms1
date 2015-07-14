
// var fs  = require("fs");

// var inputArray = fs.readFileSync('./IntegerArray.txt', 'utf8').split("\n").map(function  (number) {
// 	return parseInt(number);
// });
// inputArray.splice(100000,1);
// var CountingInversions = require('./counting-inversion.js');
// var output = CountingInversions.mergeSort(inputArray);
// console.log(output);


const assert = require('assert');



function testBinarySearch() {
	//----------------0, 1, 2, 3, 4, 5,  6,  7,  8 , 9, 10
	var inputArray = [7, 10, 11, 10, 12, 2, 1, 16, 3, 9, 20];
	var Sort = require('./divide-and-conquer/merge-sort');
	inputArray = Sort.mergeSort(inputArray)
	assert.equal(
		inputArray.join(),
		[7, 10, 11, 10, 12, 2, 1, 16, 3, 9, 20].sort(function (a,b) {
			return a - b;
		}).join(), "The array is not ordered"
	);
	console.log("Sorted array: ", inputArray);
	var BinarySearch = require('./divide-and-conquer/binary_search');
	searchIndex = BinarySearch.search(inputArray, 10);
	assert.equal(searchIndex.index, 5)
	console.log("Search for value 10, found", searchIndex);
	searchIndex = BinarySearch.search(inputArray, 8);
	assert(!searchIndex.answer)
	console.log("Search for value 5, not found", searchIndex);
}

testBinarySearch();