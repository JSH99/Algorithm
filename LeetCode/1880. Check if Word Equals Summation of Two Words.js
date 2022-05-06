/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

 var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first = '';
    let second = '';
    let target = '';
    let ans;
    
    for(let i in firstWord) {
        first += firstWord.charCodeAt(i) - 97;   
    }
    for(let i in secondWord) {
        second += secondWord.charCodeAt(i) - 97;   
    }
    for(let i in targetWord) {
        target += targetWord.charCodeAt(i) - 97;   
    }
    
    parseInt(first) + parseInt(second) === parseInt(target) ? ans = true : ans = false;
    
    return ans;
};