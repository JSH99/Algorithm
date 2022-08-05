/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

 var kthDistinct = function(arr, k) {
    let obj = {};
    let distinct = [];
    let answer = '';
    
    for(let i of arr) {
        obj[i] === undefined ? obj[i] = 1 : obj[i]++;
    }
    
    for(let key in obj) {
        if(obj[key] === 1) distinct.push(key);
    }
    
    distinct[k - 1] !== undefined ? answer = distinct[k - 1] : answer = '';
    
    return answer;
};