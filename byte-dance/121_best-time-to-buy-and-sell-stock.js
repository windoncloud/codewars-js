
let arr = [7, 1, 5, 3, 6, 4]

let arrr = [10, 2, 9, 1, 2, 1, 3, 1]
let solution = function (prices = []) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxprofit) {
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
}

let solution2 = function (prices = []) {
    let minprice = Infinity;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else if (prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
}

console.log('arr1', solution(arr))
console.log('arr2', solution2(arr))
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode/
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/121-mai-mai-gu-piao-de-zui-jia-shi-ji-dp-7-xing-ji/
