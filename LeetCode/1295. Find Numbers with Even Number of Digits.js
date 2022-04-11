/**
 * @param {number[]} nums
 * @return {number}
 */

 var findNumbers = function(nums) {
    // 숫자 길이가 짝수인 숫자 카운트
    let cnt = 0;
    
    for(let n in nums) {
        nums[n].toString().length % 2 === 0 ? cnt++ : null;    
    }
    
    return cnt;
};