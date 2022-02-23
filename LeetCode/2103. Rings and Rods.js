/**
 * @param {string} rings
 * @return {number}
 */

 var countPoints = function(rings) {
    let arr = Array(10).fill(null).map(() => Array());
    let cnt = 0;
    
    for(let i = 0; i < rings.length; i+=2) {
        arr[Number(rings[i + 1])].push(rings[i]);
    }
    
    for(let i in arr) {
        if (arr[i].includes('R') === true
           && arr[i].includes('G') === true
           && arr[i].includes('B') === true) {
            cnt++;
        }
    }
    
    return cnt;
};