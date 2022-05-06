/**
 * @param {number[]} nums
 * @return {number}
 */

 var smallestEqual = function(nums) {
    let idx = -1;
    
    for(let i in nums) {
        if (i % 10 === nums[i]) {
            idx = i;
            break;
        }
    } 
    return idx;
};