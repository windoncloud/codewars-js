function fn(n){
    if(!/^([1-9]\d*)/.test(n)){
        return '非法数据';
    }
    var unit = '千百十亿千百十万千百十个';
    n = n.toString() // toString
    if(n.length > unit.length){
        return '数据过长';
    }
    var newStr = '';
    var nlength = n.length;
    unit = unit.substr(unit.length - nlength);
    for(var i = 0; i < nlength; i++){
        newStr += '零一二三四五六七八九'.charAt(n[i]) + unit.charAt(i);
        console.log('n[i]', n[i])
        console.log('newStr', newStr)
        console.log('charAt(n[i])', '零一二三四五六七八九'.charAt(n[i]))
        console.log('unit.charAt(i)', unit.charAt(i))
    }
    newStr = newStr.substr(0,newStr.length-1);
    newStr = newStr.replace(/零(千|百|十)/g,'零').replace(/(零)+/g,'零').replace(/零(亿|万)/g,'$1');
    return newStr;
}

// console.log('fn', fn('123123333334'))
console.log('fn', fn('1'))