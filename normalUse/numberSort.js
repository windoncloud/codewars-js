// bubble sort
// This is a demonstration of Bubble Sort procedures.
var arr = [3,6,1,2,5];
var temp;
for(var i= 0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

// quick sort
// The paper deals with a digit sorting method that is a quick sorting method.
function quicksort (arr){
    if(arr.length<=1){
        return arr;
    }
    var left = [];
    var right = [];
    var middle = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<middle){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat([middle],quicksort(right));
}
console.log('quicksort', quicksort(arr))