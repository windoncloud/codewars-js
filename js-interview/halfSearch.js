// 二分查找、边界[], 左右闭合,前提条件：有序
function halfSearch(arr = [1, 2, 3, 4, 5, 7, 9], target = 5) {
    let left = 0, right = arr.length -1; // 在 [left, ..., right] 范围内寻找 target (循环不变量)
    while (left <= right) { // 当left == right 时，区间[left, ..., right] 是有效的
        // let mid = Math.floor((left + right)/ 2) // 中间数组索引
        let mid = Math.floor(left + (right - left) / 2) // 防止整型溢出
        if(arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1 //  [mid + 1, ... ,right]
        } else {
            // arr[mid] > target
            right = mid - 1 // [left, ... ,mid - 1]
        }
    }
    return -1
}

// 二分查找边界变化，左闭右开，[)
function halfSearch2(arr = [1, 2, 3, 4, 5, 7, 9], target = 5) {
    let left = 0, right = arr.length; // 在 [left, ..., right) 范围内寻找 target (循环不变量)
    while (left < right) { // 当left == right 时，区间[left, ..., right) 是有效的, [42, 42)无效，故不能等于
        let mid = Math.floor((left + right)/ 2) // 中间数组索引
        if(arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1 //  target 在 [mid + 1, ... ,right) 中
        } else {   // if(arr[mid] > target)
            right = mid // target 在 [left, ... ,mid) 中
        }
    }
    return -1
}

let theResult = halfSearch()
console.log('theResult', theResult)
