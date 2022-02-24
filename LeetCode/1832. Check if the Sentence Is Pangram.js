/**
 * @param {string} sentence
 * @return {boolean}
 */

 var checkIfPangram = function(sentence) {
    // 모든 알파벳을 최소 한 번씩 포함하고 있는가?
    let arr = Array(26).fill(null).map(() => Array());
    let cnt = 0;
    let ans;
    
    for(let s in sentence) {
         arr[sentence.charCodeAt(s) - 97].push(true);
    } // a 아스키코드: 97
    
    for(let i in arr) {
        if (arr[i].includes(true) === true) {
            cnt++;
        }
    }
    
    cnt === 26 ? ans = true : ans = false;
    
    return ans;
};