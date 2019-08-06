// https://www.jb51.net/article/109269.htm
function group(arr,re){
    if(arr.length <=0){
        return re;
    }
    if(!re){
        var arr = arr.slice();
        var re = arr.shift();
        return group(arr,re);
    }else{
        var now = arr.shift();
        var newre = [];
        for(var j=0;j<now.length;j++){
            for(var k=0;k<re.length;k++){
                var temp = [];
                if(re[k] instanceof Array){
                    temp = re[k];
                }else{
                    temp.push(re[k]);
                }
                newre.push(temp.concat(now[j]));
            }
        }
        return group(arr,newre);
    }
}
var arr = [['a','b','c'],['e','d','f'],['h','i'],['j','k','l','m']];
var arr2 = [[1,2,3],[4,5]]
// var arr = [['a','b','c'],['e','d','f'],['h','i']];
// console.log(arr);
var result = group(arr);
console.log(result);
var result2 = group(arr2);
console.log(result2);
