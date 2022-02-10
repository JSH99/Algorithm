/**
 * @param {string} s
 * @return {string}
 */

 var sortSentence = function(s) {
    let words = s.split(' ');
    let ans = [];
    for(let i = 0; i < words.length; i++) {
        let idx = parseInt(words[i].substr(-1));
        ans[idx-1] = words[i].substr(0, words[i].length - 1); 
    }
    return ans.join(' ');
};