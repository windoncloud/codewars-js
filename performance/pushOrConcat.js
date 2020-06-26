// https://www.cnblogs.com/zengxuelan/p/13037530.html
// https://blog.csdn.net/z9061/article/details/90633036
var testConcat = function() {
    var arr1 = [1,2,3,-1]
    var arr2 = [4,5,6,7,8,9,10,12,13,14,15,16,17,18,29,30,31,32,33,34,35,36,37,38,39,40]
    var arr  = arr1.concat(arr2)
}

var testPush = function() {
    var arr1 = [1,2,3,-1]
    var arr2 = [4,5,6,7,8,9,10,12,13,14,15,16,17,18,29,30,31,32,33,34,35,36,37,38,39,40]
    Array.prototype.push.apply(arr1, arr2)
}

var testPush2 = function() {
    var arr1 = [1,2,3,-1]
    var arr2 = [4,5,6,7,8,9,10,12,13,14,15,16,17,18,29,30,31,32,33,34,35,36,37,38,39,40]
    arr1.push.apply(arr1,arr2)
}

var testSlice = function() {
    var arr1 = [1,2,3,-1]
    var arr2 = [4,5,6,7,8,9,10,12,13,14,15,16,17,18,29,30,31,32,33,34,35,36,37,38,39,40]
    arr1.splice(arr1.length, arr2.length, ...arr2)
}


var count = 1000000

var date = Date.now()
for (var i = 0; i < count; i++) {
    testConcat()
}
console.log(Date.now() - date)

var date = Date.now()
for (var i = 0; i < count; i++) {
    testPush()
}
console.log(Date.now() - date)
var date = Date.now()
console.time('testPush2')
for (var i = 0; i < count; i++) {
    testPush2()
}
console.timeEnd('testPush2')
console.log(Date.now() - date)
console.time('testSlice')
for (var i = 0; i < count; i++) {
    testSlice()
}
console.timeEnd('testSlice')
