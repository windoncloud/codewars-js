// Range Extraction
// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
//     Example:
//
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
// # returns "-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
    for(var i = 0; i < list.length; i++){
        var j = i;
        while(list[j] - list[j+1] == -1)
            j++;
        if(j != i && j-i>1)
        list.splice(i, j-i+1, list[i] +'-'+list[j]);
        //从list[i]开始的连续（j-i+1）个数字换成
        //list[i] +'-'+list[j]
    }
    return list.join();
}

function solution2(list) {
    // TODO: complete solution
    var res = list.slice();

    for (var i = 0; i < list.length; ++i) {
        if (i === 0 || i === list.length - 1) continue;  //忽略首尾数字
        if (res[i] - 1 === list[i - 1] && res[i] + 1 === list[i + 1]) { //将满足左边比它小1，右边大1 的数字变成null
            res[i] = null;
        }
    }

    return res.toString().replace(/,{2,}/g, '-');  //将连续的至少2个的，换成-
}
// https://www.cnblogs.com/hiluna/p/8862340.html
// https://www.cnblogs.com/hiluna/category/1212943.html

// python
// def solution(args):
// out = []
// beg = end = args[0]
//
// for n in args[1:] + [""]:
// if n != end + 1:
// if end == beg:
// out.append( str(beg) )
// elif end == beg + 1:
// out.extend( [str(beg), str(end)] )
// else:
// out.append( str(beg) + "-" + str(end) )
// beg = n
// end = n
// return ",".join(out)
// https://blog.csdn.net/longying93/article/details/88707800