// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
// 示例：
// 输入: S = "ADOBECODEBANC", T = "ABC"
// 输出: "BANC"
// 说明：
// 如果 S 中不存这样的子串，则返回空字符串 ""。
// 如果 S 中存在这样的子串，我们保证它是唯一的答案。
// 76. 最小覆盖子串
// https://leetcode-cn.com/problems/minimum-window-substring/solution/yi-bu-bu-xing-cheng-hua-dong-chuang-kou-si-lu-shen/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minLen = Infinity, resL // minLen初始尽量大，第一次就能被改写, resL值需要为undefined, 没有匹配到最后substring会为空
    let map = {} // 存储目标字符，和对应的缺失个数
    let missingType = 0 // 当前缺失的字符种类数
    for (const char of t) { // t为baac的话，map为{a:2,b:1,c:1}
        if (!map[char]) {
            missingType++ // 需要找齐的种类数 +1
            map[char] = 1
        } else { map[char]++ }
    }
    let left = 0, right = 0 // 左右指针
    for (; right < s.length; right++) { // right++ 扩张窗口，超出s串就结束循环
        let rightChar = s[right] // 获取right指向的新字符
        if (map[rightChar] !== undefined) map[rightChar]-- // 是目标字符，它的缺失个数-1
        if (map[rightChar] === 0) missingType-- // 它的缺失个数变0，缺失的种类就-1
        while (missingType === 0) { //只要满足当前窗口包含所有字符，就一直收缩窗口
            if (right - left + 1 < minLen) { // 计算长度，和minLen比较
                minLen = right - left + 1 // 更新minLen
                resL = left // 更新最小子串的起点
            }
            let leftChar = s[left] // 获取左指针指向的字符
            if (map[leftChar] !== undefined) map[leftChar]++ //目标字符被舍弃，缺失个数+1
            if (map[leftChar] > 0) missingType++ // 缺失个数变>0，缺失的种类+1
            left++ // 左指针步进，收缩窗口
        }
    }
    return s.substring(resL, resL + minLen) // 根据起点和minLen截取子串
};
let S = 'ADOBECODEBANC'
let T = 'ABC'
console.time('minWindow')
console.log('minWindow ->', minWindow(S, T))
console.timeEnd('minWindow')
