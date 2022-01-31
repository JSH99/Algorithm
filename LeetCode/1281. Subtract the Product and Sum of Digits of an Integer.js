/**
 *@param{number} n
 *@return{number}
 */

var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    let numArr = (n + '').split('');
    for(let i = 0; i < numArr.length; i++) {
        product *= parseInt(numArr[i]);
        sum += parseInt(numArr[i]);
    }
    return product - sum;
};