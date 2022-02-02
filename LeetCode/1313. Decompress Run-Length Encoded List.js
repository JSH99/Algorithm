/**
 *@param{number[]} nums
 *@return{number[]}
 */

var decompressRLElist = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length / 2; i++) {
        for(let j = 0; j < nums[2 * i]; j++) {
            ans.push(nums[2 * i + 1]);
        }
    }
    return ans;
};