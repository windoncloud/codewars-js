function deepCopy(source){
    var result = {};
    for(var i in source){
        if(typeof source[i] === "object"){
            result[i] = deepCopy(source[i]);
        }else{
            result[i] = source[i];
        }
    }
    return result;
}