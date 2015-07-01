var Sort = {
  mergeSort: function(inputArray) {
    var N = inputArray.length
    var tmpArray = new Array(N)
    
    function merge(lo, mid, hi) {
      var i = lo, j = mid + 1;
      var k = 0;
      while(i <= mid || j <= hi){
        if( (i <= mid && inputArray[i] <= inputArray[j]) || j > hi)
          tmpArray[k++] = inputArray[i++]
        else
          tmpArray[k++] = inputArray[j++]
      }

      for(i = 0; i < k; i++)
        inputArray[lo++] = tmpArray[i]
    }

    function solve(lo, hi) {
      if(hi <= lo) return;
      var mid = Math.floor((hi + lo) / 2)
      solve(lo, mid)
      solve(mid + 1, hi)
      merge(lo, mid, hi)
    }

    solve(0, N - 1)
    return inputArray;
  }
}
module.exports = Sort;