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
    let max_sum = nums[0]
    let cur_sum = 0
    // let targetLeftIndex = 0
    for (let i = 0; i < nums.length; i++) {
        // if ((cur_sum + nums[i]) > nums[i]) {
        //     targetLeftIndex = i
        // } else {
        //
        // }
        cur_sum = Math.max(nums[i], cur_sum + nums[i]) // important
        // 存疑 ⬆️ 若当前指针所指的元素之前的和小于0，则丢弃当前元素之前的数列, nums[i] > cur_sum + nums[i]
        // ⬆️ 若当前指针所指的元素与之前的和小于当前元素，则丢弃当前元素之前的数列
        max_sum = Math.max(cur_sum, max_sum)
    }
    return max_sum
};
console.log('[-2,1,-3,4,-1,2,1,-5,4] ->', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('[-3, -2, -100] ->', maxSubArray([-3,-2,-100])) // -2 > -3 + -2, -100 > -5 + - 100
