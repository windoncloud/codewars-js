// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//
//     "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
//
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
// Link: https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
/**
 * not the answer, just another expression
 * @param number
 * @returns {function(...[*]=): function(...[*]=)}
 */
var primes = function (...number) {
    let lastRes = 1
    console.log('111')
    let fn = function (...subArgs) {
        // console.log('subArgs', subArgs)
        // let aa = [...subArgs]
        // console.log('aa', aa)
        lastRes *= calcNum(subArgs)
        console.log('222')
        return fn
    }
    function calcNum(args) {
        let temp = 0
        if (args.length > 1) {
            temp = args.reduce((a, b) => {
                return Math.pow(a, b)
            })
        } else {
            temp = args[0]
        }
        return temp
    }
    fn.toString = function () {
        console.log('444')
        return lastRes
    }
    console.log('333')
    return fn(...number)
}

let res = primes(2,5)(5)(7,2)(11)
console.log('res', res)

// https://loliko.me/archives/code-wars-Primes-in-numbers.html
var prime_factors = function(n){
    let number = n;
    let prime_numbers = [];
    let factor = 2;
    let cnt;
    while (number > 1) {
        cnt = 0;
        while (number % factor == 0) {
            number /= factor;
            cnt += 1;
        }
        if (cnt > 0) {
            if (cnt > 1) {
                // prime_numbers.push(format!("({}**{})", factor, cnt));
                prime_numbers.push(`(${factor}**${cnt})`);
            } else {
                // prime_numbers.push(format!("({})", factor);
                prime_numbers.push(`(${factor})`);
            }
        }
        factor += 1;
    }
    return prime_numbers.join("")
}
console.log('prime_factores', prime_factors(86240))
// best practices
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/solutions/javascript
function primeFactors(n){
    for (var i=2, res="", f; i <= n; i++) {
        f=0;
        while (n%i == 0) { f++; n/=i }
        res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
}

function primeFactors2(n){
    for(var s = '', d = 2;n>1;d++) {
        for (var k = 0;n%d == 0;k++, n/=d);
        s += k ? (k==1 ? `(${d})` : `(${d}**${k})`) : '';
    }
    return s
}

const primeFactors3 = n => {
    if (n < 2) return `(${n})`;
    let factors = '';
    for ( let i = 2; i <= n; i++) {
        let count = 0;
        while ( n%i === 0 ) {
            count++;
            n /= i;
        }
        if (count) {
            factors += `(${i}`;
            if (count > 1) factors += `**${count}`;
            factors += `)`;
        }
    }
    return factors;
}