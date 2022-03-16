function solution(s){
    var answer = true;
    let cnt = 0;

    for(let i in s) {
        s[i] === 'p' || s[i] === 'P' ? null : cnt++;    
        s[i] === 'y' || s[i] === 'Y' ? null : cnt--;
    }
    
    cnt === 0 ? null : answer = false;
    
    return answer;
}