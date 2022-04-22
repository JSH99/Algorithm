/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */

 var countOperations = function(num1, num2) {
    let cnt = 0;
    
    // 0이 될 때까지 큰 수에서 작은 수 빼기
    while(true) {
        if(num1 === 0 || num2 === 0) {
            break;
        }
        num1 > num2 ? num1 -= num2 : num2 -= num1
        cnt++;
    }    
    return cnt;
};