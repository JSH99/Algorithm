/**
 * @param {number[]} arr
 * @return {number}
 */

 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j <= arr.length; j++) {
            if ((j-i) % 2 === 1) {
                for(let k = i; k < j; k++) {
                    sum += arr[k];
                }
            }
        }
    }
    return sum;
};