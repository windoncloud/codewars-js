// 给出一个区间的集合，请合并所有重叠的区间。
//
// 示例 1:
//
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//     示例 2:
//
// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-intervals

var merge = function(intervals) {
    if(intervals.length == 0){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    console.log('intervals', intervals)
    let res = [];
    res.push(intervals.reduce((acc, cur) => {
        if(acc[1] >= cur[0]){
            if(acc[1] < cur[1]){
                acc[1] = cur[1];
            }
            return acc;
        }else{
            res.push(acc);
            return cur;
        }
    }));
    return res;
};

console.log('merge', merge([[1,3],[2,6],[8,10],[15,18]]))
