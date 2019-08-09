const huiWen = function (str) {
    return str.split('').reverse().join('') === str
}

console.log(huiWen('asd'))
console.log(huiWen('asa'))