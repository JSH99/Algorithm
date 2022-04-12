/**
 * @param {string} s
 * @return {boolean}
 */

 var areOccurrencesEqual = function(s) {
    let ans = true;
    let arr = s.split('').sort();
    let index = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            index.push(parseInt(i+1));
        }
    }
    
    for(let i = index.length; i > 0; i--) {
        i === index.length ? sum = arr.length - index[i - 1] : sum = index[i] - index[i - 1];
        if(sum !== index[0]) {
            ans = false;
            break;
        }
    }

    return ans;
};