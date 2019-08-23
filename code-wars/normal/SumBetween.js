// Given two integers a and b, which can be positive or negative,
// find the sum of all the numbers between including them too and return it.
// If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
//     Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// 1、solution
function GetSum( a,b )
{
    if (a > b) {
        let temp = b
        b = a
        a = temp
    }
    let sum = 0;
    for (let i = a; i<=b;i++){
        sum += i
    }
    return sum
}

//2、best solution
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}