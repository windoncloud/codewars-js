function appear(str,str_target){
    var n = 0;
    var result = [];
    while(str.indexOf(str_target,n)!=-1 && n < str.length){
        result.push(str.indexOf(str_target,n));
        n = str.indexOf(str_target,n) + str_target.length;
    }
    return result;
}
var arr = appear('abascbascbabasbascbascascbab','ab');
console.log(arr);