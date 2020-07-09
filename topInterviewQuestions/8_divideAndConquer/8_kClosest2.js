// 最接近原点的 K 个点
// 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。
// （这里，平面上两点之间的距离是欧几里德距离。）
// 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。
// 示例 1：
// 输入：points = [[1,3],[-2,2]], K = 1
// 输出：[[-2,2]]
// 解释：
// (1, 3) 和原点之间的距离为 sqrt(10)，
// (-2, 2) 和原点之间的距离为 sqrt(8)，
// 由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
// 我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
// 示例 2：
// 输入：points = [[3,3],[5,-1],[-2,4]], K = 2
// 输出：[[3,3],[-2,4]]
// （答案 [[-2,4],[3,3]] 也会被接受。）
// 提示：
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000
// 注意是K个点，不是第K个点,可以乱序,可用分治
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    work(points, 0, points.length - 1, K)
    return points.slice(0, K)
};
// 分治
// 链接：https://leetcode-cn.com/problems/k-closest-points-to-origin/solution/zui-jie-jin-yuan-dian-de-k-ge-dian-by-leetcode/
// 我们定义一个函数 work(i, j, K)，它的功能是部分排序 (points[i], points[i+1], ..., points[j])
// 使得最小的 K 个元素出现在数组的首部，也就是 (i, i+1, ..., i+K-1)。
// 首先，我们从数组中选择一个随机的元素作为关键元素，然后使用这个元素将数组分为上述的两部分。
// 为了能使用线性时间的完成这件事，我们需要两个指针 i 与 j，然后将它们移动到放错了位置元素的地方，然后交换这些元素。
// 然后，我们就有了两个部分 [oi, i] 与 [i+1, oj]，其中 (oi, oj) 是原来调用 work(i, j, K) 时候 (i, j) 的值。
// 假设第一部分有 10 个元，第二部分有15 个元素。如果 K = 5 的话，我们只需要对第一部分调用 work(oi, i, 5)。
// 否则的话，假如说 K = 17，那么第一部分的 10 个元素应该都需要被选择，我们只需要对第二部分调用 work(i+1, oj, 7) 就行了。
function work(points, i, j, K) {
    if (i >= j) return
    let oi = i, oj = j;
    // int pivot = dist(ThreadLocalRandom.current().nextInt(i, j));
    // let pivot = dist(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    let pivot = dist(points[i]) // 随机取，暂取首个
    while (i < j) {
        while (i < j && dist(points[i]) <= pivot) i++;
        while (i < j && dist(points[j]) > pivot) j--;
        swap(points, i, j);
    }
    if (K <= i - oi + 1)
        work(points, oi, i, K);
    else
        work(points,i+1, oj, K - (i - oi + 1));

}
function dist(point) {
    let x = point[0]
    let y = point[1]
    return x * x + y * y
}
function swap(points, i, j) {
    let t0 = points[i][0], t1 = points[i][1];
    points[i][0] = points[j][0];
    points[i][1] = points[j][1];
    points[j][0] = t0;
}

console.log('kClosest ->', kClosest([[3,3],[5,-1],[-2,4]], 2))
// console.log('kClosest ->', kClosest([[3,3],[3,3],[5,-1],[-2,4]], 3))

// https://leetcode-cn.com/problems/k-closest-points-to-origin/solution/zui-jie-jin-yuan-dian-de-k-ge-dian-javascriptshi-x/

