/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

 var prefixCount = function(words, pref) {
    let cnt = 0;
    
    for(let n in words) {
        words[n].startsWith(pref) ? cnt++ : null;
    }
    
    return cnt;
};