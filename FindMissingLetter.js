// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//     You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
//     ['a','b','c','d','f'] -> 'e'
//     ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
function findMissingLetter(array)
{
    var missedLetter = '';
    array.sort(function (b, a) {
        let c = b.charCodeAt() // attention, c = a.charCodeAt() in chrome
        let d = a.charCodeAt() // attention, d = b.charCodeAt() in chrome
        if (d-c>1) {
            missedLetter = String.fromCharCode(d-1)
        }
    })
    return missedLetter
}

console.log('this answer is =>', findMissingLetter(['a','b','c','d','f']))
console.log('this answer is =>', findMissingLetter(['O','Q','R','S']))