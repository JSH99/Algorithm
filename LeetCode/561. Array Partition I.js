/**
 * @param {number[]} nums
 * @return {number}
 */

 var arrayPairSum = function(nums) {
    let sum = 0;
    
    // 정렬 후 페어의 앞의 원소(min) 더한 값 = max
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    
    return sum
};
