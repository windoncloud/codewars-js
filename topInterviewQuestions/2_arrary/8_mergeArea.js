// 合并区间
// 给出一个区间的集合，请合并所有重叠的区间。
// 示例 1:
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//     示例 2:
// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// wrong
var merge = function(intervals) {
    const columns = intervals.length
    if (columns === 0) {
        return []
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const tarArr = [intervals[0]]
    for (let i = 1; i < columns; i++) {
        const lastArrStartValue = tarArr[tarArr.length - 1][0]
        const lastArrEndValue = tarArr[tarArr.length - 1][tarArr[tarArr.length - 1].length - 1]
        const curArrStartValue = intervals[i][0]
        const curArrEndValue = intervals[i][intervals[i].length - 1]
        const updateEndFlag = lastArrEndValue >= curArrStartValue
        const updateStartFlag = lastArrStartValue >= curArrStartValue
        if (updateStartFlag || updateEndFlag) {
            if (updateEndFlag) tarArr[i-1][tarArr[i-1].length - 1] = Math.max(curArrEndValue, lastArrEndValue)
            if (updateStartFlag) tarArr[i-1][0] = Math.min(curArrStartValue, lastArrStartValue)
        } else {
            tarArr.push(intervals[i])
        }
    }
    return tarArr
};


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let idx = -1;
    for (let interval of intervals) {
        if (idx == -1 || interval[0] > res[idx][1]) {
            res.push(interval);
            idx++;
        } else {
            res[idx][1] = Math.max(res[idx][1], interval[1]);
        }
    }
    return res;
};

// console.log('merge([[1,3],[2,6],[8,10],[15,18]]) ->', merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log('merge([[1,4],[0,4]]) ->', merge([[1,4],[0,4]]))
// console.log('merge([[[1,4],[0,1]]) ->', merge([[1,4],[0,1]]))
// console.log('merge([[[[[1,4],[0,0]]) ->', merge([[1,4],[0,0]])) // 预期 [[0,0],[1,4]]
console.log('[[1,4],[0,2],[3,5]]->', merge([[1,4],[0,2],[3,5]]))

