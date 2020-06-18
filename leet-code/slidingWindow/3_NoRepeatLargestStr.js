// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
//
// 示例 1:
//
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
//
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
//
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
var lengthOfLongestSubstring = function(s) {
    let num = 0,res = 0;
    let m = '';
    let maxValue = ''
    for (n of s) {
        if (m.indexOf(n) == -1) {
            m += n;
            num++;
            maxValue = res < num ? m: maxValue // 当前最长的子串保存
            res = res < num ? num: res; // 当前最长子串与总的最长字串相比，更新最长或保留原来
        } else {
            m += n;
            m = m.slice(m.indexOf(n)+1); // 窗口左边界收缩至于重复的那个字符串的下一个
            num = m.length;
        }
    }
    console.log('max length ->', res)
    console.log('max str value ->', maxValue)
    return res;
};
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('asdszxcdfdgyreefdg'))
// 思路：
// 这道题主要用到思路是：滑动窗口
//
// 什么是滑动窗口？
//
// 其实就是一个队列,比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，当再进入 a，队列变成了 abca，这时候不满足要求。所以，我们要移动这个队列！
//
// 如何移动？
//
// 我们只要把队列的左边的元素移出就行了，直到满足题目要求！
//
// 一直维持这样的队列，找出队列出现最长的长度时候，求出解！
//
// 时间复杂度：O(n)

// 正数情况 slice = substring， 区别于 subStr
// 1、使用差别
// slice()和substring()第二次参数指定的是字符串最后一个字符后面的位置；
// substr()第二个参数指定返回的字符串个数；
// 2、负数
// slice() 会将所有的负数于字符串的长度相加
// substr() 会将第一个负参数与字符串长度相加，第二个负参数转化为 0
// substring() 将所有的负参数转化为 0
// 3、仅slice可以操作数组
// 参考 https://blog.csdn.net/qq_38209578/article/details/86086550
