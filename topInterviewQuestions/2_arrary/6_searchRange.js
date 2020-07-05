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

var searchRange2 = function(nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while (left <= right) {
        mid = (left + right) >> 1; // 相当于除以2
        if (nums[mid] === target) break;
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    if(left > right) return [-1, -1];
    let i = mid, j = mid;
    while(nums[i] === nums[i - 1]) i--;
    while(nums[j] === nums[j + 1]) j++;
    return [i, j];
};
// 右边界版本
var searchRange3 = function(nums, target) {
    let mid, midL, midR;
    // 搜索右边界
    function searchR(left, right, target) {
        while (left <= right) {
            mid = (left + right) >> 1;
            if (nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return right
    }
    // 在区间[0, nums.length - 1搜索target的右边界midR
    midR = searchR(0, nums.length - 1, target)
    // midR < 0说明超过边界；nums[midR] !== target说明无此元素；
    if (midR < 0 || nums[midR] !== target) return [-1, -1]
    // 在区间[0, midR - 1]搜索target - 1的右边界midL
    midL = searchR(0, midR - 1, target - 1)
    return [midL + 1, midR]
};
// 左边界版本
var searchRange4 = function (nums, target) {
    let mid, midL, midR;
    function searchL(left, right, target) {
        while (left <= right) {
            mid = (left + right) >> 1;
            if (nums[mid] >= target) right = mid - 1;
            else left = mid + 1;
        }
        return left
    }
    midL = searchL(0, nums.length - 1, target)
    if (midL >= nums.length || nums[midL] !== target) return [-1, -1]
    midR = searchL(midL + 1, nums.length - 1, target + 1)
    return [midL, midR - 1]
};
console.time('searchRange1')
console.log('searchRange1 ->', searchRange([5,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10], 8))
console.timeEnd('searchRange1')
console.time('searchRange2')
console.log('searchRange2 ->', searchRange2([5,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10], 8))
console.timeEnd('searchRange2')
console.time('searchRange3')
console.log('searchRange3 ->', searchRange3([5,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10], 8))
console.timeEnd('searchRange3')
