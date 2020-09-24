// https://leetcode-cn.com/problems/last-stone-weight-ii/
// 1049. 最后一块石头的重量 II
// 有一堆石头，每块石头的重量都是正整数。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0。
// 示例：
// 输入：[2,7,4,1,8,1]
// 输出：1
// 解释：
// 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
// 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
// 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
// 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
// 提示：
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {

    if (stones === null || stones.length == 0)
        return 0

    let sum = 0

    stones.forEach(element => sum += element)

    let mid = sum >> 1
    console.log('mid', mid)
    console.log('sum ->', sum)
    let dp = new Array(mid + 1).fill(0)
    console.log('dp ->', dp)
    for (let i = 0; i < stones.length; i++)
        for (let j = mid; j >= stones[i]; j--)
            dp[j] = Math.max(dp[j], stones[i] + dp[j - stones[i]])
            console.log('dp temp->', dp)

    console.log('dp final ->', dp)
    return (sum - 2 * dp[mid])

};

console.log('[2,7,4,1,8,1] = > ', lastStoneWeightII([2,7,4,1,8,1]))
