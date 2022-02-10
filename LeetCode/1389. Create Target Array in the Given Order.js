/**
 *@param{number[]} nums
*@param{number[]} index
*@return{number[]}
*/

var createTargetArray = function(nums, index) {
    let target = [];
    for(let i in nums) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};