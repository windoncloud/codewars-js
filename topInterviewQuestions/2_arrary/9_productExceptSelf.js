// 238. 除自身以外数组的乘积
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 示例:
//     输入: [1,2,3,4]
// 输出: [24,12,8,6]
// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
// https://leetcode-cn.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const targetArr = [1] // 初始左乘积值
    // 存储前缀之积
    for (let i = 1; i < nums.length; i++) {
        targetArr[i] = nums[i - 1] * targetArr[i - 1]
    }
    // 获取后缀之积，并把前后缀之积赋值给最终的答案
    let r = 1 // 初始右乘积值
    for (let i = nums.length - 1; i >= 0; i--) {
        targetArr[i] = r * targetArr[i]
        r *= nums[i]
    }
    // 前缀之积乘以后缀之积
    return targetArr
};

console.log('productExceptSelf ->', productExceptSelf([1,2,3,4]))
