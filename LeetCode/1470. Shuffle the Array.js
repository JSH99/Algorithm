/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function(nums, n) {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        if (i < n)
            ans[2 * i] = nums[i];
        else
            ans[2 * (i - n) + 1] = nums[i];
    }
    return ans;
};
