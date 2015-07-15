var Sort = {
	/*
		* Quicksort
		* Running time in average is O(nlog n)
		* Using the master method with some assumtions the pivot always divide
		* The array in two exact halfs so B = 2
		* Always there are two recursive calls A = 2
		* The partition method takes O(N) so D = 1
		* A = B^D => The running time is O(N^D Log n)
	*/
	quickSort: function(inputArray, pivotChooser) {
		var N = inputArray.length
		var swaps = 0;
		var comparisons = 0;
		//If the method is not defined use the random
		pivotChooser = pivotChooser || this.pivotMethod.randomElement //Default random


		/*
			*
			* Partition the vector using swaps
			*
		*/
		function partition(lo, hi) {
			var p = pivotChooser(lo, hi, inputArray); //Index of the pivot
			swap(lo, p, true); //put the pivot at the start
			p = lo;
			var i = p + 1;
			var j = i;
			for (j; j <= hi; j++) {
				if(inputArray[p] >= inputArray[j])
					swap(i++,j, true);
			}
			p = i - 1;
			swap(lo, p, true);
			return p;
		}

		//Swaps two elements of a array
		function swap(x, y, count) {
			if(x == y) return;
			if(count)
				swaps++;
			inputArray[y] = [inputArray[x], inputArray[x] = inputArray[y]][0]
		}

		function sortArray(lo, hi) {
			if(hi <= lo) return; //if there is at most 1 element it's already ordered
			comparisons += hi - lo;
			var pivotIndex = partition(lo, hi);
			sortArray(lo, pivotIndex - 1); //Sort the elements less or equal to the pivot
			sortArray(pivotIndex + 1, hi); //Sort the elements greater than to the pivot
		}

		sortArray(0, N - 1)

		return {
			array: inputArray,
			swaps: swaps,
			comparisons: comparisons
		};
	},

	pivotMethod: {
		firstElement: function(lo, hi, inputArray) {
			return lo;
		},
		lastElement: function(lo, hi, inputArray) {
			return hi;
		},
		randomElement: function(lo, hi, inputArray) {
			return Math.floor((Math.random() * (hi - lo + 1)) + lo);
		},
		middleElement: function(lo, hi, inputArray) {
			var mid = Math.floor((lo + hi) / 2);
			if((inputArray[mid] > inputArray[lo] && inputArray[mid] < inputArray[hi]) || (inputArray[mid] > inputArray[hi] && inputArray[mid] < inputArray[lo]))
				return mid;
			else if((inputArray[lo] > inputArray[mid] && inputArray[lo] < inputArray[hi]) || (inputArray[lo] > inputArray[hi] && inputArray[lo] < inputArray[mid]))
				return lo;
			else
				return hi;
		}
	}
}
module.exports = Sort;