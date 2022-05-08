/**
 * @param {string} s
 * @return {boolean}
 */

 var checkString = function(s) {
    let ans;
    let sort = s.split('').sort().join('');
    sort === s ? ans = true : ans = false;
    return ans;
};