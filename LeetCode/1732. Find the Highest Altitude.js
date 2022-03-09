/**
 * @param {number[]} gain
 * @return {number}
 */

 var largestAltitude = function(gain) {
    let max = 0;
    let sum = 0;
    
    for(let g in gain) {
        sum += gain[g];
        sum > max ? max = sum: null; 
    }
    
    return max;
};