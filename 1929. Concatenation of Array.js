/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function(nums) {
    var ans = [];
    for(var i=0; i<nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i]
    }
    return ans;
};