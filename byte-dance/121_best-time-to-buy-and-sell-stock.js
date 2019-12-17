
var Solution = function (prices = []) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxprofit)
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
}

public class Solution {
    public int maxProfit(int prices[]) {
    int minprice = Integer.MAX_VALUE;
    int maxprofit = 0;
    for (int i = 0; i < prices.length; i++) {
    if (prices[i] < minprice)
    minprice = prices[i];
    else if (prices[i] - minprice > maxprofit)
    maxprofit = prices[i] - minprice;
}
return maxprofit;
}
}

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode/
