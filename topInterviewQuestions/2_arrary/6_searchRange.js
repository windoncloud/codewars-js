// 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 如果数组中不存在目标值，返回 [-1, -1]。
// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length -1;
    let targetIndex = -1
    // 二分查找找到目标值
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] === target) {
            targetIndex = mid
            break
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    // 找到目标值后前后查找
    if (targetIndex === -1) {
        return [-1, -1]
    } else {
        let curLeft = targetIndex - 1
        let curRight = targetIndex + 1
        let leftFounded = false
        let rightFounded = false
        while (true) {
            if (leftFounded && rightFounded) {
                break
            }
            if (!leftFounded) {
                if (nums[curLeft] == nums[targetIndex]) {
                    curLeft--
                } else {
                    curLeft = curLeft + 1
                    leftFounded = true
                }
            }
            if (!rightFounded) {
                if (nums[curRight] == nums[targetIndex]) {
                    curRight++
                } else {
                    curRight = curRight - 1
                    rightFounded = true
                }
            }
        }
        return [curLeft, curRight]
    }
};

console.log('searchRange ->', searchRange([5,7,7,8,9,10], 8))
console.log('searchRange ->', searchRange([5,7,7,8,8,10], 8))
