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
