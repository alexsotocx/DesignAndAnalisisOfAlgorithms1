var CountingInversions = {
  mergeSort: function(inputArray) {
    var N = inputArray.length
    var tmpArray = new Array(N)
    var inversions = 0
    /*
      lo -> index of the First element in the sub-array
      mid -> index of the Middle element in the sub-array
      hi -> index of the lastelement in the sub-array
    */
    function count(lo, mid, hi) {
      var i = lo, j = mid + 1;
      var k = 0;
      //Traverse all the sub-array
      while(i <= mid || j <= hi){
        if(j > hi || (i <= mid && inputArray[i] <= inputArray[j]))
          tmpArray[k++] = inputArray[i++]
        else{
          if(i <= mid){
            inversions += (mid - i) + 1; //Count the inversions
          }
          tmpArray[k++] = inputArray[j++]
        }
      }

      for(i = 0; i < k; i++)
        inputArray[lo++] = tmpArray[i] //Copy all the ordered elements to the array
    }
    /*
      lo -> First index of the element in the sub-array
      hi -> Last index of the element in the sub-array
    */
    function countRecursive(lo, hi, nivel) {
      if(hi <= lo) return; //if there is at most 1 element it's already ordered
      var mid = Math.floor((hi + lo) / 2) //Find the half of the subarray
      countRecursive(lo, mid, nivel + 1) //order the first half
      countRecursive(mid + 1, hi, nivel +1) //order  the second half
      count(lo, mid, hi) //count each half (Join)
    }

    countRecursive(0, N - 1, 0)
    return {orderedArray: inputArray, inversions: inversions};
  }
}
module.exports = CountingInversions;
