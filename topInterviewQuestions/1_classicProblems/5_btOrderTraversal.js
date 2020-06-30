// https://leetcode-cn.com/problems/binary-tree-level-order-traversal
/*
    给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
    示例：
    二叉树：[3,9,20,null,null,15,7],
    3
    / \
   9  20
      /  \
     15   7
    返回其层次遍历结果：
    [
        [3],
        [9,20],
        [15,7]
    ]
    链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
*/
// BFS 的使用场景总结：层序遍历、最短路径问题 与DFS的比较
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
// 二叉树的层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/
var levelOrder = function(root) {
    const ret = [];
    if (!root) return ret;

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
};
