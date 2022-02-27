/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

 var truncateSentence = function(s, k) {
    let arr = s.split(' ');
    let n = arr.length - k;
    
    for(let i = 0; i < n; i++) {
        arr.pop();
    }
    
    return arr.join(' ');
};