// https://leetcode-cn.com/problems/happy-number/solution/qian-duan-ling-hun-hua-shi-tu-jie-kuai-man-zhi-z-6/
// https://leetcode-cn.com/problems/happy-number/solution/ji-xu-gao-dui-xiang-by-shetia/
// 快乐数
// 编写一个算法来判断一个数 n 是不是快乐数。
// 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
// 如果 n 是快乐数就返回 True ；不是，则返回 False 。
// 示例：
// 输入：19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// 在一些场景, 如链表数据结构和判断循环, 利用快慢指针创造的差值, 可节省内存空间, 减少计算次数
// 202. 快乐数
// 分析
// 根据我们的探索，我们猜测会有以下三种可能。
// 1、最终会得到 11。
// 2、最终会进入循环。
// 3、值会越来越大，最后接近无穷大 （不会出现，比如999 最大，9的平方小于10的平方。只会越来越小）
/**
 * @param {number} n
 * @return {boolean}
 */
// map 记录，重复则不快乐
var isHappy = function(n) {
    let res = sum(n)
    let obj = {}
    while(res != 1){
        if (res in obj) return false
        obj[res] = 1
        res = sum(res)
    }
    return true
    function sum(n){
        n = n + ''
        let sum = 0
        for(let num of n){
            sum += num * num
        }
        return sum
    }
};
// 快慢指针
//     就是慢的 只做一次平方求和, 快的做两次, 显然 快的 比 慢的 快,
//     如果 (死循环 或者 最终等于1) 的话 fast 肯定会 和 slow 碰上
// 等于1后 fast会一直等于1, 因为 1的平方 等于1, 之后就坐等slow追上了
// 死循环, 跑圈, slow 最终会碰上 fast
// 只要判断碰上时是不是等于 1 , 就可以知道 快不快乐

// 通过反复调用 getNext(n) 得到的链是一个隐式的链表。隐式意味着我们没有实际的链表节点和指针，但数据仍然形成链表结构。起始数字是链表的头 “节点”，链中的所有其他数字都是节点。next 指针是通过调用 getNext(n) 函数获得。
// 意识到我们实际有个链表，那么这个问题就可以转换为检测一个链表是否有环。因此我们在这里可以使用弗洛伊德循环查找算法。这个算法是两个奔跑选手，一个跑的快，一个跑得慢。在龟兔赛跑的寓言中，跑的快的称为 “乌龟”，跑得快的称为 “兔子”。
// 不管乌龟和兔子在循环中从哪里开始，它们最终都会相遇。这是因为兔子每走一步就向乌龟靠近一个节点（在它们的移动方向上）。
// 链接：https://leetcode-cn.com/problems/happy-number/solution/kuai-le-shu-by-leetcode-solution/
var isHappy2 = function(n) {
    let slow = sum(n)
    let fast = sum(slow)
    while(fast != 1 && slow != fast){
        slow = sum(slow)
        fast = sum(sum(fast))
    }
    return fast == 1
}
function sum(n){
    n = n + ''
    let sum = 0
    for(let num of n){
        sum += num * num
    }
    return sum
}
console.log('isHappy(1) ->', isHappy(2))
console.log('isHappy2(1) ->', isHappy2(2))
