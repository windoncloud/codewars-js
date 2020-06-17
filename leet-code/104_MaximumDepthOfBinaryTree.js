// 求一颗二叉树的最高深度
// 从根节点到叶子节点的最长路径长度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    } else {
        let left_height = maxDepth(root.left);
        let right_height = maxDepth(root.right);
        return Math.max(left_height, right_height) + 1;
    }
};
