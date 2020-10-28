const obj = {
    name: 'alienzhou',
    status: 6,
    working: true
};
// 1、定制化
function myStringify(o) {
    return (
        '{"name":"'
        + o.name
        + '","status":'
        + o.status
        + ',"isWorking":'
        + o.working
        + '}'
    );
}

let res = myStringify(obj)
console.log('res1 ->', res)
console.log('res2 ->', JSON.parse(res))
// 2、定义相关模版，JSON.Stringify然后替换
// {
//     name: 'string',
//     status: 'number',
//     working: 'boolean'
// }
