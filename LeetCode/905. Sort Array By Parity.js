/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortArrayByParity = function(nums) {
    let arr = [];
    for(let n in nums) {
        nums[n] % 2 === 0 ? arr.unshift(nums[n]) : arr.push(nums[n]);
    }
    return arr;
};