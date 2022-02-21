/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

 var countConsistentStrings = function(allowed, words) {
    let cnt = 0;
    let ans = [];
 
    for(let word in words) {   
        for(let n in words[word]) {
            if (allowed.includes(words[word][n]) === false) {
                ans[word] = false;     
                break;
            }
        }
        ans[word] === false ? cnt++ : cnt;
    }
    return words.length - cnt;
};