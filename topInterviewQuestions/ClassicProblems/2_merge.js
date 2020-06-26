// https://leetcode-cn.com/explore/featured/card/2020-top-interview-questions/278/classic-problems/1237/
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明:
//     初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素
// 输入:
//     nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// 输出: [1,2,2,3,5,6]
// 反例 [0],0,[1],1 没有arrayCopy的话
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    // add missing elements from nums2
    // 将nums2剩余的数字按nums1[...nums2[len2 + 1], ...]copy到nums1中
    if ((len2 + 1) > 0) {
        function arrayCopy(extraArr, extraArrIndex, targetArr, targetArrIndex, length) {
            targetArr.splice(targetArrIndex, length, ...extraArr.slice(extraArrIndex, extraArrIndex + length));
        }
        arrayCopy(nums2, 0, nums1, 0, len2 + 1);
    }
    console.log('len1 ->', len1)
    console.log('len2 ->', len2)
};
const arr1 = [1,2,3,0,0,0]
const arr2 = [2,5,6]
merge(arr1, 3, arr2, 3)
console.log('arr1 ->', arr1)
console.log('arr2 ->', arr2)
const arr3 = [7,8,9,0,0,0]
const arr4 = [4,5,6]
merge(arr3, 3, arr4, 3)
console.log('arr3 ->', arr3)
console.log('arr4 ->', arr4)
