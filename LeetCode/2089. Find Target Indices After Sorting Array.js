/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var targetIndices = function(nums, target) {
    let ans = [];
    
    nums.sort(function(a, b)  {
      return a - b;
    });
    
    for(let n in nums) {
        nums[n] === target ? ans.push(n) : null;
    }
    
    return ans;
};