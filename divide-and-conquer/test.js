
var fs  = require("fs");

var inputArray = fs.readFileSync('./IntegerArray.txt', 'utf8').split("\r\n").map(function  (number) {
  return parseInt(number);
});


var CountingInversions = require('./counting-inversion.js');
var output = CountingInversions.mergeSort(inputArray);
console.log(output.inversions);
