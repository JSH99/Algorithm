/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

 var xorOperation = function(n, start) {
    let nums = [];
    let ans;
    for(let i = 0; i < n; i++) {
        nums.push(start + 2 * i);
        ans ^= nums[i];
    }
    return ans;
};