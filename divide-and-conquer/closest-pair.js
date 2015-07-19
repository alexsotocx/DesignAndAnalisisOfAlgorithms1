/**
	* Closest pair algorithm finds the closest point in a array
	* The algorithm uses merge sort for sorting the points using the x coordinate
	* And uses an dividing conquer approach with a merge routine of time complexity O(n)
	* Using the Master Method: T(n) <= 2T(N/2) + O(N)
	* First case of the master method giving a O(NLog N) case.
*/

const Sort = require('./merge-sort');
var ClosestPair = {
	find: function(inputArray) {
		const distance = this.util.distance;
		const INFINITE = this.util.INFINITE;
		const min = this.util.min;
		var N = inputArray.length
		inputArray = Sort.mergeSort(inputArray);
		/*
			lo -> index of the First element in the sub-array
			mid -> index of the Middle element in the sub-array
			hi -> index of the lastelement in the sub-array
		*/
		function closestSplitPair(lo, mid, hi, d) {
			var cp = inputArray[mid];
			var possiblePoints = [];
			for(var i = lo; i<= hi; i++){
				//
				if(Math.abs(inputArray[i][1] - cp[1]) <= d && Math.abs(inputArray[i][0] - cp[0]) <= d/2){
					possiblePoints.push(i);
				}
			}
			var ans = {
				i: -1,
				j: -1,
				d: INFINITE
			}
			for(var i = 0; i < possiblePoints.length - 1; i++){
				for(var j= i + 1; j < possiblePoints.length; j++){
					var dp = distance(possiblePoints[i],possiblePoints[j], inputArray);
					if(d > dp){
						ans = {
							i: i,
							j: j,
							d: dp
						}
						d = dp;
					}

				}
			}
			return ans;
		}
		/*
			lo -> First index of the element in the sub-array
			hi -> Last index of the element in the sub-array
		*/
		function solve(lo, hi) {
			if(hi <= lo){
				return {
					i: -1,
					j: -1,
					d: INFINITE
				};
			}else if(hi - lo == 1){
				return {
					i: lo,
					j: hi,
					d: distance(lo, hi, inputArray)
				};
			}else{
				var mid = Math.floor((hi + lo) / 2) //Find the half of the subarray
				var d1 = solve(lo, mid) //find the closest pair in the first half
				var d2 = solve(mid + 1, hi) //find the closest pair in the second half
				var d3 = closestSplitPair(lo, mid, hi, Math.min(d1.d,d2.d)); //Merge each half (Join)
				return min(d1, d2, d3)
			}

		}

		return solve(0, N - 1);
	},
	util: {
		INFINITE: 1e12,
		distance: function(i, j, array) {
			var dx = array[i][0] - array[j][0];
			var dy = array[i][1] - array[j][1];
			return Math.sqrt(dx * dx + dy * dy);
		},
		min: function (d1, d2, d3) {
			if(d1.d <= d2.d && d1.d <= d3.d)
				return d1;
			else if (d2.d <= d1.d && d2.d <= d3.d)
				return d2;
			else
				return d3;
		}
	}
}
module.exports = ClosestPair;
