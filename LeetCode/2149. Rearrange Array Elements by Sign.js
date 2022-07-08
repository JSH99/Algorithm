/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = [];
    let negative = [];
    let answer = [];
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] > 0 ? positive.push(nums[i]) : negative.push(nums[i]);
    }
    
    for(let n = 0; n < nums.length / 2; n++) {
        answer.push(positive[n]);
        answer.push(negative[n]);
    }
    
    return answer;
};