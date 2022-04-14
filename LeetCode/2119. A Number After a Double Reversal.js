/**
 * @param {number} num
 * @return {boolean}
 */

 var isSameAfterReversals = function(num) {
    let ans;
    let str = num.toString().split('').reverse().join('');
    
    for(let i in str) {
        if(str.startsWith('0')) {
            str = str.replace('0', '');
        }
    }
    
    str.split('').reverse().join('') == num ? ans = true : ans = false;
    
    return ans;
};