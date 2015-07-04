
var fs  = require("fs");

var inputArray = fs.readFileSync('./IntegerArray.txt', 'utf8').split("\n").map(function  (number) {
  return parseInt(number);
});
inputArray.splice(100000,1);
var CountingInversions = require('./counting-inversion.js');
var output = CountingInversions.mergeSort(inputArray);
console.log(output);
