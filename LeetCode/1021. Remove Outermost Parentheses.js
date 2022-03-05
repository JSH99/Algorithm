/**
 * @param {string} s
 * @return {string}
 */

 var removeOuterParentheses = function(s) {
    let cnt = 0;
    let ans = '';
    let k = 1;
    
    for(let i in s) {
        if (s[i] === '(') {
            cnt++;
        }
        if (s[i] === ')') {
            cnt--;
        }
        if(cnt === 0) {
            for(let j = k; j < i; j++) {
                ans += s[j];
            }
            k = parseInt(i) + 2;
        }
    }
    return ans;
};