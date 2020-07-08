// 67. 二进制求和
// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"
// 提示：
// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。

/**
 * @param {string} a

 // https://leetcode-cn.com/problems/add-binary/solution/hua-jie-suan-fa-67-er-jin-zhi-qiu-he-by-guanpengch/
 * @param {string} b
 * @return {string}
 */
// 逢2进1
var addBinary = function(a, b) {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        // ans += sum % 2;
        ans = sum % 2 + ans;
        ca = Math.floor(sum / 2);
    }
    // ans += ca == 1 ? ca : "";
    ans = (ca == 1 ? ca : "") + ans;
    // return ans.split('').reverse().join('');
    return ans;
};

var addBinary2 = function(num1, num2) {
    var len1 = num1.length,len2 = num2.length,temp = 0,res="";
    while(len1||len2){
        if(len1){
            temp+= +num1[--len1]
        }
        if(len2){
            temp+= +num2[--len2]
        }
        res = temp%2 + res;
        if(temp>1){
            temp = 1
        }else{
            temp = 0
        }
    }
    if(temp)res = 1 + res;
    return res
}
console.log('addBinary', addBinary('1110','1011'))
console.log('addBinary', addBinary2('1110','1011'))
