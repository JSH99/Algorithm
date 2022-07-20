/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let answer = 0; // * 개수
    let arr = s.split("|");

    for(let i = 0; i < arr.length; i+=2) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === '*') answer++;
        }
    }
    return answer;
};