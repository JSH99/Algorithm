/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

 var reversePrefix = function(word, ch) {
    // 1. ch 인덱스 찾기
    let index = word.indexOf(ch);
    
    // 2. 인덱스까지 잘라서 뒤집기
    let reverse = word.substr(0, index + 1).split('').reverse().join(''); 
    
    // 3. 합치기
    let answer = reverse + word.substr(index + 1);
    
    return answer;
};