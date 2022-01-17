/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function(sentences) {
    let ans = [];
    for(let i = 0; i < sentences.length; i++) {
        cnt = 0;
        let words = sentences[i].split(' ');
        for(let j in words) {
            cnt++;
        }
        ans[i] = cnt;
    }
    return Math.max.apply(null, ans);
};