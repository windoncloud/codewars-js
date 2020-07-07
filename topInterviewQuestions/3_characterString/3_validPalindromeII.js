// 验证回文字符串 Ⅱ
// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1:
// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意:
//     字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
// https://leetcode-cn.com/problems/valid-palindrome-ii/solution/shan-chu-zuo-zhi-huo-you-zhi-zhen-zi-fu-pan-duan-s/
// 思路
// 判断是否是回文串，用 双指针法
// 设置头尾指针，如果双指针的字符相同，指针往中间挪动，继续检查
// 如果双指针的字符不同，看看能否通过删除一个字符（要么删左指针指向的字符，要么删右指针指向的字符），使得剩下的字串仍是回文串
// 写一个判断回文串的辅助函数，判断 删去一个字符后的子串 是否是回文串
// 辅助函数的双指针在循环时，如果字符不同，就一票否决，不给机会
// 680. 验证回文字符串 Ⅱ
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (str) {
    function isPali(str, l, r) { // 辅助函数
        while (l < r) {            // 指针相遇 结束循环
            if (str[l] !== str[r]) { // 一票否决
                return false
            }
            l++                      // 指针挪动，相互逼近
            r--
        }
        return true                // 没有遇到不同，返回true
    }
    let l = 0, r = str.length - 1 // 头尾指针
    while (l < r) {
        if (str[l] !== str[r]) { // 转为判断删掉字符后的字串，是否是回文串
            return isPali(str, l + 1, r) || isPali(str, l, r - 1)
        }
        l++
        r--
    }
    return true
};

console.log('validPalindrome() ->', validPalindrome("abca"))
