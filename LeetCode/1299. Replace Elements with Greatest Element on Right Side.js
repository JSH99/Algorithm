/**
 * @param {number[]} arr
 * @return {number[]}
 */

 var replaceElements = function(arr) {
    let tmp = [];
    let ans = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(i !== arr.length - 1) {
            tmp = arr.slice(i + 1, arr.length);
            ans.push(Math.max.apply(null, tmp));
        }    
        else {
            ans.push(-1);
        }
    }
    return ans;
};