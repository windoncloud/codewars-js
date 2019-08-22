// int Gcd_2(int a,int b)/*欧几里德算法求a,b的最大公约数*/
// {
//     if (a<=0 || b<=0)/*预防错误*/
//         return 0;
//     int temp;
//     while (b > 0)/*b总是表示较小的那个数，若不是则交换a，b的值*/
//     {
//         temp = a % b;/*迭代关系式*/
//         a = b;
//         b = temp;
//     }
//     return a;
// }
// 欧几里德算法
// https://baike.baidu.com/item/%E7%89%9B%E9%A1%BF%E8%BF%AD%E4%BB%A3%E6%B3%95/10887580?fr=aladdin
function Gcd_2(a, b)/*欧几里德算法求a,b的最大公约数*/
{
    if (a<=0 || b<=0)/*预防错误*/
        return 0;
    let temp;
    while (b > 0)/*b总是表示较小的那个数，若不是则交换a，b的值*/
    {
        temp = a % b;/*迭代关系式*/
        a = b;
        b = temp;
    }
    return a;
}
let res = Gcd_2(24, 28)
console.log('res', res)
