/**
 * @param {number} n
 * @return {number}
 */

 var numberOfMatches = function(n) {
    let sum = 0;
    
    while (n > 1) {
        if (n % 2 === 0) { // 짝수
            n = n / 2;
            sum += n;
        }
        else { // 홀수
            n = ((n - 1) / 2) + 1;   
            sum += n - 1;
        }
    }
    
    return sum;
};