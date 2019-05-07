/**
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
    // 末尾零个数 wrong, when n is big enough
const trailingZeros = function (n) {
    let sum = 1;
    for (; n>0; n--) {
        sum *= n;
    }
    let zeroNum = 0;
    let result = sum.toString();
    for (let i =result.length;i>=1;i--){
        if (result[i-1] === '0') {
            zeroNum+=1;
        } else {
            return zeroNum;
        }
    }
    return zeroNum;
}
console.log('trailingZeros', trailingZeros(11))

// 总共0⃣️个数, wrong again, when n is big enough
const trailingZerosAll = function (n) {
    let sum = 1;
    for (; n>0; n--) {
        sum *= n;
    }
    let zeroNum = 0;
    let result = sum.toString();
    for (let i =result.length;i>=1;i--){
        if (result[i-1] === '0') {
            zeroNum+=1;
        }
    }
    return zeroNum;
}
console.log('trailingZerosAll', trailingZerosAll(105))

// Correct Answer
// public class Solution {
//     /*
//      * @param n: An integer
//      * @return: An integer, denote the number of trailing zeros in n!
//      */
//     public long trailingZeros(long n) {
//     // write your code here, try to do it without arithmetic operators.
//     long count = 0;
//     long temp=n/5;
//     while (temp!=0) {
//     count+=temp;
//     temp/=5;
// }
// return count;
// }
// }

const trailingZerosFinal = function (n) {
    var sum = 0;
    var power = Math.floor(Math.log(n) / Math.log(5));
    for (var i=1;i<=power;i++) {
        sum += Math.floor(n / Math.pow(5, i));
    }
    return sum;
}

console.log('trailingZeros', trailingZerosFinal(115))

// https://www.jiuzhang.com/solution/trailing-zeros/#tag-other-lang-javascript