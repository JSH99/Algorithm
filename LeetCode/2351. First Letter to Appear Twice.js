/**
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function(s) {
    let obj = {};
    let answer = '';

    for(let i = 0; i < s.length; i++) {
        obj[s[i]] === undefined ? obj[s[i]] = 1 : obj[s[i]]++;
        if (obj[s[i]] === 2) {
            answer = s[i];
            break;
        }
    }
    return answer;
};