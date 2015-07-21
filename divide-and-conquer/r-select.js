var RSelect = {
	/*
		* RandomSelect
		* Running time in average is O(N)
		* Using the master method B = 2 A = 1 D = 1
		* A < B^D => The running time is O(N^D)
	*/
	findStatistic: function(inputArray, statistic) {
		var N = inputArray.length
		statistic--;
		pivotChooser = this.pivotMethod.randomElement //Default random

		function partition(lo, hi) {
			var p = pivotChooser(lo, hi, inputArray); //Index of the pivot
			swap(lo, p); //put the pivot at the start
			p = lo;
			var i = p + 1;
			var j = i;
			for (j; j <= hi; j++) {
				if(inputArray[p] >= inputArray[j]){
					swap(i++,j);
				}
			}
			p = i - 1;
			swap(lo, p);
			return p;
		}

		function swap(x, y, count) {
			if(x == y) return;
			inputArray[y] = [inputArray[x], inputArray[x] = inputArray[y]][0]
		}

		function findNthStatistic(lo, hi) {
			if(hi <= lo) {
				if(lo > 0 && hi > 0)
					return {
						index: hi,
						element: inputArray[hi]
					}
				else
					return {
						index: lo,
						element: inputArray[lo]
					}
			}

			var pivotIndex = partition(lo, hi);
			if(pivotIndex == statistic){
				return {
					index: pivotIndex,
					element: inputArray[pivotIndex]
				};
			} else if (pivotIndex > statistic){
				return findNthStatistic(lo, pivotIndex - 1);
			} else{
				return findNthStatistic(pivotIndex + 1, hi);
			}
		}

		return findNthStatistic(0, N - 1);
	},

	pivotMethod: {
		randomElement: function(lo, hi, inputArray) {
			return Math.floor((Math.random() * (hi - lo + 1)) + lo);
		}
	}
}
module.exports = RSelect;