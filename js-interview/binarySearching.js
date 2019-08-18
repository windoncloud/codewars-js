// https://blog.csdn.net/languolan/article/details/82051591

/*注意数组是排序的，所以找第一个k和最后一个k的位置就可以了
   二分查找
   （一）找第一个K，二分查找，找到中间的数字mid
   1、mid>k，则k在数组前半段
   2、mid<k，则k在数组后半段
   3、mid = k，判断k是不是第一个，（1）如果中间数字前面的数不是k，则k=mid；（2）如果中间数字前面的一个数是k，则k在前半段
   （二）找最后一个K，二分查找，找到中间的数字mid
   1、mid>k，则k在数组前半段
   2、mid<k，则k在数组后半段
   3、mid = k，判断k是不是最后一个，（1）如果中间数字后面的数不是k，则k=mid；（2）如果中间数字后面的一个数是k，则k在后半段
*/
// https://www.cnblogs.com/edisonchou/p/4822740.html
function GetNumKey(arr, key){
    let keyNum = 0;
    if (arr != null && arr.length > 0) {
        let first = GetFirstKey(arr, 0, arr.length - 1, key);
        console.log('first', first)
        let last = GetLastKey(arr, 0, arr.length - 1, key);
        console.log('last', last)
        if (first > -1 && last > -1)
            keyNum = last - first + 1;
    }
    return keyNum;
}

function GetFirstKey(arr, start, end, key){
    if(start>end)
        return -1;
    let midIndex = parseInt((start+end)/2);
    if(arr[midIndex] == key) {
        if((midIndex >0 && arr[midIndex-1] != key) || midIndex == 0){//注意判断条件
            return midIndex;
        }else end = midIndex-1;
    }else if(arr[midIndex] > key) end = midIndex-1;
    else start = midIndex+1;
    return GetFirstKey(arr,start,end,key);
}

function GetLastKey(arr, start, end, key){
    if(start>end)
        return -1;
    let midIndex = parseInt((start+end)/2);
    //判断是不是最后一个K
    if(key == arr[midIndex]){
        if((midIndex <arr.length-1 && arr[midIndex+1] != key) || midIndex == arr.length-1){//注意判断条件
            return midIndex;
        }else start = midIndex+1;
    }else if(arr[midIndex] > key) end = midIndex-1;
    else start = midIndex+1;
    return GetLastKey(arr,start,end,key);
}

let arr=[1, 2, 3, 3, 3, 3, 4, 5];
let key= 3;
console.log('21312', GetNumKey(arr, key));

// public class Array_FindCount_times
// {
//
//     public static int GetNumKey(int[] arr,int key){
//     int keyNum = 0;
//     if(arr != null && arr.length > 0){
//     int first = GetFirstKey(arr,0,arr.length-1,key);
//     int last = GetLastKey(arr,0,arr.length-1,key);
//     if(first>-1 && last>-1)
//     keyNum= last-first+1;
// }
// return keyNum;
// }
// public static int GetFirstKey(int[] arr, int start, int end,int key){
//     if(start>end)
//         return -1;
//     int midIndex = (start+end)/2;
//     if(arr[midIndex] == key) {
//         if((midIndex >0 && arr[midIndex-1] != key) || midIndex == 0){//注意判断条件
//             return midIndex;
//         }else end = midIndex-1;
//     }else if(arr[midIndex] > key) end = midIndex-1;
//     else start = midIndex+1;
//     return GetFirstKey(arr,start,end,key);
// }
// public static int GetLastKey(int[] arr, int start, int end,int key){
//     if(start>end)
//         return -1;
//     int midIndex = (start+end)/2;
//     //判断是不是最后一个K
//     if(key == arr[midIndex]){
//         if((midIndex <arr.length-1 && arr[midIndex+1] != key) || midIndex == arr.length-1){//注意判断条件
//             return midIndex;
//         }else start = midIndex+1;
//     }else if(arr[midIndex] > key) end = midIndex-1;
//     else start = midIndex+1;
//     return GetLastKey(arr,start,end,key);
// }
// public static void main(String[] args)
// {
//     int[] arr={1,2,3,3,3,3,4,5};
//     int key=1;
//     System.out.print(GetNumKey(arr,key));
// }
// }

// 2.1 直接运用二分查找
// 既然输入的数组是排序的，那么我们很自然地就能想到用二分查找算法。在题目给出的例子中，我们可以先用二分查找算法找到一个3。由于3可能出现多次，因此我们找到的3的左右两边可能都有3，于是我们在找到的3的左右两边顺序扫描，分别找出第一个3和最后一个3。因为要查找的数字在长度为n的数组中有可能出现O(n)次，所以顺序扫描的时间复杂度是O(n)。因此这种算法的效率和直接从头到尾顺序扫描整个数组统计3出现的次数的方法是一样的。
//
// 2.2 改进运用二分查找
// 接下来我们思考如何更好地利用二分查找算法。假设我们是统计数字k在排序数组中出现的次数。在前面的算法中时间主要消耗在如何确定重复出现的数字的第一个k和最后一个k的位置上，有没有可能用二分查找算法直接找到第一个k及最后一个k呢？
//
// 　　我们先分析如何用二分查找算法在数组中找到第一个k。二分查找算法总是先拿数组中间的数字和k作比较。如果中间的数字比k大，那么k只有可能出现在数组的前半段，下一轮我们只在数组的前半段查找就可以了。如果中间的数字比k小，那么k只有可能出现在数组的后半段，下一轮我们只在数组的后半段查找就可以了。如果中间的数字和k相等呢？我们先判断这个数字是不是第一个k。如果位于中间数字的前面一个数字不是k，此时中间的数字刚好就是第一个k。如果中间数字的前面一个数字也是k，也就是说第一个k肯定在数组的前半段，下一轮我们仍然需要在数组的前半段查找。
//
// （1）GetFirstK：找到数组中第一个k的下标。如果数组中不存在k，返回-1
// （2）GetLastK：找到数组中最后一个k的下标。如果数组中不存在k，返回-1
// （3）GetNumberOfK：找到数组中第一个和最后一个k的下标进行减法运算得到最终结果