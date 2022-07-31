/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
    let cnt = 0;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === letter) cnt++;
    }

    answer = parseInt(cnt / s.length * 100); 
        
    return answer;
};