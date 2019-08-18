function binarySearch(target,arr,start,end) {
    var start   = start || 0;
    var end     = end || arr.length-1;
    var mid = parseInt(start+(end-start)/2);
    if(target==arr[mid]){
        return mid;
    }else if(target>arr[mid]){
        return binarySearch(target,arr,mid+1,end);
    }else{
        return binarySearch(target,arr,start,mid-1);
    }
    return -1;
}
// [1,2,3,4,5,7,7,7,9,10,11]
function binarySearch2(target,arr,start,end, targetIndex, targetNum) {
    var start   = start || 0;
    var end     = end || arr.length-1;
    var mid = parseInt(start+(end-start)/2);
    console.log('targetIndex', targetIndex)
    if(target==arr[mid]){
        console.log('targetIndex', targetIndex)
        return binarySearch(target,arr,mid+1,end, targetIndex);
    }else if(target>arr[mid]){
        return binarySearch(target,arr,mid+1,end);
    }else{
        return binarySearch(target,arr,start,mid-1);
    }
    return -1;
}

binarySearch2(7, [1,2,3,4,5,7,7,7,9,10,11])

function elementCountInArray(arr) {
    var map = {};
    for (var index = 0; index < arr.length; index++) {
        var val = arr[index];
        if (!map[val]) {
            map[val] = 1
        } else {
            map[val]++;
        }
    }
    for (var k in map) {
        console.log(k + '在数组中出现的次数为' + map[k]);
    }
}
elementCountInArray([1, 2, 2, 3, 5, 5, 5, 6]);