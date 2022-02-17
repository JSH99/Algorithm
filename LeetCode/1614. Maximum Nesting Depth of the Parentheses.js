/**
 * @param {string} s
 * @return {number}
 */

 var maxDepth = function(s) {
    let cnt = 0;
    let max = 0;

    for(let i in s) {
        if (s[i] === '(') {
            cnt++;
        }
        if (s[i] === ')') {
            cnt--;
        }     
        if (cnt > max) {
            max = cnt;
        }
    }
    
    return max;
};