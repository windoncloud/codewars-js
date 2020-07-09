// 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const output = []
    if (digits.length !== 0) {
        backtrack("", digits)
        return output
    }
    function backtrack(combination, next_digits) {
        // if there is no more digits to check
        if (next_digits.length === 0) {
            // the combination is done
            output.push(combination);
        } else {
            // iterate over all letters which map
            // the next available digit
            let digit = next_digits.substring(0, 1);
            let letters = phone[digit];
            for (let i = 0; i < letters.length; i++) {
            // for (let i = 0; i < 2; i++) { // analyze
                let letter = phone[digit].substring(i, i + 1);
                // append the current letter to the combination
                // and proceed to the next digits
                backtrack(combination + letter, next_digits.substring(1));
            }
        }
    }
};

console.log('letterCombinations ->', letterCombinations('23'))
