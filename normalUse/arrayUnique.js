Array.prototype.unique = function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
console.log(arr.unique());
