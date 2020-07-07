// 整数反转
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 示例 1:
// 输入: 123
// 输出: 321
// 示例 2:
// 输入: -123
// 输出: -321
// 示例 3:
// 输入: 120
// 输出: 21
// 注意:
//     假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


/**
 * @param {number} x
 * @return {number}
 */
// −2 ^ 31 ~ 2 ^ 31 -1
var reverse = function(x) {
    let ord = Math.abs(x);//去符号
    let now = 0;
    while(ord > 0){
        now = now * 10 + ord % 10;
        ord = Math.floor(ord / 10);
    }
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};

var reverse0 = function(x) {
    let now = Math.abs(x).toString().split("").reverse().join("");
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
};

console.time('zzz', reverse(166204012102131238213129312312931231238998))
console.timeEnd('zzz')
console.time('zzz', reverse0(166204012102131238213129312312931231238998))
console.timeEnd('zzz')
