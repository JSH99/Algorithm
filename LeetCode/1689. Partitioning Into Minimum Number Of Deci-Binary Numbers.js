/**
 *@param{string} n
 *@return{number}
 */

var minPartitions = function(n) {
    let num = [];
    for(let i = 0; i < n.length; i++) {
        num[i] = parseInt(n[i]);
    }
    return Math.max.apply(null, num);
};