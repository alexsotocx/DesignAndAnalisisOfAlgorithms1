var BinarySearch = {
	search: function(array, number) {

		/**
			By master method
			T(n) <= aT(n/b) + O(n^d)
			T(n) <= 1T(n/2) + O(1)
			The binary search uses case 1 if the master method
				* a = b^d
				* 1 = 2^0
				* The case 1 states that n^d Log n will be the running time
				* So the running time of binarySearch is Log n
		**/
		function find(lo, hi) {
			if(lo < hi){
				var mid = Math.floor((lo + hi) / 2); //Find the mid
				var valueMid = array[mid];
				if (valueMid >= number) { //If the value that im searching is below the value at the mid search in the first half
					return find(lo, mid);
				} else { //The value that im searching is greater than the value at mid find the value in the second half
					return find(mid + 1, hi);
				}
			}
			return lo; //Return the last index of the seen
		}

		var index = find(0, array.length - 1);
		return {
			answer: array[index] == number,
			index: index
		}
	},
	upperBound: function(array, number) {
		return this.search(array, number + 1).index
	},
	lowerBound: function(array, number) {
		return this.search(array, number).index
	}

}

module.exports = BinarySearch;