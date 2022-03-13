/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProduct = function(nums) {
    let max = Math.max.apply(null, nums);
    let max2 = Math.min.apply(null, nums);
    
    nums.splice(nums.indexOf(max), 1);
    
    for(let i in nums) {
        nums[i] > max2 ? max2 = nums[i] : max2 = max2;
    }
    
    return (max - 1) * (max2 - 1);
};