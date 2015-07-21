
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
	console.log("******************************************");
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

function testQuickSort() {
	console.log("******************************************");
	//----------------0, 1, 2, 3, 4, 5,  6,  7,  8 , 9, 10
	var inputArray = [7, 10, 11, 10, 12, 2, 1, 16, 3, 9, 20];
	var Sort = require('./divide-and-conquer/quick-sort');
	order = Sort.quickSort(inputArray, null)
	console.log(order);
	inputArray = order.array;
	assert.equal(
		order.array.join(),
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




function quick(arguments) {
	//First 162085
	//Second 164123
	//Last 138382
	var fs  = require("fs");
	var Sort = require('./divide-and-conquer/quick-sort');
	var inputArray = fs.readFileSync('./divide-and-conquer/QuickSort.txt', 'utf8').split("\n").map(function  (number) {
		return parseInt(number);
	});
	inputArray.splice(10000,1);


	var output = Sort.quickSort(inputArray, Sort.pivotMethod.middleElement);
	assert.equal(output.comparisons, 138382);
	//*********************************

	var inputArray = fs.readFileSync('./divide-and-conquer/QuickSort.txt', 'utf8').split("\n").map(function  (number) {
		return parseInt(number);
	});
	inputArray.splice(10000,1);


	var output = Sort.quickSort(inputArray, Sort.pivotMethod.firstElement);
	assert.equal(output.comparisons, 162085);

	//*********************************

	var inputArray = fs.readFileSync('./divide-and-conquer/QuickSort.txt', 'utf8').split("\n").map(function  (number) {
		return parseInt(number);
	});
	inputArray.splice(10000,1);


	var output = Sort.quickSort(inputArray, Sort.pivotMethod.lastElement);
	assert.equal(output.comparisons, 164123);
}

function arrayOfArraysSort() {
	console.log("******************");
	var Sort = require('./divide-and-conquer/merge-sort');
	var inputArray = [[20,1], [2, 3], [2,2], [1, 0], [0.5, 1]];
	inputArray = Sort.mergeSort(inputArray)
	console.log(inputArray);
}

function ClosestPair() {
	var ClosestPair = require('./divide-and-conquer/closest-pair');
  var inputArray = [
		[0,0],
		[-4, 1],
		[-7, -2],
		[4, 5],
		[1, 1]

	];
	output = ClosestPair.find(inputArray)
	assert.equal(output.d.toFixed(6), 1.414214);
	console.log(output);

	inputArray = [
		[0, 2],
		[6, 67],
		[43, 71],
		[39, 107],
		[189, 140]
	];
	output = ClosestPair.find(inputArray)
	assert.equal(output.d.toFixed(4), 36.2215);
	console.log(output);
}
function UnionFindTest() {
	console.log("*************** Union Find ****************************");
	const UnionFind = require('./DataStructures/union-find.js');
	var uf = new UnionFind(10, false);
	uf.union(1,3);
	uf.union(9,8);
	uf.union(8,2);
	uf.union(0,6);
	uf.union(5,4);
	uf.union(6,1);
	uf.union(2,5);
	uf.union(3,8);
	uf.union(0,7);
	console.log(uf.id);
	const correctAnswer = [9,0,9,0,5,9,0,9,9,9];
	assert.equal(uf.id.join(), correctAnswer.join());
}

quick();
testBinarySearch();
testQuickSort();
arrayOfArraysSort();
ClosestPair();
UnionFindTest();
