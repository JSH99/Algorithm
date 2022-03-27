/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    let arr = s.split(' ');
    let ans = [];

    for(let a in arr) {
        ans.push(arr[a].split('').reverse().join(''));
    }

    return ans.join(' ');
};