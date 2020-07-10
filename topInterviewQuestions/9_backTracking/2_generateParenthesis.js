// 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例：
// 输入：n = 3
// 输出：[
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]
// https://leetcode-cn.com/problems/generate-parentheses/solution/jsda-gai-shi-zui-jian-ji-de-jie-fa-by-shem/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
    const help = (cur, left, right) => {
        if (cur.length === 2 * n) {
            res.push(cur);
            return;
        }
        if (left < n) {
            help(cur + "(", left + 1, right)
        }
        if (right < left) {
            help(cur + ")", left, right + 1);
        }
    };
    help("", 0, 0);
    return res;
};

console.log('generateParenthesis ->', generateParenthesis('14')) // 15卡很久了
