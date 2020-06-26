// 125. 验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// 示例 1:
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:
// 输入: "race a car"
// 输出: false
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // replace(/\W|_/g, '')
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l]!==s[r]) {
            return false
        }
        l++
        r--
    }
    return true
};
// isLetterOrDigit
var isPalindrome2 = function(s) {
    let l = 0, r = s.length - 1
    function isNumberOrLetters(letter) {
        return (letter.charCodeAt() >= 48 && letter.charCodeAt() <= 57) // 0-9
            || (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) // a-z
            || (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) // A-Z
        // return (letter.charCodeAt() >= '0'.charCodeAt() && letter.charCodeAt() <= '9'.charCodeAt())
        //     || (letter.charCodeAt() >= 'a'.charCodeAt() && letter.charCodeAt() <= 'z'.charCodeAt())
        //     || (letter.charCodeAt() >= 'A'.charCodeAt() && letter.charCodeAt() <= 'Z'.charCodeAt())
    }
    while (l < r) {
        while (l < r && !isNumberOrLetters(s[l])) {
            l++;
        }
        while (l < r && !isNumberOrLetters(s[r])) {
            r--;
        }
        if (l < r) {
            if (s[l].toLowerCase()!==s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }
    }
    return true
};
var isPalindrome3 = function (s) {
    var arr = s
        .replace(/[^\d^\w]/g, '')
        .toLowerCase()
        .split('');

    return arr.join() === arr.reverse().join();
};

console.time('reg')
console.log('isPalindrome ->', isPalindrome("A man, a plan, a canal: Panama"))
console.timeEnd('reg')
console.time('ascii')
console.log('isPalindrome ->', isPalindrome2("A man, a plan, a canal: Panama"))
console.timeEnd('ascii')
console.time('join')
console.log('isPalindrome ->', isPalindrome3("A man, a plan, a canal: Panama"))
console.timeEnd('join')
// 正则 https://tool.oschina.net/uploads/apidocs/jquery/regexp.html
// ^最近一层在[]中表示取反、其他的表示以什么为开头
// ASCII码值
// a-z	97-122
// A-Z	65-90
// 0-9	48-57
