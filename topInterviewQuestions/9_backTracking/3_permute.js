// 46. 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 示例:
//     输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const list = [];
    backtrack(list, [], nums)
    return list
};
function backtrack(list, tempList, nums) {
    if (tempList.length === nums.length) return list.push([...tempList]);
    for(let i = 0; i < nums.length; i++) {
        if (tempList.includes(nums[i])) continue;
        tempList.push(nums[i]);
        backtrack(list, tempList, nums);
        tempList.pop();
    }
}

console.log('permute ->', permute(['a', 'b', 'c']))
// 链接：https://leetcode-cn.com/problems/permutations/solution/jspython-hui-su-tao-lu-mo-ban-ti-46-quan-pai-lie-b/
