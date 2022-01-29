/**
 *@param{number[]} nums
 *@return{number[]}
 */

var smallerNumbersThanCurrent = function(nums) {
    let maxCount = [];
    for(let i = 0; i < nums.length; i++) {
        let cnt = 0;
        for(let j = 0; j < nums.length; j++) {
            if (j !== i && nums[j] < nums[i]) {
                cnt++;
            }
        }
        maxCount[i] = cnt;
    }
    return maxCount;
};