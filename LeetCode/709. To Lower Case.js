/**
 * @param {string} s
 * @return {string}
 */

 var toLowerCase = function(s) {
    for(let i in s) {
        s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 ? 
            s = s.replace(s[i], String.fromCharCode(s.charCodeAt(i) + 32)) : s = s;
    }
    
    return s;
};