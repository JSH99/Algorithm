/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 var sumBase = function(n, k) {
    // 1. 10진수 -> k진수
    let num = n.toString(k);
    // 2. 자릿수 다 더하기
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    return sum;
};