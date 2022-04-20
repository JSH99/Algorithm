/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

 var mergeAlternately = function(word1, word2) {
    let ans = '';
    let n = word1.length + word2.length;
    
    for(let i = 0; i < n; i++) {
        if (word1[i]) {
            ans += word1[i];
        }
        if (word2[i]) {
            ans += word2[i];
        }
    }
    return ans;
};