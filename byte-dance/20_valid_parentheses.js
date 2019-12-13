
var isValid = function (s) {
    while (s.length) {
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};

var isValid2 = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    while (s.length) {
        var left = s[0];
        if (!(left in map)) return false;
        var i = 1;
        while (s[i] != map[left] && i < s.length) left = s[i++];
        if (s[i] != map[left]) return false
        s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
    }
    return true
};

var isValid3 = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = []
    for (var ch of s){
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
};

// https://leetcode-cn.com/problems/valid-parentheses/solution/javascript-you-xiao-de-gua-hao-by-rhinoc/
