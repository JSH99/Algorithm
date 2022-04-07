/**
 * @param {string} s
 * @return {boolean}
 */

 var halvesAreAlike = function(s) {
    let ans;
    let cnt = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // 1. 단어 반으로 쪼개기 (무조건 짝수임)
    let a = s.substr(0, s.length / 2);
    let b = s.substr(s.length / 2);
    
    // 2. 모음 개수 세기
    for(let i in vowels) {
        for(let j in a) {
            a[j] === vowels[i] ? cnt++ : null;
            b[j] === vowels[i] ? cnt-- : null;
        }
    }

    // 3. 같으면 true, 다르면 false
    cnt === 0 ? answer = true : answer = false;
    
    return answer;
};