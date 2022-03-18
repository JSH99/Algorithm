function solution(x) {
    var answer = true;
    let s = String(x);
    let sum = 0;
    
    for(let i in s) {
        sum += parseInt(s[i]);
    }

    x % sum === 0 ? null : answer = false;
    
    return answer;
}