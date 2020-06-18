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
var countNodes = function(root) {
    // 都没有
    if(root === null) return 0;
    // 左右都无
    if(!root.left && !root.right) return 1;
    // 左右子节点 加上自己
    return countNodes(root.left) + countNodes(root.right) + 1;
};

// https://leetcode-cn.com/problems/count-complete-tree-nodes/solution/di-gui-by-meiko-7/
