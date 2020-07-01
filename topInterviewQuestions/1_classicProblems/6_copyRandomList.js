// 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
// 要求返回这个链表的 深拷贝。
// 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
// 示例 1：
// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
// 138. 复制带随机指针的链表
// https://leetcode-cn.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 注意 temp 引用关系
var copyRandomList = function(head) {
    if (!head) return null
    let node = new Node(),temp = node,map = new Map()
    let curr = head
    // 第一次循环，赋值和存map
    while (curr) {
        temp.val = curr.val
        temp.next = curr.next ? new Node() : null
        map.set(curr, temp)
        curr = curr.next
        temp = temp.next
    }
    // 临时节点重新指向头节点
    curr = head
    temp = node
    // 走第二次，处理random
    while (curr) {
        temp.random = curr.random ? map.get(curr.random) : null
        temp = temp.next
        curr = curr.next
    }
    return node
};
