// 二分查找、前提条件：有序
function halfSearch(arr = [1, 2, 3, 4, 5, 7, 9], target = 5) {
    let left = 0, right = arr.length -1; // 在 [left, ..., right] 范围内寻找 target
    while (left <= right) { // 当left == right 时，区间[left, ..., right] 是有效的
        let mid = Math.floor((left + right)/ 2) // 中间数组索引
        if (arr[mid] < target) {
            left = mid + 1 //  [mid + 1, ... ,right]
        } else if(arr[mid] > target) {
            right = mid - 1 // [left, ... ,mid - 1]
        } else {
            return mid
        }
    }
    return -1
}

let theResult = halfSearch()
console.log('theResult', theResult)
