/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

 var findFinalValue = function(nums, original) {
    let num = original;
    
    while(true) {
        if(nums.includes(num)) {
            num *= 2;
        }
        else {
            break;
        }
    }
    return num;
};