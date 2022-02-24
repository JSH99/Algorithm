/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProductDifference = function(nums) {
    // 최대 값 = 가장 큰 수 * 두 번째로 큰 수 - 가장 작은 수 * 두 번째로 작은 수
    
    let w = Math.max.apply(null, nums);
    let y = Math.min.apply(null, nums);
    let x = y;
    let z = w;
    
    nums.splice(nums.indexOf(w), 1);
    nums.splice(nums.indexOf(y), 1);
    
    for(let i in nums) {
        nums[i] > x ? x = nums[i] : x = x;
        nums[i] < z ? z = nums[i] : z = z;
    }
    
    return (w * x) - (y * z);
};