/**
 * @param {string[]} words
 * @return {string}
 */

 var firstPalindrome = function(words) {
    let ans = "";
    
    for(let word in words) {
        let reversed = words[word].split("").reverse().join("");
        
        if (words[word] === reversed) {
            ans = words[word];
            break;
        }
    }
    return ans;
};