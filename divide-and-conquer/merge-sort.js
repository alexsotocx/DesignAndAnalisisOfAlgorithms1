var Sort = {
  mergeSort: function(inputArray) {
    var N = inputArray.length
    var tmpArray = new Array(N)
    
    /*
      lo -> index of the First element in the sub-array
      mid -> index of the Middle element in the sub-array
      hi -> index of the lastelement in the sub-array
    */
    function merge(lo, mid, hi) {
      var i = lo, j = mid + 1;
      var k = 0;
      //Traverse all the sub-array
      while(i <= mid || j <= hi){
        if( (i <= mid && inputArray[i] <= inputArray[j]) || j > hi)
          tmpArray[k++] = inputArray[i++]
        else
          tmpArray[k++] = inputArray[j++]
      }

      for(i = 0; i < k; i++)
        inputArray[lo++] = tmpArray[i] //Copy all the ordered elements to the array
    }
    /*
      lo -> First index of the element in the sub-array
      hi -> Last index of the element in the sub-array
    */
    function solve(lo, hi) {
      if(hi <= lo) return; //if there is at most 1 element it's already ordered
      var mid = Math.floor((hi + lo) / 2) //Find the half of the subarray
      solve(lo, mid) //order the first half 
      solve(mid + 1, hi) //order  the second half
      merge(lo, mid, hi) //Merge each half (Join)
    }

    solve(0, N - 1)
    return inputArray;
  }
}
module.exports = Sort;