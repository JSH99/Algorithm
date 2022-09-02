/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let obj = {};
    let answer = '';
    let n = 0;

    for(let i = 0; i < key.length; i++) {
        if (obj[key[i]] === undefined && key[i] !== ' ') {
            obj[key[i]] = String.fromCharCode(97 + n);
            n++;
        }
    }

    for(let j = 0; j < message.length; j++) {
        message[j] === ' ' ? answer += ' ' : answer += obj[message[j]];
    }

    return answer;
};