// html replacing
var a = '<div><div>321</div>zzz</div>'
var c = a.replace(/<[^>]*>/g, '')
console.log('c', c)