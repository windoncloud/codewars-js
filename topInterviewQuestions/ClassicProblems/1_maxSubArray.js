// https://leetcode-cn.com/explore/featured/card/2020-top-interview-questions/278/classic-problems/1236/
// 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
//     输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let sum = 0
    let i = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        i = sum > max ? ++i : i
        max = sum > max ? sum : max
    }
    return max
};
console.log('[-2,1,-3,4,-1,2,1,-5,4] ->', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
