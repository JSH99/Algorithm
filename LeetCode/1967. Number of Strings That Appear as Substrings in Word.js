/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

 var numOfStrings = function(patterns, word) {
    let cnt = 0;
    
    for(let p in patterns) {
        word.includes(patterns[p]) === true ? cnt++ : null;
    }
    
    return cnt;
};