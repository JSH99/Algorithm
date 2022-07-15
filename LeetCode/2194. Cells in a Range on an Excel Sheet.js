/**
 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
    let ans = [];
    let n = s.charCodeAt(3) - s.charCodeAt(0);
    let str = '';
    
    for(let i = 0; i <= n; i++) {
        for(let j = s[1]; j <= s[4]; j++) {
            str = String.fromCharCode(s.charCodeAt(0) + i) + j;
            ans.push(str);
        }
        str = '';
    }
    return ans;
};