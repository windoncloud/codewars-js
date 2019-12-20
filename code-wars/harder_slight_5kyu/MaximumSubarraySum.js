// the maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// solution
function maxSequence (arr){
    if(arr.length === 0) {return 0;}
    var previous = Math.max(0, arr[0]), max = arr[0];
    for(var i = 1; i < arr.length; i++){
        previous = Math.max(previous + arr[i], arr[i]);
        max = Math.max(previous, max);
    }
    if(max < 0){
        max = 0
    }
    return max;
}

// better
var maxSequence = function(arr){
var min = 0, ans = 0, i, sum = 0;
for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
}
return ans;
}
