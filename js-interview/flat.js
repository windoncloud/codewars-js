// ● 把多维数组变成一维数组的方法
//
// 参考回答：
//
// 法一：递归
function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
let res = flatten([1, 2, 3, 4, 5, [1 , 2], [1, 2, 3, [3, 5]]])
console.log('res', res)

// 法二：toString

function flatten1(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}


// 法三：reduce

function flatten2(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten2(next) : next)
    }, [])
}


// 法四：rest运算符

function flatten3(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}