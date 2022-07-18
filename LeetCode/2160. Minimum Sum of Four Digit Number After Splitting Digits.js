/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    let answer = 0;
    let new1 = '';
    let new2 = '';
    let arr = String(num).split('').sort();
    
    new1 = arr[0] + arr[3];
    new2 = arr[1] + arr[2];
    
    answer = parseInt(new1) + parseInt(new2);
    
    return answer;
};