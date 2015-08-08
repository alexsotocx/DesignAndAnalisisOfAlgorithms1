
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

function testRSelect() {
	console.log("******************************************");
	//----------------0, 1, 2, 3, 4, 5,  6,  7,  8 , 9, 10
	var inputArray = [7, 10, 11, 10, 12, 2, 1, 16, 3, 9, 20];
	var RSelect = require('./divide-and-conquer/r-select');
	var output = RSelect.findStatistic(inputArray, 3);
	console.log(output);
	assert.equal(output.element, 3);
	output = RSelect.findStatistic(inputArray, 5);
	console.log(output);
	assert.equal(output.element, 9);
	output = RSelect.findStatistic(inputArray, 1);
	console.log(output);
	assert.equal(output.element, 1);
	output = RSelect.findStatistic(inputArray, 11);
	console.log(output);
	assert.equal(output.element, 20);
}

function testBFS() {
	graph = [
		[1, 2],
		[0, 2, 3],
		[0, 1, 3, 4],
		[1, 2, 4, 5],
		[2, 3, 5],
		[3, 4],
		[]
	]
	startVertex = 0;
	const BFS = require('./graphs/graph-search').BFS;
	var output = BFS(graph, startVertex);
	console.log("************BFS*****************************");
	console.log(output);
 	assert.equal('{"visited":[true,true,true,true,true,true,null],"path":{"0":{"last":null,"distance":0},"1":{"last":0,"distance":1},"2":{"last":0,"distance":1},"3":{"last":1,"distance":2},"4":{"last":2,"distance":2},"5":{"last":3,"distance":3}}}', JSON.stringify(output));
	startVertex = 6;
	var output = BFS(graph, startVertex);
	console.log(output);
	assert.equal('{"visited":[null,null,null,null,null,null,true],"path":{"6":{"last":null,"distance":0}}}', JSON.stringify(output));
}

function testSCC() {
	var fs  = require("fs");
	function createGraphs(input, max) {
		var graph = new Array(max )
		console.log(graph.length);
		var graphT = new Array(max )
		for (var i = 0; i < input.length ; i++) {
			var edge = input[i];

			var match = edge.match(/([0-9]+)\s+([0-9]+)/);
			var u = parseInt(match[1]); u--;
			var v = parseInt(match[2]); v--;
			if(!graph[u])
				graph[u] = []
			if(!graphT[v])
				graphT[v] = []
			graph[u].push(v);
			graphT[v].push(u);
		};
		return {
			graph: graph,
			graphT: graphT
		}
	}
	input = [
  	"1 4",
  	"7 1",
  	"4 7",
  	"9 7",
  	"6 9",
  	"9 3",
  	"3 6",
  	"8 6",
  	"2 8",
  	"5 2",
  	"8 5",
	]
	console.log(">>>>>>>>>>>>>>>>>");
	var graphs = createGraphs(input, 9);
	console.log(graphs);
	const Kosaraju = require('./graphs/SCC/scc');
	console.log(Kosaraju(graphs.graph, graphs.graphT));
	var input = fs.readFileSync('./graphs/SCC/SCC.txt', 'utf8').split("\n")
	input.splice(input.length,1);
	console.log("length of the input",input.length);
	var graphs = createGraphs(input, 875714);
	var output = Kosaraju(graphs.graph, graphs.graphT);
	console.log(output);
}

/*quick();
testBinarySearch();
testQuickSort();
arrayOfArraysSort();
ClosestPair();
UnionFindTest();
testRSelect();
testBFS();*/
testSCC();
