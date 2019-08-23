var diffCollection = function(a, b) {
    let c = a.slice(0)
    c.push.apply(c,b) // efficiently than concat
    let res = c.filter(function(item){
        return !(b.includes(item) && a.includes(item))
    })
    return res
}

console.log('diffCollection', diffCollection([1,2,3,4], [2,4,5,7]))
