/**
 * @param {number[]} heights
 * @return {number}
 */

 var heightChecker = function(heights) {
    let expected = heights.slice().sort((a, b) => a - b);
    let cnt = 0;
    
    for(let i in heights) {
        heights[i] === expected[i] ? null : cnt++;
    }
    return cnt;
};