/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var countKDifference = function(nums, k) {
    let cnt = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            Math.abs(nums[i] - nums[j]) === k ? cnt++ : cnt;
        }
    }    
    return cnt;
};