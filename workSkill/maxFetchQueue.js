/**
 *
 * @param urls 模拟的请求数组数据
 * @param max 最大并发数
 * @param callback 全部执行完后的回调
 */
function handleFetchQueue(urls, max, callback) {
    const urlCount = urls.length;
    const requestsQueue = [];
    const results = [];
    let i = 0;
    const handleRequest = (url) => {
        const req = fetch(url).then(res => {
            console.log('当前并发： '+requestsQueue);
            const len = results.push(res); // push后返回当前执行完后的数组长度
            console.log('len', len)
            if (len < urlCount && (i + 1) < urlCount) { // 请求未全部完成时
                // 返回一个请求结果时，清除队列最前的那个请求，然后开始下一个请求
                requestsQueue.shift();
                handleRequest(urls[++i])
            } else if (len === urlCount) { // 全部执行完后的回调
                'function' === typeof callback && callback(results)
            }
        }).catch(e => {
            results.push(e)
        });
        if (requestsQueue.push(req) < max) { // push后返回当前请求中的数组长度，小于最大长度
            // 小于最大并发数量，继续请求
            handleRequest(urls[++i])
        }
    };
    handleRequest(urls[i])
}


const urls = Array.from({length: 10}, (v, k) => k);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log('urls', urls)
const fetch = function (idx) {
    return new Promise(resolve => {
        console.log(`start request ${idx}`);
        const timeout = parseInt(Math.random() * 1e4);
        setTimeout(() => {
            console.log(`end request ${idx}`);
            resolve(idx)
        }, timeout)
    })
};

const max = 4;

const callback = () => {
    console.log('run callback');
};


handleFetchQueue(urls, max, callback);
