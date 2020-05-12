// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
// 链接：https://leetcode-cn.com/problems/climbing-stairs
const target = 5
// 1、暴力法
function climbStairs(n) {
   return  climb_Stairs(0, n);
}
function climb_Stairs(i, n) {
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
}
const result1 = climbStairs(target)
console.log('result1', result1)

// 6、斐波那契公式
function climbStairs6(n) {
    const sqrt5=Math.sqrt(5);
    const fibn=Math.pow((1+sqrt5)/2,n+1)-Math.pow((1-sqrt5)/2,n+1);
    return fibn/sqrt5;
}

console.log('result6', climbStairs6(target))
