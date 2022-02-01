/**
 *@param{string} s
 *@param{number[]} indices
 *@return{string}
 */

var restoreString = function(s, indices) {
    let ans = [];
    for(let i = 0; i < indices.length; i++) {
        ans.push(s[indices.indexOf(i)]);
    }
    return ans.join('');
};