class RequestAll{
    constructor(count = 8) {
        this.maxCount = count;
    }
    handleFetchQueue(urls, callback) {
        let i = 0;
        let len = urls.length;
        const handleRequest = (url) => {
            const req = fetch(url).then(res => {
                let successNum = 0
                if (res.success) {
                    successNum++
                }
                if (successNum >= this.maxCount) { // 全部执行完后的回调
                    'function' === typeof callback && callback(successNum)
                }
                if (i < len) {
                    handleRequest(urls[++i])
                }
            })
        };
        handleRequest(urls[++i])
    }
}

function api(time = 1000) {
    new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true
            })
        }, time)
    })
}

const urls = Array.from({length: 10}, (v, k) => k);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log('urls', urls)
const fetch = function (idx) {
    return new Promise(resolve => {
        console.log(`start request ${idx}`);
        const timeout = parseInt(Math.random() * 100);
        setTimeout(() => {
            console.log(`end request ${idx}`);
            resolve({success: true})
        }, timeout)
    })
};
let request = new RequestAll(8)
request.handleFetchQueue(urls, function (successNum) {
    console.log('successNum', successNum)
})


