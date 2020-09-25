// 螺旋矩阵
// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
// 示例 1:
// 输入:
//     [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ]
//     ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:
// 输入:
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//     ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    const res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i])   // 上层
        for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])// 下层
        for (let i = bottom; i > top; i--) res.push(matrix[i][left])  // 左层
        right--
        top++
        bottom--
        left++  // 四个边界同时收缩，进入内层
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
    else if (left === right) // 剩下一列，从上到下依次添加
        for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
    return res
};
