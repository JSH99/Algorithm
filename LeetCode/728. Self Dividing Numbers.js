/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let answer = [];
    let num = '';
    let bool = false;
    
    for(let i = left; i <= right; i++) {
        num = String(i);
        for(let k = 0; k < num.length; k++) {
            if(num % num[k] === 0) {
                bool = true
            } else {
                bool = false;
                break;
            }
        }
        if(bool === true) 
            answer.push(Number(num));
    }
    return answer;
};