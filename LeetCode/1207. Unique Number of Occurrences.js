/**
 * @param {number[]} arr
 * @return {boolean}
 */

 var uniqueOccurrences = function(arr) {
    let obj = {};
    let ans = true;
    
    // 1. 숫자마다 갯수 카운트
    for(let i of arr) {
        obj[i] === undefined ? obj[i] = 1 : obj[i]++;
    }
    
    // 2. 객체 value 값 정렬
    let sort = Object.values(obj).sort();
    
    // 3. 같은 value 값 있으면 false
    for(let i = 0; i < sort.length - 1; i++) {
        if(sort[i] === sort[i+1]) {
            ans = false;
            break;
        }
    }
    return ans;
};