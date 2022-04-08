/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var divideArray = function(nums) {
    let answer = true;
    
    nums.sort((a, b) => a - b);
    
    for(let n = 0; n < nums.length; n+=2) {
        if (nums[n] !== nums[n + 1]) {
            answer = false;
            break;
        }
    }
    return answer;
};