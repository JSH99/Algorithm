/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    var sum = [];
    sum[0] = nums[0]
    for(var i=1; i<nums.length; i++) {
        sum[i] = sum[i-1] + nums[i];
    }
    return sum;
};