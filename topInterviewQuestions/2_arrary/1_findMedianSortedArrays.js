// 寻找两个正序数组的中位数
// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// 示例 1:
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0
// 示例 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 4. 寻找两个正序数组的中位数
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/zui-jian-dan-wu-nao-de-fang-fa-by-song-san-sui-i/
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort((a,b)=>a-b);
    let length = nums3.length;
    if (length%2 === 0) {
        return (nums3[length/2-1] + nums3[length/2])/2
    } else {
        return nums3[Math.floor(length/2)]
    }
};
// remain to do more efficiently O(log(m + n))
