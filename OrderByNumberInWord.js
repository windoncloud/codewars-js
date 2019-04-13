// Instructions
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//     Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

// 1、My poor solution
function order(words){
    words = words.split(' ')
    let numArr = []
    for (let i = 0; i<words.length; i++) {
        let num = words[i].replace(/[^0-9]/ig,"")
        let obj = {
            'word':words[i],
            'num':num
        }
        numArr.push(obj)
    }
    numArr.sort(compare('num'))
    let _output = []
    for (let key in numArr) {
        _output.push(numArr[key]['word'])
    }
    let output = _output.join(' ')
    return output
    function compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
    }
}

console.log(order('is2 Thi1s T4est 3a'))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

// 2、Best Practices
function orders(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
console.log(orders('is2 Thi1s T4est 3a'))
console.log(orders("4of Fo1r pe6ople g3ood th5e the2"))