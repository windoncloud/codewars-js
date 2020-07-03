// 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
/**
 * @param {number[]} height
 * @return {number}
 */
// 11. 盛最多水的容器 container-with-most-water
var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let ans = 0;
    while ( l < r) {
        let area =( r- l ) * Math.min(height[l], height[r]);
        // int area = min(height[l], height[r]) * (r - l); // in java
        ans = Math.max(ans, area);
        if (height[l] < height[r]) {
            ++l;
        } else {
            --r;
        }
    }
    return ans;
}

console.log('maxArea([1,8,6,2,5,4,8,3,7]) ->', maxArea([1,8,6,2,5,4,8,3,7]))
console.log('[2 , 0] ->', maxArea([2, 0]))
