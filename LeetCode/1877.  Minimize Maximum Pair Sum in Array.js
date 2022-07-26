/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    let arr = [];
    let ans = 0;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length / 2; i++) {
        arr.push(nums[i] + nums[nums.length - 1 - i]);
    }
    ans = Math.max.apply(null, arr);
    return ans;
};