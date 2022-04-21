/**
 * @param {number[]} nums
 * @return {number}
 */

 var repeatedNTimes = function(nums) {
    let n = nums.length / 2;
    let obj = {};
    let ans;
    
    // 배열 길이의 절반 횟수 만큼 반복되는 숫자 찾기
    for(let num of nums) {
        obj[num] === undefined ? obj[num] = 1 : obj[num]++;
        if(n === obj[num]) {
            ans = num;
            break;
        }
    }
    return ans;
};