
var fs  = require("fs");
const RSelect = require('../divide-and-conquer/r-select.js');
const mod = 10000;
var ans = 0;
var array = []
var m = new Date();
console.log(m);
fs.readFileSync('./Median.txt', 'utf8').split("\n").forEach(function(item, index) {
	array.push(parseInt(item));
	var i = index + 1;
	if((i % 2) == 0){
		var xd = (RSelect.findStatistic(array, i/2)).element % mod;
		ans = ((ans %mod) + xd ) % mod;
	} else {
		var xd = (RSelect.findStatistic(array, (i + 1)/2)).element % mod;
		ans = ((ans %mod) + xd) % mod;
	}
	ans = ans
});
var total = new Date() - m;
console.log(total,ans);