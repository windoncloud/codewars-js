// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const existMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (existMap[target - nums[i]] >= 0) { // !== undefined more clearly
            return [existMap[target - nums[i]], i]
        }
        existMap[nums[i]] = i
    }
    // return []
    // throw new Error("No two sum solution");
};

// 注意，有用indexOf的，indexOf得时间复杂度是o(n)
console.log('twoSum[2, 7, 11, 15] ->', twoSum([2, 7, 11, 15], 18))
