/**
 * @param {string} s
 * @return {string}
 */

 var replaceDigits = function(s) {
    for(let i = 1; i < s.length; i+=2) {
        let shifted = s.charCodeAt(i - 1) + parseInt(s[i]);

        s.charCodeAt(i - 1) + parseInt(s[i]) <= 122 ?
             s = s.replace(s[i], String.fromCharCode(shifted)) 
            : s = s.replace(s[i], String.fromCharCode(shifted - 26));
    }
    return s;
};