/**
 * @param {character[][]} grid
 * @return {number}
 */
//     链接：https://leetcode-cn.com/problems/number-of-islands/solution/pythonjavascript-tao-lu-dfs200-dao-yu-shu-liang-by/
/*
200. 岛屿数量
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。
示例 1:
输入:
    11110
    11010
    11000
    00000
输出: 1
示例 2:
输入:
    11000
    11000
    00100
    00011
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 */

var numIslands = function(grid) {
    function helper(grid, i, j, rows, cols) {
        if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0")
            return;
        grid[i][j] = "0";
        helper(grid, i + 1, j, rows, cols);
        helper(grid, i, j + 1, rows, cols);
        helper(grid, i - 1, j, rows, cols);
        helper(grid, i, j - 1, rows, cols);
    }
    let res = 0;
    const rows = grid.length;
    if (rows === 0) return 0;
    const cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                helper(grid, i, j, rows, cols);
                res++;
            }
        }
    }
    return res;
};

const target = [
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]

console.log('numIslands ->', numIslands(target))

