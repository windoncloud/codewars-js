
//
function MoveZeroes (nums = [1,0,2,0,3,0,0,5,0]) {
    let k = 0; // nums中,[0...K)均为非0元素
    for (let i =0; i<nums.length; i++) {
        if(nums[i]) {
            if(i !== k) {
                // swap(nums[k++], nums[i])
                swap(nums, k, i)
                k++
            } else {
                k++
            }
        }
    }
    function swap(nums, k, i) {
        let temp = nums[k]
        nums[k] = nums[i]
        nums[i] = temp
        // k++ => 错误写法，不会改变原始k值，k始终为1
    }
    return nums
}

let res = MoveZeroes()
console.log('res', res)