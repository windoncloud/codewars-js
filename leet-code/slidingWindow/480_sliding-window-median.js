/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 中位数是有序序列最中间的那个数。如果序列的大小是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。
// 例如：
// [2,3,4]，中位数是 3
//     [2,3]，中位数是 (2 + 3) / 2 = 2.5
// 给你一个数组 nums，有一个大小为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
// 示例：
// 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。
// https://leetcode-cn.com/problems/sliding-window-median
// 超出时间限制
var medianSlidingWindow = function(nums, k) {
    let left = 0;
    let right = k - 1;
    let targetArr = []
    while(right <= nums.length - 1) {
        let tempArr = []
        for (let i = 0; i < k; i++) {
            tempArr[i] = nums[(i+left)]
            if (i > 0 && (tempArr[i] < tempArr[i-1])) {
                swapSort(tempArr, i, i-1)
            }
        }
        if ( k % 2 === 0) {
            let mid = (tempArr[k/2] + tempArr[((k/2) -1)]) / 2
            targetArr.push(mid)
            console.log('mid1 ->', mid)
        } else {
            let mid = tempArr[Math.floor(k/2)]
            targetArr.push(mid)
            console.log('tempArr ->', tempArr)
            console.log('mid2 ->', mid)
        }
        left++
        right++
    }
    function swapSort(arr) {
        arr.sort(function (a, b) {
            return (a - b)
        })
    }
    return targetArr
};
console.log('medianSlidingWindow([]) ->', medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
