// https://leetcode-cn.com/problems/balanced-binary-tree/
// https://leetcode-cn.com/problems/balanced-binary-tree/solution/ping-heng-er-cha-shu-by-leetcode/
// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
// 示例 1:
// 给定二叉树 [3,9,20,null,null,15,7]
//       3
//      / \
//     9  20
//       /  \
//      15   7
// 返回 true 。
// 示例 2:
// 给定二叉树 [1,2,2,3,3,null,null,4,4]
//      1
//     / \
//    2   2
//   / \
//  3   3
// / \
//4   4
// 返回 false 。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/balanced-binary-tree/solution/javascriptping-heng-er-cha-shu-by-user7746o/
// 1、
// 自顶向下（暴力法）
// 解题思路： 自顶向下的比较每个节点的左右子树的最大高度差，如果二叉树中每个节点的左右子树最大高度差小于等于 1 ，即每个子树都平衡时，此时二叉树才是平衡二叉树
// 时间复杂度：O(nlogn)，计算 depth 存在大量冗余操作
// 空间复杂度：O(n)
var isBalanced = function(root) {
    if (root == null) {
        return true
    }
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
        return false
    } else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
    function depth(root) {
        if (root == null) {
            return 0
        }
        return Math.max(depth(root.left), depth(root.right)) + 1
    }
};

// 2
// 解答二：自底向上（优化）
// 解题思路： 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 -1 。
// 遍历比较二叉树每个节点 的左右子树深度：
// 比较左右子树的深度，若差值大于 1 则返回一个标记 -1 ，表示当前子树不平衡
// 左右子树有一个不是平衡的，或左右子树差值大于 1 ，则二叉树不平衡
// 若左右子树平衡，返回当前树的深度（左右子树的深度最大值 +1 ）
// 时间复杂度：O(n)
// 空间复杂度：O(n)
var isBalanced = function (root) {
    return balanced(root) !== -1
};
var balanced = function (node) {
    if (!node) return 0
    const left = balanced(node.left)
    const right = balanced(node.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
}
