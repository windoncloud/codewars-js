// 322. 零钱兑换
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/coin-change
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 输入: coins = [2], amount = 3
// 输出: -1
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// https://leetcode-cn.com/problems/coin-change/solution/js-xiang-jie-dong-tai-gui-hua-de-si-xiang-yi-bu-da/
var coinChange = function(coins, amount) {
    let dp = new Array( amount + 1 ).fill( Infinity );
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log('coinChange([1, 2, 5]), 11 ->', coinChange([1, 2, 5], 11))
